"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

interface LeadDetail {
  id: string;
  type: string;
  status: string;
  name: string;
  phone: string;
  email: string;
  from_address: string;
  to_address: string;
  property_type: string;
  moving_to: string;
  bedrooms: string;
  from_floor: string;
  to_bedrooms: string;
  to_floor: string;
  move_size: string;
  move_date: string;
  move_time: string;
  extras: string[];
  notes: string;
  topic: string;
  description: string;
  lead_source: string;
  lead_source_channel: string;
  http_referrer: string;
  page_url: string;
  referrer_page: string;
  entry_page: string;
  is_landing_page: boolean;
  session_id: string;
  admin_notes: string;
  estimated_value: number | null;
  actual_value: number | null;
  lost_reason: string | null;
  first_contacted_at: string | null;
  quoted_at: string | null;
  closed_at: string | null;
  created_at: string;
  updated_at: string;
}

const STATUS_OPTIONS = ["new", "contacted", "quoted", "won", "lost"];

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  contacted: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  quoted: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  won: "bg-green-500/20 text-green-400 border-green-500/30",
  lost: "bg-red-500/20 text-red-400 border-red-500/30",
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

const LOST_REASONS = [
  "Too expensive",
  "Chose competitor",
  "Cancelled move",
  "No response",
  "Other",
];

function InfoRow({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-neutral-800/50">
      <span className="text-neutral-500 text-sm sm:w-40 shrink-0">{label}</span>
      <span className="text-white text-sm">{value}</span>
    </div>
  );
}

function ResponseTimeBadge({ createdAt, firstContactedAt }: { createdAt: string; firstContactedAt: string | null }) {
  if (!firstContactedAt) {
    // Show time waiting if status is still "new"
    const hrs = (Date.now() - new Date(createdAt).getTime()) / 3600000;
    if (hrs < 4) return <span className="text-xs font-medium px-2 py-1 rounded bg-green-500/20 text-green-400">Waiting {Math.round(hrs * 10) / 10}h</span>;
    if (hrs < 24) return <span className="text-xs font-medium px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">Waiting {Math.round(hrs)}h</span>;
    return <span className="text-xs font-medium px-2 py-1 rounded bg-red-500/20 text-red-400">Waiting {Math.round(hrs)}h</span>;
  }

  const hrs = (new Date(firstContactedAt).getTime() - new Date(createdAt).getTime()) / 3600000;
  if (hrs < 4) return <span className="text-xs font-medium px-2 py-1 rounded bg-green-500/20 text-green-400">Responded in {Math.round(hrs * 10) / 10}h</span>;
  if (hrs < 24) return <span className="text-xs font-medium px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">Responded in {Math.round(hrs)}h</span>;
  return <span className="text-xs font-medium px-2 py-1 rounded bg-red-500/20 text-red-400">Responded in {Math.round(hrs)}h</span>;
}

