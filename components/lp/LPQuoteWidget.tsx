"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/gtag";

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
      if (val.length < 2) {
        setPredictions([]);
        setOpen(false);
        return;
      }

      debounceRef.current = setTimeout(async () => {
        try {
          const res = await fetch(
            `/api/places?input=${encodeURIComponent(val)}`
          );
          const data = await res.json();
          setPredictions(data.predictions ?? []);
          setOpen(true);
        } catch {
          setPredictions([]);
        }
      }, 250);
    },
    [onChange]
  );

  const select = (description: string) => {
    onChange(description);
    setPredictions([]);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={handleInput}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onFocus={() => predictions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
      />
      {open && predictions.length > 0 && (
        <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          {predictions.map((p) => (
            <li
              key={p.place_id}
              onMouseDown={() => select(p.description)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-[#1A1A1A] hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
            >
              <svg
                className="w-4 h-4 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{p.description}</span>
            </li>
          ))}
          <li className="flex justify-end px-3 py-1.5 bg-gray-50">
            <span className="text-[10px] text-gray-400">
              powered by Google
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
];

export default function LPQuoteWidget() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const utmParams = useRef<URLSearchParams>(new URLSearchParams());

  useEffect(() => {
    const current = new URLSearchParams(window.location.search);
    const stored = new URLSearchParams();
    UTM_KEYS.forEach((key) => {
      const val = current.get(key);
      if (val) stored.set(key, val);
    });
    utmParams.current = stored;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from.trim() || !to.trim()) {
      setError("Please enter both addresses to continue");
      return;
    }
    setError("");

    trackEvent("lp_quote_start", {
      event_category: "lp_engagement",
      event_label: "brisbane",
    });

    const params = new URLSearchParams();
    params.set("from", from);
    params.set("to", to);
    utmParams.current.forEach((value, key) => params.set(key, value));
    router.push(`/quote?${params.toString()}`);
  };

  return (
    <div id="quote-form" className="scroll-mt-20">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Moving from
            </label>
            <AddressInput
              value={from}
              onChange={setFrom}
              placeholder="e.g. Paddington, Brisbane"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Moving to
            </label>
            <AddressInput
              value={to}
              onChange={setTo}
              placeholder="e.g. New Farm, Brisbane"
            />
          </div>
        </div>
        {error && <p className="text-red-400 text-sm font-medium">{error}</p>}
        <button
          type="submit"
          className="w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-black py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl active:translate-y-0.5 cursor-pointer"
        >
          Get My Free Quote
        </button>
      </form>
    </div>
  );
}
