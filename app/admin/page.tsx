"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

// ── Types ───────────────────────────────────────────────────────────────────

interface KPIs {
  totalLeads: number;
  newToday: number;
  winRate: number;
  avgResponseTimeHrs: number | null;
  pipelineValue: number;
  wonRevenue: number;
}

interface ComparisonKPIs {
  totalLeads: number;
  winRate: number;
  pipelineValue: number;
  wonRevenue: number;
  avgResponseTimeHrs: number | null;
  totalLeadsChange: number | null;
  winRateChange: number | null;
  pipelineValueChange: number | null;
  wonRevenueChange: number | null;
}

interface ChannelData {
  channel: string;
  count: number;
  won: number;
  winRate: number;
  revenue: number;
}

interface AnalyticsData {
  kpis: KPIs;
  comparisonKpis: ComparisonKPIs | null;
  byChannel: ChannelData[];
  byDayOfWeek: Array<{ day: string; count: number }>;
  byHourOfDay: Array<{ hour: number; count: number }>;
  byDay: Array<{ date: string; count: number }>;
  funnel: { new: number; contacted: number; quoted: number; won: number; lost: number };
  byType: Array<{ type: string; count: number }>;
  byStatus: Array<{ status: string; count: number }>;
  bySource: Array<{ source: string; count: number }>;
}

interface Lead {
  id: string;
  type: string;
  status: string;
  name: string;
  phone: string;
  email: string;
  lead_source: string;
  lead_source_channel: string;
  from_address: string;
  to_address: string;
  created_at: string;
}

// ── Constants ───────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  contacted: "bg-yellow-500/20 text-yellow-400",
  quoted: "bg-purple-500/20 text-purple-400",
  won: "bg-green-500/20 text-green-400",
  lost: "bg-red-500/20 text-red-400",
};

const TYPE_COLORS: Record<string, string> = {
  quote: "bg-yellow-500/20 text-yellow-400",
  enquiry: "bg-blue-500/20 text-blue-400",
  partial: "bg-neutral-500/20 text-neutral-400",
};

const CHANNEL_COLORS: Record<string, string> = {
  paid_search: "#f59e0b",
  paid_social: "#f97316",
  organic_search: "#22c55e",
  social: "#3b82f6",
  referral: "#a855f7",
  direct: "#6b7280",
  email: "#06b6d4",
  other: "#78716c",
  unknown: "#525252",
};

const CHANNEL_LABELS: Record<string, string> = {
  paid_search: "Paid Search",
  paid_social: "Paid Social",
  organic_search: "Organic Search",
  social: "Social",
  referral: "Referral",
  direct: "Direct",
  email: "Email",
  other: "Other",
  unknown: "Unknown",
};

// ── Date presets ────────────────────────────────────────────────────────────

function getPresetDates(preset: string): { from: string; to: string } {
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  switch (preset) {
    case "today": {
      return { from: today, to: today };
    }
    case "week": {
      const d = new Date(now);
      d.setDate(d.getDate() - d.getDay() + 1); // Monday
      return { from: d.toISOString().split("T")[0], to: today };
    }
    case "month": {
      const d = new Date(now.getFullYear(), now.getMonth(), 1);
      return { from: d.toISOString().split("T")[0], to: today };
    }
    case "30d": {
      const d = new Date(now);
      d.setDate(d.getDate() - 30);
      return { from: d.toISOString().split("T")[0], to: today };
    }
    case "90d": {
      const d = new Date(now);
      d.setDate(d.getDate() - 90);
      return { from: d.toISOString().split("T")[0], to: today };
    }
    case "year": {
      return { from: `${now.getFullYear()}-01-01`, to: today };
    }
    case "all": {
      return { from: "2020-01-01", to: today };
    }
    default: {
      const d = new Date(now);
      d.setDate(d.getDate() - 30);
      return { from: d.toISOString().split("T")[0], to: today };
    }
  }
}

