"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

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
  topic: string;
  estimated_value: number | null;
  created_at: string;
}

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

function timeAgo(dateStr: string): { text: string; isOld: boolean } {
  const ms = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(ms / 60000);
  const hrs = Math.floor(ms / 3600000);
  const days = Math.floor(ms / 86400000);

  if (mins < 60) return { text: `${mins}m ago`, isOld: false };
  if (hrs < 24) return { text: `${hrs}h ago`, isOld: false };
  if (days < 7) return { text: `${days}d ago`, isOld: days >= 1 };
  return { text: `${days}d ago`, isOld: true };
}

export default function AdminLeadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-950 flex items-center justify-center"><div className="text-yellow-400">Loading...</div></div>}>
      <AdminLeadsContent />
    </Suspense>
  );
}

function AdminLeadsContent() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [channelFilter, setChannelFilter] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", page.toString());
      params.set("limit", "25");
      params.set("sort", sortBy);
      params.set("order", sortOrder);
      if (search) params.set("search", search);
      if (typeFilter) params.set("type", typeFilter);
      if (statusFilter) params.set("status", statusFilter);
      if (channelFilter) params.set("channel", channelFilter);
      if (dateFrom) params.set("from", dateFrom);
      if (dateTo) params.set("to", dateTo);

      const res = await fetch(`/api/admin/leads?${params.toString()}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setLeads(data.leads || []);
      setTotal(data.total || 0);
      setTotalPages(data.totalPages || 0);
    } catch (err) {
      console.error("Leads fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [page, search, typeFilter, statusFilter, channelFilter, dateFrom, dateTo, sortBy, sortOrder, router]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Read initial filters from URL
  useEffect(() => {
    const t = searchParams.get("type");
    const s = searchParams.get("status");
    const c = searchParams.get("channel");
    if (t) setTypeFilter(t);
    if (s) setStatusFilter(s);
    if (c) setChannelFilter(c);
  }, [searchParams]);

  async function handleStatusChange(leadId: string, newStatus: string) {
    try {
      await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)),
      );
    } catch (err) {
      console.error("Status update error:", err);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const hasFilters = search || typeFilter || statusFilter || channelFilter || dateFrom || dateTo;

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-2xl font-extrabold text-yellow-400 tracking-tight">
              R2G
            </Link>
            <nav className="hidden sm:flex items-center gap-1">
              <Link
                href="/admin"
                className="px-3 py-1.5 text-sm font-medium text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition"
              >
                Dashboard
              </Link>
              <span className="px-3 py-1.5 text-sm font-medium text-white bg-neutral-800 rounded-lg">
                Leads
              </span>
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-white">
            Leads{" "}
            <span className="text-neutral-500 text-lg font-normal">({total})</span>
          </h1>
          <div className="flex items-center gap-2">
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [s, o] = e.target.value.split("-");
                setSortBy(s);
                setSortOrder(o);
                setPage(1);
              }}
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition"
            >
              <option value="created_at-desc">Newest first</option>
              <option value="created_at-asc">Oldest first</option>
              <option value="estimated_value-desc">Highest value</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 w-64 transition"
          />
          <select
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              setPage(1);
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition"
          >
            <option value="">All types</option>
            <option value="quote">Quote</option>
            <option value="enquiry">Enquiry</option>
            <option value="partial">Partial</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition"
          >
            <option value="">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="quoted">Quoted</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </select>
          <select
            value={channelFilter}
            onChange={(e) => {
              setChannelFilter(e.target.value);
              setPage(1);
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition"
          >
            <option value="">All channels</option>
            <option value="paid_search">Paid Search</option>
            <option value="paid_social">Paid Social</option>
            <option value="organic_search">Organic Search</option>
            <option value="social">Social</option>
            <option value="referral">Referral</option>
            <option value="direct">Direct</option>
            <option value="email">Email</option>
          </select>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => {
              setDateFrom(e.target.value);
              setPage(1);
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition"
            placeholder="From"
          />
          <input
            type="date"
            value={dateTo}
            onChange={(e) => {
              setDateTo(e.target.value);
              setPage(1);
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition"
            placeholder="To"
          />
          {hasFilters && (
            <button
              onClick={() => {
                setSearch("");
                setTypeFilter("");
                setStatusFilter("");
                setChannelFilter("");
                setDateFrom("");
                setDateTo("");
                setPage(1);
              }}
              className="text-sm text-neutral-400 hover:text-white px-3 py-2 transition"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Table */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
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
                    Route
                  </th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                    Value
                  </th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                    Age
                  </th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-5 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={9} className="text-center text-neutral-500 py-12">
                      Loading...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="text-center text-neutral-500 py-12">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => {
                    const age = timeAgo(lead.created_at);
                    const isStale = lead.status === "new" && age.isOld;
                    return (
                      <tr
                        key={lead.id}
                        className="border-b border-neutral-800/50 hover:bg-neutral-800/30 cursor-pointer transition"
                        onClick={() => router.push(`/admin/leads/${lead.id}`)}
                      >
                        <td className="px-5 py-3 text-sm text-neutral-400 whitespace-nowrap">
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
                        <td className="px-5 py-3 text-sm text-neutral-400 whitespace-nowrap">
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
                            <span className="text-xs text-neutral-500">{lead.lead_source || "\u2014"}</span>
                          )}
                        </td>
                        <td className="px-5 py-3 text-sm text-neutral-400 max-w-[200px] truncate">
                          {lead.type === "enquiry"
                            ? lead.topic || "\u2014"
                            : lead.from_address && lead.to_address
                              ? `${lead.from_address} \u2192 ${lead.to_address}`
                              : "\u2014"}
                        </td>
                        <td className="px-5 py-3 text-sm text-neutral-400 whitespace-nowrap">
                          {lead.estimated_value ? `$${lead.estimated_value.toLocaleString()}` : "\u2014"}
                        </td>
                        <td className={`px-5 py-3 text-sm whitespace-nowrap ${isStale ? "text-red-400 font-medium" : "text-neutral-500"}`}>
                          {age.text}
                        </td>
                        <td className="px-5 py-3" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              handleStatusChange(lead.id, e.target.value)
                            }
                            className={`text-xs font-medium px-2 py-1 rounded border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-yellow-400 ${STATUS_COLORS[lead.status] || "bg-neutral-700 text-white"}`}
                          >
                            <option value="new">new</option>
                            <option value="contacted">contacted</option>
                            <option value="quoted">quoted</option>
                            <option value="won">won</option>
                            <option value="lost">lost</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-5 py-4 border-t border-neutral-800">
              <p className="text-sm text-neutral-500">
                Page {page} of {totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 text-sm rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 text-sm rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
