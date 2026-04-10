"use client";

import { useState, useRef, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import {
  trackQuoteSubmit,
  trackQuoteStep,
  trackPhoneClick,
} from "@/lib/gtag";
import { trackMetaLead } from "@/lib/fbpixel";

interface QuoteData {
  from: string;
  to: string;
  propertyType: string;
  movingTo: string;
  bedrooms: string;
  fromFloor: string;
  toBedrooms: string;
  toFloor: string;
  moveSize: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  extras: string[];
  notes: string;
}

// ── Reusable selection card ──────────────────────────────────────────────────
function SelectCard({
  icon,
  label,
  desc,
  selected,
  onClick,
}: {
  icon?: string;
  label: string;
  desc?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-center w-full ${
        selected
          ? "bg-[#F5C400] border-[#1A1A1A] shadow-lg scale-[1.02]"
          : "bg-white border-gray-200 hover:border-[#F5C400] hover:shadow-md"
      }`}
    >
      {icon && <span className="text-2xl leading-none">{icon}</span>}
      <span className={`font-semibold text-sm ${selected ? "text-[#1A1A1A]" : "text-gray-800"}`}>{label}</span>
      {desc && (
        <span className={`text-xs ${selected ? "text-[#1A1A1A]/70" : "text-gray-500"}`}>{desc}</span>
      )}
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 bg-[#1A1A1A] rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
}

// ── Address autocomplete with Google Places ─────────────────────────────────
interface Prediction {
  description: string;
  place_id: string;
}

function AddressInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}) {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      onChange(val);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (val.length < 2) { setPredictions([]); setOpen(false); return; }
      debounceRef.current = setTimeout(async () => {
        try {
          const res = await fetch(`/api/places?input=${encodeURIComponent(val)}`);
          const json = await res.json();
          setPredictions(json.predictions ?? []);
          setOpen(true);
        } catch { setPredictions([]); }
      }, 250);
    },
    [onChange]
  );

  return (
    <div className="relative">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
        <input
          type="text"
          value={value}
          onChange={handleInput}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onFocus={() => predictions.length > 0 && setOpen(true)}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full border-2 border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
        />
      </div>
      {open && predictions.length > 0 && (
        <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          {predictions.map((p) => (
            <li
              key={p.place_id}
              onMouseDown={() => { onChange(p.description); setPredictions([]); setOpen(false); }}
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#1A1A1A] hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
            >
              <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="truncate">{p.description}</span>
            </li>
          ))}
          <li className="flex justify-end px-3 py-1 bg-gray-50">
            <span className="text-[10px] text-gray-400">powered by Google</span>
          </li>
        </ul>
      )}
    </div>
  );
}

// ── Interactive floor picker ─────────────────────────────────────────────────
function floorLabel(n: number) {
  if (n === 0) return "Ground Floor";
  if (n === 1) return "1st Floor";
  if (n === 2) return "2nd Floor";
  if (n === 3) return "3rd Floor";
  if (n >= 31) return "30+ Floor";
  return `${n}th Floor`;
}

function FloorPicker({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (val: string) => void;
  label: string;
}) {
  const floor = value ? parseInt(value, 10) : -1;
  const maxFloor = 31;
  const buildingHeight = floor >= 0 ? 40 + (Math.min(floor, 30) / 30) * 140 : 40;
  const windowCount = floor >= 0 ? Math.min(Math.max(Math.ceil(Math.min(floor, 30) / 2), 1), 12) : 1;

  return (
    <div className="mt-4">
      <p className="text-sm font-semibold text-[#1A1A1A] mb-3">{label}</p>

      <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-4">
        {/* Building + floor display */}
        <div className="flex items-end justify-center gap-5 mb-4">
          {/* Building visualization */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-10 bg-gradient-to-t from-gray-300 to-gray-200 rounded-t-lg border-2 border-gray-300 transition-all duration-500 ease-out overflow-hidden"
              style={{ height: buildingHeight * 0.6 }}
            >
              <div className="absolute inset-0.5 flex flex-col gap-0.5 items-center justify-end">
                {Array.from({ length: Math.min(windowCount, 8) }).map((_, w) => (
                  <div
                    key={w}
                    className="w-2 h-1.5 rounded-sm bg-[#F5C400] transition-all duration-300"
                    style={{ opacity: 0.4 + (w / windowCount) * 0.6 }}
                  />
                ))}
              </div>
              {floor >= 0 && (
                <div
                  className="absolute left-1/2 w-0.5 bg-[#F5C400] transition-all duration-500 bottom-0"
                  style={{ height: `${(floor / maxFloor) * 100}%`, maxHeight: "100%" }}
                />
              )}
            </div>
            <div className="w-14 h-0.5 bg-gray-400 rounded-b" />
          </div>

          {/* Floor number display */}
          <div className="text-center pb-2">
            <div className={`text-3xl font-black transition-all duration-300 ${
              floor >= 0 ? "text-[#1A1A1A]" : "text-gray-300"
            }`}>
              {floor >= 0 ? (floor === 0 ? "G" : floor >= 31 ? "30+" : floor) : "?"}
            </div>
            <p className={`text-xs font-semibold mt-0.5 transition-colors duration-300 ${
              floor >= 0 ? "text-[#F5C400]" : "text-gray-400"
            }`}>
              {floor >= 0 ? floorLabel(floor) : "Select a floor"}
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative px-1">
          <input
            type="range"
            min={0}
            max={maxFloor}
            value={floor >= 0 ? floor : 0}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-2 appearance-none cursor-pointer rounded-full outline-none
              [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:h-2
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F5C400]
              [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#1A1A1A]
              [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:-mt-2
              [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing
              [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform
              [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#F5C400] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#1A1A1A]
              [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-grab"
            style={{
              background: floor >= 0
                ? `linear-gradient(to right, #F5C400 ${(floor / maxFloor) * 100}%, #e5e7eb ${(floor / maxFloor) * 100}%)`
                : "#e5e7eb",
            }}
          />
          <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-semibold px-0.5">
            <span>G</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>30+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Thank-you screen ─────────────────────────────────────────────────────────
function ThankYou({ data }: { data: QuoteData }) {
  const summary: [string, string][] = [
    ["Pick-up", data.from],
    ["Drop-off", data.to],
    ["Moving from", data.propertyType],
    ...(data.bedrooms ? [["Bedrooms (from)", data.bedrooms] as [string, string]] : []),
    ...(data.fromFloor !== "" ? [["Floor (from)", floorLabel(parseInt(data.fromFloor, 10))] as [string, string]] : []),
    ...(data.movingTo ? [["Moving to", data.movingTo] as [string, string]] : []),
    ...(data.toBedrooms ? [["Bedrooms (to)", data.toBedrooms] as [string, string]] : []),
    ...(data.toFloor !== "" ? [["Floor (to)", floorLabel(parseInt(data.toFloor, 10))] as [string, string]] : []),
    ...(data.moveSize ? [[
      data.propertyType === "Office" ? "Staff count" :
      data.propertyType === "Storage" ? "Storage size" : "Furnishing level",
      data.moveSize,
    ] as [string, string]] : []),
    ["Moving date", data.date],
    ...(data.time ? [["Preferred time", data.time] as [string, string]] : []),
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ...(data.extras.length ? [["Extra services", data.extras.join(", ")] as [string, string]] : []),
    ...(data.notes ? [["Notes", data.notes] as [string, string]] : []),
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-2xl w-full p-10 text-center">
        <div className="w-20 h-20 bg-[#F5C400] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-3xl font-black text-[#1A1A1A] mb-2">Quote Request Sent!</h2>
        <p className="text-gray-500 mb-8">
          Our team will review your details and be in touch within 2 business hours.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 space-y-3">
          <h3 className="font-bold text-[#1A1A1A] text-lg mb-4">Your Summary</h3>
          {summary.map(([label, value]) => (
            <div key={label} className="flex gap-3 text-sm">
              <span className="text-gray-400 w-28 shrink-0">{label}</span>
              <span className="text-[#1A1A1A] font-medium">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/blog"
            className="bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Check Our Tips &amp; Tricks
          </Link>
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick("quote_thankyou")}
            className="border-2 border-gray-200 hover:border-[#F5C400] text-[#1A1A1A] font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Call Us: {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Sidebar carousel data ────────────────────────────────────────────────────
const sidebarReviews = [
  { author: "Sarah M.", route: "Cairns local move", text: "R2G made our move so stress-free! The team was professional, punctual, and handled all our furniture with care." },
  { author: "James K.", route: "Cairns → Brisbane", text: "Used R2G for our interstate move to Brisbane — everything arrived safely and on time. Excellent communication." },
  { author: "Michelle T.", route: "Office relocation", text: "They relocated our office over the weekend so we didn't lose a day. Incredibly efficient and careful." },
  { author: "David R.", route: "4-bed house, Cairns", text: "The packing service was worth every cent. They packed our 4-bedroom house in half a day. Nothing damaged!" },
  { author: "Karen L.", route: "Cairns → Brisbane", text: "R2G moved us from Cairns to Brisbane with zero stress. Packed everything carefully, delivered in perfect condition." },
];

const movingTips = [
  { icon: "📋", title: "Start Early", text: "Begin packing non-essentials 2–3 weeks before moving day. Label every box by room — your future self will thank you." },
  { icon: "📦", title: "Pack Smart", text: "Use towels and linen to wrap fragile items instead of buying extra bubble wrap. Fill empty gaps in boxes to prevent shifting." },
  { icon: "🧊", title: "Defrost Your Fridge", text: "Switch off your fridge 24 hours before the move. Wipe it down and leave the door open to prevent mould during transit." },
  { icon: "📸", title: "Photo Your Setup", text: "Snap photos of your TV, router and electronics wiring before unplugging. Makes reconnecting at the new place a breeze." },
  { icon: "🎒", title: "Pack an Essentials Bag", text: "Keep phone chargers, toiletries, medications, a change of clothes and snacks in a separate bag you carry yourself." },
  { icon: "🏷️", title: "Colour-Code Rooms", text: "Assign a colour to each room and stick matching tape on boxes. Removalists can place them in the right spot instantly." },
];

// Shared hook so both carousels tick at the exact same moment
function useSyncedCarousel(interval = 4000, fadeMs = 400) {
  const [tick, setTick] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setTick((prev) => prev + 1);
        setFading(false);
      }, fadeMs);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, fadeMs]);

  return { tick, fading };
}

function ReviewTicker({ tick, fading }: { tick: number; fading: boolean }) {
  const idx = tick % sidebarReviews.length;
  const review = sidebarReviews[idx];

  return (
    <div className="relative">
      {/* Google badge header */}
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        <span className="text-white font-bold text-sm">4.9</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-500 text-xs ml-auto">900+ reviews</span>
      </div>

      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 relative overflow-hidden">
        <span className="absolute top-1 right-3 text-[#F5C400] text-5xl font-black leading-none opacity-10 select-none pointer-events-none">
          &ldquo;
        </span>
        <div
          className="transition-all duration-400 ease-in-out"
          style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0)" }}
        >
          <p className="text-gray-300 text-sm italic leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F5C400] flex items-center justify-center text-[#1A1A1A] font-bold text-xs shrink-0">
              {review.author[0]}
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-none">{review.author}</p>
              <p className="text-gray-500 text-xs mt-0.5">{review.route}</p>
            </div>
            <div className="flex gap-0.5 ml-auto">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div key={tick} className="h-full bg-[#F5C400]/40 rounded-full" style={{ animation: "reviewProgress 4s linear forwards" }} />
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {sidebarReviews.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === idx ? "bg-[#F5C400] w-4" : "bg-white/20"}`} />
        ))}
      </div>
    </div>
  );
}

function TipsTicker({ tick, fading }: { tick: number; fading: boolean }) {
  const idx = tick % movingTips.length;
  const tip = movingTips[idx];

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-widest">Moving Tips</span>
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-gray-600 text-[10px]">{idx + 1}/{movingTips.length}</span>
      </div>

      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 relative overflow-hidden">
        <div
          className="transition-all duration-400 ease-in-out"
          style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{tip.icon}</span>
            <h4 className="text-white font-bold text-sm">{tip.title}</h4>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{tip.text}</p>
        </div>
        <div className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div key={tick} className="h-full bg-[#F5C400]/40 rounded-full" style={{ animation: "reviewProgress 4s linear forwards" }} />
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {movingTips.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === idx ? "bg-[#F5C400] w-4" : "bg-white/20"}`} />
        ))}
      </div>
    </div>
  );
}

