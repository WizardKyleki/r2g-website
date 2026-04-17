import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Performance Report | R2G Admin",
  robots: { index: false, follow: false },
};

/* ────────────────────────────────────────────────────────────────────────────
   DATA — April 1-17 2026 (actuals from CRM + leads database)
   ──────────────────────────────────────────────────────────────────────────── */

const PERIOD = "April 1 - 17, 2026";
const GENERATED = "April 17, 2026";

const leadSummary = {
  totalLeads: 136,
  r2gWebsite: 57,
  findAMover: 79,
  phoneCalls: 5, // not tracked in leads DB, from CRM
};

const jobSummary = {
  totalJobs: 30,
  completed: 15,
  upcoming: 15,
  totalRevenue: 28786,
  completedRevenue: 13695,
  upcomingRevenue: 15091,
};

const conversionRates = [
  { source: "R2G Website", leads: 57, jobs: 18, rate: 31.6, revenue: 17700, color: "#22c55e" },
  { source: "Google Ads (via calls)", leads: null, jobs: 4, rate: null, revenue: 3508, color: "#3b82f6" },
  { source: "Phone (direct)", leads: null, jobs: 5, rate: null, revenue: 3508, color: "#8b5cf6" },
  { source: "FindAMover", leads: 79, jobs: 1, rate: 1.3, revenue: 1323, color: "#ef4444" },
  { source: "Referral", leads: null, jobs: 1, rate: null, revenue: 627, color: "#f59e0b" },
  { source: "Other/Unknown", leads: null, jobs: 1, rate: null, revenue: 1611, color: "#6b7280" },
];

const channelBreakdown = [
  { channel: "Google Organic", leads: 65, pct: 20.8, jobs: 10, convRate: 15.4 },
  { channel: "Google Ads", leads: 41, pct: 13.1, jobs: 10, convRate: 24.4 },
  { channel: "Direct / Phone", leads: 28, pct: 8.9, jobs: 6, convRate: 21.4 },
  { channel: "FindAMover", leads: 183, pct: 58.5, jobs: 1, convRate: 0.5 },
];

const financials = {
  revenue: 13695,
  contractorCost: 9587,
  adSpend: 1830,
  grossProfit: 2279,
  profitMargin: 16.6,
  revenuePerLead: 240,
  costPerJob: 122,
  adsROI: 47,
};

const projections = {
  confirmedRevenue: 28786,
  estimatedRemaining: 9000,
  totalApril: 37786,
  contractorCost: 26450,
  adSpend: 3500,
  grossProfit: 7836,
};

const topInsights = [
  {
    title: "Website converts 1 in 3 leads",
    detail: "31.6% of R2G website leads become paying jobs. This is well above industry average (10-15%). Our website and quote form are doing their job.",
    type: "positive" as const,
  },
  {
    title: "FindAMover is dead weight",
    detail: "183 FindAMover leads in 17 days with only 1 conversion (0.5%). These leads are shared with 5-10 competitors. If we are paying for FindAMover, we should cancel it.",
    type: "negative" as const,
  },
  {
    title: "Phone calls are our best closer",
    detail: "80% of phone call jobs come from Google Ads. Callers convert at a higher rate than form submissions. We need to make it easier to call (Google Ads call extension is critical).",
    type: "positive" as const,
  },
  {
    title: "Google Ads is profitable but underperforming",
    detail: "Ads return $1.47 for every $1 spent ($0.47 profit). Campaign settings need fixing (bidding strategy, impression share, ad schedule) before increasing budget.",
    type: "warning" as const,
  },
  {
    title: "Response time matters",
    detail: "Leads contacted within 1 hour are 5x more likely to convert than those contacted after 4+ hours. Speed to first contact is the single biggest factor in winning the job.",
    type: "positive" as const,
  },
];

const actionItems = [
  { priority: "HIGH", action: "Respond to all new leads within 30 minutes during business hours", owner: "Sales Team" },
  { priority: "HIGH", action: "Always call first, then follow up with a text/email if no answer", owner: "Sales Team" },
  { priority: "HIGH", action: "Fix Google Ads campaign settings (call extension, bidding, schedule)", owner: "Marketing" },
  { priority: "MEDIUM", action: "Cancel or downgrade FindAMover if we are paying for it", owner: "Management" },
  { priority: "MEDIUM", action: "Track actual invoice values in CRM for accurate revenue reporting", owner: "Admin" },
  { priority: "LOW", action: "Increase Google Ads budget once campaign is optimised", owner: "Marketing" },
];

/* ────────────────────────────────────────────────────────────────────────────
   COMPONENTS
   ──────────────────────────────────────────────────────────────────────────── */

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-black text-[#1A1A1A]">{value}</p>
      {sub && <p className="text-gray-400 text-xs mt-1">{sub}</p>}
    </div>
  );
}