export default function LeadDetailPage() {
  const [lead, setLead] = useState<LeadDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [estimatedValue, setEstimatedValue] = useState("");
  const [actualValue, setActualValue] = useState("");
  const [lostReason, setLostReason] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();
  const params = useParams();

  const fetchLead = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/leads/${params.id}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (res.status === 404) {
        router.push("/admin/leads");
        return;
      }
      const data = await res.json();
      setLead(data);
      setStatus(data.status);
      setAdminNotes(data.admin_notes || "");
      setEstimatedValue(data.estimated_value ? String(data.estimated_value) : "");
      setActualValue(data.actual_value ? String(data.actual_value) : "");
      setLostReason(data.lost_reason || "");
    } catch (err) {
      console.error("Lead detail error:", err);
    } finally {
      setLoading(false);
    }
  }, [params.id, router]);

  useEffect(() => {
    fetchLead();
  }, [fetchLead]);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      const body: Record<string, unknown> = {
        status,
        admin_notes: adminNotes,
        estimated_value: estimatedValue ? parseInt(estimatedValue, 10) : null,
      };
      if (status === "won") {
        body.actual_value = actualValue ? parseInt(actualValue, 10) : null;
      }
      if (status === "lost") {
        body.lost_reason = lostReason || null;
      }

      const res = await fetch(`/api/admin/leads/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const updated = await res.json();
        setLead(updated);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch (err) {
      console.error("Save error:", err);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-yellow-400">Loading...</div>
      </div>
    );
  }

  if (!lead) return null;

  const fmtDate = (d: string | null) =>
    d
      ? new Date(d).toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-2xl font-extrabold text-yellow-400 tracking-tight">
              R2G
            </Link>
            <span className="text-neutral-600">/</span>
            <Link href="/admin/leads" className="text-sm text-neutral-400 hover:text-white transition">
              Leads
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-sm text-white">{lead.name || "Lead"}</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Lead header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">{lead.name || "Unknown"}</h1>
            <p className="text-neutral-500 text-sm mt-1">
              {new Date(lead.created_at).toLocaleDateString("en-AU", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full uppercase ${lead.type === "quote" ? "bg-yellow-500/20 text-yellow-400" : lead.type === "enquiry" ? "bg-blue-500/20 text-blue-400" : "bg-neutral-500/20 text-neutral-400"}`}
            >
              {lead.type}
            </span>
            {lead.lead_source_channel && (
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${CHANNEL_COLORS[lead.lead_source_channel] || "#525252"}20`,
                  color: CHANNEL_COLORS[lead.lead_source_channel] || "#525252",
                }}
              >
                {CHANNEL_LABELS[lead.lead_source_channel] || lead.lead_source_channel}
              </span>
            )}
            {lead.is_landing_page && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                LP
              </span>
            )}
            <ResponseTimeBadge createdAt={lead.created_at} firstContactedAt={lead.first_contacted_at} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Contact</h2>
              <InfoRow label="Name" value={lead.name} />
              <InfoRow label="Phone" value={lead.phone} />
              <InfoRow label="Email" value={lead.email} />
              {lead.phone && (
                <div className="flex gap-2 mt-4">
                  <a
                    href={`tel:${lead.phone}`}
                    className="inline-flex items-center gap-2 bg-yellow-400 text-neutral-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
                  >
                    Call
                  </a>
                  <a
                    href={`sms:${lead.phone}`}
                    className="inline-flex items-center gap-2 bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-700 transition"
                  >
                    SMS
                  </a>
                  {lead.email && (
                    <a
                      href={`mailto:${lead.email}`}
                      className="inline-flex items-center gap-2 bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-700 transition"
                    >
                      Email
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Move details (quote only) */}
            {lead.type !== "enquiry" && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-3">Move Details</h2>
                <InfoRow label="From" value={lead.from_address} />
                <InfoRow label="To" value={lead.to_address} />
                <InfoRow label="Property type" value={lead.property_type} />
                <InfoRow label="Bedrooms (from)" value={lead.bedrooms} />
                <InfoRow label="Floor (from)" value={lead.from_floor} />
                <InfoRow label="Moving to" value={lead.moving_to} />
                <InfoRow label="Bedrooms (to)" value={lead.to_bedrooms} />
                <InfoRow label="Floor (to)" value={lead.to_floor} />
                <InfoRow label="Move size" value={lead.move_size} />
                <InfoRow label="Date" value={lead.move_date} />
                <InfoRow label="Preferred time" value={lead.move_time} />
                <InfoRow
                  label="Extra services"
                  value={
                    lead.extras && lead.extras.length > 0
                      ? lead.extras.join(", ")
                      : null
                  }
                />
                <InfoRow label="Notes" value={lead.notes} />
              </div>
            )}

            {/* Enquiry details */}
            {lead.type === "enquiry" && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-white font-semibold mb-3">Enquiry Details</h2>
                <InfoRow label="Topic" value={lead.topic} />
                <div className="py-3">
                  <span className="text-neutral-500 text-sm block mb-2">
                    Message
                  </span>
                  <p className="text-white text-sm whitespace-pre-wrap">
                    {lead.description || "No message"}
                  </p>
                </div>
              </div>
            )}

            {/* Attribution */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Attribution</h2>
              <InfoRow label="Lead source" value={lead.lead_source} />
              <InfoRow label="Channel" value={lead.lead_source_channel ? (CHANNEL_LABELS[lead.lead_source_channel] || lead.lead_source_channel) : null} />
              <InfoRow label="Entry page" value={lead.entry_page} />
              <InfoRow label="HTTP referrer" value={lead.http_referrer} />
              <InfoRow label="Page URL" value={lead.page_url} />
              <InfoRow label="Internal referrer" value={lead.referrer_page} />
              <InfoRow label="Session ID" value={lead.session_id} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status & Notes */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-4">Manage</h2>

              <label className="block text-sm text-neutral-500 mb-2">Status</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {STATUS_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition ${
                      status === s
                        ? STATUS_COLORS[s]
                        : "border-neutral-700 text-neutral-500 hover:text-white hover:border-neutral-600"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Estimated Value - always shown */}
              <label className="block text-sm text-neutral-500 mb-2">
                Estimated Value ($)
              </label>
              <input
                type="number"
                value={estimatedValue}
                onChange={(e) => setEstimatedValue(e.target.value)}
                placeholder="e.g. 1500"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 transition mb-4"
              />

              {/* Actual Value - shown when won */}
              {status === "won" && (
                <>
                  <label className="block text-sm text-neutral-500 mb-2">
                    Actual Value ($)
                  </label>
                  <input
                    type="number"
                    value={actualValue}
                    onChange={(e) => setActualValue(e.target.value)}
                    placeholder="e.g. 1800"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 transition mb-4"
                  />
                </>
              )}

              {/* Lost Reason - shown when lost */}
              {status === "lost" && (
                <>
                  <label className="block text-sm text-neutral-500 mb-2">
                    Lost Reason
                  </label>
                  <select
                    value={lostReason}
                    onChange={(e) => setLostReason(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition mb-4"
                  >
                    <option value="">Select reason...</option>
                    {LOST_REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </>
              )}

              <label className="block text-sm text-neutral-500 mb-2">
                Admin Notes
              </label>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                rows={4}
                placeholder="Add internal notes about this lead..."
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 resize-none transition"
              />

              <button
                onClick={handleSave}
                disabled={saving}
                className="mt-4 w-full bg-yellow-400 text-neutral-900 font-semibold py-2.5 rounded-lg hover:bg-yellow-300 disabled:opacity-50 transition text-sm"
              >
                {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
              </button>
            </div>

            {/* Status Timeline */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-4">Timeline</h2>
              <div className="space-y-3">
                <TimelineItem
                  label="Created"
                  date={fmtDate(lead.created_at)}
                  active
                />
                <TimelineItem
                  label="First Contacted"
                  date={fmtDate(lead.first_contacted_at)}
                  active={!!lead.first_contacted_at}
                />
                <TimelineItem
                  label="Quoted"
                  date={fmtDate(lead.quoted_at)}
                  active={!!lead.quoted_at}
                />
                <TimelineItem
                  label="Closed"
                  date={fmtDate(lead.closed_at)}
                  active={!!lead.closed_at}
                  sub={lead.status === "won" ? "Won" : lead.status === "lost" ? `Lost${lead.lost_reason ? ` - ${lead.lost_reason}` : ""}` : undefined}
                />
              </div>
            </div>

            {/* Quick info */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-sm">
              <div className="flex justify-between text-neutral-500 py-2">
                <span>Created</span>
                <span className="text-neutral-300">
                  {new Date(lead.created_at).toLocaleDateString("en-AU")}
                </span>
              </div>
              <div className="flex justify-between text-neutral-500 py-2">
                <span>Updated</span>
                <span className="text-neutral-300">
                  {new Date(lead.updated_at).toLocaleDateString("en-AU")}
                </span>
              </div>
              <div className="flex justify-between text-neutral-500 py-2">
                <span>ID</span>
                <span className="text-neutral-300 font-mono text-xs">
                  {lead.id.slice(0, 8)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  label,
  date,
  active,
  sub,
}: {
  label: string;
  date: string | null;
  active: boolean;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${active ? "bg-yellow-400" : "bg-neutral-700"}`} />
      <div>
        <p className={`text-sm ${active ? "text-white font-medium" : "text-neutral-600"}`}>
          {label}
        </p>
        {date && (
          <p className="text-xs text-neutral-500">{date}</p>
        )}
        {sub && (
          <p className={`text-xs mt-0.5 ${sub === "Won" ? "text-green-400" : "text-red-400"}`}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
