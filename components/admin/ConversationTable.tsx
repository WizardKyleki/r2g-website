"use client";

import Link from "next/link";
import type { Conversation } from "@/lib/dashboard-types";

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ConversationTable({ conversations }: { conversations: Conversation[] }) {
  if (conversations.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-sm">No conversations yet</p>
        <p className="text-gray-300 text-xs mt-1">Conversations will appear here once users chat with Zoey</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-pink-50">
            <th className="text-left text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider py-3 px-4">Time</th>
            <th className="text-left text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider py-3 px-4">Status</th>
            <th className="text-left text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider py-3 px-4 hidden sm:table-cell">Messages</th>
            <th className="text-left text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider py-3 px-4">Lead</th>
            <th className="text-left text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider py-3 px-4 hidden md:table-cell">Contact</th>
            <th className="text-left text-xs font-semibold text-fuchsia-400/70 uppercase tracking-wider py-3 px-4 hidden lg:table-cell">Page</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-pink-50/50">
          {conversations.map((c) => (
            <tr key={c.id} className="hover:bg-pink-50/30 transition-colors">
              <td className="py-3 px-4">
                <Link href={`/admin/conversations/${c.id}`} className="group">
                  <p className="text-sm text-gray-900 group-hover:text-fuchsia-600 transition-colors font-medium">{timeAgo(c.created_at)}</p>
                  <p className="text-xs text-gray-400">{formatDate(c.created_at)}</p>
                </Link>
              </td>
              <td className="py-3 px-4">
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                  c.status === "active"
                    ? "bg-green-50 text-green-600 border border-green-100"
                    : "bg-gray-50 text-gray-400 border border-gray-100"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${c.status === "active" ? "bg-green-500" : "bg-gray-300"}`} />
                  {c.status === "active" ? "Active" : "Completed"}
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-500 hidden sm:table-cell">{c.message_count}</td>
              <td className="py-3 px-4">
                {c.has_lead ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold zoey-badge-lead px-2.5 py-1 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Lead
                  </span>
                ) : (
                  <span className="text-xs text-gray-300">&mdash;</span>
                )}
              </td>
              <td className="py-3 px-4 hidden md:table-cell">
                {c.lead_name || c.lead_phone ? (
                  <div>
                    {c.lead_name && <p className="text-sm text-gray-900 font-medium">{c.lead_name}</p>}
                    {c.lead_phone && <p className="text-xs text-gray-400">{c.lead_phone}</p>}
                  </div>
                ) : (
                  <span className="text-xs text-gray-300">&mdash;</span>
                )}
              </td>
              <td className="py-3 px-4 hidden lg:table-cell">
                <span className="text-xs text-gray-400 truncate max-w-[150px] block">
                  {c.page_url || "\u2014"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
