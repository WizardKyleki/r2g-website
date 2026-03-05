"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HeroQuoteWidget() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const fromContainerRef = useRef<HTMLDivElement>(null);
  const toContainerRef = useRef<HTMLDivElement>(null);
  const fromValueRef = useRef("");
  const toValueRef = useRef("");

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!apiKey || typeof window === "undefined") return;

    // Avoid loading the script twice
    if (document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
      initElements();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => initElements();
    document.head.appendChild(script);
  }, []);

  const initElements = () => {
    if (!(window as any).google?.maps?.places?.PlaceAutocompleteElement) {
      setTimeout(initElements, 300);
      return;
    }

    // FROM field
    if (fromContainerRef.current && !fromContainerRef.current.querySelector("gmp-place-autocomplete")) {
      const fromEl = new (window as any).google.maps.places.PlaceAutocompleteElement({
        componentRestrictions: { country: "au" },
        types: ["geocode"],
      });
      fromEl.style.width = "100%";
      fromContainerRef.current.appendChild(fromEl);
      fromEl.addEventListener("gmp-select", (e: any) => {
        const addr = e.placePrediction?.text?.toString() || "";
        fromValueRef.current = addr;
        setFrom(addr);
      });
    }

    // TO field
    if (toContainerRef.current && !toContainerRef.current.querySelector("gmp-place-autocomplete")) {
      const toEl = new (window as any).google.maps.places.PlaceAutocompleteElement({
        componentRestrictions: { country: "au" },
        types: ["geocode"],
      });
      toEl.style.width = "100%";
      toContainerRef.current.appendChild(toEl);
      toEl.addEventListener("gmp-select", (e: any) => {
        const addr = e.placePrediction?.text?.toString() || "";
        toValueRef.current = addr;
        setTo(addr);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fromVal = from || fromValueRef.current;
    const toVal = to || toValueRef.current;
    if (!fromVal.trim() || !toVal.trim()) {
      setError("Please enter both suburbs to continue");
      return;
    }
    setError("");
    const params = new URLSearchParams();
    params.set("from", fromVal);
    params.set("to", toVal);
    router.push(`/quote?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xl">
      <p className="text-xl font-black text-[#1A1A1A] mb-5">Where are you moving from?</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              From Suburb
            </label>
            <div
              ref={fromContainerRef}
              className="w-full border-2 border-gray-200 rounded-xl overflow-visible focus-within:border-[#F5C400] transition-colors"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              To Suburb
            </label>
            <div
              ref={toContainerRef}
              className="w-full border-2 border-gray-200 rounded-xl overflow-visible focus-within:border-[#F5C400] transition-colors"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium">{error}</p>
        )}

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
