"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import type { Conversation } from "@/lib/dashboard-types";

type View = "all" | "active" | "completed" | "needs-review";

const TAG_OPTIONS = [
  "urgent",
  "follow-up",
  "interstate",
  "local",
  "storage",
  "packing",
  "price-sensitive",
  "ndis",
  "commercial",
  "callback",
  "needs-review",
];

const VIEW_OPTIONS: { value: View; label: string }[] = [
  { value: "all", label: "All Chats" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
  { value: "needs-review", label: "Needs Review" },
];

const SENTIMENT_MAP: Record<string, { emoji: string; label: string; color: string }> = {
  positive: { emoji: "😊", label: "Positive", color: "text-green-600 bg-green-50 border-green-100" },
  neutral: { emoji: "😐", label: "Neutral", color: "text-gray-500 bg-gray-50 border-gray-100" },
  negative: { emoji: "😞", label: "Negative", color: "text-orange-600 bg-orange-50 border-orange-100" },
  frustrated: { emoji: "😤", label: "Frustrated", color: "text-red-500 bg-red-50 border-red-100" },
};

interface Stats {
  totalAll: number;
  totalActive: number;
  totalLeads: number;
  totalNeedsReview: number;
}

interface DetailMessage {
  role: "user" | "assistant";
  content: string;
  tool_name?: string | null;
  tool_input?: Record<string, string> | null;
  created_at: string;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
  });
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDisplayName(conv: Conversation): string {
  if (conv.display_name) return conv.display_name;
  if (conv.lead_name) return conv.lead_name;
  return `Chat #${conv.id.slice(0, 8)}`;
}

function getInitials(name: string): string {
  if (name.startsWith("Chat #")) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function ScoreIndicator({ score }: { score: number }) {
  const s = Math.min(5, Math.max(0, score));
  return (
    <span className="inline-flex items-center gap-0.5" title={`Lead score: ${s}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-[10px] ${i < s ? "opacity-100" : "opacity-20"}`}>
          🔥
        </span>
      ))}
    </span>
  );
}

