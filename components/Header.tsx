"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_HREF, NAV_LINKS } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/gtag";

// Shorter display labels for the nav bar
const labelMap: Record<string, string> = {
  "Local Removalists":     "Local Moves",
  "Interstate Removalists":"Interstate",
  "Office Removalists":    "Office",
  "Blogs":                 "Blog",
  "Contact Us":            "Contact",
};

const visibleLinks = NAV_LINKS;

export default function Header() {
  const [scrolled, setScrolled]               = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [openDropdown, setOpenDropdown]       = useState<string | null>(null);
  const [openMobileDrop, setOpenMobileDrop]   = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change (sync with external navigation)
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobileDrop(null);
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (pathname === "/quote") return null;

  const logoAlt = pathname.startsWith("/removalists-brisbane")
    ? "R2G Transport & Storage — Brisbane Removalists"
    : "R2G Transport & Storage — Cairns Removalists";

  const isActive          = (href: string)                   => pathname === href;
  const isGroupActive     = (children: { href: string }[])  => children.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));
  const label             = (l: string)                      => labelMap[l] ?? l;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#1A1A1A] shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-[6px] xl:grid xl:grid-cols-[1fr_auto_1fr]">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/images/logo-r2g-white.png"
              alt={logoAlt}
              width={282}
              height={128}
              style={{ width: "auto", height: "56px" }}
              priority
            />
          </Link>

          {/* ── Desktop nav — centred via grid ── */}
          <nav ref={navRef} className="hidden xl:flex items-center gap-1">
            {visibleLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (closeTimeout.current) {
                      clearTimeout(closeTimeout.current);
                      closeTimeout.current = null;
                    }
                    setOpenDropdown(link.label);
                  }}
                  onMouseLeave={() => {
                    closeTimeout.current = setTimeout(() => {
                      setOpenDropdown(null);
                      closeTimeout.current = null;
                    }, 150);
                  }}
                >
                  {/* Trigger */}
                  <button
                    className={`relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold tracking-[0.04em] transition-colors ${
                      isGroupActive(link.children)
                        ? "text-[#F5C400]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {label(link.label)}
                    <svg
                      className={`w-3 h-3 opacity-50 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    {/* Active underline */}
                    {isGroupActive(link.children) && (
                      <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#F5C400]" />
                    )}
                  </button>

                  {/* Dropdown panel */}
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="w-60 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="py-1.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`flex items-center gap-3 px-5 py-3 text-sm transition-all ${
                                isActive(child.href)
                                  ? "bg-[#F5C400]/10 text-[#1A1A1A] font-semibold"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-[#1A1A1A]"
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                isActive(child.href) ? "bg-[#F5C400]" : "bg-gray-300"
                              }`} />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        {/* Yellow bottom accent */}
                        <div className="h-0.5 bg-[#F5C400]" />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-semibold tracking-[0.04em] transition-colors ${
                    isActive(link.href)
                      ? "text-[#F5C400]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label(link.label)}
                  {isActive(link.href) && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#F5C400]" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop CTA + Mobile hamburger (right column) ── */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden xl:flex items-center gap-5">
              {/* Phone */}
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("header_desktop")}
                className="flex items-center gap-2 text-white/75 hover:text-white text-[13px] font-semibold tracking-[0.02em] transition-colors duration-200 group whitespace-nowrap"
              >
                <span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#F5C400]/50 flex items-center justify-center transition-colors duration-200">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                {PHONE}
              </a>

              {/* Divider */}
              <div className="w-px h-4 bg-white/20" />

              {/* Quote CTA */}
              <Link
                href="/quote"
                className="inline-flex items-center bg-[#F5C400] text-[#1A1A1A] font-bold px-5 py-[10px] rounded-md text-[13px] tracking-wider leading-none transition-colors duration-200 hover:bg-[#d4a900] whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-white/10 bg-[#1A1A1A]">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 pt-2">

            {visibleLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between py-4 text-sm font-semibold text-white"
                    onClick={() =>
                      setOpenMobileDrop(openMobileDrop === link.label ? null : link.label)
                    }
                  >
                    {label(link.label)}
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        openMobileDrop === link.label ? "rotate-180" : ""
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openMobileDrop === link.label && (
                    <div className="mb-2 rounded-lg overflow-hidden border border-white/10">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 text-sm border-b border-white/10 last:border-0 transition-colors ${
                            isActive(child.href)
                              ? "text-[#F5C400] font-semibold bg-white/5"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span className={`w-1 h-1 rounded-full ${isActive(child.href) ? "bg-[#F5C400]" : "bg-gray-600"}`} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center py-4 text-sm font-semibold border-b border-white/10 transition-colors ${
                    isActive(link.href) ? "text-[#F5C400]" : "text-white hover:text-[#F5C400]"
                  }`}
                >
                  {label(link.label)}
                </Link>
              )
            )}

            {/* Mobile CTA buttons */}
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("header_mobile")}
                className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-[#F5C400]/60 text-white hover:text-[#F5C400] font-semibold py-3.5 rounded-lg text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full bg-[#F5C400] hover:bg-[#e0b400] text-[#1A1A1A] font-bold py-3.5 rounded-lg text-sm tracking-wide transition-colors"
              >
                Get a Quote
              </Link>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
