"use client";

import { useState } from "react";
import Link from "next/link";

const BASE_INCLUSIONS = [
  "Fully insured — public liability & transit cover",
  "Professional trained removalists",
  "Furniture blankets & wrapping",
  "Loading & unloading",
  "Disassembly & reassembly",
  "Modern clean truck",
  "No hidden fees",
];

const EXTRA_INCLUSIONS = [
  "Extra manpower for heavy items",
  "Priority scheduling available",
];

const INTERSTATE_INCLUSIONS = [
  "Fixed price based on m³ volume & distance",
  "Full public liability insurance",
  "Goods in transit insurance (full cover)",
  "Professional trained removalists",
  "Furniture blankets & wrapping",
  "Disassembly & reassembly",
  "Door-to-door service",
  "GPS tracked vehicles",
  "Dedicated move coordinator",
  "No hidden fees — ever",
];

const INTERSTATE_DESTINATIONS = [
  "Cairns to Brisbane",
  "Cairns to Sydney / Melbourne",
  "Cairns to Gold Coast / Sunshine Coast",
  "Any interstate route Australia-wide",
];

const INTERSTATE_STEPS = [
  {
    step: "Step 1",
    title: "We assess your inventory",
    text: "We create a detailed list of everything you're moving and calculate the total cubic metres (m³).",
  },
  {
    step: "Step 2",
    title: "We calculate distance",
    text: "Using the distance from your pickup suburb to your delivery address, we apply our per-m³ rate.",
  },
  {
    step: "Step 3",
    title: "You get a fixed quote",
    text: "You receive one clear, all-inclusive fixed price before your move begins. No hourly surprises — ever.",
  },
];

const DEFAULT_TABS = [
  {
    id: 0,
    label: "2 Movers + Truck",
    sublabel: "Small Move",
    title: "2 Movers + Truck",
    price: "From $170/hr",
    bestFor: "Studio, 1-2 bedroom homes",
    rates: [
      { day: "Mon – Fri", rate: "$170/hr" },
      { day: "Saturday", rate: "$189/hr" },
      { day: "Sunday", rate: "$269/hr" },
      { day: "Public Holiday", rate: "$269/hr" },
    ],
    extra: false,
    interstate: false,
  },
  {
    id: 1,
    label: "2 Movers + Large Truck",
    sublabel: "Medium Move",
    title: "2 Movers + Large Truck",
    price: "From $189/hr",
    bestFor: "3-4 bedroom homes",
    rates: [
      { day: "Mon – Fri", rate: "$189/hr" },
      { day: "Saturday", rate: "$210/hr" },
      { day: "Sunday", rate: "$290/hr" },
      { day: "Public Holiday", rate: "$290/hr" },
    ],
    extra: false,
    interstate: false,
  },
  {
    id: 2,
    label: "3 Movers + Large Truck",
    sublabel: "Large Move",
    title: "3 Movers + Large Truck",
    price: "From $220/hr",
    bestFor: "Large homes, offices",
    rates: [
      { day: "Mon – Fri", rate: "$220/hr" },
      { day: "Saturday", rate: "$245/hr" },
      { day: "Sunday", rate: "$325/hr" },
      { day: "Public Holiday", rate: "$325/hr" },
    ],
    extra: true,
    interstate: false,
  },
  {
    id: 3,
    label: "Get Custom Quote",
    sublabel: "5+ Bedrooms",
    title: "Custom Quote",
    price: "POA",
    bestFor: "5+ bedrooms, commercial",
    rates: [
      { day: "Mon – Fri", rate: "POA" },
      { day: "Saturday", rate: "POA" },
      { day: "Sunday", rate: "POA" },
      { day: "Public Holiday", rate: "POA" },
    ],
    extra: true,
    interstate: false,
  },
  {
    id: 4,
    label: "Interstate / Long Distance",
    sublabel: "Fixed Price Moves",
    title: "Interstate & Long Distance",
    price: "Fixed Price",
    bestFor: "",
    rates: [],
    extra: false,
    interstate: true,
  },
];