export default function LeadsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [total, setTotal] = useState(0);
  const [stats, setStats] = useState<Stats>({
    totalAll: 0,
    totalActive: 0,
    totalLeads: 0,
    totalNeedsReview: 0,
  });
  const [page, setPage] = useState(1);
  const [view, setView] = useState<View>("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Date range
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // Details panel
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);
  const [detailMessages, setDetailMessages] = useState<DetailMessage[]>([]);
  const [detailLoading, setDetailLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // Rename
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [savingName, setSavingName] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Tags
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const limit = 30;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        view,
      });
      if (search) params.set("search", search);
      if (dateFrom) params.set("from", dateFrom);
      if (dateTo) params.set("to", dateTo);

      const res = await fetch(`/api/admin/conversations?${params}`);
      const data = await res.json();
      setConversations(data.conversations || []);
      setTotal(data.total || 0);
      if (data.stats) setStats(data.stats);
    } catch {
      console.error("Failed to fetch conversations");
    } finally {
      setLoading(false);
    }
  }, [page, view, search, dateFrom, dateTo]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Auto-refresh every 30s
  useEffect(() => {
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  useEffect(() => {
    setPage(1);
  }, [view, search, dateFrom, dateTo]);

  // Open details panel
  async function openDetails(conv: Conversation) {
    setSelectedConv(conv);
    setShowPanel(true);
    setEditingName(false);
    setTags(conv.tags || []);
    setTagInput("");
    setDetailLoading(true);
    try {
      const res = await fetch(`/api/admin/conversations/${conv.id}`);
      const data = await res.json();
      setDetailMessages(data.messages || []);
      if (data.conversation) {
        setSelectedConv(data.conversation);
        setTags(data.conversation.tags || []);
      }
    } catch {
      setDetailMessages([]);
    } finally {
      setDetailLoading(false);
    }
  }

  function closePanel() {
    setShowPanel(false);
    setTimeout(() => {
      setSelectedConv(null);
      setDetailMessages([]);
    }, 300);
  }

  // Rename
  function startRename() {
    if (!selectedConv) return;
    setNameInput(getDisplayName(selectedConv));
    setEditingName(true);
    setTimeout(() => nameInputRef.current?.focus(), 50);
  }

  async function saveRename() {
    if (!selectedConv || !nameInput.trim()) return;
    setSavingName(true);
    try {
      await fetch(`/api/admin/conversations/${selectedConv.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ display_name: nameInput.trim() }),
      });
      const updated = { ...selectedConv, display_name: nameInput.trim() };
      setSelectedConv(updated);
      setConversations((prev) =>
        prev.map((c) => (c.id === selectedConv.id ? { ...c, display_name: nameInput.trim() } : c)),
      );
      setEditingName(false);
    } catch {
      /* ignore */
    } finally {
      setSavingName(false);
    }
  }

  function clearDates() {
    setDateFrom("");
    setDateTo("");
  }

  // Tags
  async function toggleTag(tag: string) {
    if (!selectedConv) return;
    const newTags = tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag];
    setTags(newTags);
    try {
      await fetch(`/api/admin/conversations/${selectedConv.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tags: newTags }),
      });
    } catch { /* ignore */ }
  }

  async function addCustomTag() {
    if (!selectedConv) return;
    const tag = tagInput.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-");
    if (!tag || tags.includes(tag)) { setTagInput(""); return; }
    const newTags = [...tags, tag];
    setTags(newTags);
    setTagInput("");
    try {
      await fetch(`/api/admin/conversations/${selectedConv.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tags: newTags }),
      });
    } catch { /* ignore */ }
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
            <p className="text-sm mt-1 zoey-gradient-text font-medium">
              All Zoey conversations — review, tag, and manage leads
            </p>
          </div>
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

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="zoey-card-strong p-4">
            <p className="text-xs text-fuchsia-400/70 font-semibold mb-1">Total Chats</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalAll}</p>
          </div>
          <div className="zoey-card-strong p-4">
            <p className="text-xs text-fuchsia-400/70 font-semibold mb-1">Active Now</p>
            <p className="text-2xl font-bold text-emerald-500">{stats.totalActive}</p>
            <p className="text-xs text-gray-400 mt-0.5">in last 30 min</p>
          </div>
          <div className="zoey-card-strong p-4">
            <p className="text-xs text-fuchsia-400/70 font-semibold mb-1">Leads Captured</p>
            <p className="text-2xl font-bold zoey-gradient-text">{stats.totalLeads}</p>
          </div>
          <div className="zoey-card-strong p-4">
            <p className="text-xs text-fuchsia-400/70 font-semibold mb-1">Needs Review</p>
            <p className="text-2xl font-bold text-red-400">{stats.totalNeedsReview}</p>
            <p className="text-xs text-gray-400 mt-0.5">flagged by AI</p>
          </div>
        </div>

        {/* Filters row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* View toggle */}
          <div className="flex flex-wrap items-center bg-white/70 backdrop-blur-sm border border-pink-100/60 rounded-xl p-1 shadow-[0_1px_4px_rgba(236,72,153,0.06)]">
            {VIEW_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setView(opt.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  view === opt.value
                    ? "bg-gradient-to-r from-pink-50 to-fuchsia-50 text-fuchsia-700 shadow-sm"
                    : "text-gray-400 hover:text-fuchsia-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 w-full sm:max-w-xs">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search name, phone, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="zoey-input w-full pl-9 pr-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Date range */}
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-pink-100/60 rounded-xl px-3 py-1.5 shadow-[0_1px_4px_rgba(236,72,153,0.06)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fuchsia-400/70 shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="bg-transparent text-xs text-gray-700 font-medium focus:outline-none w-[110px] [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
              title="From date"
            />
            <span className="text-gray-300 text-xs">&rarr;</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="bg-transparent text-xs text-gray-700 font-medium focus:outline-none w-[110px] [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
              title="To date"
            />
            {(dateFrom || dateTo) && (
              <button
                onClick={clearDates}
                className="text-gray-300 hover:text-red-400 transition-colors ml-0.5"
                title="Clear dates"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Conversations table */}
        <div className="zoey-card overflow-hidden overflow-x-auto">
          <table className="w-full min-w-0">
            <thead>
              <tr className="border-b border-pink-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider">
                  Contact
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider hidden lg:table-cell">
                  Summary
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider hidden sm:table-cell">
                  Result
                </th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider hidden md:table-cell">
                  Score
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider hidden sm:table-cell">
                  Date
                </th>
                <th className="w-8" />
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-gray-400 text-sm">
                    Loading...
                  </td>
                </tr>
              ) : conversations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-gray-400 text-sm">
                    {search
                      ? "No conversations match your search"
                      : view === "active"
                        ? "No active conversations right now"
                        : view === "needs-review"
                          ? "No flagged conversations — Zoey is doing great!"
                          : "No conversations yet"}
                  </td>
                </tr>
              ) : (
                conversations.map((conv) => {
                  const displayName = getDisplayName(conv);
                  const initials = getInitials(displayName);
                  const isAnonymous = displayName.startsWith("Chat #");
                  const sentimentInfo = SENTIMENT_MAP[conv.sentiment || "neutral"];

                  return (
                    <tr
                      key={conv.id}
                      className={`border-b border-pink-50/50 hover:bg-pink-50/30 transition-colors cursor-pointer ${
                        selectedConv?.id === conv.id && showPanel ? "bg-gradient-to-r from-fuchsia-50/40 to-violet-50/20" : ""
                      }`}
                      onClick={() => openDetails(conv)}
                    >
                      {/* Contact */}
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            isAnonymous
                              ? "bg-gray-100 text-gray-400"
                              : "bg-gradient-to-br from-fuchsia-100 to-violet-100 text-fuchsia-700"
                          }`}>
                            {initials}
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-medium truncate ${isAnonymous ? "text-gray-400" : "text-gray-900"}`}>
                                {displayName}
                              </span>
                              {sentimentInfo && conv.sentiment !== "neutral" && (
                                <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium border ${sentimentInfo.color}`}>
                                  {sentimentInfo.emoji}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-gray-400 truncate">
                              {conv.message_count} messages
                              {conv.page_url && ` · ${conv.page_url.replace(/^https?:\/\/(www\.)?r2g\.com\.au/, "") || "/"}`}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Summary */}
                      <td className="px-4 py-3 max-w-[280px] hidden lg:table-cell">
                        {conv.summary ? (
                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{conv.summary}</p>
                        ) : conv.lead_moving_from || conv.lead_moving_to ? (
                          <p className="text-xs text-gray-400">
                            {conv.lead_moving_from || "?"} &rarr; {conv.lead_moving_to || "?"}
                            {conv.lead_move_type && <span className="text-gray-300"> &middot; {conv.lead_move_type}</span>}
                          </p>
                        ) : (
                          <span className="text-xs text-gray-300">No summary yet</span>
                        )}
                      </td>

                      {/* Result */}
                      <td className="px-4 py-3 hidden sm:table-cell">
                        {conv.has_lead ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Lead
                          </span>
                        ) : conv.user_message_count >= 2 ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-500 border border-orange-100">
                            Dropped off
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-400 border border-gray-100">
                            Quick chat
                          </span>
                        )}
                        {conv.tags?.includes("needs-review") && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-red-500 bg-red-50 border border-red-100 mt-1">
                            ⚠️ Review
                          </span>
                        )}
                      </td>

                      {/* Score */}
                      <td className="px-3 py-3 text-center hidden md:table-cell">
                        <ScoreIndicator score={conv.lead_score} />
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className="text-xs text-gray-400">{timeAgo(conv.created_at)}</span>
                      </td>

                      {/* Arrow */}
                      <td className="px-3 py-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
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
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-gray-400">
              Page {page} of {totalPages} &middot; {total} results
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/70 backdrop-blur-sm border border-pink-100/60 text-gray-500 hover:text-fuchsia-600 hover:border-fuchsia-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/70 backdrop-blur-sm border border-pink-100/60 text-gray-500 hover:text-fuchsia-600 hover:border-fuchsia-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </main>

      {/* ─── Slide-out Details Panel ─────────────────────────────────── */}
      {selectedConv && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[60] transition-opacity duration-300 ${
              showPanel ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={closePanel}
          />

          {/* Panel */}
          <div
            className={`fixed right-0 top-0 h-screen w-full max-w-lg bg-white/95 backdrop-blur-xl border-l border-pink-100/60 shadow-[-8px_0_40px_rgba(190,60,150,0.08)] z-[70] flex flex-col transition-transform duration-300 ease-out ${
              showPanel ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Panel header */}
            <div className="px-6 py-5 border-b border-pink-50 flex items-start justify-between shrink-0">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  getDisplayName(selectedConv).startsWith("Chat #")
                    ? "bg-gray-100 text-gray-400"
                    : "bg-gradient-to-br from-fuchsia-100 to-violet-100 text-fuchsia-700"
                }`}>
                  {getInitials(getDisplayName(selectedConv))}
                </div>
                <div className="min-w-0 flex-1">
                  {editingName ? (
                    <div className="flex items-center gap-2">
                      <input
                        ref={nameInputRef}
                        type="text"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveRename();
                          if (e.key === "Escape") setEditingName(false);
                        }}
                        className="zoey-input px-2.5 py-1 text-sm font-semibold text-gray-900 w-full max-w-[200px]"
                        placeholder="Enter name..."
                      />
                      <button
                        onClick={saveRename}
                        disabled={savingName}
                        className="text-xs font-medium text-fuchsia-600 hover:text-fuchsia-700 transition-colors shrink-0"
                      >
                        {savingName ? "..." : "Save"}
                      </button>
                      <button
                        onClick={() => setEditingName(false)}
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-gray-900 truncate">
                        {getDisplayName(selectedConv)}
                      </h2>
                      <button
                        onClick={startRename}
                        className="text-gray-300 hover:text-fuchsia-500 transition-colors shrink-0"
                        title="Rename"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-0.5">
                    {formatDate(selectedConv.created_at)}
                  </p>
                </div>
              </div>

              <button
                onClick={closePanel}
                className="text-gray-300 hover:text-gray-500 transition-colors p-1 -mr-1 shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Panel body — scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {/* Status badges row */}
              <div className="flex items-center gap-2 flex-wrap">
                {selectedConv.has_lead ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Converted Lead
                  </span>
                ) : selectedConv.user_message_count >= 2 ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-500 border border-orange-100">
                    Dropped Off
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-400 border border-gray-100">
                    Quick Chat
                  </span>
                )}
                {selectedConv.sentiment && SENTIMENT_MAP[selectedConv.sentiment] && (
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border ${SENTIMENT_MAP[selectedConv.sentiment].color}`}>
                    {SENTIMENT_MAP[selectedConv.sentiment].emoji} {SENTIMENT_MAP[selectedConv.sentiment].label}
                  </span>
                )}
                {selectedConv.rating === 1 && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    👍 Positive
                  </span>
                )}
                {selectedConv.rating === -1 && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full border border-red-100">
                    👎 Negative
                  </span>
                )}
                <div className="ml-auto">
                  <ScoreIndicator score={selectedConv.lead_score} />
                </div>
              </div>

              {/* AI Summary */}
              {selectedConv.summary && (
                <div className="bg-gradient-to-r from-violet-50/60 to-fuchsia-50/40 rounded-xl border border-violet-100/50 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">AI Summary</span>
                    <span className="text-[10px] text-violet-400 bg-violet-50 px-1.5 py-0.5 rounded-full border border-violet-100">auto</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{selectedConv.summary}</p>
                </div>
              )}

              {/* Conversation Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/70 border border-pink-100/50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{selectedConv.message_count}</p>
                  <p className="text-[10px] text-gray-400 uppercase">Messages</p>
                </div>
                <div className="bg-white/70 border border-pink-100/50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{selectedConv.user_message_count}</p>
                  <p className="text-[10px] text-gray-400 uppercase">From User</p>
                </div>
                <div className="bg-white/70 border border-pink-100/50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">
                    {detailMessages.length >= 2
                      ? `${Math.max(1, Math.round(
                          (new Date(detailMessages[detailMessages.length - 1].created_at).getTime() -
                            new Date(detailMessages[0].created_at).getTime()) /
                            60000,
                        ))}m`
                      : "< 1m"}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase">Duration</p>
                </div>
              </div>

              {/* Lead Details (if applicable) */}
              {selectedConv.has_lead && (selectedConv.lead_name || selectedConv.lead_phone || selectedConv.lead_email) && (
                <div className="bg-gradient-to-r from-emerald-50/60 to-green-50/40 rounded-xl border border-emerald-100/50 p-4">
                  <h3 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3">Lead Details</h3>
                  <div className="space-y-2">
                    {selectedConv.lead_name && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-12">Name</span>
                        <span className="text-sm font-medium text-gray-900">{selectedConv.lead_name}</span>
                      </div>
                    )}
                    {selectedConv.lead_phone && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-12">Phone</span>
                        <a href={`tel:${selectedConv.lead_phone}`} className="text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700">{selectedConv.lead_phone}</a>
                      </div>
                    )}
                    {selectedConv.lead_email && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-12">Email</span>
                        <a href={`mailto:${selectedConv.lead_email}`} className="text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700">{selectedConv.lead_email}</a>
                      </div>
                    )}
                    {(selectedConv.lead_moving_from || selectedConv.lead_moving_to) && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-12">Move</span>
                        <span className="text-sm text-gray-700">
                          {selectedConv.lead_moving_from || "?"} &rarr; {selectedConv.lead_moving_to || "?"}
                          {selectedConv.lead_move_type && ` · ${selectedConv.lead_move_type}`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h3 className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-3">Tags</h3>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {TAG_OPTIONS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                        tags.includes(tag)
                          ? tag === "needs-review"
                            ? "bg-red-50 text-red-600 border border-red-200 shadow-sm"
                            : "bg-gradient-to-r from-fuchsia-50 to-violet-50 text-fuchsia-700 border border-fuchsia-200 shadow-sm"
                          : "bg-gray-50 text-gray-400 border border-gray-100 hover:text-fuchsia-600 hover:border-fuchsia-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCustomTag()}
                    placeholder="Add custom tag..."
                    className="zoey-input flex-1 px-3 py-1.5 text-xs text-gray-900 placeholder:text-gray-400"
                  />
                  <button
                    onClick={addCustomTag}
                    disabled={!tagInput.trim()}
                    className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-200 hover:bg-fuchsia-100 disabled:opacity-30 transition-all"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Conversation Preview */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider">Conversation</h3>
                  <Link
                    href={`/admin/conversations/${selectedConv.id}`}
                    className="text-xs zoey-gradient-text font-semibold hover:opacity-80 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View full &rarr;
                  </Link>
                </div>

                {detailLoading ? (
                  <div className="bg-white/60 rounded-xl border border-pink-100/40 p-5 text-center">
                    <p className="text-xs text-gray-400">Loading conversation...</p>
                  </div>
                ) : detailMessages.length === 0 ? (
                  <div className="bg-white/60 rounded-xl border border-pink-100/40 p-5 text-center">
                    <p className="text-xs text-gray-400">No messages found</p>
                  </div>
                ) : (
                  <div className="bg-white/60 rounded-xl border border-pink-100/40 overflow-hidden">
                    <div className="max-h-[400px] overflow-y-auto p-4 space-y-3">
                      {detailMessages.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                              msg.role === "assistant"
                                ? "bg-gradient-to-br from-fuchsia-100 to-violet-100 text-fuchsia-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {msg.role === "assistant" ? "Z" : "U"}
                          </div>
                          <div
                            className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                              msg.role === "assistant"
                                ? "bg-gradient-to-r from-fuchsia-50/60 to-violet-50/40 text-gray-700 border border-fuchsia-100/40"
                                : "bg-gray-50 text-gray-600 border border-gray-100"
                            }`}
                          >
                            {msg.content.length > 300
                              ? msg.content.slice(0, 300) + "..."
                              : msg.content}
                            {msg.tool_name && (
                              <div className="mt-1.5 pt-1.5 border-t border-fuchsia-100/30">
                                <span className="text-[10px] font-semibold text-fuchsia-500">
                                  Tool: {msg.tool_name}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Panel footer */}
            <div className="px-6 py-4 border-t border-pink-50 shrink-0">
              <Link
                href={`/admin/conversations/${selectedConv.id}`}
                className="zoey-btn px-4 py-2 text-xs flex items-center gap-1.5 w-full justify-center"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                View Full Conversation
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