// ── Main wizard ──────────────────────────────────────────────────────────────
function QuoteWizard() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { tick: carouselTick, fading: carouselFading } = useSyncedCarousel();

  // Session ID for partial lead capture & deduplication
  const quoteSessionId = useRef<string>("");
  const partialLeadData = useRef<{ name: string; phone: string; email: string } | null>(null);
  const formCompleted = useRef(false);

  // Capture HTTP referrer on mount (before any navigation changes it)
  const httpReferrer = useRef("");
  useEffect(() => {
    if (typeof document !== "undefined" && document.referrer) {
      httpReferrer.current = document.referrer;
    }
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("r2g_quote_session_id");
    if (stored) {
      quoteSessionId.current = stored;
    } else {
      const id = crypto.randomUUID();
      quoteSessionId.current = id;
      sessionStorage.setItem("r2g_quote_session_id", id);
    }
  }, []);

  // Capture the page the user was on before navigating to /quote
  const referrerPage = useRef<string>("");
  useEffect(() => {
    // Priority 1: ?ref= query param (set by internal links)
    const refParam = searchParams.get("ref");
    if (refParam) {
      referrerPage.current = refParam;
      return;
    }
    // Priority 2: document.referrer (browser-provided, works for same-origin navigations)
    if (typeof document !== "undefined" && document.referrer) {
      try {
        const url = new URL(document.referrer);
        // Only capture same-origin referrers (our own site pages)
        if (url.origin === window.location.origin) {
          referrerPage.current = url.pathname;
        }
      } catch {
        // Invalid referrer URL, ignore
      }
    }
  }, [searchParams]);

  // Send abandoned quote alert ONLY when the user actually leaves the page
  // without completing the form. Uses sendBeacon for reliability during unload.
  useEffect(() => {
    const handleUnload = () => {
      if (formCompleted.current) return;
      const lead = partialLeadData.current;
      if (!lead || !lead.name || !lead.phone) return;
      const payload = JSON.stringify({
        quoteSessionId: quoteSessionId.current,
        name: lead.name,
        phone: lead.phone,
        email: lead.email || "",
        extras: [],
        pageUrl: window.location.href,
        referrerPage: referrerPage.current,
        httpReferrer: httpReferrer.current || undefined,
      });
      navigator.sendBeacon("/api/partial-lead", new Blob([payload], { type: "application/json" }));
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  const [data, setData] = useState<QuoteData>({
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    propertyType: "",
    movingTo: "",
    bedrooms: "",
    fromFloor: "",
    toBedrooms: "",
    toFloor: "",
    moveSize: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    extras: [],
    notes: "",
  });

  const update = (key: keyof QuoteData, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const toggleExtra = (val: string) =>
    setData((prev) => ({
      ...prev,
      extras: prev.extras.includes(val)
        ? prev.extras.filter((e) => e !== val)
        : [...prev.extras, val],
    }));

  const goToStep = (next: number) => {
    // Office & Storage skip step 4 (size already captured in step 3)
    if (data.propertyType === "Office" || data.propertyType === "Storage") {
      if (next === 4 && step === 3) next = 5;
      if (next === 4 && step === 5) next = 3;
    }

    // Store contact details for abandoned quote detection (sent via beforeunload)
    if (step === 1 && next === 2) {
      partialLeadData.current = { name: data.name, phone: data.phone, email: data.email };
    }

    setVisible(false);
    const stepNames = ["", "Your Info", "Property Type", "Details", "Move Size", "Location & Date"];
    trackQuoteStep(next, stepNames[next] || `Step ${next}`);
    setTimeout(() => {
      setStep(next);
      setVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    // Mark form as completed IMMEDIATELY so beforeunload never fires during the async fetch
    formCompleted.current = true;
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, quoteSessionId: quoteSessionId.current, pageUrl: window.location.href, referrerPage: referrerPage.current, httpReferrer: httpReferrer.current || undefined }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
      sessionStorage.removeItem("r2g_quote_session_id");
      trackQuoteSubmit(data.propertyType, {
        email: data.email,
        phone: data.phone,
        name: data.name,
      });
      trackMetaLead({
        email: data.email,
        phone: data.phone,
        name: data.name,
        propertyType: data.propertyType,
      });
    } catch {
      // Re-enable abandoned lead capture since the submission failed
      formCompleted.current = false;
      setError("Something went wrong. Please call us directly on " + PHONE);
    } finally {
      setSubmitting(false);
    }
  };

  const TOTAL_STEPS = 5;
  const progress = (step / TOTAL_STEPS) * 100;

  const propertyTypes = [
    { value: "House", icon: "🏠", label: "House" },
    { value: "Apartment", icon: "🏢", label: "Apartment" },
    { value: "Townhouse", icon: "🏘️", label: "Townhouse" },
    { value: "Villa", icon: "🏡", label: "Villa" },
    { value: "Office", icon: "💼", label: "Office" },
    { value: "Storage", icon: "📦", label: "Storage" },
  ];

  const movingToTypes = propertyTypes.filter(
    (pt) => pt.value !== "Office" && pt.value !== "Storage"
  ).concat({ value: "Storage", icon: "📦", label: "Storage" });

  const bedroomOptions = [
    { value: "1 Bedroom", label: "1 Bedroom" },
    { value: "2 Bedrooms", label: "2 Bedrooms" },
    { value: "3 Bedrooms", label: "3 Bedrooms" },
    { value: "4 Bedrooms", label: "4 Bedrooms" },
    { value: "5 Bedrooms+", label: "5 Bedrooms+" },
  ];

  const moveSizes = [
    { value: "Heavily Furnished", icon: "🏠", label: "Heavily Furnished", desc: "Full house of furniture & belongings" },
    { value: "Moderately Furnished", icon: "📦", label: "Moderately Furnished", desc: "A fair amount of furniture & items" },
    { value: "Lightly Furnished", icon: "🛋️", label: "Lightly Furnished", desc: "Minimal furniture & belongings" },
    { value: "A Couple of Items", icon: "📌", label: "A Couple of Items / Single Item", desc: "Just a few pieces or one specific item" },
  ];

  const timeOptions = [
    { value: "Morning (7am–12pm)", label: "Morning", sub: "7am – 12pm" },
    { value: "Afternoon (12pm–5pm)", label: "Afternoon", sub: "12pm – 5pm" },
    { value: "Flexible", label: "Flexible", sub: "Any time works" },
  ];

  const isStep1Incomplete =
    !data.propertyType || (data.propertyType !== "Office" && !data.movingTo);

  const isStep2Incomplete = (() => {
    if (data.propertyType === "Office") return !data.moveSize;
    if (data.propertyType === "Storage") {
      if (!data.moveSize) return true;
      if (data.movingTo !== "Storage" && !data.toBedrooms) return true;
      if (data.movingTo === "Apartment" && !data.toFloor) return true;
      return false;
    }
    // Residential
    if (!data.bedrooms) return true;
    if (data.propertyType === "Apartment" && !data.fromFloor) return true;
    if (data.movingTo !== "Storage" && !data.toBedrooms) return true;
    if (data.movingTo === "Apartment" && !data.toFloor) return true;
    return false;
  })();

  // Australian phone: 04XX (mobile), 02/03/07/08 (landline), 1300/1800, or +61
  const isValidAusPhone = (phone: string) => {
    const digits = phone.replace(/[\s\-()]+/g, "");
    return /^(\+?61|0)[2-478]\d{8}$/.test(digits) || /^1[38]00\d{6}$/.test(digits);
  };

  const phoneValid = !data.phone || isValidAusPhone(data.phone);

  const isNextDisabled =
    (step === 1 && (!data.name || !data.phone || !phoneValid)) ||
    (step === 2 && isStep1Incomplete) ||
    (step === 3 && isStep2Incomplete) ||
    (step === 4 && !data.moveSize);
  const isSubmitDisabled = submitting || !data.name || !data.phone || !phoneValid || !data.from || !data.to || !data.date;

  if (submitted) return <ThankYou data={data} />;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <h1 className="sr-only">Free Moving Quote</h1>
      <style>{`
        @keyframes reviewProgress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>

      {/* ── Left panel: form (60%) ───────────────────────────────────────── */}
      <div className="flex-1 lg:max-w-[60%] flex flex-col">

        {/* Sticky progress bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm px-6 py-3">
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-1 shrink-0 mr-2">
                  <span className="text-xl font-black text-[#F5C400]">R2G</span>
                </Link>
                <span className="text-sm font-semibold text-[#1A1A1A]">Step {step} of {TOTAL_STEPS}</span>
                <span className="text-sm text-gray-400 hidden sm:inline">— Free Quote</span>
              </div>
              <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors p-1">
                ✕ Exit
              </Link>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F5C400] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step content area */}
        <div className="flex-1 py-6 px-6 overflow-y-auto">
          <div
            className="max-w-xl mx-auto"
            style={{
              transition: "opacity 0.2s ease, transform 0.2s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(16px)",
            }}
          >

            {/* ── STEP 1: Contact Details (collect name/phone/email first) ── */}
            {step === 1 && (
              <div>
                <h2 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">
                  Let&apos;s start with your details
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  We&apos;ll use this to send your personalised, no-obligation quote.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="e.g. Sarah Thompson"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="04XX XXX XXX"
                        className={`w-full border-2 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none transition-colors ${
                          !phoneValid ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-[#F5C400]"
                        }`}
                      />
                      {!phoneValid && (
                        <p className="text-red-500 text-xs mt-1">Please enter a valid Australian phone number</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Email Address{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
                    />
                  </div>

                  {/* Extra services */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Need any extra services?{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: "📦", label: "Packing & Supplies" },
                        { icon: "🧹", label: "Bond Cleaning" },
                        { icon: "🏢", label: "Storage" },
                        { icon: "💪", label: "Extra Manpower (3+ Removalists)" },
                      ].map(({ icon, label }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => toggleExtra(label)}
                          className={`relative flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 text-left text-sm transition-all ${
                            data.extras.includes(label)
                              ? "border-[#F5C400] bg-[#F5C400]/10 font-semibold text-[#1A1A1A]"
                              : "border-gray-200 bg-white hover:border-gray-300 text-gray-600"
                          }`}
                        >
                          <span className="text-base">{icon}</span>
                          <span className="text-xs">{label}</span>
                          {data.extras.includes(label) && (
                            <span className="absolute top-1 right-1 w-4 h-4 bg-[#F5C400] rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2: Property Type ── */}
            {step === 2 && (
              <div>
                <h2 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">
                  What kind of property are you moving from?
                </h2>
                <p className="text-gray-500 text-sm mb-4">Select the option that best describes your current place.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {propertyTypes.map((pt) => (
                    <SelectCard
                      key={pt.value}
                      icon={pt.icon}
                      label={pt.label}
                      selected={data.propertyType === pt.value}
                      onClick={() => update("propertyType", pt.value)}
                    />
                  ))}
                </div>

                {data.propertyType && data.propertyType !== "Office" && (
                  <div className="mt-8">
                    <p className="text-sm font-semibold text-[#1A1A1A] mb-4">What type of property are you moving to?</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {movingToTypes.map((pt) => (
                        <SelectCard
                          key={pt.value}
                          icon={pt.icon}
                          label={pt.label}
                          selected={data.movingTo === pt.value}
                          onClick={() => update("movingTo", pt.value)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── STEP 3: Office Size ── */}
            {step === 3 && data.propertyType === "Office" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">
                  How many staff are in your office?
                </h2>
                <p className="text-gray-500 text-sm mb-4">This helps us estimate the size and complexity of your move.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "1-10", icon: "🏢", label: "1 – 10 Staff", desc: "Small office or startup" },
                    { value: "10-30", icon: "🏗️", label: "10 – 30 Staff", desc: "Medium business" },
                    { value: "30+", icon: "🏙️", label: "30+ Staff", desc: "Large or corporate office" },
                  ].map((o) => (
                    <SelectCard
                      key={o.value}
                      icon={o.icon}
                      label={o.label}
                      desc={o.desc}
                      selected={data.moveSize === o.value}
                      onClick={() => update("moveSize", o.value)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 3: Storage Size ── */}
            {step === 3 && data.propertyType === "Storage" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">
                  How much are you moving out of storage?
                </h2>
                <p className="text-gray-500 text-sm mb-4">This helps us send the right team and truck.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "Few boxes", icon: "📦", label: "A Few Boxes", desc: "Small personal items" },
                    { value: "Partial load", icon: "🛋️", label: "Partial Load", desc: "Some furniture & boxes" },
                    { value: "Full unit", icon: "🏠", label: "Full Storage Unit", desc: "Full unit of belongings" },
                  ].map((o) => (
                    <SelectCard
                      key={o.value}
                      icon={o.icon}
                      label={o.label}
                      desc={o.desc}
                      selected={data.moveSize === o.value}
                      onClick={() => update("moveSize", o.value)}
                    />
                  ))}
                </div>

                {/* Moving TO details (appears after storage size is filled) */}
                {data.moveSize && data.movingTo !== "Storage" && (
                  <>
                    <div className="border-t border-gray-200 my-4" />
                    <div>
                      <h3 className="text-lg font-black text-[#1A1A1A] mb-2">
                        Moving <span className="text-[#F5C400]">to</span> — {data.movingTo}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {bedroomOptions.map((b) => (
                          <SelectCard
                            key={b.value}
                            label={b.label}
                            selected={data.toBedrooms === b.value}
                            onClick={() => update("toBedrooms", b.value)}
                          />
                        ))}
                      </div>
                      {data.movingTo === "Apartment" && (
                        <FloorPicker value={data.toFloor} onChange={(v) => update("toFloor", v)} label="What floor is the apartment on?" />
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── STEP 3: Property Details (non-Office/Storage) ── */}
            {step === 3 && data.propertyType !== "Office" && data.propertyType !== "Storage" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">
                  Tell us about both properties
                </h2>
                <p className="text-gray-500 text-sm mb-4">This helps us plan your move accurately.</p>

                {/* ── Moving FROM details ── */}
                <div className="mb-4">
                  <h3 className="text-lg font-black text-[#1A1A1A] mb-2">
                    Moving <span className="text-[#F5C400]">from</span> — {data.propertyType}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {bedroomOptions.map((b) => (
                      <SelectCard
                        key={b.value}
                        label={b.label}
                        selected={data.bedrooms === b.value}
                        onClick={() => update("bedrooms", b.value)}
                      />
                    ))}
                  </div>
                  {data.propertyType === "Apartment" && (
                    <FloorPicker value={data.fromFloor} onChange={(v) => update("fromFloor", v)} label="What floor are you on?" />
                  )}
                </div>

                {/* ── Moving TO details (appears after FROM is filled) ── */}
                {data.movingTo !== "Storage" &&
                  data.bedrooms &&
                  (data.propertyType !== "Apartment" || data.fromFloor) && (
                  <>
                    <div className="border-t border-gray-200 my-4" />
                    <div>
                      <h3 className="text-lg font-black text-[#1A1A1A] mb-2">
                        Moving <span className="text-[#F5C400]">to</span> — {data.movingTo}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {bedroomOptions.map((b) => (
                          <SelectCard
                            key={b.value}
                            label={b.label}
                            selected={data.toBedrooms === b.value}
                            onClick={() => update("toBedrooms", b.value)}
                          />
                        ))}
                      </div>
                      {data.movingTo === "Apartment" && (
                        <FloorPicker value={data.toFloor} onChange={(v) => update("toFloor", v)} label="What floor is the apartment on?" />
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── STEP 4: Move Size ── */}
            {step === 4 && (
              <div>
                <h2 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">
                  What are you moving?
                </h2>
                <p className="text-gray-500 text-sm mb-4">Choose the option that best describes the size of your move.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {moveSizes.map((ms) => (
                    <SelectCard
                      key={ms.value}
                      icon={ms.icon}
                      label={ms.label}
                      desc={ms.desc}
                      selected={data.moveSize === ms.value}
                      onClick={() => update("moveSize", ms.value)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 5: Addresses, Date & Special Notes (last step) ── */}
            {step === 5 && (
              <div>
                <h2 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">
                  Where and when are you moving?
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Enter your addresses and preferred date.
                </p>

                <div className="space-y-4">
                  {/* Pick-up address */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Pick-up Address <span className="text-red-400">*</span>
                    </label>
                    <AddressInput
                      value={data.from}
                      onChange={(v) => update("from", v)}
                      placeholder="e.g. 36 Abbott St, Cairns City QLD 4870"
                    />
                  </div>

                  {/* Drop-off address */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Drop-off Address <span className="text-red-400">*</span>
                    </label>
                    <AddressInput
                      value={data.to}
                      onChange={(v) => update("to", v)}
                      placeholder="e.g. 122 Ashover Circuit, Brisbane QLD 4108"
                    />
                  </div>

                  {/* Moving date */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Moving Date <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      value={data.date}
                      onChange={(e) => update("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
                    />
                  </div>

                  {/* Preferred time */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">
                      Preferred Arrival Time
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {timeOptions.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => update("time", t.value)}
                          className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                            data.time === t.value
                              ? "bg-[#F5C400] border-[#1A1A1A] shadow-md scale-[1.02]"
                              : "bg-white border-gray-200 hover:border-[#F5C400]"
                          }`}
                        >
                          <p className={`font-semibold text-sm ${data.time === t.value ? "text-[#1A1A1A]" : "text-gray-800"}`}>
                            {t.label}
                          </p>
                          <p className={`text-xs mt-0.5 ${data.time === t.value ? "text-[#1A1A1A]/70" : "text-gray-500"}`}>
                            {t.sub}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Notes (moved here from old step 5) */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Special Notes{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      value={data.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="e.g. We have a piano, stairs at destination, fragile antiques..."
                      rows={4}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                </div>
              </div>
            )}


            {/* ── Navigation buttons ── */}
            <div className="flex items-center gap-4 mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => goToStep(step - 1)}
                  className="flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 rounded-xl font-semibold text-gray-600 hover:border-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
              )}

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={() => goToStep(step + 1)}
                  disabled={isNextDisabled}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#F5C400] hover:bg-[#d4a900] disabled:opacity-40 disabled:cursor-not-allowed text-[#1A1A1A] font-black px-8 py-3.5 rounded-xl text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitDisabled}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#F5C400] hover:bg-[#d4a900] disabled:opacity-40 disabled:cursor-not-allowed text-[#1A1A1A] font-black px-8 py-4 rounded-xl text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-[#1A1A1A] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Free Quote
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Step hint */}
            {step === 1 && (
              <p className="text-center text-gray-400 text-xs mt-6">
                Fill in your details above to continue — takes about 30 seconds
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Right panel: sticky branded sidebar (40%) ───────────────────── */}
      <div className="hidden lg:block lg:w-[40%] relative">
        <div className="sticky top-0 z-0 h-screen bg-[#1A1A1A] overflow-hidden flex flex-col justify-between p-10">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5C400]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-[#F5C400]/6 rounded-full blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #F5C400 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top: branding + heading */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-3xl font-black text-[#F5C400]">R2G</span>
              <div className="flex flex-col leading-tight ml-1">
                <span className="text-sm font-bold text-white tracking-wide">TRANSPORT</span>
                <span className="text-xs text-gray-400 tracking-wider">&amp; STORAGE</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-white leading-tight mb-4">
              Your move, <span className="text-[#F5C400]">handled with care.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fill in the form and we&apos;ll send you a personalised, no-obligation quote within 2 business hours.
            </p>
          </div>

          {/* Middle: moving tips carousel */}
          <div className="relative flex-1 flex items-center">
            <div className="w-full">
              <TipsTicker tick={carouselTick} fading={carouselFading} />
            </div>
          </div>

          {/* Bottom: reviews + trust badges */}
          <div className="relative space-y-4">
            <ReviewTicker tick={carouselTick} fading={carouselFading} />
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: "🛡️", label: "Fully Insured" },
                { icon: "⭐", label: "5-Star Rated" },
                { icon: "🚛", label: "10+ Years" },
                { icon: "✅", label: "No Hidden Fees" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 bg-white/5 rounded-lg py-2.5 border border-white/10 text-center"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-white font-semibold text-[10px] leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky phone widget (bottom-right) ───────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={PHONE_HREF}
          onClick={() => trackPhoneClick("quote_sidebar")}
          className="flex items-center gap-3 bg-white shadow-2xl rounded-2xl px-5 py-3.5 border border-gray-100 hover:shadow-3xl transition-all hover:-translate-y-0.5 group"
        >
          <div className="w-9 h-9 bg-[#F5C400] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 leading-none mb-0.5">Don&apos;t like filling forms?</p>
            <p className="text-sm font-bold text-[#1A1A1A] leading-tight group-hover:text-[#d4a900] transition-colors">
              {PHONE}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

// ── Page export with Suspense boundary ───────────────────────────────────────
export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#F5C400] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <QuoteWizard />
    </Suspense>
  );
}