// ── Shared components ───────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  change,
}: {
  label: string;
  value: string | number;
  sub?: string;
  change?: number | null;
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
      <p className="text-neutral-500 text-sm font-medium">{label}</p>
      <div className="flex items-end gap-2 mt-1">
        <p className="text-3xl font-bold text-white">{value}</p>
        {change !== undefined && change !== null && (
          <span
            className={`text-sm font-semibold mb-1 ${change > 0 ? "text-green-400" : change < 0 ? "text-red-400" : "text-neutral-500"}`}
          >
            {change > 0 ? "+" : ""}
            {change}%
          </span>
        )}
      </div>
      {sub && <p className="text-neutral-500 text-xs mt-1">{sub}</p>}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BarChart({
  data,
  labelKey,
  valueKey,
  colorKey,
}: {
  data: any[];
  labelKey: string;
  valueKey: string;
  colorKey?: string;
}) {
  if (!data || data.length === 0) {
    return <p className="text-neutral-500 text-sm">No data yet</p>;
  }
  const maxVal = Math.max(...data.map((d) => Number(d[valueKey]) || 0));

  return (
    <div className="space-y-2">
      {data.slice(0, 8).map((item, i) => {
        const val = Number(item[valueKey]) || 0;
        const pct = maxVal > 0 ? (val / maxVal) * 100 : 0;
        const color = colorKey ? (CHANNEL_COLORS[String(item[colorKey])] || "#eab308") : "#eab308";
        return (
          <div key={i} className="flex items-center gap-3">
            <span className="text-neutral-400 text-xs w-28 truncate shrink-0">
              {colorKey
                ? CHANNEL_LABELS[String(item[labelKey])] || String(item[labelKey])
                : String(item[labelKey]) || "Unknown"}
            </span>
            <div className="flex-1 bg-neutral-800 rounded-full h-5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, backgroundColor: color }}
              />
            </div>
            <span className="text-white text-xs font-semibold w-8 text-right">
              {val}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function DailyChart({ data }: { data: Array<{ date: string; count: number }> }) {
  if (!data || data.length === 0) {
    return <p className="text-neutral-500 text-sm">No data yet</p>;
  }

  const maxVal = Math.max(...data.map((d) => d.count), 1);
  const chartHeight = 120;

  return (
    <div className="flex items-end gap-1 h-[120px]">
      {data.slice(-60).map((day, i) => {
        const height = (day.count / maxVal) * chartHeight;
        const dateLabel = new Date(day.date).toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
        });
        return (
          <div
            key={i}
            className="flex-1 group relative flex flex-col items-center justify-end"
          >
            <div
              className="w-full bg-yellow-400 rounded-t min-h-[2px] hover:bg-yellow-300 transition-colors"
              style={{ height: `${Math.max(height, 2)}px` }}
            />
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
              {dateLabel}: {day.count} lead{day.count !== 1 ? "s" : ""}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BusiestChart({
  data,
  labelFn,
}: {
  data: Array<{ label: string; count: number }>;
  labelFn?: (item: { label: string; count: number }) => string;
}) {
  if (!data || data.length === 0) return <p className="text-neutral-500 text-sm">No data</p>;
  const maxVal = Math.max(...data.map((d) => d.count), 1);
  const peakIdx = data.reduce((best, d, i) => (d.count > data[best].count ? i : best), 0);

  return (
    <div className="flex items-end gap-1 h-[100px]">
      {data.map((item, i) => {
        const height = (item.count / maxVal) * 100;
        const isPeak = i === peakIdx && item.count > 0;
        return (
          <div
            key={i}
            className="flex-1 group relative flex flex-col items-center justify-end"
          >
            <div
              className={`w-full rounded-t min-h-[2px] transition-colors ${isPeak ? "bg-yellow-400" : "bg-neutral-600 hover:bg-neutral-500"}`}
              style={{ height: `${Math.max(height, 2)}%` }}
            />
            <span className="text-[10px] text-neutral-500 mt-1 leading-none">
              {labelFn ? labelFn(item) : item.label}
            </span>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
              {labelFn ? labelFn(item) : item.label}: {item.count} lead{item.count !== 1 ? "s" : ""}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FunnelChart({
  funnel,
}: {
  funnel: { new: number; contacted: number; quoted: number; won: number; lost: number };
}) {
  const stages = [
    { label: "New", count: funnel.new, color: "#3b82f6" },
    { label: "Contacted", count: funnel.contacted, color: "#eab308" },
    { label: "Quoted", count: funnel.quoted, color: "#a855f7" },
    { label: "Won", count: funnel.won, color: "#22c55e" },
  ];

  const maxCount = Math.max(...stages.map((s) => s.count), 1);

  return (
    <div className="space-y-3">
      {stages.map((stage, i) => {
        const pct = (stage.count / maxCount) * 100;
        const prevCount = i > 0 ? stages[i - 1].count : null;
        const dropOff =
          prevCount && prevCount > 0
            ? Math.round(((prevCount - stage.count) / prevCount) * 100)
            : null;
        return (
          <div key={stage.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-neutral-300 font-medium">{stage.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white font-bold">{stage.count}</span>
                {dropOff !== null && dropOff > 0 && (
                  <span className="text-xs text-red-400">-{dropOff}%</span>
                )}
              </div>
            </div>
            <div className="bg-neutral-800 rounded-full h-6 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(pct, 2)}%`, backgroundColor: stage.color }}
              />
            </div>
          </div>
        );
      })}
      {funnel.lost > 0 && (
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs text-red-400">Lost: {funnel.lost}</span>
        </div>
      )}
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
          <div className="text-yellow-400 text-lg">Loading dashboard...</div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Date range state from URL params
  const [preset, setPreset] = useState(searchParams.get("preset") || "30d");
  const [dateFrom, setDateFrom] = useState(searchParams.get("from") || "");
  const [dateTo, setDateTo] = useState(searchParams.get("to") || "");
  const [compareEnabled, setCompareEnabled] = useState(searchParams.get("compare") === "true");

  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Resolve effective date range
  const getEffectiveRange = useCallback(() => {
    if (dateFrom && dateTo) {
      return { from: dateFrom, to: dateTo };
    }
    return getPresetDates(preset);
  }, [dateFrom, dateTo, preset]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const range = getEffectiveRange();
      const params = new URLSearchParams({
        from: range.from,
        to: range.to,
      });
      if (compareEnabled) params.set("compare", "true");

      const [analyticsRes, leadsRes] = await Promise.all([
        fetch(`/api/admin/analytics?${params.toString()}`),
        fetch("/api/admin/leads?limit=10&sort=created_at&order=desc"),
      ]);

      if (analyticsRes.status === 401 || leadsRes.status === 401) {
        router.push("/admin/login");
        return;
      }

      const analyticsData = await analyticsRes.json();
      const leadsData = await leadsRes.json();

      setAnalytics(analyticsData);
      setRecentLeads(leadsData.leads || []);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [getEffectiveRange, compareEnabled, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Initialize date range from URL on mount
  useEffect(() => {
    const f = searchParams.get("from");
    const t = searchParams.get("to");
    const p = searchParams.get("preset");
    if (f && t) {
      setDateFrom(f);
      setDateTo(t);
    } else if (p) {
      setPreset(p);
    }
  }, [searchParams]);

  function handlePreset(p: string) {
    setPreset(p);
    const range = getPresetDates(p);
    setDateFrom(range.from);
    setDateTo(range.to);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const kpis = analytics?.kpis;
  const comp = analytics?.comparisonKpis;

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-extrabold text-yellow-400 tracking-tight">
              R2G
            </span>
            <nav className="hidden sm:flex items-center gap-1">
              <span className="px-3 py-1.5 text-sm font-medium text-white bg-neutral-800 rounded-lg">
                Dashboard
              </span>
              <Link
                href="/admin/leads"
                className="px-3 py-1.5 text-sm font-medium text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition"
              >
                Leads
              </Link>
            </nav>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-neutral-500 hover:text-red-400 transition"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Date Range Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { key: "today", label: "Today" },
            { key: "week", label: "This Week" },
            { key: "month", label: "This Month" },
            { key: "30d", label: "Last 30 Days" },
            { key: "90d", label: "Last 90 Days" },
            { key: "year", label: "This Year" },
            { key: "all", label: "All Time" },
          ].map((p) => (
            <button
              key={p.key}
              onClick={() => handlePreset(p.key)}
              className={`px-3 py-1.5 text-sm rounded-lg transition ${
                preset === p.key
                  ? "bg-yellow-400 text-neutral-900 font-semibold"
                  : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
              }`}
            >
              {p.label}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => {
                setDateFrom(e.target.value);
                setPreset("");
              }}
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none focus:border-yellow-400"
            />
            <span className="text-neutral-500 text-sm">to</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => {
                setDateTo(e.target.value);
                setPreset("");
              }}
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none focus:border-yellow-400"
            />
          </div>
          <label className="flex items-center gap-1.5 ml-2 cursor-pointer">
            <input
              type="checkbox"
              checked={compareEnabled}
              onChange={(e) => setCompareEnabled(e.target.checked)}
              className="accent-yellow-400"
            />
            <span className="text-sm text-neutral-400">Compare</span>
          </label>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-yellow-400">Loading...</div>
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              <StatCard
                label="Total Leads"
                value={kpis?.totalLeads || 0}
                change={comp?.totalLeadsChange}
              />
              <StatCard label="New Today" value={kpis?.newToday || 0} />
              <StatCard
                label="Win Rate"
                value={`${kpis?.winRate || 0}%`}
                sub="Won / (Won + Lost)"
                change={comp?.winRateChange}
              />
              <StatCard
                label="Avg Response"
                value={kpis?.avgResponseTimeHrs !== null ? `${kpis?.avgResponseTimeHrs}h` : "N/A"}
                sub="Created to first contact"
              />
              <StatCard
                label="Pipeline Value"
                value={`$${(kpis?.pipelineValue || 0).toLocaleString()}`}
                sub="Open leads est. value"
                change={comp?.pipelineValueChange}
              />
              <StatCard
                label="Won Revenue"
                value={`$${(kpis?.wonRevenue || 0).toLocaleString()}`}
                sub="Closed won actual value"
                change={comp?.wonRevenueChange}
              />
            </div>

            {/* Charts Row 1: Lead Volume + Channel Performance */}
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-4">Lead Volume Over Time</h2>
                <DailyChart data={analytics?.byDay || []} />
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-4">Channel Performance</h2>
                <BarChart
                  data={analytics?.byChannel || []}
                  labelKey="channel"
                  valueKey="count"
                  colorKey="channel"
                />
              </div>
            </div>

            {/* Charts Row 2: Busiest Times + Conversion Funnel */}
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-4">Busiest Day of Week</h2>
                <BusiestChart
                  data={(analytics?.byDayOfWeek || []).map((d) => ({
                    label: d.day,
                    count: d.count,
                  }))}
                />
                <h2 className="text-white font-semibold mt-6 mb-4">Busiest Hour of Day</h2>
                <BusiestChart
                  data={(analytics?.byHourOfDay || []).map((d) => ({
                    label: String(d.hour),
                    count: d.count,
                  }))}
                  labelFn={(item) => {
                    const h = parseInt(item.label);
                    if (h === 0) return "12a";
                    if (h === 12) return "12p";
                    return h < 12 ? `${h}a` : `${h - 12}p`;
                  }}
                />
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-4">Conversion Funnel</h2>
                {analytics?.funnel ? (
                  <FunnelChart funnel={analytics.funnel} />
                ) : (
                  <p className="text-neutral-500 text-sm">No data yet</p>
                )}
              </div>
            </div>

            {/* Charts Row 3: By Type + By Status */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-4">By Type</h2>
                <BarChart
                  data={analytics?.byType || []}
                  labelKey="type"
                  valueKey="count"
                />
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-4">By Source</h2>
                <BarChart
                  data={analytics?.bySource || []}
                  labelKey="source"
                  valueKey="count"
                />
              </div>
            </div>

            {/* Recent Leads */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-neutral-800">
                <h2 className="text-white font-semibold">Recent Leads</h2>
                <Link
                  href="/admin/leads"
                  className="text-sm text-yellow-400 hover:text-yellow-300 transition"
                >
                  View all
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                        Date
                      </th>
                      <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                        Type
                      </th>
                      <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                        Name
                      </th>
                      <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                        Phone
                      </th>
                      <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                        Channel
                      </th>
                      <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentLeads.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center text-neutral-500 py-12">
                          No leads yet. They will appear here as they come in.
                        </td>
                      </tr>
                    ) : (
                      recentLeads.map((lead) => (
                        <tr
                          key={lead.id}
                          className="border-b border-neutral-800/50 hover:bg-neutral-800/30 cursor-pointer transition"
                          onClick={() => router.push(`/admin/leads/${lead.id}`)}
                        >
                          <td className="px-5 py-3 text-sm text-neutral-400">
                            {new Date(lead.created_at).toLocaleDateString("en-AU", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${TYPE_COLORS[lead.type] || ""}`}
                            >
                              {lead.type}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-sm text-white font-medium">
                            {lead.name || "\u2014"}
                          </td>
                          <td className="px-5 py-3 text-sm text-neutral-400">
                            {lead.phone || "\u2014"}
                          </td>
                          <td className="px-5 py-3">
                            {lead.lead_source_channel ? (
                              <span
                                className="inline-block text-xs font-medium px-2 py-0.5 rounded"
                                style={{
                                  backgroundColor: `${CHANNEL_COLORS[lead.lead_source_channel] || "#525252"}20`,
                                  color: CHANNEL_COLORS[lead.lead_source_channel] || "#525252",
                                }}
                              >
                                {CHANNEL_LABELS[lead.lead_source_channel] || lead.lead_source_channel}
                              </span>
                            ) : (
                              <span className="text-sm text-neutral-500">
                                {lead.lead_source || "\u2014"}
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${STATUS_COLORS[lead.status] || ""}`}
                            >
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
