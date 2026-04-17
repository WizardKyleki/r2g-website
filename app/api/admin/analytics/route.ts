import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

/**
 * Analytics API v2
 *
 * Query params:
 *   from    — ISO date string (start of range)
 *   to      — ISO date string (end of range)
 *   compare — "true" to include previous-period comparison
 *
 * All hour/day-of-week calculations use AEST (UTC+10).
 */
const AEST_OFFSET = 10; // hours ahead of UTC

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    // ── Date range ──────────────────────────────────────────────────────────
    const now = new Date();
    const toParam = url.searchParams.get("to");
    const fromParam = url.searchParams.get("from");
    const compare = url.searchParams.get("compare") === "true";

    const rangeTo = toParam ? endOfDay(toParam) : now.toISOString();
    const rangeFrom = fromParam
      ? new Date(fromParam).toISOString()
      : new Date(now.getTime() - 30 * 86400000).toISOString();

    // Previous period (same length, immediately before)
    const rangeMs = new Date(rangeTo).getTime() - new Date(rangeFrom).getTime();
    const prevFrom = new Date(new Date(rangeFrom).getTime() - rangeMs).toISOString();
    const prevTo = rangeFrom;

    // ── Fetch leads for current period ──────────────────────────────────────
    const { data: rows, error: queryError } = await supabase
      .from("leads")
      .select("type, status, lead_source, lead_source_channel, estimated_value, actual_value, created_at, first_contacted_at, from_address, move_date")
      .gte("created_at", rangeFrom)
      .lte("created_at", rangeTo)
      .order("created_at", { ascending: true });

    if (queryError) {
      console.error("Analytics query error:", queryError);
      return NextResponse.json({ error: queryError.message }, { status: 500 });
    }

    const leads = rows || [];

    // ── KPIs ────────────────────────────────────────────────────────────────
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayISO = todayStart.toISOString();

    const totalLeads = leads.length;
    const newToday = leads.filter((l) => l.created_at >= todayISO).length;
    const wonLeads = leads.filter((l) => l.status === "won");
    const lostLeads = leads.filter((l) => l.status === "lost");
    const closedCount = wonLeads.length + lostLeads.length;
    const winRate = closedCount > 0 ? Math.round((wonLeads.length / closedCount) * 100) : 0;

    // Pipeline value = sum of estimated_value for open leads (not won/lost)
    const pipelineValue = leads
      .filter((l) => l.status !== "won" && l.status !== "lost")
      .reduce((sum, l) => sum + (l.estimated_value || 0), 0);

    // Won revenue = sum of actual_value for won leads
    const wonRevenue = wonLeads.reduce((sum, l) => sum + (l.actual_value || 0), 0);

    // Avg response time (hours) — from created_at to first_contacted_at
    const responseTimes = leads
      .filter((l) => l.first_contacted_at)
      .map((l) => (new Date(l.first_contacted_at).getTime() - new Date(l.created_at).getTime()) / 3600000);
    const avgResponseTimeHrs = responseTimes.length > 0
      ? Math.round((responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length) * 10) / 10
      : null;

    // Pipeline count = leads that are not won or lost
    const pipelineCount = leads.filter((l) => l.status !== "won" && l.status !== "lost").length;
    const wonCount = wonLeads.length;

    const kpis = { totalLeads, newToday, winRate, wonCount, pipelineCount, avgResponseTimeHrs, pipelineValue, wonRevenue };

    // ── Comparison KPIs ─────────────────────────────────────────────────────
    let comparisonKpis = null;
    if (compare) {
      const { data: prevRows } = await supabase
        .from("leads")
        .select("status, estimated_value, actual_value, created_at, first_contacted_at")
        .gte("created_at", prevFrom)
        .lt("created_at", prevTo);

      const prev = prevRows || [];
      const prevTotal = prev.length;
      const prevWon = prev.filter((l) => l.status === "won");
      const prevLost = prev.filter((l) => l.status === "lost");
      const prevClosed = prevWon.length + prevLost.length;
      const prevWinRate = prevClosed > 0 ? Math.round((prevWon.length / prevClosed) * 100) : 0;
      const prevPipeline = prev
        .filter((l) => l.status !== "won" && l.status !== "lost")
        .reduce((sum, l) => sum + (l.estimated_value || 0), 0);
      const prevRevenue = prevWon.reduce((sum, l) => sum + (l.actual_value || 0), 0);
      const prevResponseTimes = prev
        .filter((l) => l.first_contacted_at)
        .map((l) => (new Date(l.first_contacted_at).getTime() - new Date(l.created_at).getTime()) / 3600000);
      const prevAvgResponse = prevResponseTimes.length > 0
        ? Math.round((prevResponseTimes.reduce((a, b) => a + b, 0) / prevResponseTimes.length) * 10) / 10
        : null;

      comparisonKpis = {
        totalLeads: prevTotal,
        winRate: prevWinRate,
        pipelineValue: prevPipeline,
        wonRevenue: prevRevenue,
        avgResponseTimeHrs: prevAvgResponse,
        totalLeadsChange: pctChange(totalLeads, prevTotal),
        winRateChange: pctChange(winRate, prevWinRate),
        pipelineValueChange: pctChange(pipelineValue, prevPipeline),
        wonRevenueChange: pctChange(wonRevenue, prevRevenue),
      };
    }

    // ── By Channel ──────────────────────────────────────────────────────────
    const channelMap: Record<string, { count: number; won: number; revenue: number }> = {};
    leads.forEach((l) => {
      const ch = l.lead_source_channel || "unknown";
      if (!channelMap[ch]) channelMap[ch] = { count: 0, won: 0, revenue: 0 };
      channelMap[ch].count++;
      if (l.status === "won") {
        channelMap[ch].won++;
        channelMap[ch].revenue += l.actual_value || 0;
      }
    });
    const byChannel = Object.entries(channelMap)
      .map(([channel, d]) => ({
        channel,
        count: d.count,
        won: d.won,
        winRate: d.count > 0 ? Math.round((d.won / d.count) * 100) : 0,
        revenue: d.revenue,
      }))
      .sort((a, b) => b.count - a.count);

    // ── By Day of Week (AEST) ───────────────────────────────────────────────
    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const byDayOfWeek = dayNames.map((name) => ({ day: name, count: 0 }));
    leads.forEach((l) => {
      const aestDate = toAEST(new Date(l.created_at));
      const jsDay = aestDate.getUTCDay(); // 0=Sun, 1=Mon...
      const idx = jsDay === 0 ? 6 : jsDay - 1; // convert to Mon=0
      byDayOfWeek[idx].count++;
    });

    // ── By Hour of Day (AEST) ───────────────────────────────────────────────
    const byHourOfDay = Array.from({ length: 24 }, (_, i) => ({ hour: i, count: 0 }));
    leads.forEach((l) => {
      const aestDate = toAEST(new Date(l.created_at));
      byHourOfDay[aestDate.getUTCHours()].count++;
    });

    // ── By Day (daily trend) ────────────────────────────────────────────────
    const dayCounts: Record<string, number> = {};
    leads.forEach((l) => {
      const day = l.created_at.split("T")[0];
      dayCounts[day] = (dayCounts[day] || 0) + 1;
    });
    const byDay = Object.entries(dayCounts).map(([date, count]) => ({ date, count }));

    // ── Funnel ──────────────────────────────────────────────────────────────
    const statusCounts: Record<string, number> = {};
    leads.forEach((l) => {
      statusCounts[l.status] = (statusCounts[l.status] || 0) + 1;
    });
    const funnel = {
      new: statusCounts["new"] || 0,
      contacted: statusCounts["contacted"] || 0,
      quoted: statusCounts["quoted"] || 0,
      won: statusCounts["won"] || 0,
      lost: statusCounts["lost"] || 0,
    };

    // ── By Type ─────────────────────────────────────────────────────────────
    const typeCounts: Record<string, number> = {};
    leads.forEach((l) => {
      typeCounts[l.type] = (typeCounts[l.type] || 0) + 1;
    });
    const byType = Object.entries(typeCounts).map(([type, count]) => ({ type, count }));

    // ── By Status ───────────────────────────────────────────────────────────
    const byStatus = Object.entries(statusCounts).map(([status, count]) => ({ status, count }));

    // ── By Source (human-readable) ──────────────────────────────────────────
    const sourceCounts: Record<string, number> = {};
    leads.forEach((l) => {
      const src = l.lead_source || "Unknown";
      sourceCounts[src] = (sourceCounts[src] || 0) + 1;
    });
    const bySource = Object.entries(sourceCounts)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count);

    // ── By Market (Cairns vs Brisbane/SEQ) ─────────────────────────────────
    const cairnsPatterns = /cairns|woree|edge hill|redlynch|gordonvale|smithfield|trinity|palm cove|earlville|manoora|clifton|kewarra|brinsmead|edmonton|mooroobool|bungalow|freshwater|sheridan|QLD 48/i;
    const marketMap: Record<string, { leads: number; won: number; revenue: number }> = {
      Cairns: { leads: 0, won: 0, revenue: 0 },
      "Brisbane / SEQ": { leads: 0, won: 0, revenue: 0 },
    };
    leads.forEach((l) => {
      const market = cairnsPatterns.test(l.from_address || "") ? "Cairns" : "Brisbane / SEQ";
      marketMap[market].leads++;
      if (l.status === "won") {
        marketMap[market].won++;
        marketMap[market].revenue += l.actual_value || 0;
      }
    });
    const byMarket = Object.entries(marketMap).map(([market, d]) => ({
      market,
      leads: d.leads,
      won: d.won,
      convRate: d.leads > 0 ? Math.round((d.won / d.leads) * 100) : 0,
      revenue: d.revenue,
      avgJobValue: d.won > 0 ? Math.round(d.revenue / d.won) : 0,
    }));

    // ── Source ROI (leads, won, revenue per source) ────────────────────────
    const sourceROI: Record<string, { leads: number; won: number; revenue: number }> = {};
    leads.forEach((l) => {
      const ch = l.lead_source_channel || "unknown";
      if (!sourceROI[ch]) sourceROI[ch] = { leads: 0, won: 0, revenue: 0 };
      sourceROI[ch].leads++;
      if (l.status === "won") {
        sourceROI[ch].won++;
        sourceROI[ch].revenue += l.actual_value || 0;
      }
    });
    const bySourceROI = Object.entries(sourceROI)
      .map(([channel, d]) => ({
        channel,
        leads: d.leads,
        won: d.won,
        convRate: d.leads > 0 ? Math.round((d.won / d.leads) * 100) : 0,
        revenue: d.revenue,
        revenuePerLead: d.leads > 0 ? Math.round(d.revenue / d.leads) : 0,
      }))
      .sort((a, b) => b.revenue - a.revenue);

    // ── Google Ads ROI ────────────────────────────────────────────────────
    const paidLeads = leads.filter((l) => l.lead_source_channel === "paid_search");
    const paidWon = paidLeads.filter((l) => l.status === "won");
    const paidRevenue = paidWon.reduce((sum, l) => sum + (l.actual_value || 0), 0);
    const googleAdsROI = {
      leads: paidLeads.length,
      won: paidWon.length,
      convRate: paidLeads.length > 0 ? Math.round((paidWon.length / paidLeads.length) * 100) : 0,
      revenue: paidRevenue,
      costPerLead: 0, // calculated on frontend with ad spend input
      profitAfterAds: 0, // calculated on frontend
    };

    // ── Response Time Distribution ─────────────────────────────────────────
    const responseTimeBuckets = { within1h: 0, within4h: 0, within24h: 0, over24h: 0, noResponse: 0 };
    leads.forEach((l) => {
      if (!l.first_contacted_at) {
        responseTimeBuckets.noResponse++;
        return;
      }
      const hrs = (new Date(l.first_contacted_at).getTime() - new Date(l.created_at).getTime()) / 3600000;
      if (hrs <= 1) responseTimeBuckets.within1h++;
      else if (hrs <= 4) responseTimeBuckets.within4h++;
      else if (hrs <= 24) responseTimeBuckets.within24h++;
      else responseTimeBuckets.over24h++;
    });

    // ── Lead-to-Job Timeline ───────────────────────────────────────────────
    const leadToJobDays: number[] = [];
    leads.forEach((l) => {
      if (l.move_date && l.created_at) {
        const moveDate = new Date(l.move_date);
        const created = new Date(l.created_at);
        if (!isNaN(moveDate.getTime())) {
          const days = Math.round((moveDate.getTime() - created.getTime()) / 86400000);
          if (days >= 0 && days < 365) leadToJobDays.push(days);
        }
      }
    });
    const avgLeadToJobDays = leadToJobDays.length > 0
      ? Math.round(leadToJobDays.reduce((a, b) => a + b, 0) / leadToJobDays.length)
      : null;
    const leadTimeline = {
      avgDays: avgLeadToJobDays,
      within7d: leadToJobDays.filter((d) => d <= 7).length,
      within14d: leadToJobDays.filter((d) => d > 7 && d <= 14).length,
      within30d: leadToJobDays.filter((d) => d > 14 && d <= 30).length,
      over30d: leadToJobDays.filter((d) => d > 30).length,
      total: leadToJobDays.length,
    };

    // ── Top Suburbs ────────────────────────────────────────────────────────
    const suburbMap: Record<string, { leads: number; won: number; revenue: number }> = {};
    leads.forEach((l) => {
      if (!l.from_address) return;
      // Extract suburb from address (e.g. "123 Street, Smithfield QLD" → "Smithfield")
      const parts = (l.from_address || "").split(",").map((s: string) => s.trim());
      let suburb = "Unknown";
      if (parts.length >= 2) {
        // Take the second-to-last part and remove state/postcode
        const raw = parts[parts.length - 1] || parts[parts.length - 2] || "";
        suburb = raw.replace(/\s*(QLD|NSW|VIC|TAS|SA|WA|NT|ACT)\s*\d{0,4}\s*,?\s*(Australia)?$/i, "").trim();
        if (!suburb || suburb.length < 2) suburb = raw.trim();
      } else {
        suburb = parts[0].replace(/^\d+\s*\/?\d*\s*/, "").replace(/\s*(QLD|NSW)\s*\d{0,4}.*/i, "").trim();
      }
      if (!suburb || suburb.length < 2) return;
      if (!suburbMap[suburb]) suburbMap[suburb] = { leads: 0, won: 0, revenue: 0 };
      suburbMap[suburb].leads++;
      if (l.status === "won") {
        suburbMap[suburb].won++;
        suburbMap[suburb].revenue += l.actual_value || 0;
      }
    });
    const topSuburbs = Object.entries(suburbMap)
      .map(([suburb, d]) => ({
        suburb,
        leads: d.leads,
        won: d.won,
        revenue: d.revenue,
        convRate: d.leads > 0 ? Math.round((d.won / d.leads) * 100) : 0,
      }))
      .sort((a, b) => b.leads - a.leads)
      .slice(0, 15);

    return NextResponse.json({
      kpis,
      comparisonKpis,
      byChannel,
      byDayOfWeek,
      byHourOfDay,
      byDay,
      funnel,
      byType,
      byStatus,
      bySource,
      byMarket,
      bySourceROI,
      googleAdsROI,
      responseTimeBuckets,
      leadTimeline,
      topSuburbs,
      total: totalLeads,
      today: newToday,
      thisWeek: leads.filter((l) => {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        weekStart.setHours(0, 0, 0, 0);
        return l.created_at >= weekStart.toISOString();
      }).length,
      conversionRate: winRate,
    });
  } catch (err) {
    console.error("Analytics API error:", err);
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function endOfDay(dateStr: string): string {
  const d = new Date(dateStr);
  d.setHours(23, 59, 59, 999);
  return d.toISOString();
}

function toAEST(date: Date): Date {
  return new Date(date.getTime() + AEST_OFFSET * 3600000);
}

function pctChange(current: number, previous: number): number | null {
  if (previous === 0 && current === 0) return 0;
  if (previous === 0) return 100;
  return Math.round(((current - previous) / previous) * 100);
}
