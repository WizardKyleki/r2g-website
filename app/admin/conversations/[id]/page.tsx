"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ConversationThread from "@/components/admin/ConversationThread";
import LeadCard from "@/components/admin/LeadCard";
import type { ConversationWithMessages } from "@/lib/dashboard-types";
import { useParams } from "next/navigation";

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
];

export default function ConversationDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [conversation, setConversation] = useState<ConversationWithMessages | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesSaved, setNotesSaved] = useState(false);
  const [tagInput, setTagInput] = useState("");

  // Takeover & reply
  const [takingOver, setTakingOver] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [sendingReply, setSendingReply] = useState(false);

  const fetchConversation = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/conversations/${id}`);
      if (!res.ok) return;
      const data = await res.json();
      setConversation(data);
      setNotes(data.admin_notes || "");
      setTags(data.tags || []);
    } catch {
      console.error("Failed to fetch conversation");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchConversation();
  }, [fetchConversation]);

  // Auto-refresh every 3s when takeover is active
  useEffect(() => {
    if (!conversation?.admin_takeover) return;
    const interval = setInterval(fetchConversation, 3000);
    return () => clearInterval(interval);
  }, [conversation?.admin_takeover, fetchConversation]);

  async function saveNotes() {
    setSavingNotes(true);
    setNotesSaved(false);
    try {
      const res = await fetch(`/api/admin/conversations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admin_notes: notes }),
      });
      if (res.ok) {
        setNotesSaved(true);
        setTimeout(() => setNotesSaved(false), 3000);
      }
    } catch { /* ignore */ }
    finally { setSavingNotes(false); }
  }

  async function toggleTag(tag: string) {
    const newTags = tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag];
    setTags(newTags);
    try {
      await fetch(`/api/admin/conversations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tags: newTags }),
      });
    } catch { /* ignore */ }
  }

  async function addCustomTag() {
    const tag = tagInput.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-");
    if (!tag || tags.includes(tag)) { setTagInput(""); return; }
    const newTags = [...tags, tag];
    setTags(newTags);
    setTagInput("");
    try {
      await fetch(`/api/admin/conversations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tags: newTags }),
      });
    } catch { /* ignore */ }
  }

  async function toggleTakeover() {
    if (!conversation) return;
    const newState = !conversation.admin_takeover;
    setTakingOver(true);
    try {
      const res = await fetch(`/api/admin/conversations/${id}/takeover`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: newState }),
      });
      if (res.ok) {
        setConversation((prev) =>
          prev ? { ...prev, admin_takeover: newState, admin_takeover_at: newState ? new Date().toISOString() : null } : null,
        );
      }
    } catch { /* ignore */ }
    finally { setTakingOver(false); }
  }

  async function sendReply() {
    if (!replyText.trim() || sendingReply) return;
    setSendingReply(true);
    try {
      const res = await fetch(`/api/admin/conversations/${id}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: replyText.trim() }),
      });
      if (res.ok) {
        setReplyText("");
        // Refresh conversation to show new message
        fetchConversation();
      }
    } catch { /* ignore */ }
    finally { setSendingReply(false); }
  }

  if (loading) {
    return (
      <>
        <AdminSidebar />
        <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
          <p className="text-gray-400 text-sm">Loading conversation...</p>
        </main>
      </>
    );
  }

  if (!conversation) {
    return (
      <>
        <AdminSidebar />
        <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
          <p className="text-gray-400 text-sm">Conversation not found</p>
        </main>
      </>
    );
  }

  const startTime = new Date(conversation.created_at).toLocaleString("en-AU", {
    timeZone: "Australia/Brisbane",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const duration = conversation.messages.length >= 2
    ? Math.round(
        (new Date(conversation.messages[conversation.messages.length - 1].created_at).getTime() -
          new Date(conversation.messages[0].created_at).getTime()) /
          60000,
      )
    : 0;

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/admin/conversations" className="text-fuchsia-400 hover:text-fuchsia-600 text-sm font-medium transition-colors">
            &larr; Conversations
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat thread */}
          <div className="lg:col-span-2">
            <div className="zoey-card overflow-hidden">
              <div className="px-5 py-4 border-b border-pink-50 flex items-center justify-between">
                <h1 className="text-lg font-bold text-gray-900">Conversation</h1>
                <div className="flex items-center gap-2">
                  {/* Takeover button */}
                  <button
                    onClick={toggleTakeover}
                    disabled={takingOver}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      conversation.admin_takeover
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                        : "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white hover:from-fuchsia-600 hover:to-violet-600"
                    } disabled:opacity-50`}
                  >
                    {takingOver ? "..." : conversation.admin_takeover ? "Release to Zoey" : "Take Over"}
                  </button>
                  {/* Rating display */}
                  {conversation.rating === 1 && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                      Positive
                    </span>
                  )}
                  {conversation.rating === -1 && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full border border-red-100">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                      </svg>
                      Negative
                    </span>
                  )}
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                    conversation.status === "active"
                      ? "bg-green-50 text-green-600 border border-green-100"
                      : "bg-gray-50 text-gray-400 border border-gray-100"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${conversation.status === "active" ? "bg-green-500" : "bg-gray-300"}`} />
                    {conversation.status === "active" ? "Active" : "Completed"}
                  </span>
                </div>
              </div>
              <div className="px-5 max-h-[60vh] overflow-y-auto">
                <ConversationThread messages={conversation.messages} />
              </div>

              {/* Admin reply area — when takeover is active */}
              {conversation.admin_takeover && (
                <div className="px-5 py-3 border-t border-pink-50">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-amber-600">You&apos;re responding to this customer</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendReply(); } }}
                      placeholder="Type your reply..."
                      rows={2}
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-100 resize-none transition-all"
                    />
                    <button
                      onClick={sendReply}
                      disabled={!replyText.trim() || sendingReply}
                      className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white text-sm font-semibold hover:from-fuchsia-600 hover:to-violet-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      {sendingReply ? "..." : "Send"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar info */}
          <div className="space-y-4">
            {/* Lead card */}
            <LeadCard conversation={conversation} />

            {/* Tags */}
            <div className="zoey-card p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {TAG_OPTIONS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                      tags.includes(tag)
                        ? "bg-gradient-to-r from-fuchsia-50 to-violet-50 text-fuchsia-700 border border-fuchsia-200 shadow-sm"
                        : "bg-gray-50 text-gray-400 border border-gray-100 hover:text-fuchsia-600 hover:border-fuchsia-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {/* Custom tag input */}
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

            {/* Admin Notes */}
            <div className="zoey-card p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900">Notes</h3>
                <div className="flex items-center gap-2">
                  {notesSaved && (
                    <span className="text-xs text-green-600">Saved ✓</span>
                  )}
                  <button
                    onClick={saveNotes}
                    disabled={savingNotes}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-200 hover:bg-fuchsia-100 disabled:opacity-30 transition-all"
                  >
                    {savingNotes ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add internal notes about this conversation..."
                rows={4}
                className="w-full bg-white/60 backdrop-blur-sm border border-pink-100/60 rounded-xl p-3 text-xs text-gray-700 leading-relaxed resize-y focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-100 placeholder:text-gray-300 transition-all"
              />
            </div>

            {/* Metadata */}
            <div className="zoey-card p-5 space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] text-fuchsia-400/70 uppercase tracking-wider font-semibold">Started</p>
                  <p className="text-sm text-gray-600">{startTime}</p>
                </div>
                <div>
                  <p className="text-[10px] text-fuchsia-400/70 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="text-sm text-gray-600">{duration > 0 ? `${duration} min` : "< 1 min"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-fuchsia-400/70 uppercase tracking-wider font-semibold">Messages</p>
                  <p className="text-sm text-gray-600">{conversation.message_count} total ({conversation.user_message_count} from user)</p>
                </div>
                {conversation.page_url && (
                  <div>
                    <p className="text-[10px] text-fuchsia-400/70 uppercase tracking-wider font-semibold">Page</p>
                    <p className="text-sm text-gray-600 break-all">{conversation.page_url}</p>
                  </div>
                )}
                {conversation.rating !== null && (
                  <div>
                    <p className="text-[10px] text-fuchsia-400/70 uppercase tracking-wider font-semibold">Customer Rating</p>
                    <p className="text-sm text-gray-600">
                      {conversation.rating === 1 ? "👍 Positive" : "👎 Negative"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