const CAIRNS_TABS = DEFAULT_TABS.map((tab) => {
  if (tab.id === 0) {
    return {
      ...tab,
      price: "From $179/hr",
      rates: [
        { day: "Mon – Fri", rate: "$179/hr" },
        { day: "Saturday", rate: "$199/hr" },
        { day: "Sunday", rate: "$269/hr" },
        { day: "Public Holiday", rate: "$269/hr" },
      ],
    };
  }
  if (tab.id === 2) {
    return {
      ...tab,
      price: "From $269/hr",
      rates: [
        { day: "Mon – Fri", rate: "$269/hr" },
        { day: "Saturday", rate: "$279/hr" },
        { day: "Sunday", rate: "$359/hr" },
        { day: "Public Holiday", rate: "$359/hr" },
      ],
    };
  }
  return tab;
});

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PricingTable({ location = "cairns" }: { location?: string }) {
  const TABS = location === "brisbane" ? DEFAULT_TABS : CAIRNS_TABS;
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const inclusions = tab.extra
    ? [...BASE_INCLUSIONS, ...EXTRA_INCLUSIONS]
    : BASE_INCLUSIONS;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

      {/* ── Tab bar ── */}
      <div className="flex overflow-x-auto bg-gray-50 border-b border-gray-200">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex-shrink-0 flex flex-col items-center justify-center px-6 py-4 min-w-[160px] transition-colors ${
              active === t.id
                ? "bg-[#F5C400] text-[#1A1A1A] font-bold"
                : "text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-100 font-medium"
            }`}
          >
            <span className="text-sm whitespace-nowrap">{t.label}</span>
            <span className={`text-xs mt-0.5 ${active === t.id ? "text-[#1A1A1A]/60" : "text-gray-400"}`}>
              {t.sublabel}
            </span>
          </button>
        ))}
      </div>

      {/* ── Panel ── */}
      {tab.interstate ? (

        /* ── INTERSTATE PANEL ── */
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

          {/* Left — move type */}
          <div className="p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Move Type
            </p>
            <p className="text-xl font-black text-[#1A1A1A] mb-2 leading-snug">
              Interstate &amp; Long Distance
            </p>
            <p className="text-4xl font-black text-[#F5C400] mb-1">Fixed Price</p>
            <p className="text-sm text-gray-400 mb-5">Based on volume + distance</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              We measure your inventory volume (m³) and calculate a fixed, all-inclusive price
              based on your move size and destination.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              No hourly surprises — you know the exact cost before we start.
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Best for
            </p>
            <ul className="space-y-2">
              {INTERSTATE_DESTINATIONS.map((dest) => (
                <li key={dest} className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{dest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle — inclusions */}
          <div className="p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              What&apos;s Included
            </p>
            <ul className="space-y-2.5">
              {INTERSTATE_INCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — how pricing works + CTA */}
          <div className="p-6 lg:p-8 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              How We Price It
            </p>
            <div className="space-y-5 mb-6">
              {INTERSTATE_STEPS.map((s) => (
                <div key={s.step} className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F5C400] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#1A1A1A] text-xs font-black">{s.step.replace("Step ", "")}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] mb-0.5">{s.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/quote"
              className="mt-auto flex items-center justify-center w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-black py-4 rounded-xl text-sm transition-colors"
            >
              Book Now →
            </Link>
          </div>

        </div>

      ) : (

        /* ── LOCAL MOVE PANEL ── */
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

          {/* Left — move size */}
          <div className="p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Move Size
            </p>
            <p className="text-xl font-black text-[#1A1A1A] mb-2 leading-snug">
              {tab.title}
            </p>
            <p className="text-4xl font-black text-[#F5C400] mb-4">{tab.price}</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">Best for:</span>{" "}
              {tab.bestFor}
            </p>
          </div>

          {/* Middle — inclusions */}
          <div className="p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              What&apos;s Included
            </p>
            <ul className="space-y-2.5">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — day rates + CTA */}
          <div className="p-6 lg:p-8 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Day Rate
            </p>
            <table className="w-full mb-4">
              <tbody>
                {tab.rates.map((row, i) => (
                  <tr
                    key={row.day}
                    className={i < tab.rates.length - 1 ? "border-b border-gray-100" : ""}
                  >
                    <td className="py-2.5 text-sm text-gray-600">{row.day}</td>
                    <td className="py-2.5 text-sm font-bold text-[#1A1A1A] text-right">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mb-5">
              Minimum 2-hour booking. Rates include GST.
            </p>
            <Link
              href="/quote"
              className="mt-auto flex items-center justify-center w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-black py-4 rounded-xl text-sm transition-colors"
            >
              Book Now →
            </Link>
          </div>

        </div>

      )}
    </div>
  );
}
