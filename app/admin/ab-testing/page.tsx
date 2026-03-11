"use client";

import { useEffect, useState, useCallback } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import type { ABTest } from "@/lib/dashboard-types";

const SECTION_OPTIONS = [
  { value: "personality", label: "Personality" },
  { value: "lead_flow", label: "Lead Qualification Flow" },
  { value: "pricing", label: "Pricing" },
  { value: "objections", label: "Objections & Sales" },
  { value: "custom_instructions", label: "Custom Instructions" },
];

export default function ABTestingPage() {
  const [tests, setTests] = useState<ABTest[]>([]);
  const [loading, setLoading] = useState(true);

  // Create modal
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [sectionKey, setSectionKey] = useState("personality");
  const [variantA, setVariantA] = useState("");
  const [variantB, setVariantB] = useState("");
  const [trafficSplit, setTrafficSplit] = useState(50);
  const [saving, setSaving] = useState(false);

  const fetchTests = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/ab-tests");
      const data = await res.json();
      setTests(data.tests || []);
    } catch {
      console.error("Failed to fetch A/B tests");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTests();
  }, [fetchTests]);

  async function handleCreate() {
    if (!name.trim() || !variantA.trim() || !variantB.trim()) return;
    setSaving(true);
    try {
      await fetch("/api/admin/ab-tests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, section_key: sectionKey, variant_a: variantA, variant_b: variantB, traffic_split: trafficSplit }),
      });
      setShowModal(false);
      setName("");
      setVariantA("");
      setVariantB("");
      await fetchTests();
    } catch {
      alert("Failed to create test.");
    } finally {
      setSaving(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const res = await fetch("/api/admin/ab-tests", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Failed to update");
        return;
      }
      await fetchTests();
    } catch { /* ignore */ }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this A/B test?")) return;
    try {
      await fetch(`/api/admin/ab-tests?id=${id}`, { method: "DELETE" });
      await fetchTests();
    } catch { /* ignore */ }
  }

  const runningTest = tests.find((t) => t.status === "running");

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">A/B Testing</h1>
            <p className="text-sm mt-1 zoey-gradient-text font-medium">
              Split test different prompt variations to optimize conversions
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="zoey-btn px-4 py-2 text-xs flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Test
          </button>
        </div>

        {/* Running test banner */}
        {runningTest && (
          <div className="zoey-card bg-gradient-to-r from-green-50/60 via-emerald-50/40 to-teal-50/30 px-5 py-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{runningTest.name}</p>
                <p className="text-xs text-gray-500">
                  Running since{" "}
                  {runningTest.started_at
                    ? new Date(runningTest.started_at).toLocaleDateString("en-AU", { dateStyle: "medium" })
                    : "—"}
                </p>
              </div>
            </div>
            <button
              onClick={() => updateStatus(runningTest.id, "completed")}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-50 border border-red-100 text-red-500 hover:text-red-700 hover:bg-red-100 transition-all"
            >
              Stop Test
            </button>
          </div>
        )}

        {/* Tests list */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-sm">Loading...</p>
          </div>
        ) : tests.length === 0 ? (
          <div className="zoey-card p-12 text-center">
            <p className="text-gray-400 text-sm mb-3">No A/B tests yet</p>
            <p className="text-xs text-gray-300">Create your first test to start optimizing Zoey&apos;s performance</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tests.map((test) => {
              const totalA = test.variant_a_conversations || 0;
              const totalB = test.variant_b_conversations || 0;
              const leadsA = test.variant_a_leads || 0;
              const leadsB = test.variant_b_leads || 0;
              const rateA = totalA > 0 ? Math.round((leadsA / totalA) * 100) : 0;
              const rateB = totalB > 0 ? Math.round((leadsB / totalB) * 100) : 0;

              return (
                <div key={test.id} className="zoey-card-strong overflow-hidden">
                  {/* Header */}
                  <div className="px-5 py-4 border-b border-pink-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-semibold text-gray-900">{test.name}</h3>
                      <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                        test.status === "running"
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : test.status === "completed"
                            ? "bg-gray-50 text-gray-400 border border-gray-100"
                            : "bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100"
                      }`}>
                        {test.status}
                      </span>
                      <span className="text-xs text-gray-400">
                        Section: {SECTION_OPTIONS.find((s) => s.value === test.section_key)?.label || test.section_key}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {test.status === "draft" && (
                        <button
                          onClick={() => updateStatus(test.id, "running")}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-green-50 border border-green-100 text-green-600 hover:bg-green-100 transition-all"
                        >
                          Start
                        </button>
                      )}
                      {test.status === "running" && (
                        <button
                          onClick={() => updateStatus(test.id, "completed")}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-50 border border-red-100 text-red-500 hover:bg-red-100 transition-all"
                        >
                          Stop
                        </button>
                      )}
                      {test.status === "completed" && (
                        <button
                          onClick={() => updateStatus(test.id, "draft")}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-50 border border-gray-100 text-gray-500 hover:bg-gray-100 transition-all"
                        >
                          Reset
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(test.id)}
                        className="px-2 py-1.5 text-xs text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:divide-x divide-y sm:divide-y-0 divide-pink-50">
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-fuchsia-400 to-pink-400" />
                        <span className="text-xs font-semibold text-gray-900">Variant A</span>
                        <span className="text-xs text-gray-400">{test.traffic_split}% traffic</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase">Convos</p>
                          <p className="text-lg font-bold text-gray-900">{totalA}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase">Leads</p>
                          <p className="text-lg font-bold text-emerald-500">{leadsA}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase">Rate</p>
                          <p className="text-lg font-bold zoey-gradient-text">{rateA}%</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">{test.variant_a.slice(0, 150)}...</p>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-violet-400 to-indigo-400" />
                        <span className="text-xs font-semibold text-gray-900">Variant B</span>
                        <span className="text-xs text-gray-400">{100 - test.traffic_split}% traffic</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase">Convos</p>
                          <p className="text-lg font-bold text-gray-900">{totalB}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase">Leads</p>
                          <p className="text-lg font-bold text-emerald-500">{leadsB}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase">Rate</p>
                          <p className="text-lg font-bold zoey-gradient-text">{rateB}%</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">{test.variant_b.slice(0, 150)}...</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Create Modal */}
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <div className="relative zoey-card-strong p-6 w-full max-w-3xl animate-scaleIn max-h-[85vh] overflow-y-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Create A/B Test</h3>
              <p className="text-xs text-gray-400 mb-5">
                Test two different prompt variations to see which converts better
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Test Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Friendly vs Professional Tone"
                      autoFocus
                      className="zoey-input w-full px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Section to Test</label>
                    <select
                      value={sectionKey}
                      onChange={(e) => setSectionKey(e.target.value)}
                      className="zoey-input w-full px-4 py-2.5 text-sm text-gray-900"
                    >
                      {SECTION_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                    Traffic Split: <span className="text-fuchsia-600">{trafficSplit}% A</span> / <span className="text-violet-600">{100 - trafficSplit}% B</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={90}
                    step={10}
                    value={trafficSplit}
                    onChange={(e) => setTrafficSplit(Number(e.target.value))}
                    className="w-full accent-fuchsia-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-fuchsia-400 to-pink-400" />
                      Variant A
                    </label>
                    <textarea
                      value={variantA}
                      onChange={(e) => setVariantA(e.target.value)}
                      rows={8}
                      placeholder="Paste the prompt content for variant A..."
                      className="zoey-input w-full px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 resize-y leading-relaxed font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-violet-400 to-indigo-400" />
                      Variant B
                    </label>
                    <textarea
                      value={variantB}
                      onChange={(e) => setVariantB(e.target.value)}
                      rows={8}
                      placeholder="Paste the prompt content for variant B..."
                      className="zoey-input w-full px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 resize-y leading-relaxed font-mono"
                    />
                  </div>
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
                  onClick={handleCreate}
                  disabled={saving || !name.trim() || !variantA.trim() || !variantB.trim()}
                  className="zoey-btn px-5 py-2 text-xs disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {saving ? "Creating..." : "Create Test"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
