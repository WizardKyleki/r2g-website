"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import type { Conversation, Message } from "@/lib/dashboard-types";

// ── Helpers ──────────────────────────────────────────────────────────────────

const SENTIMENT_MAP: Record<string, { emoji: string; color: string }> = {
  positive: { emoji: "😊", color: "text-green-600" },
  neutral: { emoji: "😐", color: "text-gray-400" },
  negative: { emoji: "😞", color: "text-orange-500" },
  frustrated: { emoji: "😤", color: "text-red-500" },
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const secs = Math.floor(diff / 1000);
  if (secs < 60) return "Just now";
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function getDisplayName(conv: Conversation): string {
  if (conv.display_name) return conv.display_name;
  if (conv.lead_name) return conv.lead_name;
  return `Chat #${conv.id.slice(0, 6)}`;
}

function getInitials(name: string): string {
  if (name.startsWith("Chat #")) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function LiveConversationsPage() {
  // Active conversations list
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [stats, setStats] = useState({ totalAll: 0, totalActive: 0, totalLeads: 0, totalNeedsReview: 0 });
  const [loading, setLoading] = useState(true);

  // Selected conversation
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);

  // Admin reply
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);
  const [takingOver, setTakingOver] = useState(false);

  // Search
  const [search, setSearch] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const replyInputRef = useRef<HTMLTextAreaElement>(null);

  // ── Fetch active conversations ────────────────────────────────────────────

  const fetchConversations = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        view: "active",
        limit: "50",
      });
      if (search) params.set("search", search);

      const res = await fetch(`/api/admin/conversations?${params}`);
      const data = await res.json();
      setConversations(data.conversations || []);
      if (data.stats) setStats(data.stats);
    } catch {
      console.error("Failed to fetch conversations");
    } finally {
      setLoading(false);
    }
  }, [search]);

  // Initial fetch + polling every 5 seconds
  useEffect(() => {
    fetchConversations();
    const interval = setInterval(fetchConversations, 5000);
    return () => clearInterval(interval);
  }, [fetchConversations]);

  // ── Fetch messages for selected conversation ─────────────────────────────

  const fetchMessages = useCallback(async (convId: string) => {
    setMessagesLoading(true);
    try {
      const res = await fetch(`/api/admin/conversations/${convId}`);
      const data = await res.json();
      setMessages(data.messages || []);
      // Update selectedConv with full data
      if (data.id) {
        setSelectedConv(data);
      }
    } catch {
      setMessages([]);
    } finally {
      setMessagesLoading(false);
    }
  }, []);

  // When selected conversation changes, fetch its messages
  useEffect(() => {
    if (!selectedId) return;
    fetchMessages(selectedId);
  }, [selectedId, fetchMessages]);

  // Poll messages for the selected conversation every 3 seconds
  useEffect(() => {
    if (!selectedId) return;
    const interval = setInterval(() => fetchMessages(selectedId), 3000);
    return () => clearInterval(interval);
  }, [selectedId, fetchMessages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ── Select a conversation ─────────────────────────────────────────────────

  function selectConversation(conv: Conversation) {
    setSelectedId(conv.id);
    setSelectedConv(conv);
    setReplyText("");
  }

  // ── Takeover toggle ───────────────────────────────────────────────────────

  async function toggleTakeover() {
    if (!selectedId || !selectedConv) return;
    const newState = !selectedConv.admin_takeover;
    setTakingOver(true);

    try {
      const res = await fetch(`/api/admin/conversations/${selectedId}/takeover`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: newState }),
      });

      if (res.ok) {
        setSelectedConv((prev) =>
          prev ? { ...prev, admin_takeover: newState, admin_takeover_at: newState ? new Date().toISOString() : null } : null,
        );
        // Update in the list too
        setConversations((prev) =>
          prev.map((c) =>
            c.id === selectedId
              ? { ...c, admin_takeover: newState, admin_takeover_at: newState ? new Date().toISOString() : null }
              : c,
          ),
        );
        if (newState) {
          setTimeout(() => replyInputRef.current?.focus(), 100);
        }
      }
    } catch {
      console.error("Failed to toggle takeover");
    } finally {
      setTakingOver(false);
    }
  }

  // ── Send admin reply ──────────────────────────────────────────────────────

  async function sendReply() {
    if (!selectedId || !replyText.trim() || sending) return;
    setSending(true);

    // Optimistic: add message to UI immediately
    const optimisticMsg: Message = {
      id: `admin_${Date.now()}`,
      conversation_id: selectedId,
      role: "assistant",
      content: replyText.trim(),
      tool_name: null,
      tool_input: null,
      created_at: new Date().toISOString(),
      is_admin: true,
    };
    setMessages((prev) => [...prev, optimisticMsg]);
    setReplyText("");

    try {
      await fetch(`/api/admin/conversations/${selectedId}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: optimisticMsg.content }),
      });
    } catch {
      // Remove optimistic message on failure
      setMessages((prev) => prev.filter((m) => m.id !== optimisticMsg.id));
      setReplyText(optimisticMsg.content);
    } finally {
      setSending(false);
    }
  }

  function handleReplyKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendReply();
    }
  }

  // ── Filter conversations ──────────────────────────────────────────────────

  const filteredConversations = search
    ? conversations.filter((c) => {
        const name = getDisplayName(c).toLowerCase();
        const s = search.toLowerCase();
        return (
          name.includes(s) ||
          c.lead_phone?.toLowerCase().includes(s) ||
          c.lead_email?.toLowerCase().includes(s)
        );
      })
    : conversations;

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-0 flex flex-col" style={{ height: "100dvh" }}>
        {/* Top stats bar */}
        <div className="px-4 md:px-6 py-4 border-b border-pink-50 shrink-0 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Live Conversations</h1>
              <p className="text-xs zoey-gradient-text font-medium mt-0.5">
                Monitor and respond to active chats in real-time
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500 font-medium">Auto-refreshing</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-xs font-semibold text-emerald-700">{stats.totalActive} Active</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-fuchsia-50 border border-fuchsia-100">
              <span className="text-xs font-semibold text-fuchsia-700">{stats.totalLeads} Leads</span>
            </div>
            {stats.totalNeedsReview > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 border border-red-100">
                <span className="text-xs font-semibold text-red-600">⚠️ {stats.totalNeedsReview} Need Review</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-medium text-gray-500">{stats.totalAll} Total Chats</span>
            </div>
          </div>
        </div>

        {/* Split panel layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* ── Left Panel: Conversation List ────────────────────────────── */}
          <div className="w-full md:w-80 lg:w-96 border-r border-pink-50 flex flex-col shrink-0 bg-white/50">
            {/* Search */}
            <div className="px-3 py-3 border-b border-pink-50/50 shrink-0">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white/70 backdrop-blur-sm border border-pink-100/60 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-100 transition-all"
                />
              </div>
            </div>

            {/* Conversation cards */}
            <div className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="px-4 py-12 text-center text-gray-400 text-sm">Loading...</div>
              ) : filteredConversations.length === 0 ? (
                <div className="px-4 py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">No active conversations</p>
                  <p className="text-gray-300 text-xs mt-1">Conversations appear here when customers chat with Zoey</p>
                </div>
              ) : (
                filteredConversations.map((conv) => {
                  const name = getDisplayName(conv);
                  const initials = getInitials(name);
                  const isAnonymous = name.startsWith("Chat #");
                  const isSelected = selectedId === conv.id;
                  const isTakenOver = conv.admin_takeover;
                  const sentiment = SENTIMENT_MAP[conv.sentiment || "neutral"];

                  return (
                    <button
                      key={conv.id}
                      onClick={() => selectConversation(conv)}
                      className={`w-full text-left px-4 py-3 border-b border-pink-50/50 hover:bg-pink-50/30 transition-colors ${
                        isSelected
                          ? "bg-gradient-to-r from-fuchsia-50/50 to-violet-50/30 border-l-2 border-l-fuchsia-400"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Avatar with status dot */}
                        <div className="relative shrink-0">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                            isAnonymous
                              ? "bg-gray-100 text-gray-400"
                              : "bg-gradient-to-br from-fuchsia-100 to-violet-100 text-fuchsia-700"
                          }`}>
                            {initials}
                          </div>
                          <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                            isTakenOver ? "bg-amber-400" : "bg-green-400"
                          }`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-sm font-semibold truncate ${isAnonymous ? "text-gray-400" : "text-gray-900"}`}>
                              {name}
                            </span>
                            <span className="text-[10px] text-gray-400 whitespace-nowrap shrink-0">
                              {timeAgo(conv.updated_at)}
                            </span>
                          </div>

                          {/* Summary preview */}
                          <p className="text-xs text-gray-500 truncate mt-0.5">
                            {conv.summary || `${conv.message_count} messages`}
                          </p>

                          {/* Badges */}
                          <div className="flex items-center gap-1.5 mt-1.5">
                            {isTakenOver && (
                              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-600 border border-amber-200">
                                <span className="w-1 h-1 bg-amber-500 rounded-full" />
                                Taken Over
                              </span>
                            )}
                            {conv.has_lead && (
                              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                Lead
                              </span>
                            )}
                            {sentiment && conv.sentiment !== "neutral" && (
                              <span className={`text-xs ${sentiment.color}`}>{sentiment.emoji}</span>
                            )}
                            {conv.tags?.includes("needs-review") && (
                              <span className="text-[10px] text-red-500">⚠️</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* ── Right Panel: Conversation Thread ─────────────────────────── */}
          <div className="hidden md:flex flex-1 flex-col bg-[#f8f9fa]">
            {!selectedId ? (
              /* Empty state */
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-50 to-violet-50 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-fuchsia-400">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium text-sm">Select a conversation</p>
                  <p className="text-gray-400 text-xs mt-1">Click on an active chat to view and respond</p>
                </div>
              </div>
            ) : (
              <>
                {/* Thread header */}
                <div className="px-5 py-3 border-b border-pink-50 bg-white/90 backdrop-blur-sm shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        getDisplayName(selectedConv || {} as Conversation).startsWith("Chat #")
                          ? "bg-gray-100 text-gray-400"
                          : "bg-gradient-to-br from-fuchsia-100 to-violet-100 text-fuchsia-700"
                      }`}>
                        {getInitials(getDisplayName(selectedConv || {} as Conversation))}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h2 className="text-sm font-bold text-gray-900 truncate">
                            {getDisplayName(selectedConv || {} as Conversation)}
                          </h2>
                          {selectedConv?.admin_takeover && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-600 border border-amber-200">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                              You&apos;re responding
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-400 truncate">
                          {selectedConv?.page_url?.replace(/^https?:\/\/(www\.)?r2g\.com\.au/, "") || "/"}
                          {selectedConv?.lead_phone && ` · ${selectedConv.lead_phone}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Takeover / Release button */}
                      <button
                        onClick={toggleTakeover}
                        disabled={takingOver}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                          selectedConv?.admin_takeover
                            ? "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                            : "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white hover:from-fuchsia-600 hover:to-violet-600 shadow-sm"
                        } disabled:opacity-50`}
                      >
                        {takingOver ? (
                          "..."
                        ) : selectedConv?.admin_takeover ? (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 3 21 3 21 9" />
                              <polyline points="9 21 3 21 3 15" />
                              <line x1="21" y1="3" x2="14" y2="10" />
                              <line x1="3" y1="21" x2="10" y2="14" />
                            </svg>
                            Release to Zoey
                          </>
                        ) : (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            Take Over
                          </>
                        )}
                      </button>

                      {/* View details link */}
                      <Link
                        href={`/admin/conversations/${selectedId}`}
                        className="px-3 py-2 rounded-xl text-xs font-medium text-gray-500 hover:text-fuchsia-600 hover:bg-fuchsia-50 border border-gray-200 hover:border-fuchsia-200 transition-all"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Message thread */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                  {messagesLoading && messages.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-xs text-gray-400">Loading messages...</p>
                    </div>
                  ) : (
                    messages.map((msg) => {
                      const isUser = msg.role === "user";
                      const isAdmin = msg.is_admin;

                      return (
                        <div
                          key={msg.id}
                          className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}
                        >
                          {/* Avatar */}
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                            isUser
                              ? "bg-gray-200 text-gray-500"
                              : isAdmin
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gradient-to-br from-fuchsia-100 to-violet-100 text-fuchsia-700"
                          }`}>
                            {isUser ? "U" : isAdmin ? "Y" : "Z"}
                          </div>

                          {/* Message bubble */}
                          <div className={`max-w-[75%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                            isUser
                              ? "bg-gray-100 text-gray-800 border border-gray-200"
                              : isAdmin
                                ? "bg-blue-50 text-gray-800 border border-blue-200"
                                : "bg-white text-gray-700 border border-fuchsia-100/40 shadow-sm"
                          }`}>
                            {/* Admin label */}
                            {isAdmin && (
                              <p className="text-[10px] font-semibold text-blue-500 mb-1">You (Admin)</p>
                            )}
                            <p className="whitespace-pre-wrap">{msg.content}</p>
                            {msg.tool_name && (
                              <div className="mt-1.5 pt-1.5 border-t border-fuchsia-100/30">
                                <span className="text-[10px] font-semibold text-fuchsia-500">
                                  Tool: {msg.tool_name}
                                </span>
                              </div>
                            )}
                            <p className="text-[10px] text-gray-400 mt-1">
                              {new Date(msg.created_at).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Admin reply area — only when taken over */}
                {selectedConv?.admin_takeover && (
                  <div className="px-5 py-3 border-t border-pink-50 bg-white shrink-0">
                    <div className="flex items-end gap-2">
                      <textarea
                        ref={replyInputRef}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyDown={handleReplyKeyDown}
                        placeholder="Type your reply to the customer..."
                        rows={1}
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-100 resize-none min-h-[40px] max-h-[120px] transition-all"
                        style={{ height: "auto" }}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = "auto";
                          target.style.height = Math.min(target.scrollHeight, 120) + "px";
                        }}
                      />
                      <button
                        onClick={sendReply}
                        disabled={!replyText.trim() || sending}
                        className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white text-sm font-semibold hover:from-fuchsia-600 hover:to-violet-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Send
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1.5">
                      Press Enter to send · Shift+Enter for new line · Customer sees your reply in real-time
                    </p>
                  </div>
                )}

                {/* Not taken over hint */}
                {!selectedConv?.admin_takeover && (
                  <div className="px-5 py-3 border-t border-pink-50 bg-white/80 shrink-0">
                    <div className="flex items-center justify-center gap-2 py-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-fuchsia-400">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <p className="text-xs text-gray-400">
                        Zoey AI is handling this conversation · <button onClick={toggleTakeover} className="text-fuchsia-500 hover:text-fuchsia-600 font-semibold">Take over</button> to reply directly
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
