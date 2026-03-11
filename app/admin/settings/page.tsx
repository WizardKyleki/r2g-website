"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

type Tab = "greetings" | "webhook" | "hours" | "digest";

const TABS: { value: Tab; label: string; icon: React.ReactNode }[] = [
  {
    value: "greetings",
    label: "Greetings",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    value: "webhook",
    label: "Webhook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    value: "hours",
    label: "Business Hours",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "digest",
    label: "Email Digest",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const DEFAULT_AI_NAME = "Zoey";
const DEFAULT_AI_GENDER: "female" | "male" = "female";
const DEFAULT_GREETING = "Hey! I'm Zoey from R2G. Need help with a move or a quick quote? I'm here to help 😊";

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("greetings");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // AI Identity
  const [aiName, setAiName] = useState(DEFAULT_AI_NAME);
  const [aiGender, setAiGender] = useState<"female" | "male">(DEFAULT_AI_GENDER);
  const [greeting, setGreeting] = useState(DEFAULT_GREETING);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [hasCustomAvatar, setHasCustomAvatar] = useState(false);

  // Webhook
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookEnabled, setWebhookEnabled] = useState(false);

  // Business hours
  const [hoursStart, setHoursStart] = useState(9);
  const [hoursEnd, setHoursEnd] = useState(17);

  // Digest
  const [digestEmail, setDigestEmail] = useState("");
  const [digestEnabled, setDigestEnabled] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      const settings = data.settings || [];

      for (const s of settings) {
        const val = s.value as Record<string, unknown>;
        switch (s.key) {
          case "ai_identity":
            if (val.name) setAiName(val.name as string);
            if (val.gender) setAiGender(val.gender as "female" | "male");
            if (val.greeting) setGreeting(val.greeting as string);
            if (val.avatarBase64) {
              setAvatarPreview(val.avatarBase64 as string);
              setHasCustomAvatar(true);
            }
            break;
          case "webhook":
            setWebhookUrl((val.url as string) || "");
            setWebhookEnabled((val.enabled as boolean) || false);
            break;
          case "business_hours":
            setHoursStart((val.start as number) || 9);
            setHoursEnd((val.end as number) || 17);
            break;
          case "digest":
            setDigestEmail((val.email as string) || "");
            setDigestEnabled((val.enabled as boolean) || false);
            break;
        }
      }
    } catch {
      console.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  }

  async function saveSetting(key: string, value: Record<string, unknown>) {
    setSaving(true);
    setSaved(false);
    try {
      await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
      console.error("Failed to save setting");
    } finally {
      setSaving(false);
    }
  }

  function SaveButton({ onClick }: { onClick: () => void }) {
    return (
      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={onClick}
          disabled={saving}
          className="zoey-btn px-6 py-2.5 text-sm disabled:opacity-40"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
        {saved && (
          <span className="text-sm font-medium text-green-600 animate-pulse">Saved!</span>
        )}
      </div>
    );
  }

  async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a JPG, PNG, WebP, or GIF image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2 MB.");
      return;
    }

    // Instant local preview
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result as string);
    reader.readAsDataURL(file);

    // Upload to server
    setAvatarUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/settings/avatar", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Upload failed");
        return;
      }
      setHasCustomAvatar(true);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
      alert("Failed to upload avatar");
    } finally {
      setAvatarUploading(false);
    }
  }

  async function handleAvatarRemove() {
    setAvatarUploading(true);
    try {
      const res = await fetch("/api/admin/settings/avatar", { method: "DELETE" });
      if (res.ok) {
        setAvatarPreview(null);
        setHasCustomAvatar(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch {
      alert("Failed to remove avatar");
    } finally {
      setAvatarUploading(false);
    }
  }

  if (loading) {
    return (
      <>
        <AdminSidebar />
        <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
          <p className="text-gray-400 text-sm">Loading settings...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <AdminSidebar />
      <main className="md:ml-60 pt-16 md:pt-8 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm mt-1 zoey-gradient-text font-medium">
            Configure your AI assistant, webhooks, business hours, and email digest
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap items-center gap-1 bg-white/70 backdrop-blur-sm border border-pink-100/60 rounded-xl p-1 shadow-[0_1px_4px_rgba(236,72,153,0.06)] mb-8 w-full sm:w-fit">
          {TABS.map((t) => (
            <button
              key={t.value}
              onClick={() => { setTab(t.value); setSaved(false); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === t.value
                  ? "bg-gradient-to-r from-pink-50 to-fuchsia-50 text-fuchsia-700 shadow-sm"
                  : "text-gray-400 hover:text-fuchsia-600"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* ─── AI Identity Tab ──────────────────────────────────────────── */}
        {tab === "greetings" && (
          <div className="zoey-card-strong p-6 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-gray-900">AI Identity</h2>
              <span className="text-[10px] font-medium text-fuchsia-600 bg-fuchsia-50 px-2 py-0.5 rounded-full border border-fuchsia-100">
                live
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Configure your AI assistant&apos;s name, personality, and greeting message.
              Changes take effect immediately for new conversations.
            </p>

            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="pb-6 border-b border-gray-100">
                <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-4 block">
                  Profile Picture
                </label>
                <div className="flex items-center gap-5">
                  {/* Circular preview */}
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 to-violet-50 shrink-0">
                    {avatarPreview ? (
                      <img
                        src={avatarPreview}
                        alt="Avatar preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="/images/zoey-avatar.jpg"
                        alt="Default avatar"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {avatarUploading && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>

                  {/* Upload + Remove buttons */}
                  <div className="flex flex-col gap-2">
                    <label className="zoey-btn px-4 py-2 text-xs cursor-pointer text-center inline-block">
                      {avatarUploading ? "Uploading..." : "Upload Photo"}
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleAvatarUpload}
                        className="sr-only"
                        disabled={avatarUploading}
                      />
                    </label>
                    {hasCustomAvatar && (
                      <button
                        onClick={handleAvatarRemove}
                        disabled={avatarUploading}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors disabled:opacity-40"
                      >
                        Remove photo
                      </button>
                    )}
                    <p className="text-[11px] text-gray-400">
                      JPG, PNG, WebP, or GIF. Max 2 MB.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Name */}
              <div>
                <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-2 block">
                  AI Name
                </label>
                <input
                  type="text"
                  value={aiName}
                  onChange={(e) => setAiName(e.target.value.slice(0, 20))}
                  placeholder="Zoey"
                  className="zoey-input w-full sm:w-64 px-4 py-3 text-sm text-gray-900"
                  maxLength={20}
                />
                <p className="text-[11px] text-gray-400 mt-1.5">
                  The name your AI uses to introduce itself to customers
                </p>
              </div>

              {/* Gender */}
              <div>
                <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-3 block">
                  Gender
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      aiGender === "female"
                        ? "border-fuchsia-500 bg-fuchsia-50"
                        : "border-gray-200 bg-white group-hover:border-fuchsia-300"
                    }`}>
                      {aiGender === "female" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={aiGender === "female"}
                      onChange={() => setAiGender("female")}
                      className="sr-only"
                    />
                    <span className={`text-sm font-medium transition-colors ${
                      aiGender === "female" ? "text-fuchsia-700" : "text-gray-500 group-hover:text-gray-700"
                    }`}>
                      Female
                    </span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      aiGender === "male"
                        ? "border-fuchsia-500 bg-fuchsia-50"
                        : "border-gray-200 bg-white group-hover:border-fuchsia-300"
                    }`}>
                      {aiGender === "male" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={aiGender === "male"}
                      onChange={() => setAiGender("male")}
                      className="sr-only"
                    />
                    <span className={`text-sm font-medium transition-colors ${
                      aiGender === "male" ? "text-fuchsia-700" : "text-gray-500 group-hover:text-gray-700"
                    }`}>
                      Male
                    </span>
                  </label>
                </div>
                <p className="text-[11px] text-gray-400 mt-2">
                  Affects how the AI presents itself in conversations
                </p>
              </div>

              {/* Greeting Message */}
              <div>
                <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-2 block">
                  Greeting Message
                </label>
                <textarea
                  value={greeting}
                  onChange={(e) => setGreeting(e.target.value)}
                  rows={3}
                  className="zoey-input w-full px-4 py-3 text-sm text-gray-900 resize-y"
                  placeholder={DEFAULT_GREETING}
                />
                {greeting !== DEFAULT_GREETING && (
                  <button
                    onClick={() => setGreeting(DEFAULT_GREETING)}
                    className="text-[11px] text-gray-400 hover:text-fuchsia-500 mt-1 transition-colors"
                  >
                    Reset to default
                  </button>
                )}
                <p className="text-[11px] text-gray-400 mt-1.5">
                  The first message shown when a visitor opens the chat
                </p>
              </div>

              {/* Preview */}
              <div className="bg-gradient-to-br from-fuchsia-50/50 via-white to-violet-50/30 border border-fuchsia-100/50 rounded-xl p-5">
                <p className="text-xs font-semibold text-fuchsia-600 mb-3">Preview</p>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <img
                      src={avatarPreview || "/images/zoey-avatar.jpg"}
                      alt={aiName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{aiName || "AI"}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{greeting || DEFAULT_GREETING}</p>
                  </div>
                </div>
              </div>
            </div>

            <SaveButton onClick={() => saveSetting("ai_identity", {
              name: aiName,
              gender: aiGender,
              greeting,
              ...(hasCustomAvatar && avatarPreview ? { avatarBase64: avatarPreview } : {}),
            })} />
          </div>
        )}

        {/* ─── Webhook Tab ───────────────────────────────────────────────── */}
        {tab === "webhook" && (
          <div className="zoey-card-strong p-6 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-gray-900">Webhook Notifications</h2>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                webhookEnabled ? "text-green-600 bg-green-50 border-green-100" : "text-gray-400 bg-gray-50 border-gray-100"
              }`}>
                {webhookEnabled ? "active" : "disabled"}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Receive a POST request with lead data whenever your AI captures a new lead.
              Works with Zapier, Make, n8n, or any custom endpoint.
            </p>

            <div className="space-y-5">
              {/* Enable toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setWebhookEnabled(!webhookEnabled)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    webhookEnabled ? "bg-gradient-to-r from-fuchsia-500 to-violet-500" : "bg-gray-200"
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    webhookEnabled ? "translate-x-5" : ""
                  }`} />
                </button>
                <span className="text-sm font-medium text-gray-700">Enable webhook notifications</span>
              </div>

              {/* URL input */}
              <div>
                <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-2 block">
                  Webhook URL
                </label>
                <input
                  type="url"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  className="zoey-input w-full px-4 py-3 text-sm text-gray-900"
                />
              </div>

              {/* Payload preview */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Payload Preview
                </label>
                <pre className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs text-gray-600 overflow-x-auto">
{`{
  "event": "lead_submitted",
  "timestamp": "2026-03-11T10:30:00Z",
  "data": {
    "conversationId": "abc-123",
    "name": "Sarah Smith",
    "phone": "0412 345 678",
    "email": "sarah@email.com",
    "moving_from": "Smithfield",
    "moving_to": "Edge Hill",
    "move_type": "local",
    "lead_score": 4,
    "tags": ["local", "urgent"]
  }
}`}
                </pre>
              </div>
            </div>

            <SaveButton onClick={() => saveSetting("webhook", { url: webhookUrl, enabled: webhookEnabled })} />
          </div>
        )}

        {/* ─── Business Hours Tab ────────────────────────────────────────── */}
        {tab === "hours" && (
          <div className="zoey-card-strong p-6 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-gray-900">Business Hours</h2>
              <span className="text-[10px] font-medium text-fuchsia-600 bg-fuchsia-50 px-2 py-0.5 rounded-full border border-fuchsia-100">
                auto
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Your AI automatically knows the current AEST time and adjusts responses accordingly.
              It&apos;ll let customers know when the office is open or suggest leaving details for a callback.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-2 block">
                    Office Opens
                  </label>
                  <select
                    value={hoursStart}
                    onChange={(e) => setHoursStart(parseInt(e.target.value))}
                    className="zoey-input w-full px-4 py-3 text-sm text-gray-900"
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i - 12}:00 PM`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-2 block">
                    Office Closes
                  </label>
                  <select
                    value={hoursEnd}
                    onChange={(e) => setHoursEnd(parseInt(e.target.value))}
                    className="zoey-input w-full px-4 py-3 text-sm text-gray-900"
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i - 12}:00 PM`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-violet-50/50 border border-violet-100/50 rounded-xl p-4">
                <p className="text-xs font-semibold text-violet-600 mb-2">How it works</p>
                <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>During business hours: Your AI tells customers the team is available to call now</li>
                  <li>After hours on weekdays: Your AI collects details and mentions callback next business day</li>
                  <li>Weekends: Your AI mentions weekend moves are available but office is closed for calls</li>
                  <li>All times are in AEST (Australia/Brisbane timezone)</li>
                </ul>
              </div>
            </div>

            <SaveButton onClick={() => saveSetting("business_hours", { start: hoursStart, end: hoursEnd, days: ["Mon", "Tue", "Wed", "Thu", "Fri"], timezone: "Australia/Brisbane" })} />
          </div>
        )}

        {/* ─── Email Digest Tab ──────────────────────────────────────────── */}
        {tab === "digest" && (
          <div className="zoey-card-strong p-6 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-gray-900">Weekly Email Digest</h2>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                digestEnabled ? "text-green-600 bg-green-50 border-green-100" : "text-gray-400 bg-gray-50 border-gray-100"
              }`}>
                {digestEnabled ? "active" : "disabled"}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Receive a weekly summary email every Monday at 8am AEST with conversation stats,
              top leads, and flagged conversations.
            </p>

            <div className="space-y-5">
              {/* Enable toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDigestEnabled(!digestEnabled)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    digestEnabled ? "bg-gradient-to-r from-fuchsia-500 to-violet-500" : "bg-gray-200"
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    digestEnabled ? "translate-x-5" : ""
                  }`} />
                </button>
                <span className="text-sm font-medium text-gray-700">Enable weekly digest</span>
              </div>

              {/* Email input */}
              <div>
                <label className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wider mb-2 block">
                  Recipient Email(s)
                </label>
                <input
                  type="text"
                  value={digestEmail}
                  onChange={(e) => setDigestEmail(e.target.value)}
                  placeholder="kyle@r2g.com.au, contact@r2g.com.au"
                  className="zoey-input w-full px-4 py-3 text-sm text-gray-900"
                />
                <p className="text-[11px] text-gray-400 mt-1.5">
                  Separate multiple emails with commas
                </p>
              </div>

              {/* Digest preview */}
              <div className="bg-gradient-to-br from-fuchsia-50/50 via-white to-violet-50/30 border border-fuchsia-100/50 rounded-xl p-5">
                <p className="text-xs font-semibold text-fuchsia-600 mb-3">What&apos;s included</p>
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-fuchsia-100 rounded-full flex items-center justify-center text-fuchsia-600 text-[10px]">1</span>
                    Weekly stats overview
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-fuchsia-100 rounded-full flex items-center justify-center text-fuchsia-600 text-[10px]">2</span>
                    Top leads with scores
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-fuchsia-100 rounded-full flex items-center justify-center text-fuchsia-600 text-[10px]">3</span>
                    Flagged conversations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-fuchsia-100 rounded-full flex items-center justify-center text-fuchsia-600 text-[10px]">4</span>
                    Customer satisfaction
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 mt-3">Delivered every Monday at 8:00 AM AEST</p>
              </div>
            </div>

            <SaveButton onClick={() => saveSetting("digest", { email: digestEmail, enabled: digestEnabled })} />
          </div>
        )}
      </main>
    </>
  );
}
