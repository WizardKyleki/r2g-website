"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Notification, NotificationType } from "@/lib/dashboard-types";

// ── Type Config (icon SVG + colors) ─────────────────────────────────────────

const TYPE_CONFIG: Record<
  NotificationType,
  { icon: React.ReactNode; color: string; bg: string }
> = {
  new_conversation: {
    color: "text-blue-600",
    bg: "bg-blue-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  new_message: {
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  new_lead: {
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  frustrated_customer: {
    color: "text-orange-600",
    bg: "bg-orange-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  negative_rating: {
    color: "text-red-600",
    bg: "bg-red-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
      </svg>
    ),
  },
};

// ── Relative time helper ────────────────────────────────────────────────────

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-AU", { day: "numeric", month: "short" });
}

// ── Sound chime via Web Audio API ───────────────────────────────────────────

function playChime() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const now = ctx.currentTime;

    // First tone
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, now);
    gain1.gain.setValueAtTime(0.15, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.3);

    // Second tone (higher)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1174.66, now + 0.15);
    gain2.gain.setValueAtTime(0.12, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.5);

    // Cleanup
    setTimeout(() => ctx.close(), 600);
  } catch {
    // Silently fail — audio might not be available
  }
}

// ── Component ───────────────────────────────────────────────────────────────

interface NotificationCenterProps {
  mobile?: boolean;
}

export default function NotificationCenter({ mobile }: NotificationCenterProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const prevUnreadRef = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const permissionRequested = useRef(false);

  // ── Fetch notifications ─────────────────────────────────────────────────

  const fetchNotifications = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/notifications?limit=30");
      if (!res.ok) return;
      const data = await res.json();
      setNotifications(data.notifications || []);
      const newUnread = data.unread_count || 0;

      // Play sound + browser notification if unread count increased
      if (newUnread > prevUnreadRef.current && prevUnreadRef.current >= 0) {
        playChime();

        // Browser notification (if tab is not focused)
        if (document.hidden && "Notification" in window && Notification.permission === "granted") {
          const latest = data.notifications?.[0];
          if (latest) {
            new Notification(latest.title, {
              body: latest.body,
              icon: "/favicon.ico",
              tag: `zoey-notif-${latest.id}`,
            });
          }
        }
      }

      prevUnreadRef.current = newUnread;
      setUnreadCount(newUnread);
    } catch {
      // Silently fail
    }
  }, []);

  // ── Request browser notification permission on first open ──────────────

  useEffect(() => {
    if (open && !permissionRequested.current && "Notification" in window && Notification.permission === "default") {
      permissionRequested.current = true;
      Notification.requestPermission();
    }
  }, [open]);

  // ── Poll every 10s ────────────────────────────────────────────────────

  useEffect(() => {
    // Initial fetch (don't play sound on first load)
    prevUnreadRef.current = -1;
    fetch("/api/admin/notifications?limit=30")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data) {
          setNotifications(data.notifications || []);
          setUnreadCount(data.unread_count || 0);
          prevUnreadRef.current = data.unread_count || 0;
        }
      })
      .catch(() => {});

    const interval = setInterval(fetchNotifications, 10000);
    return () => clearInterval(interval);
  }, [fetchNotifications]);

  // ── Click outside to close ────────────────────────────────────────────

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // ── Mark as read ──────────────────────────────────────────────────────

  async function markAsRead(id: string) {
    await fetch("/api/admin/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, is_read: true } : n));
    setUnreadCount((prev) => Math.max(0, prev - 1));
  }

  async function markAllRead() {
    await fetch("/api/admin/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markAllRead: true }),
    });
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
    setUnreadCount(0);
  }

  function handleNotificationClick(n: Notification) {
    if (!n.is_read) markAsRead(n.id);
    setOpen(false);
    router.push(`/admin/conversations/${n.conversation_id}`);
  }

  // ── Mobile bell button (top bar) ──────────────────────────────────────

  if (mobile) {
    return (
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setOpen((v) => !v)}
          className="w-9 h-9 flex items-center justify-center rounded-xl text-fuchsia-600 hover:bg-fuchsia-50 transition-all relative"
          aria-label="Notifications"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full px-1 shadow-sm">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </button>

        {open && (
          <div
            ref={panelRef}
            className="fixed left-3 right-3 top-14 bg-white rounded-2xl border border-pink-100/60 shadow-[0_8px_40px_rgba(168,85,247,0.12)] z-[60] animate-scaleIn overflow-hidden"
          >
            <PanelContent
              notifications={notifications}
              unreadCount={unreadCount}
              onMarkAllRead={markAllRead}
              onNotificationClick={handleNotificationClick}
            />
          </div>
        )}
      </div>
    );
  }

  // ── Desktop sidebar item ──────────────────────────────────────────────

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all w-full ${
          open
            ? "bg-gradient-to-r from-pink-50 via-fuchsia-50 to-violet-50 text-fuchsia-700 border border-fuchsia-200/60 shadow-[0_2px_8px_rgba(236,72,153,0.08)]"
            : "text-gray-500 hover:text-fuchsia-600 hover:bg-pink-50/50"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        Notifications
        {unreadCount > 0 && (
          <span className="ml-auto min-w-[22px] h-[22px] flex items-center justify-center text-[11px] font-bold text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full px-1.5 shadow-sm">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          ref={panelRef}
          className="absolute left-full bottom-0 ml-2 w-80 bg-white rounded-2xl border border-pink-100/60 shadow-[0_8px_40px_rgba(168,85,247,0.12)] z-[60] animate-scaleIn overflow-hidden"
        >
          <PanelContent
            notifications={notifications}
            unreadCount={unreadCount}
            onMarkAllRead={markAllRead}
            onNotificationClick={handleNotificationClick}
          />
        </div>
      )}
    </div>
  );
}

// ── Shared Panel Content ────────────────────────────────────────────────────

function PanelContent({
  notifications,
  unreadCount,
  onMarkAllRead,
  onNotificationClick,
}: {
  notifications: Notification[];
  unreadCount: number;
  onMarkAllRead: () => void;
  onNotificationClick: (n: Notification) => void;
}) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-pink-100/40">
        <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
        {unreadCount > 0 && (
          <button
            onClick={onMarkAllRead}
            className="text-xs text-fuchsia-600 hover:text-fuchsia-700 font-medium transition-colors"
          >
            Mark all read
          </button>
        )}
      </div>

      {/* List */}
      <div className="max-h-[420px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-fuchsia-300">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm text-gray-400">No notifications yet</p>
          </div>
        ) : (
          notifications.map((n) => {
            const config = TYPE_CONFIG[n.type] || TYPE_CONFIG.new_conversation;
            return (
              <button
                key={n.id}
                onClick={() => onNotificationClick(n)}
                className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-pink-50/50 border-b border-pink-50/80 last:border-0 ${
                  !n.is_read ? "bg-fuchsia-50/30" : ""
                }`}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${config.bg} ${config.color} flex items-center justify-center mt-0.5`}>
                  {config.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900 truncate">{n.title}</span>
                    {!n.is_read && (
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{n.body}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{timeAgo(n.created_at)}</p>
                </div>
              </button>
            );
          })
        )}
      </div>
    </>
  );
}
