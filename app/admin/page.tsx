"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import StatsCard from "@/components/admin/StatsCard";
import ConversationTable from "@/components/admin/ConversationTable";
import type { DashboardStats, AnalyticsTrends, Conversation } from "@/lib/dashboard-types";

const PERIOD_OPTIONS = [
  { label: "30 days", value: 30 },
  { label: "60 days", value: 60 },
  { label: "90 days", value: 90 },
];

const SENTIMENT_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  positive: { bg: "bg-emerald-400", text: "text-emerald-600", label: "Positive" },
  neutral: { bg: "bg-gray-300", text: "text-gray-500", label: "Neutral" },
  negative: { bg: "bg-orange-400", text: "text-orange-600", label: "Negative" },
  frustrated: { bg: "bg-red-400", text: "text-red-600", label: "Frustrated" },
  unrated: { bg: "bg-gray-100", text: "text-gray-400", label: "No Data" },
};

const TAG_COLORS: Record<string, string> = {
  "price-sensitive": "from-amber-400 to-orange-400",
  interstate: "from-blue-400 to-indigo-400",
  local: "from-emerald-400 to-teal-400",
  storage: "from-violet-400 to-purple-400",
  packing: "from-pink-400 to-rose-400",
  ndis: "from-cyan-400 to-blue-400",
  commercial: "from-slate-400 to-gray-500",
  callback: "from-yellow-400 to-amber-400",
  urgent: "from-red-400 to-rose-500",
  "needs-review": "from-red-500 to-red-600",
};

