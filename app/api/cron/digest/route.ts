import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Weekly email digest — called by Vercel Cron every Monday 8am AEST.
 * Summarises the past 7 days of Zoey conversations and leads.
 */
export async function GET(req: NextRequest) {
  // Verify cron secret (Vercel sets this automatically)
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Check if digest is enabled
    const { data: setting } = await supabase
      .from("zoey_settings")
      .select("value")
      .eq("key", "digest")
      .single();

    const config = setting?.value as { email?: string; enabled?: boolean } | null;
    if (!config?.enabled || !config?.email) {
      return NextResponse.json({ message: "Digest disabled" });
    }

    // Calculate date range (past 7 days)
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weekAgoISO = weekAgo.toISOString();

    // Fetch stats
    const { count: totalConversations } = await supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .gte("created_at", weekAgoISO)
      .gte("user_message_count", 1);

    const { count: totalLeads } = await supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .gte("created_at", weekAgoISO)
      .eq("has_lead", true);

    const { count: droppedCount } = await supabase
      .from("conversations")
      .select("*", { count: "exact", head: true })
      .gte("created_at", weekAgoISO)
      .eq("has_lead", false)
      .gte("user_message_count", 2);

    // Fetch conversations with needs-review tag
    const { data: flaggedConvs } = await supabase
      .from("conversations")
      .select("id, display_name, lead_name, summary, tags")
      .gte("created_at", weekAgoISO)
      .contains("tags", ["needs-review"])
      .limit(10);

    // Fetch top leads
    const { data: topLeads } = await supabase
      .from("conversations")
      .select("id, lead_name, lead_phone, lead_email, lead_moving_from, lead_moving_to, lead_score, summary, created_at")
      .gte("created_at", weekAgoISO)
      .eq("has_lead", true)
      .order("lead_score", { ascending: false })
      .limit(10);

    // Rating stats
    const { data: ratedConvs } = await supabase
      .from("conversations")
      .select("rating")
      .gte("created_at", weekAgoISO)
      .not("rating", "is", null);

    const thumbsUp = ratedConvs?.filter((c) => c.rating === 1).length || 0;
    const thumbsDown = ratedConvs?.filter((c) => c.rating === -1).length || 0;

    const conversations = totalConversations || 0;
    const leads = totalLeads || 0;
    const dropped = droppedCount || 0;
    const conversionRate = conversations > 0 ? Math.round((leads / conversations) * 100) : 0;

    const dateRange = `${weekAgo.toLocaleDateString("en-AU", { day: "numeric", month: "short" })} — ${now.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}`;

    // Build email HTML
    const leadsHtml = topLeads?.length
      ? topLeads.map((l) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-size:14px;">
            <strong>${l.lead_name || "Unknown"}</strong>
            ${l.summary ? `<br><span style="color:#888;font-size:12px;">${l.summary}</span>` : ""}
          </td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#666;">${l.lead_phone || "—"}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:center;">
            ${"🔥".repeat(Math.min(l.lead_score || 0, 5))}${"⚪".repeat(5 - Math.min(l.lead_score || 0, 5))}
          </td>
        </tr>
      `).join("") : '<tr><td colspan="3" style="padding:12px;color:#999;text-align:center;">No leads this week</td></tr>';

    const flaggedHtml = flaggedConvs?.length
      ? flaggedConvs.map((c) => `
        <li style="margin-bottom:6px;font-size:13px;">
          <strong>${c.display_name || c.lead_name || c.id.slice(0, 8)}</strong>
          ${c.summary ? ` — ${c.summary}` : ""}
        </li>
      `).join("") : '<li style="color:#999;font-size:13px;">No flagged conversations this week 🎉</li>';

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#333;">
        <div style="background:linear-gradient(135deg,#d946ef,#8b5cf6);padding:24px 28px;border-radius:12px 12px 0 0;">
          <h1 style="margin:0;font-size:22px;color:#fff;">Zoey AI — Weekly Digest</h1>
          <p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">${dateRange}</p>
        </div>

        <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 12px 12px;padding:28px;">
          <div style="display:flex;gap:16px;margin-bottom:24px;">
            <div style="flex:1;background:#fdf4ff;border:1px solid #f0abfc;border-radius:10px;padding:16px;text-align:center;">
              <p style="margin:0;font-size:28px;font-weight:700;color:#a855f7;">${conversations}</p>
              <p style="margin:4px 0 0;font-size:12px;color:#888;">Conversations</p>
            </div>
            <div style="flex:1;background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:16px;text-align:center;">
              <p style="margin:0;font-size:28px;font-weight:700;color:#22c55e;">${leads}</p>
              <p style="margin:4px 0 0;font-size:12px;color:#888;">Leads Captured</p>
            </div>
            <div style="flex:1;background:#fff7ed;border:1px solid #fdba74;border-radius:10px;padding:16px;text-align:center;">
              <p style="margin:0;font-size:28px;font-weight:700;color:#f97316;">${dropped}</p>
              <p style="margin:4px 0 0;font-size:12px;color:#888;">Dropped Off</p>
            </div>
            <div style="flex:1;background:#fdf4ff;border:1px solid #f0abfc;border-radius:10px;padding:16px;text-align:center;">
              <p style="margin:0;font-size:28px;font-weight:700;color:#d946ef;">${conversionRate}%</p>
              <p style="margin:4px 0 0;font-size:12px;color:#888;">Conversion Rate</p>
            </div>
          </div>

          ${(thumbsUp + thumbsDown) > 0 ? `
          <div style="background:#f9fafb;border-radius:8px;padding:12px 16px;margin-bottom:24px;font-size:13px;color:#666;">
            Customer Ratings: 👍 ${thumbsUp} positive · 👎 ${thumbsDown} negative · ${thumbsUp + thumbsDown > 0 ? Math.round((thumbsUp / (thumbsUp + thumbsDown)) * 100) : 0}% satisfaction
          </div>
          ` : ""}

          <h2 style="font-size:16px;color:#1a1a1a;margin:0 0 12px;border-bottom:2px solid #d946ef;padding-bottom:8px;">Top Leads</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <thead>
              <tr style="background:#fdf4ff;">
                <th style="text-align:left;padding:8px 12px;font-size:11px;color:#a855f7;text-transform:uppercase;">Contact</th>
                <th style="text-align:left;padding:8px 12px;font-size:11px;color:#a855f7;text-transform:uppercase;">Phone</th>
                <th style="text-align:center;padding:8px 12px;font-size:11px;color:#a855f7;text-transform:uppercase;">Score</th>
              </tr>
            </thead>
            <tbody>${leadsHtml}</tbody>
          </table>

          <h2 style="font-size:16px;color:#1a1a1a;margin:0 0 12px;border-bottom:2px solid #f97316;padding-bottom:8px;">Needs Review</h2>
          <ul style="padding-left:20px;margin:0 0 24px;">${flaggedHtml}</ul>

          <div style="text-align:center;margin-top:24px;">
            <a href="https://www.r2g.com.au/admin" style="display:inline-block;background:linear-gradient(135deg,#d946ef,#8b5cf6);color:#fff;padding:12px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
              Open Dashboard →
            </a>
          </div>

          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:11px;color:#aaa;text-align:center;">
            Zoey AI Dashboard · R2G Transport & Storage
          </div>
        </div>
      </div>
    `;

    const { error: sendError } = await resend.emails.send({
      from: "Zoey AI <noreply@r2g.com.au>",
      to: config.email.split(",").map((e: string) => e.trim()),
      subject: `Zoey Weekly Digest — ${leads} leads, ${conversionRate}% conversion (${dateRange})`,
      html,
    });

    if (sendError) {
      console.error("Digest email error:", sendError);
      return NextResponse.json({ error: "Failed to send digest" }, { status: 500 });
    }

    return NextResponse.json({ success: true, stats: { conversations, leads, dropped, conversionRate } });
  } catch (err) {
    console.error("Digest cron error:", err);
    return NextResponse.json({ error: "Digest failed" }, { status: 500 });
  }
}
