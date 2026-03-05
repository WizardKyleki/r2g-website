"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HeroQuoteWidget() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const fromVal = useRef("");
  const toVal = useRef("");

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!apiKey) return;

    const attach = () => {
      const g = (window as any).google;
      if (!g?.maps?.places?.PlaceAutocompleteElement) return;

      [
        { container: fromRef, valRef: fromVal, setter: setFrom },
        { container: toRef, valRef: toVal, setter: setTo },
      ].forEach(({ container, valRef, setter }) => {
        if (!container.current || container.current.childElementCount > 0) return;
        const el = new g.maps.places.PlaceAutocompleteElement({
          componentRestrictions: { country: "au" },
          types: ["geocode"],
        });
        el.style.width = "100%";
        container.current.appendChild(el);
        el.addEventListener("gmp-select", async (e: any) => {
          try {
            const place = e.placePrediction.toPlace();
            await place.fetchFields({ fields: ["formattedAddress", "displayName"] });
            const addr = place.formattedAddress || place.displayName || "";
            valRef.current = addr;
            setter(addr);
          } catch {
            const raw = e.placePrediction?.text?.toString() || "";
            valRef.current = raw;
            setter(raw);
          }
        });
      });
    };

    const loadMaps = () => {
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        if ((window as any).google?.maps?.places) attach();
        return;
      }
      const s = document.createElement("script");
      s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
      s.async = true;
      s.onload = attach;
      document.head.appendChild(s);
    };

    const t = setTimeout(loadMaps, 2000);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const f = fromVal.current.trim();
    const t = toVal.current.trim();
    if (!f || !t) {
      setError("Please enter both suburbs to continue");
      return;
    }
    setError("");
    const params = new URLSearchParams();
    params.set("from", f);
    params.set("to", t);
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
            <div ref={fromRef} className="w-full min-h-[46px]" />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              To Suburb
            </label>
            <div ref={toRef} className="w-full min-h-[46px]" />
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
