"use client";

import { useEffect, useState, useCallback } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import type { KnowledgeBaseEntry } from "@/lib/dashboard-types";

const CATEGORIES = ["general", "pricing", "services", "policies", "locations", "other"];

export default function KnowledgeBasePage() {
  const [entries, setEntries] = useState<KnowledgeBaseEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [search, setSearch] = useState("");

  // Add/edit modal
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("general");
  const [saving, setSaving] = useState(false);

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/knowledge-base");
      const data = await res.json();
      setEntries(data.entries || []);
    } catch {
      console.error("Failed to fetch knowledge base");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  function openAdd() {
    setEditId(null);
    setQuestion("");
    setAnswer("");
    setCategory("general");
    setShowModal(true);
  }

  function openEdit(entry: KnowledgeBaseEntry) {
    setEditId(entry.id);
    setQuestion(entry.question);
    setAnswer(entry.answer);
    setCategory(entry.category);
    setShowModal(true);
  }

  async function handleSave() {
    if (!question.trim() || !answer.trim()) return;
    setSaving(true);
    try {
      if (editId) {
        await fetch("/api/admin/knowledge-base", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editId, question, answer, category }),
        });
      } else {
        await fetch("/api/admin/knowledge-base", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, answer, category }),
        });
      }
      setShowModal(false);
      await fetchEntries();
    } catch {
      alert("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleToggle(entry: KnowledgeBaseEntry) {
    try {
      await fetch("/api/admin/knowledge-base", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: entry.id, enabled: !entry.enabled }),
      });
      setEntries((prev) =>
        prev.map((e) => (e.id === entry.id ? { ...e, enabled: !e.enabled } : e)),
      );
    } catch { /* ignore */ }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this FAQ entry?")) return;
    try {
      await fetch(`/api/admin/knowledge-base?id=${id}`, { method: "DELETE" });
      setEntries((prev) => prev.filter((e) => e.id !== id));
      if (activeId === id) setActiveId(null);
    } catch { /* ignore */ }
  }

  const filtered = entries.filter((e) => {
    if (filterCategory !== "all" && e.category !== filterCategory) return false;
    if (search) {
      const s = search.toLowerCase();
      return e.question.toLowerCase().includes(s) || e.answer.toLowerCase().includes(s);
    }
    return true;
  });

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
            <p className="text-sm mt-1 zoey-gradient-text font-medium">
              Structured FAQ pairs that Zoey uses for consistent answers
            </p>
          </div>
          <button
            onClick={openAdd}
            className="zoey-btn px-4 py-2 text-xs flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add FAQ
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="zoey-card-strong p-4">
            <p className="text-xs text-fuchsia-400/70 font-semibold mb-1">Total FAQs</p>
            <p className="text-2xl font-bold text-gray-900">{entries.length}</p>
          </div>
          <div className="zoey-card-strong p-4">
            <p className="text-xs text-fuchsia-400/70 font-semibold mb-1">Active</p>
            <p className="text-2xl font-bold text-emerald-500">{entries.filter((e) => e.enabled).length}</p>
          </div>
          <div className="zoey-card-strong p-4">
            <p className="text-xs text-fuchsia-400/70 font-semibold mb-1">Categories</p>
            <p className="text-2xl font-bold zoey-gradient-text">
              {new Set(entries.map((e) => e.category)).size}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-6">
          <div className="flex flex-wrap items-center bg-white/70 backdrop-blur-sm border border-pink-100/60 rounded-xl p-1 shadow-[0_1px_4px_rgba(236,72,153,0.06)]">
            <button
              onClick={() => setFilterCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === "all"
                  ? "bg-gradient-to-r from-pink-50 to-fuchsia-50 text-fuchsia-700 shadow-sm"
                  : "text-gray-400 hover:text-fuchsia-600"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  filterCategory === cat
                    ? "bg-gradient-to-r from-pink-50 to-fuchsia-50 text-fuchsia-700 shadow-sm"
                    : "text-gray-400 hover:text-fuchsia-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative flex-1 sm:max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="zoey-input w-full pl-9 pr-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="zoey-card overflow-hidden">
          {loading ? (
            <div className="px-5 py-12 text-center text-gray-400 text-sm">Loading...</div>
          ) : filtered.length === 0 ? (
            <div className="px-5 py-12 text-center text-gray-400 text-sm">
              {entries.length === 0 ? "No FAQs yet — add your first one!" : "No FAQs match your filter"}
            </div>
          ) : (
            <div className="divide-y divide-pink-50/50">
              {filtered.map((entry) => (
                <div key={entry.id}>
                  <div
                    className={`flex items-center gap-4 px-5 py-4 cursor-pointer transition-all hover:bg-pink-50/30 ${
                      activeId === entry.id ? "bg-gradient-to-r from-fuchsia-50/40 to-violet-50/20" : ""
                    }`}
                    onClick={() => setActiveId(activeId === entry.id ? null : entry.id)}
                  >
                    {/* Toggle */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handleToggle(entry); }}
                      className={`w-8 h-5 rounded-full transition-all relative shrink-0 ${
                        entry.enabled ? "bg-gradient-to-r from-fuchsia-400 to-pink-400" : "bg-gray-200"
                      }`}
                    >
                      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${
                        entry.enabled ? "left-3.5" : "left-0.5"
                      }`} />
                    </button>

                    {/* Question */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${entry.enabled ? "text-gray-900" : "text-gray-400 line-through"}`}>
                        {entry.question}
                      </p>
                    </div>

                    {/* Category badge */}
                    <span className="text-[10px] font-medium capitalize px-2 py-0.5 rounded-full bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100 shrink-0">
                      {entry.category}
                    </span>

                    {/* Expand arrow */}
                    <svg
                      className={`w-3.5 h-3.5 text-gray-300 transition-transform shrink-0 ${activeId === entry.id ? "rotate-90 text-fuchsia-400" : ""}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>

                  {/* Expanded answer */}
                  {activeId === entry.id && (
                    <div className="px-5 pb-4 pl-16">
                      <div className="bg-gradient-to-r from-fuchsia-50/40 to-violet-50/30 rounded-xl p-4 border border-fuchsia-100/40">
                        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{entry.answer}</p>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-fuchsia-100/40">
                          <button
                            onClick={() => openEdit(entry)}
                            className="text-xs font-medium text-fuchsia-600 hover:text-fuchsia-700 transition-colors"
                          >
                            Edit
                          </button>
                          <span className="text-gray-200">|</span>
                          <button
                            onClick={() => handleDelete(entry.id)}
                            className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <div className="relative zoey-card-strong p-6 w-full max-w-2xl animate-scaleIn">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {editId ? "Edit FAQ Entry" : "Add FAQ Entry"}
              </h3>
              <p className="text-xs text-gray-400 mb-5">
                FAQ entries help Zoey give consistent, accurate answers
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Question</label>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder='e.g. "What are your payment terms?"'
                    autoFocus
                    className="zoey-input w-full px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Answer</label>
                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    rows={6}
                    placeholder="The answer Zoey should give for this question..."
                    className="zoey-input w-full px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 resize-y leading-relaxed"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="zoey-input w-full px-4 py-2.5 text-sm text-gray-900"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-xs font-medium rounded-lg bg-white/60 border border-pink-100/60 text-gray-500 hover:text-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving || !question.trim() || !answer.trim()}
                  className="zoey-btn px-5 py-2 text-xs disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {saving ? "Saving..." : editId ? "Save Changes" : "Add Entry"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
