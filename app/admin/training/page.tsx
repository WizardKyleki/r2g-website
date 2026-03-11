"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

interface Section {
  key: string;
  label: string;
  description: string;
  value: string;
  isDefault: boolean;
  isCustom: boolean;
  id?: string; // UUID for custom sections
}

export default function TrainingPage() {
  const [builtInSections, setBuiltInSections] = useState<Section[]>([]);
  const [customSections, setCustomSections] = useState<Section[]>([]);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [activeIsCustom, setActiveIsCustom] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  // Add section modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [addingSection, setAddingSection] = useState(false);

  // Test chat
  const [showTestChat, setShowTestChat] = useState(false);
  const [testMessages, setTestMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [testInput, setTestInput] = useState("");
  const [testLoading, setTestLoading] = useState(false);
  const testEndRef = useRef<HTMLDivElement>(null);

  const fetchConfig = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/training");
      const data = await res.json();

      const built = (data.sections || []).map((s: Section) => ({
        ...s,
        isCustom: false,
      }));
      const custom = (data.customSections || []).map((s: Section) => ({
        ...s,
        isCustom: true,
      }));

      setBuiltInSections(built);
      setCustomSections(custom);
      setUpdatedAt(data.updatedAt || null);

      // Auto-select first section if none selected
      if (!activeKey && built.length > 0) {
        setActiveKey(built[0].key);
        setActiveIsCustom(false);
        setEditValue(built[0].value);
      }
    } catch {
      console.error("Failed to fetch training config");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const allSections = [...builtInSections, ...customSections];

  function selectSection(key: string, isCustom: boolean) {
    setActiveKey(key);
    setActiveIsCustom(isCustom);
    const list = isCustom ? customSections : builtInSections;
    const section = list.find((s) => s.key === key);
    if (section) setEditValue(section.value);
    setSaved(false);
  }

  const activeSection = activeIsCustom
    ? customSections.find((s) => s.key === activeKey)
    : builtInSections.find((s) => s.key === activeKey);

  const hasChanges = activeSection && editValue !== activeSection.value;

  // ── Save (built-in section) ──
  async function handleSaveBuiltIn() {
    if (!activeKey) return;
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/admin/training", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sections: [{ key: activeKey, value: editValue }],
        }),
      });
      if (!res.ok) throw new Error("Failed to save");

      setBuiltInSections((prev) =>
        prev.map((s) =>
          s.key === activeKey
            ? { ...s, value: editValue, isDefault: false }
            : s,
        ),
      );
      setSaved(true);
      setUpdatedAt(new Date().toISOString());
      setTimeout(() => setSaved(false), 3000);
    } catch {
      alert("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  // ── Save (custom section) ──
  async function handleSaveCustom() {
    if (!activeSection?.id) return;
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/admin/training/custom", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: activeSection.id, value: editValue }),
      });
      if (!res.ok) throw new Error("Failed to save");

      setCustomSections((prev) =>
        prev.map((s) =>
          s.key === activeKey ? { ...s, value: editValue } : s,
        ),
      );
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      alert("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleSave() {
    if (activeIsCustom) handleSaveCustom();
    else handleSaveBuiltIn();
  }

  // ── Reset built-in section to default ──
  async function handleReset() {
    if (!activeKey || activeIsCustom) return;
    if (
      !confirm(
        "Reset this section to the original default? Your custom changes will be lost.",
      )
    )
      return;

    setSaving(true);
    try {
      const res = await fetch("/api/admin/training", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sections: [{ key: activeKey, value: null }],
        }),
      });
      if (!res.ok) throw new Error("Failed to reset");

      await fetchConfig();
    } catch {
      alert("Failed to reset. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  // ── Add custom section ──
  async function handleAddSection() {
    if (!newLabel.trim()) return;
    setAddingSection(true);
    try {
      const res = await fetch("/api/admin/training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: newLabel,
          description: newDescription,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Failed to create section");
        return;
      }

      const data = await res.json();
      const newSection = data.section as Section;
      setCustomSections((prev) => [...prev, newSection]);
      setShowAddModal(false);
      setNewLabel("");
      setNewDescription("");

      // Select the new section
      selectSection(newSection.key, true);
    } catch {
      alert("Failed to create section. Please try again.");
    } finally {
      setAddingSection(false);
    }
  }

  // ── Delete custom section ──
  async function handleDeleteSection() {
    if (!activeSection?.id || !activeIsCustom) return;
    if (
      !confirm(
        `Delete "${activeSection.label}"? This cannot be undone.`,
      )
    )
      return;

    setSaving(true);
    try {
      const res = await fetch(
        `/api/admin/training?id=${activeSection.id}`,
        { method: "DELETE" },
      );
      if (!res.ok) throw new Error("Failed to delete");

      setCustomSections((prev) =>
        prev.filter((s) => s.id !== activeSection.id),
      );

      // Select first built-in section
      if (builtInSections.length > 0) {
        selectSection(builtInSections[0].key, false);
      } else {
        setActiveKey(null);
      }
    } catch {
      alert("Failed to delete section. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">AI Training</h1>
          <p className="text-sm mt-1 zoey-gradient-text font-medium">
            View and edit Zoey&apos;s knowledge, personality, and rules
          </p>
        </div>

        {/* Warning banner */}
        <div className="zoey-card bg-gradient-to-r from-pink-50/60 via-fuchsia-50/40 to-violet-50/30 px-4 py-3 mb-6 flex items-start gap-3">
          <svg
            className="w-4 h-4 text-fuchsia-500 mt-0.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <p className="text-xs text-fuchsia-700 font-medium">
              Changes take effect immediately for all new conversations
            </p>
            {updatedAt && (
              <p className="text-xs text-gray-400 mt-0.5">
                Last updated:{" "}
                {new Date(updatedAt).toLocaleString("en-AU", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-sm">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Section nav */}
            <div className="w-full lg:w-56 shrink-0 space-y-4">
              {/* Built-in sections */}
              <div className="zoey-card overflow-hidden">
                <div className="px-4 py-2 border-b border-pink-50/50">
                  <p className="text-[10px] text-fuchsia-400/70 font-semibold uppercase tracking-wider">
                    Core Sections
                  </p>
                </div>
                {builtInSections.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => selectSection(section.key, false)}
                    className={`w-full text-left px-4 py-3 border-b border-pink-50/50 last:border-b-0 transition-all ${
                      activeKey === section.key && !activeIsCustom
                        ? "bg-gradient-to-r from-pink-50 via-fuchsia-50 to-violet-50 text-gray-900"
                        : "text-gray-500 hover:text-fuchsia-600 hover:bg-pink-50/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {section.label}
                      </span>
                      {!section.isDefault && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"
                          title="Custom override"
                        />
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                      {section.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Custom sections */}
              <div className="zoey-card overflow-hidden">
                <div className="px-4 py-2 border-b border-pink-50/50 flex items-center justify-between">
                  <p className="text-[10px] text-fuchsia-400/70 font-semibold uppercase tracking-wider">
                    Custom Sections
                  </p>
                  <span className="text-[10px] text-gray-400">
                    {customSections.length}
                  </span>
                </div>

                {customSections.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => selectSection(section.key, true)}
                    className={`w-full text-left px-4 py-3 border-b border-pink-50/50 last:border-b-0 transition-all ${
                      activeKey === section.key && activeIsCustom
                        ? "bg-gradient-to-r from-pink-50 via-fuchsia-50 to-violet-50 text-gray-900"
                        : "text-gray-500 hover:text-fuchsia-600 hover:bg-pink-50/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {section.label}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-violet-500"
                        title="Custom section"
                      />
                    </div>
                    {section.description && (
                      <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                        {section.description}
                      </p>
                    )}
                  </button>
                ))}

                {customSections.length === 0 && (
                  <div className="px-4 py-3 text-xs text-gray-400">
                    No custom sections yet
                  </div>
                )}

                {/* Add section button */}
                <button
                  onClick={() => setShowAddModal(true)}
                  className="w-full px-4 py-3 text-left text-xs font-semibold text-fuchsia-500 hover:text-fuchsia-700 hover:bg-pink-50/30 transition-all flex items-center gap-2 border-t border-pink-50/50"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add Section
                </button>
              </div>
            </div>

            {/* Editor */}
            <div className="flex-1 min-w-0">
              {activeSection ? (
                <div className="zoey-card-strong overflow-hidden">
                  {/* Section header */}
                  <div className="px-5 py-4 border-b border-pink-50 flex items-start justify-between">
                    <div>
                      <h2 className="text-base font-semibold text-gray-900">
                        {activeSection.label}
                      </h2>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {activeSection.description || "Custom section"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {activeIsCustom ? (
                        <span className="text-xs font-semibold text-violet-600 bg-gradient-to-r from-violet-50 to-fuchsia-50 px-2.5 py-1 rounded-lg border border-violet-200/60 shadow-[0_1px_4px_rgba(139,92,246,0.1)]">
                          Custom
                        </span>
                      ) : activeSection.isDefault ? (
                        <span className="text-xs text-gray-400 bg-gray-50/80 px-2.5 py-1 rounded-lg border border-gray-100 font-medium">
                          Default
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-fuchsia-600 bg-gradient-to-r from-fuchsia-50 to-violet-50 px-2.5 py-1 rounded-lg border border-fuchsia-200/60 shadow-[0_1px_4px_rgba(217,70,239,0.1)]">
                          Customised
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="p-5">
                    <textarea
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      rows={20}
                      spellCheck={false}
                      className="w-full bg-white/60 backdrop-blur-sm border border-pink-100/60 rounded-xl p-4 text-sm text-gray-700 font-mono leading-relaxed resize-y focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-100 focus:shadow-[0_0_0_4px_rgba(236,72,153,0.06)] placeholder:text-gray-300 transition-all"
                      placeholder={
                        activeIsCustom
                          ? "Write the content for this custom section. This will be appended to Zoey's prompt..."
                          : activeSection.key === "custom_instructions"
                            ? "Add custom instructions here (e.g., seasonal promotions, temporary rules, new services)..."
                            : "Enter content for this section..."
                      }
                    />

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-300">
                        {editValue.length.toLocaleString()} chars ·{" "}
                        {editValue
                          .split(/\s+/)
                          .filter(Boolean)
                          .length.toLocaleString()}{" "}
                        words
                      </span>
                      {hasChanges && (
                        <span className="text-xs text-fuchsia-500">
                          Unsaved changes
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="px-5 py-4 border-t border-pink-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {activeIsCustom ? (
                        <button
                          onClick={handleDeleteSection}
                          disabled={saving}
                          className="px-4 py-2 text-xs font-medium rounded-lg bg-red-50/80 border border-red-100 text-red-500 hover:text-red-700 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          Delete Section
                        </button>
                      ) : (
                        <button
                          onClick={handleReset}
                          disabled={saving || activeSection.isDefault}
                          className="px-4 py-2 text-xs font-medium rounded-lg bg-white/60 backdrop-blur-sm border border-pink-100/60 text-gray-500 hover:text-fuchsia-600 hover:border-fuchsia-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          Reset to Default
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {saved && (
                        <span className="text-xs text-green-600 flex items-center gap-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Saved
                        </span>
                      )}
                      <button
                        onClick={handleSave}
                        disabled={saving || !hasChanges}
                        className="zoey-btn px-5 py-2 text-xs disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {saving ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="zoey-card p-12 text-center text-gray-400">
                  Select a section from the left to start editing
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── Test Chat Panel ──────────────────────────────────────────── */}
        {showTestChat && (
          <div className="fixed bottom-4 right-4 w-full max-w-sm z-[80] flex flex-col bg-white/95 backdrop-blur-xl border border-pink-100/60 rounded-2xl shadow-[0_8px_40px_rgba(190,60,150,0.12)] overflow-hidden" style={{ height: "500px" }}>
            {/* Header */}
            <div className="px-4 py-3 border-b border-pink-50 bg-gradient-to-r from-fuchsia-50 to-violet-50 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-gray-900">Test Zoey</span>
                <span className="text-[10px] text-fuchsia-600 bg-fuchsia-100 px-1.5 py-0.5 rounded-full font-medium">sandbox</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => { setTestMessages([]); setTestInput(""); }}
                  className="text-xs text-gray-400 hover:text-fuchsia-600 transition-colors px-2 py-1"
                  title="Clear chat"
                >
                  Clear
                </button>
                <button
                  onClick={() => setShowTestChat(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-fuchsia-600 hover:bg-fuchsia-50 transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {testMessages.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-xs text-gray-400 mb-1">Send a message to test Zoey&apos;s responses</p>
                  <p className="text-[11px] text-gray-300">Uses your current training config (no data saved)</p>
                </div>
              )}
              {testMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white rounded-br-md"
                      : "bg-gray-50 text-gray-700 border border-gray-100 rounded-bl-md"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {testLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={testEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-pink-50 shrink-0">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!testInput.trim() || testLoading) return;
                  const userMsg = testInput.trim();
                  setTestInput("");
                  const newMsgs = [...testMessages, { role: "user" as const, content: userMsg }];
                  setTestMessages(newMsgs);
                  setTestLoading(true);
                  setTimeout(() => testEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
                  try {
                    const res = await fetch("/api/admin/test-chat", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ messages: newMsgs.map((m) => ({ role: m.role, content: m.content })) }),
                    });
                    const data = await res.json();
                    setTestMessages([...newMsgs, { role: "assistant", content: data.reply || data.error || "No response" }]);
                    setTimeout(() => testEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
                  } catch {
                    setTestMessages([...newMsgs, { role: "assistant", content: "Error: Failed to reach test endpoint" }]);
                  } finally {
                    setTestLoading(false);
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={testInput}
                  onChange={(e) => setTestInput(e.target.value)}
                  placeholder="Type a test message..."
                  className="zoey-input flex-1 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400"
                  disabled={testLoading}
                />
                <button
                  type="submit"
                  disabled={testLoading || !testInput.trim()}
                  className="zoey-btn px-3 py-2 text-xs disabled:opacity-40 shrink-0"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Test Zoey FAB */}
        {!showTestChat && (
          <button
            onClick={() => setShowTestChat(true)}
            className="fixed bottom-6 right-6 z-[80] flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold text-sm shadow-[0_4px_20px_rgba(217,70,239,0.3)] hover:shadow-[0_6px_28px_rgba(217,70,239,0.4)] hover:scale-105 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Test Zoey
          </button>
        )}

        {/* Add Section Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fadeIn"
              onClick={() => setShowAddModal(false)}
            />

            {/* Modal */}
            <div className="relative zoey-card-strong p-6 w-full max-w-2xl animate-scaleIn">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Add Custom Section
              </h3>
              <p className="text-xs text-gray-400 mb-5">
                Create a new training section that will be appended to
                Zoey&apos;s prompt
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                    Section Name
                  </label>
                  <input
                    type="text"
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    placeholder="e.g. Holiday Promotions, Weekend Personality..."
                    autoFocus
                    className="zoey-input w-full px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                    Training Content{" "}
                    <span className="text-gray-400 font-normal">
                      (optional — you can also add this after creating)
                    </span>
                  </label>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    rows={8}
                    placeholder="Paste or type the training content for this section. For example: personality traits, product knowledge, specific instructions, FAQs, pricing rules..."
                    className="zoey-input w-full px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 resize-y leading-relaxed"
                  />
                  <p className="text-[10px] text-gray-400 mt-1.5">
                    This content will be appended to Zoey&apos;s system prompt. You can edit it anytime after creation.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setNewLabel("");
                    setNewDescription("");
                  }}
                  className="px-4 py-2 text-xs font-medium rounded-lg bg-white/60 border border-pink-100/60 text-gray-500 hover:text-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSection}
                  disabled={addingSection || !newLabel.trim()}
                  className="zoey-btn px-5 py-2 text-xs disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {addingSection ? "Creating..." : "Create Section"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
