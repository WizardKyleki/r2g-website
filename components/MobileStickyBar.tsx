"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_HREF } from "@/lib/constants";

export default function MobileStickyBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on quote page (has its own CTA)
  if (pathname === "/quote") return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-0 bg-[#1A1A1A] border-t border-white/10" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm transition-colors active:bg-white/10"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Us
        </a>
        <div className="w-px bg-white/10" />
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#F5C400] text-[#1A1A1A] font-bold text-sm transition-colors active:bg-[#d4a900]"
        >
          Get a Quote
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
