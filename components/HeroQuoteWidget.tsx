"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function HeroQuoteWidget() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const fromContainerRef = useRef<HTMLDivElement>(null);
  const toContainerRef = useRef<HTMLDivElement>(null);
  const mapsLoadedRef = useRef(false);
  const initCalledRef = useRef(false);

  const initElements = useCallback(() => {
    if (initCalledRef.current) return;
    initCalledRef.current = true;

    const g = (window as any).google;
    if (!g?.maps?.places?.PlaceAutocompleteElement) {
      setTimeout(() => {
        initCalledRef.current = false;
        initElements();
      }, 300);
      return;
    }

    if (fromContainerRef.current && !fromContainerRef.current.querySelector("gmp-place-autocomplete")) {
      const fromEl = new g.maps.places.PlaceAutocompleteElement({
        componentRestrictions: { country: "au" },
        types: ["geocode"],
      });
      fromEl.style.width = "100%";
      fromContainerRef.current.appendChild(fromEl);
      fromEl.addEventListener("gmp-select", async (e: any) => {
        const place = e.placePrediction.toPlace();
        await place.fetchFields({ fields: ["formattedAddress", "displayName"] });
        setFrom(place.formattedAddress || place.displayName || "");
      });
    }

    if (toContainerRef.current && !toContainerRef.current.querySelector("gmp-place-autocomplete")) {
      const toEl = new g.maps.places.PlaceAutocompleteElement({
        componentRestrictions: { country: "au" },
        types: ["geocode"],
      });
      toEl.style.width = "100%";
      toContainerRef.current.appendChild(toEl);
      toEl.addEventListener("gmp-select", async (e: any) => {
        const place = e.placePrediction.toPlace();
        await place.fetchFields({ fields: ["formattedAddress", "displayName"] });
        setTo(place.formattedAddress || place.displayName || "");
      });
    }
  }, []);

  const loadMapsOnInteraction = useCallback(() => {
    if (mapsLoadedRef.current) return;
    mapsLoadedRef.current = true;

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!apiKey) return;

    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      initElements();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
    script.async = true;
    script.onload = initElements;
    document.head.appendChild(script);
  }, [initElements]);

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
            <div
              ref={fromContainerRef}
              onFocus={loadMapsOnInteraction}
              onMouseEnter={loadMapsOnInteraction}
              className="w-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              To Suburb
            </label>
            <div
              ref={toContainerRef}
              onFocus={loadMapsOnInteraction}
              onMouseEnter={loadMapsOnInteraction}
              className="w-full"
            />
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