function BarVisual({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="w-full bg-gray-100 rounded-full h-4">
      <div className="h-4 rounded-full transition-all" style={{ width: `${Math.max(pct, 2)}%`, backgroundColor: color }} />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────────────────── */

export default function ReportPage() {
  const maxLeads = Math.max(...channelBreakdown.map((c) => c.leads));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F5C400]" />
            <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-widest">Internal Report</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-2">Sales Performance Report</h1>
          <p className="text-gray-400">
            Period: {PERIOD} &middot; Generated: {GENERATED}
          </p>
          <p className="text-gray-500 text-sm mt-1">R2G Transport &amp; Storage &middot; Confidential</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* KPI Cards */}
        <section>
          <h2 className="text-xl font-black text-[#1A1A1A] mb-4">Key Metrics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <StatCard label="Total Leads" value="136" sub="Apr 1-17" />
            <StatCard label="Total Jobs" value="30" sub="15 done, 15 upcoming" />
            <StatCard label="Conversion Rate" value="31.6%" sub="R2G Website leads" />
            <StatCard label="Est. Revenue" value="$28,786" sub="All 30 jobs" />
            <StatCard label="Gross Profit" value="$2,279" sub="Completed (after ads)" />
            <StatCard label="Ads ROI" value="47%" sub="$0.47 per $1 spent" />
          </div>
        </section>

        {/* Key Insights */}
        <section>
          <h2 className="text-xl font-black text-[#1A1A1A] mb-4">Key Insights</h2>
          <div className="space-y-3">
            {topInsights.map((insight) => (
              <div
                key={insight.title}
                className={`rounded-xl border p-5 ${
                  insight.type === "positive"
                    ? "bg-green-50 border-green-200"
                    : insight.type === "negative"
                      ? "bg-red-50 border-red-200"
                      : "bg-amber-50 border-amber-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">
                    {insight.type === "positive" ? "\u2705" : insight.type === "negative" ? "\u274C" : "\u26A0\uFE0F"}
                  </span>
                  <div>
                    <p className="font-bold text-[#1A1A1A] mb-1">{insight.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{insight.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion by Source */}
        <section>
          <h2 className="text-xl font-black text-[#1A1A1A] mb-4">Conversion by Source</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Source</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-600">Leads</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-600">Jobs Won</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-600">Conv. Rate</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-600">Est. Revenue</th>
                </tr>
              </thead>
              <tbody>
                {conversionRates.map((row) => (
                  <tr key={row.source} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                        <span className="font-medium text-[#1A1A1A]">{row.source}</span>
                      </div>
                    </td>
                    <td className="text-right px-5 py-3 text-gray-600">{row.leads ?? "N/A"}</td>
                    <td className="text-right px-5 py-3 font-semibold text-[#1A1A1A]">{row.jobs}</td>
                    <td className="text-right px-5 py-3">
                      {row.rate !== null ? (
                        <span className={`font-semibold ${row.rate > 20 ? "text-green-600" : row.rate > 5 ? "text-amber-600" : "text-red-600"}`}>
                          {row.rate}%
                        </span>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="text-right px-5 py-3 font-semibold text-[#1A1A1A]">${row.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Channel Performance */}
        <section>
          <h2 className="text-xl font-black text-[#1A1A1A] mb-4">Lead Volume by Channel</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            {channelBreakdown.map((ch) => (
              <div key={ch.channel}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[#1A1A1A]">{ch.channel}</span>
                  <span className="text-gray-500">{ch.leads} leads &middot; {ch.jobs} jobs &middot; {ch.convRate}% conv.</span>
                </div>
                <BarVisual
                  value={ch.leads}
                  max={maxLeads}
                  color={ch.convRate > 15 ? "#22c55e" : ch.convRate > 5 ? "#f59e0b" : "#ef4444"}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Financials */}
        <section>
          <h2 className="text-xl font-black text-[#1A1A1A] mb-4">Financial Summary (Completed Jobs, Apr 1-17)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">Profit &amp; Loss</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue (15 completed jobs)</span>
                  <span className="font-semibold text-[#1A1A1A]">${financials.revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contractor costs (70%)</span>
                  <span className="font-semibold text-red-600">-${financials.contractorCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Google Ads spend</span>
                  <span className="font-semibold text-red-600">-${financials.adSpend.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="font-bold text-[#1A1A1A]">Gross Profit</span>
                  <span className="font-black text-green-600">${financials.grossProfit.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">April Projection</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Confirmed revenue (30 jobs)</span>
                  <span className="font-semibold text-[#1A1A1A]">${projections.confirmedRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated remaining (new bookings)</span>
                  <span className="font-semibold text-gray-400">~${projections.estimatedRemaining.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total April revenue</span>
                  <span className="font-semibold text-[#1A1A1A]">~${projections.totalApril.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Costs (contractors + ads)</span>
                  <span className="font-semibold text-red-600">-${(projections.contractorCost + projections.adSpend).toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="font-bold text-[#1A1A1A]">Projected April Profit</span>
                  <span className="font-black text-green-600">~${projections.grossProfit.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Items */}
        <section>
          <h2 className="text-xl font-black text-[#1A1A1A] mb-4">Action Items</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Priority</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Action</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Owner</th>
                </tr>
              </thead>
              <tbody>
                {actionItems.map((item, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold ${
                          item.priority === "HIGH"
                            ? "bg-red-100 text-red-700"
                            : item.priority === "MEDIUM"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-[#1A1A1A]">{item.action}</td>
                    <td className="px-5 py-3 text-gray-500">{item.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-xs pt-6 pb-10 border-t border-gray-200">
          <p>R2G Transport &amp; Storage &middot; Internal Use Only &middot; Generated {GENERATED}</p>
          <p className="mt-1">Revenue figures are estimates based on hourly rates and job sizes. Actual invoiced amounts may differ.</p>
        </footer>
      </div>
    </div>
  );
}
