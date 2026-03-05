"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HeroQuoteWidget() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!apiKey) return;

    const attachAutocomplete = () => {
      if (initializedRef.current) return;
      const g = window.google;
      if (!g?.maps?.places) return;
      initializedRef.current = true;

      const LegacyAC = g.maps.places.Autocomplete;
      const PlaceAC = g.maps.places.PlaceAutocompleteElement;

      const pairs = [
        { ref: fromInputRef, setter: setFrom },
        { ref: toInputRef, setter: setTo },
      ];

      if (LegacyAC) {
        pairs.forEach(({ ref, setter }) => {
          if (!ref.current) return;
          const ac = new LegacyAC(ref.current, {
            componentRestrictions: { country: "au" },
            types: ["geocode"],
          });
          ac.addListener("place_changed", () => {
            const place = ac.getPlace();
            setter(place.formatted_address || place.name || "");
          });
        });
      } else if (PlaceAC) {
        pairs.forEach(({ ref, setter }) => {
          if (!ref.current) return;
          const wrapper = ref.current.parentElement;
          if (!wrapper) return;
          wrapper.style.position = "relative";
          const el = new PlaceAC({
            componentRestrictions: { country: "au" },
            types: ["geocode"],
          });
          Object.assign(el.style, {
            position: "absolute", top: "0", left: "0",
            width: "100%", height: "100%", opacity: "0", zIndex: "10",
          });
          wrapper.appendChild(el);
          el.addEventListener("gmp-select", async (e) => {
            try {
              const place = e.placePrediction.toPlace();
              await place.fetchFields({ fields: ["formattedAddress", "displayName"] });
              const addr = place.formattedAddress || place.displayName || "";
              setter(addr);
              if (ref.current) ref.current.value = addr;
            } catch {
              const raw = e.placePrediction?.text?.toString() || "";
              setter(raw);
              if (ref.current) ref.current.value = raw;
            }
          });
        });
      }
    };

    const loadMaps = () => {
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        if (window.google?.maps?.places) {
          attachAutocomplete();
        } else {
          document.querySelector('script[src*="maps.googleapis.com"]')
            ?.addEventListener("load", attachAutocomplete, { once: true });
        }
        return;
      }
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
      script.async = true;
      script.defer = true;
      script.onload = attachAutocomplete;
      document.head.appendChild(script);
    };

    const timer = setTimeout(loadMaps, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
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
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              From Suburb
            </label>
            <div className="relative">
              <input
                ref={fromInputRef}
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="e.g. Cairns City"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              To Suburb
            </label>
            <div className="relative">
              <input
                ref={toInputRef}
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. Brisbane CBD"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
              />
            </div>
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
