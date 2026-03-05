"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

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

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.length < 2) { setPredictions([]); setOpen(false); return; }

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/places?input=${encodeURIComponent(val)}`);
        const data = await res.json();
        setPredictions(data.predictions ?? []);
        setOpen(true);
      } catch {
        setPredictions([]);
      }
    }, 250);
  }, [onChange]);

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
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
      />
      {open && predictions.length > 0 && (
        <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          {predictions.map((p) => (
            <li
              key={p.place_id}
              onMouseDown={() => select(p.description)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-[#1A1A1A] hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
            >
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{p.description}</span>
            </li>
          ))}
          <li className="flex justify-end px-3 py-1.5 bg-gray-50">
            <span className="text-[10px] text-gray-400">powered by Google</span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default function HeroQuoteWidget() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from.trim() || !to.trim()) {
      setError("Please enter both suburbs to continue");
      return;
    }
    setError("");
    const params = new URLSearchParams();
    params.set("from", from);
    params.set("to", to);
    router.push(`/quote?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xl">
      <p className="text-xl font-black text-[#1A1A1A] mb-5">Where are you moving from?</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              From Suburb
            </label>
            <AddressInput value={from} onChange={setFrom} placeholder="e.g. Cairns City" />
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              To Suburb
            </label>
            <AddressInput value={to} onChange={setTo} placeholder="e.g. Brisbane CBD" />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        <button
          type="submit"
          className="w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-black py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          Get Instant Quote →
        </button>
      </form>
    </div>
  );
}