export default function UnifiedDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [trends, setTrends] = useState<AnalyticsTrends | null>(null);
  const [recentConvos, setRecentConvos] = useState<Conversation[] | null>(null);
  const [days, setDays] = useState(30);
  const [trendsLoading, setTrendsLoading] = useState(true);

  // Fetch overview stats + recent conversations once on mount
  useEffect(() => {
    Promise.all([
      fetch("/api/admin/analytics?view=overview&days=30"),
      fetch("/api/admin/conversations?page=1&limit=10"),
    ]).then(async ([overviewRes, convosRes]) => {
      if (overviewRes.ok) setStats(await overviewRes.json());
      if (convosRes.ok) {
        const convData = await convosRes.json();
        setRecentConvos(convData.conversations);
      }
    }).catch(() => console.error("Failed to fetch dashboard data"));
  }, []);

  // Fetch trends whenever period changes
  const fetchTrends = useCallback(async () => {
    setTrendsLoading(true);
    try {
      const res = await fetch(`/api/admin/analytics?days=${days}&view=trends`);
      if (res.ok) setTrends(await res.json());
    } catch {
      console.error("Failed to fetch trends");
    } finally {
      setTrendsLoading(false);
    }
  }, [days]);

  useEffect(() => {
    fetchTrends();
  }, [fetchTrends]);

  const loading = !stats || trendsLoading || !trends;

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm mt-1 zoey-gradient-text font-medium">
              Zoey AI conversation analytics &amp; insights
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Period selector */}
            <div className="flex items-center bg-white/70 backdrop-blur-sm border border-pink-100/60 rounded-xl p-1 shadow-[0_1px_4px_rgba(236,72,153,0.06)]">
              {PERIOD_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setDays(opt.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    days === opt.value
                      ? "bg-gradient-to-r from-pink-50 to-fuchsia-50 text-fuchsia-700 shadow-sm"
                      : "text-gray-400 hover:text-fuchsia-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {/* Export CSV */}
            <a
              href="/api/admin/export?type=conversations"
              download
              className="px-3.5 py-2 text-xs font-medium rounded-xl bg-white/70 backdrop-blur-sm border border-pink-100/60 text-fuchsia-600 hover:text-fuchsia-700 hover:border-fuchsia-200 hover:bg-fuchsia-50/50 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export CSV
            </a>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <svg className="animate-spin h-5 w-5 text-fuchsia-400" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading dashboard...
            </div>
          </div>
        ) : (
          <>
            {/* ── KPI Row ── */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <StatsCard label="Today" value={stats.todayConversations} subtitle="conversations" />
              <StatsCard label="Active Now" value={stats.activeConversations} accent subtitle="in last 30 min" />
              <StatsCard
                label="Leads"
                value={trends.totalLeads}
                subtitle={`${trends.conversionRate}% conversion (${days}d)`}
                accent
              />
              <StatsCard
                label="Conversion Rate"
                value={`${trends.conversionRate}%`}
                subtitle={`${trends.totalLeads} of ${trends.totalConversations} (${days}d)`}
              />
              <StatsCard
                label="Satisfaction"
                value={
                  trends.totalThumbsUp + trends.totalThumbsDown > 0
                    ? `${trends.avgResponseRate}%`
                    : "—"
                }
                subtitle={
                  trends.totalThumbsUp + trends.totalThumbsDown > 0
                    ? `${trends.totalThumbsUp} 👍 ${trends.totalThumbsDown} 👎`
                    : "No ratings yet"
                }
              />
            </div>

            {/* ── Row 1: Weekly Conversations + Conversion Rate ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <WeeklyConversationsChart trends={trends.weeklyTrends} />
              <ConversionRateChart trends={trends.weeklyTrends} />
            </div>

            {/* ── Row 2: Sentiment + Tags ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <SentimentChart breakdown={trends.sentimentBreakdown} total={trends.totalConversations} />
              <TagDistributionChart tags={trends.tagDistribution} />
            </div>

            {/* ── Row 3: Lead Scores + Satisfaction Trend ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <LeadScoreChart scores={trends.scoreDistribution} />
              <SatisfactionTrendChart trend={trends.satisfactionTrend} />
            </div>

            {/* ── Row 4: Peak Hours + Top Pages ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <PeakHoursHeatmap hours={trends.hourlyBreakdown} />
              <TopPagesChart pages={trends.topPages} />
            </div>

            {/* ── Row 5: Conversion Funnel + Daily Activity ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <ConversionFunnel
                totalConversations={trends.totalConversations}
                totalLeads={trends.totalLeads}
                days={days}
              />
              <DailyActivityChart daily={trends.dailyConversations} />
            </div>

            {/* ── Row 6: Recent Conversations ── */}
            <div className="zoey-card overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-pink-50">
                <h2 className="text-sm font-semibold text-gray-900">Recent Conversations</h2>
                <Link href="/admin/conversations" className="text-xs font-semibold zoey-gradient-text hover:opacity-80 transition-opacity">
                  View all &rarr;
                </Link>
              </div>
              {recentConvos && <ConversationTable conversations={recentConvos} />}
            </div>
          </>
        )}
      </main>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Chart Sub-Components
   ───────────────────────────────────────────────────────────────────────────── */

function WeeklyConversationsChart({
  trends,
}: {
  trends: AnalyticsTrends["weeklyTrends"];
}) {
  const maxConv = Math.max(...trends.map((t) => t.conversations), 1);

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Weekly Conversations</h2>
      <p className="text-xs text-gray-400 mb-4">Conversations &amp; leads per week</p>

      <div className="flex items-end gap-2 h-36">
        {trends.map((week) => {
          const totalH = Math.max((week.conversations / maxConv) * 100, 4);
          const leadH = week.conversations > 0 ? (week.leads / maxConv) * 100 : 0;
          return (
            <div
              key={week.week}
              className="flex-1 flex flex-col items-center gap-0.5"
              title={`${week.weekLabel}: ${week.conversations} convos, ${week.leads} leads`}
            >
              <span className="text-[9px] text-gray-400 font-medium">{week.conversations}</span>
              <div className="w-full flex flex-col items-stretch">
                {leadH > 0 && (
                  <div
                    className="bg-gradient-to-t from-fuchsia-400 to-pink-300 rounded-t"
                    style={{ height: `${leadH}%`, minHeight: 2 }}
                  />
                )}
                <div
                  className="bg-fuchsia-100 rounded-sm"
                  style={{ height: `${totalH - leadH}%`, minHeight: 2 }}
                />
              </div>
              <span className="text-[8px] text-gray-400 mt-1 truncate w-full text-center">
                {week.weekLabel}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-pink-50/50">
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <span className="w-2 h-2 rounded-sm bg-fuchsia-100" /> Conversations
        </span>
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <span className="w-2 h-2 rounded-sm bg-gradient-to-t from-fuchsia-400 to-pink-300" /> Leads
        </span>
      </div>
    </div>
  );
}

function ConversionRateChart({
  trends,
}: {
  trends: AnalyticsTrends["weeklyTrends"];
}) {
  const maxRate = Math.max(...trends.map((t) => t.conversionRate), 1);

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Conversion Rate Trend</h2>
      <p className="text-xs text-gray-400 mb-4">Lead capture rate per week</p>

      <div className="flex items-end gap-2 h-36">
        {trends.map((week) => {
          const height = Math.max((week.conversionRate / (maxRate || 1)) * 100, 4);
          return (
            <div
              key={week.week}
              className="flex-1 flex flex-col items-center gap-0.5"
              title={`${week.weekLabel}: ${week.conversionRate}% (${week.leads}/${week.conversations})`}
            >
              <span className="text-[9px] text-fuchsia-600 font-semibold">{week.conversionRate}%</span>
              <div
                className="w-full bg-gradient-to-t from-fuchsia-400 to-violet-300 rounded"
                style={{ height: `${height}%` }}
              />
              <span className="text-[8px] text-gray-400 mt-1 truncate w-full text-center">
                {week.weekLabel}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SentimentChart({
  breakdown,
  total,
}: {
  breakdown: AnalyticsTrends["sentimentBreakdown"];
  total: number;
}) {
  const entries = Object.entries(breakdown)
    .filter(([key]) => key !== "unrated")
    .filter(([, count]) => count > 0);
  const rated = entries.reduce((sum, [, count]) => sum + count, 0);

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Conversation Sentiment</h2>
      <p className="text-xs text-gray-400 mb-4">AI-detected customer mood distribution</p>

      {rated === 0 ? (
        <div className="flex items-center justify-center h-32 text-sm text-gray-400">
          No sentiment data yet
        </div>
      ) : (
        <>
          <div className="h-8 rounded-xl overflow-hidden flex mb-4">
            {entries.map(([sentiment, count]) => {
              const pct = (count / rated) * 100;
              const config = SENTIMENT_COLORS[sentiment];
              return (
                <div
                  key={sentiment}
                  className={`${config.bg} transition-all`}
                  style={{ width: `${pct}%` }}
                  title={`${config.label}: ${count} (${Math.round(pct)}%)`}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {entries.map(([sentiment, count]) => {
              const config = SENTIMENT_COLORS[sentiment];
              const pct = Math.round((count / rated) * 100);
              return (
                <div key={sentiment} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${config.bg} shrink-0`} />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-700">{config.label}</p>
                    <p className="text-[10px] text-gray-400">
                      {count} ({pct}%)
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {breakdown.unrated > 0 && (
            <p className="text-[10px] text-gray-400 mt-3">
              {breakdown.unrated} of {total} conversations not yet analyzed
            </p>
          )}
        </>
      )}
    </div>
  );
}

function TagDistributionChart({
  tags,
}: {
  tags: AnalyticsTrends["tagDistribution"];
}) {
  const maxCount = tags.length > 0 ? tags[0].count : 1;

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Topic Distribution</h2>
      <p className="text-xs text-gray-400 mb-4">Auto-detected conversation topics</p>

      {tags.length === 0 ? (
        <div className="flex items-center justify-center h-32 text-sm text-gray-400">
          No tag data yet
        </div>
      ) : (
        <div className="space-y-2">
          {tags.map((tag) => {
            const width = Math.max((tag.count / maxCount) * 100, 8);
            const gradient = TAG_COLORS[tag.tag] || "from-fuchsia-400 to-pink-400";
            return (
              <div key={tag.tag} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 font-medium w-28 text-right shrink-0 capitalize truncate">
                  {tag.tag.replace(/-/g, " ")}
                </span>
                <div className="flex-1 relative h-5">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} rounded-md opacity-80`}
                    style={{ width: `${width}%` }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-gray-600">
                    {tag.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function LeadScoreChart({ scores }: { scores: number[] }) {
  const maxScore = Math.max(...scores, 1);
  const total = scores.reduce((a, b) => a + b, 0);

  const scoreLabels = ["0 — Cold", "1", "2", "3", "4", "5 — Hot"];
  const scoreColors = [
    "bg-gray-200",
    "bg-blue-200",
    "bg-cyan-300",
    "bg-emerald-300",
    "bg-orange-300",
    "bg-gradient-to-r from-fuchsia-400 to-pink-400",
  ];

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Lead Score Distribution</h2>
      <p className="text-xs text-gray-400 mb-4">Engagement scores across all conversations</p>

      {total === 0 ? (
        <div className="flex items-center justify-center h-32 text-sm text-gray-400">
          No scored conversations yet
        </div>
      ) : (
        <div className="space-y-2">
          {scores.map((count, i) => {
            const width = Math.max((count / maxScore) * 100, 4);
            const pct = total > 0 ? Math.round((count / total) * 100) : 0;
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[10px] text-gray-500 font-medium w-16 text-right shrink-0">
                  {scoreLabels[i]}
                </span>
                <div className="flex-1 h-5 bg-gray-50 rounded-lg overflow-hidden relative">
                  <div
                    className={`h-full ${scoreColors[i]} rounded-lg transition-all`}
                    style={{ width: `${width}%` }}
                  />
                </div>
                <span className="text-[10px] text-gray-500 font-medium w-10 shrink-0">
                  {count} ({pct}%)
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SatisfactionTrendChart({
  trend,
}: {
  trend: AnalyticsTrends["satisfactionTrend"];
}) {
  const validWeeks = trend.filter((t) => t.rate >= 0);
  const maxTotal = Math.max(...trend.map((t) => t.thumbsUp + t.thumbsDown), 1);

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Satisfaction Trend</h2>
      <p className="text-xs text-gray-400 mb-4">Weekly thumbs up vs thumbs down</p>

      {validWeeks.length === 0 ? (
        <div className="flex items-center justify-center h-32 text-sm text-gray-400">
          No rating data yet
        </div>
      ) : (
        <>
          <div className="flex items-end gap-2 h-28">
            {trend.map((week) => {
              const total = week.thumbsUp + week.thumbsDown;
              if (total === 0) {
                return (
                  <div key={week.week} className="flex-1 flex flex-col items-center gap-0.5">
                    <span className="text-[9px] text-gray-300">—</span>
                    <div className="w-full bg-gray-50 rounded h-1" />
                    <span className="text-[8px] text-gray-400 mt-1 truncate w-full text-center">
                      {week.weekLabel}
                    </span>
                  </div>
                );
              }
              const totalH = (total / maxTotal) * 100;
              const upH = (week.thumbsUp / total) * totalH;
              const downH = totalH - upH;
              return (
                <div
                  key={week.week}
                  className="flex-1 flex flex-col items-center gap-0.5"
                  title={`${week.weekLabel}: ${week.thumbsUp}👍 ${week.thumbsDown}👎 (${week.rate}%)`}
                >
                  <span className="text-[9px] text-emerald-600 font-semibold">{week.rate}%</span>
                  <div className="w-full flex flex-col" style={{ height: `${totalH}%`, minHeight: 4 }}>
                    <div
                      className="bg-emerald-300 rounded-t"
                      style={{ height: `${upH}%`, minHeight: week.thumbsUp ? 2 : 0 }}
                    />
                    <div
                      className="bg-red-300 rounded-b"
                      style={{ height: `${downH}%`, minHeight: week.thumbsDown ? 2 : 0 }}
                    />
                  </div>
                  <span className="text-[8px] text-gray-400 mt-1 truncate w-full text-center">
                    {week.weekLabel}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-pink-50/50">
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <span className="w-2 h-2 rounded-sm bg-emerald-300" /> Thumbs Up
            </span>
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <span className="w-2 h-2 rounded-sm bg-red-300" /> Thumbs Down
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function PeakHoursHeatmap({
  hours,
}: {
  hours: AnalyticsTrends["hourlyBreakdown"];
}) {
  const maxConv = Math.max(...hours.map((h) => h.conversations), 1);

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Peak Hours</h2>
      <p className="text-xs text-gray-400 mb-4">When customers chat with Zoey</p>

      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-1.5">
        {hours.map((h) => {
          const intensity = maxConv > 0 ? h.conversations / maxConv : 0;
          const bg =
            intensity === 0
              ? "bg-gray-50"
              : intensity < 0.25
                ? "bg-fuchsia-50"
                : intensity < 0.5
                  ? "bg-fuchsia-100"
                  : intensity < 0.75
                    ? "bg-fuchsia-200"
                    : "bg-gradient-to-br from-fuchsia-300 to-pink-300";
          return (
            <div
              key={h.hour}
              className={`aspect-square rounded-md ${bg} flex flex-col items-center justify-center cursor-default transition-all hover:scale-110`}
              title={`${h.hour}:00 — ${h.conversations} conversations`}
            >
              <span className="text-[8px] text-gray-500 font-medium">{h.hour}</span>
              {h.conversations > 0 && (
                <span className="text-[7px] text-fuchsia-600 font-semibold">{h.conversations}</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-[10px] text-gray-400">12 AM</span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-gray-400 mr-1">Low</span>
          <span className="w-3 h-3 rounded-sm bg-gray-50" />
          <span className="w-3 h-3 rounded-sm bg-fuchsia-50" />
          <span className="w-3 h-3 rounded-sm bg-fuchsia-100" />
          <span className="w-3 h-3 rounded-sm bg-fuchsia-200" />
          <span className="w-3 h-3 rounded-sm bg-fuchsia-300" />
          <span className="text-[10px] text-gray-400 ml-1">High</span>
        </div>
        <span className="text-[10px] text-gray-400">11 PM</span>
      </div>
    </div>
  );
}

function TopPagesChart({
  pages,
}: {
  pages: AnalyticsTrends["topPages"];
}) {
  const maxCount = pages.length > 0 ? pages[0].count : 1;

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Top Entry Pages</h2>
      <p className="text-xs text-gray-400 mb-4">Where customers start conversations</p>

      {pages.length === 0 ? (
        <div className="flex items-center justify-center h-32 text-sm text-gray-400">
          No page data yet
        </div>
      ) : (
        <div className="space-y-2">
          {pages.map((p, i) => {
            const width = Math.max((p.count / maxCount) * 100, 8);
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-5 text-right shrink-0">{i + 1}</span>
                <div className="flex-1 relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-fuchsia-50 to-violet-50 rounded-md"
                    style={{ width: `${width}%` }}
                  />
                  <div className="relative flex items-center justify-between px-2.5 py-1.5">
                    <span className="text-xs text-gray-700 font-medium truncate">
                      {p.page.replace(/^https?:\/\/(www\.)?r2g\.com\.au/, "") || "/"}
                    </span>
                    <span className="text-xs text-fuchsia-600 font-semibold shrink-0">{p.count}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ConversionFunnel({
  totalConversations,
  totalLeads,
  days,
}: {
  totalConversations: number;
  totalLeads: number;
  days: number;
}) {
  const maxVal = totalConversations || 1;
  const steps = [
    { label: "Chats Opened", value: totalConversations, color: "bg-fuchsia-100", text: "text-fuchsia-700" },
    { label: "Engaged (2+ messages)", value: Math.round(totalConversations * 0.7), color: "bg-fuchsia-200", text: "text-fuchsia-700" },
    { label: "Leads Captured", value: totalLeads, color: "bg-gradient-to-r from-fuchsia-300 to-pink-300", text: "text-white" },
  ];

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Conversion Funnel</h2>
      <p className="text-xs text-gray-400 mb-4">Chat to lead journey ({days}d)</p>

      <div className="space-y-3">
        {steps.map((step, i) => {
          const width = Math.max((step.value / maxVal) * 100, 15);
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500">{step.label}</span>
                <span className="text-xs font-semibold text-gray-700">{step.value}</span>
              </div>
              <div className="h-6 bg-gray-50 rounded-lg overflow-hidden">
                <div
                  className={`h-full ${step.color} rounded-lg flex items-center justify-end pr-2 transition-all`}
                  style={{ width: `${width}%` }}
                >
                  <span className={`text-[10px] font-bold ${step.text}`}>
                    {Math.round((step.value / maxVal) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DailyActivityChart({
  daily,
}: {
  daily: AnalyticsTrends["dailyConversations"];
}) {
  const maxConv = Math.max(...daily.map((d) => d.conversations), 1);

  return (
    <div className="zoey-card p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-1">Daily Activity</h2>
      <p className="text-xs text-gray-400 mb-4">Conversation volume over time</p>

      <div className="flex items-end gap-[2px] h-20 overflow-hidden">
        {daily.map((day) => {
          const height = Math.max((day.conversations / maxConv) * 100, 2);
          return (
            <div
              key={day.date}
              className="flex-1 min-w-[2px]"
              title={`${day.date}: ${day.conversations} conversations, ${day.leads} leads`}
            >
              <div
                className="w-full bg-gradient-to-t from-fuchsia-300 to-pink-200 rounded-t-sm hover:from-fuchsia-400 hover:to-pink-300 transition-colors"
                style={{ height: `${height}%` }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-gray-400">
          {daily.length > 0 ? daily[0].date : ""}
        </span>
        <span className="text-[10px] text-gray-400">
          {daily.length > 0 ? daily[daily.length - 1].date : ""}
        </span>
      </div>
    </div>
  );
}
