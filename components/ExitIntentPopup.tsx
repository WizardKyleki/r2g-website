"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import HeroQuoteWidget from "@/components/HeroQuoteWidget";

function isPaidTraffic() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return !!(params.get("gclid") || params.get("msclkid") || params.get("fbclid"));
}

export default function ExitIntentPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [fired, setFired] = useState(() => {
    if (typeof window !== "undefined") return !!sessionStorage.getItem("exitPopupShown");
    return false;
  });

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    // Don't show on quote page or if already fired this session
    if (pathname === "/quote") return;
    if (fired) return;

    // Don't show to paid traffic — Google penalises interstitials on ad landing pages
    if (isPaidTraffic()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when cursor exits through the top of the viewport
      if (e.clientY > 0) return;
      setOpen(true);
      setFired(true);
      sessionStorage.setItem("exitPopupShown", "1");
    };

    // Small delay so it doesn't fire immediately on page load
    const timer = setTimeout(() => {
      if (!fired) {
        document.addEventListener("mouseleave", handleMouseLeave);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname, fired]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      onClick={close}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A] border border-white/20 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-[#1A1A1A] rounded-t-2xl px-6 pt-5 pb-3 text-center border border-white/10 border-b-0">
          <p className="text-[#F5C400] text-xs font-semibold uppercase tracking-widest mb-1">
            Before you go!
          </p>
          <h2 className="text-white text-xl font-bold">
            Get a Free Moving Quote
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Takes less than 60 seconds
          </p>
        </div>

        {/* Quote widget */}
        <div className="rounded-b-2xl overflow-hidden border border-white/10 border-t-0">
          <HeroQuoteWidget />
        </div>
      </div>
    </div>
  );
}
