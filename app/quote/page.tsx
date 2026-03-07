"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

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
      className={`relative flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-center w-full ${
        selected
          ? "bg-[#F5C400] border-[#1A1A1A] shadow-lg scale-[1.02]"
          : "bg-white border-gray-200 hover:border-[#F5C400] hover:shadow-md"
      }`}
    >
      {icon && <span className="text-3xl leading-none">{icon}</span>}
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

// ── Thank-you screen ─────────────────────────────────────────────────────────
function ThankYou({ data }: { data: QuoteData }) {
  const summary: [string, string][] = [
    ["Route", `${data.from} → ${data.to}`],
    ["Moving from", data.propertyType],
    [`${data.propertyType} bedrooms`, data.bedrooms],
    ...(data.fromFloor ? [["From floor", data.fromFloor] as [string, string]] : []),
    ...(data.movingTo ? [["Moving to", data.movingTo] as [string, string]] : []),
    ...(data.toBedrooms ? [["To bedrooms", data.toBedrooms] as [string, string]] : []),
    ...(data.toFloor ? [["To floor", data.toFloor] as [string, string]] : []),
    ["Move size", data.moveSize],
    ["Moving date", data.date],
    ["Preferred time", data.time],
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
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
            href="/"
            className="bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Back to Home
          </Link>
          <a
            href={PHONE_HREF}
            className="border-2 border-gray-200 hover:border-[#F5C400] text-[#1A1A1A] font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Call Us: {PHONE}
          </a>
        </div>
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
    notes: "",
  });

  const update = (key: keyof QuoteData, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const goToStep = (next: number) => {
    // Office skips step 3 (move size already captured in step 2)
    if (data.propertyType === "Office" || data.propertyType === "Storage") {
      if (next === 3 && step === 2) next = 4;
      if (next === 3 && step === 4) next = 2;
    }
    setVisible(false);
    setTimeout(() => {
      setStep(next);
      setVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
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

  const isNextDisabled =
    (step === 1 && (!data.propertyType || (data.propertyType !== "Office" && !data.movingTo))) ||
    (step === 2 && data.propertyType === "Office" && !data.moveSize) ||
    (step === 2 && data.propertyType === "Storage" && !data.moveSize) ||
    (step === 2 && data.propertyType === "Storage" && data.moveSize && data.movingTo !== "Storage" && !data.toBedrooms) ||
    (step === 2 && data.propertyType === "Storage" && data.moveSize && data.movingTo === "Apartment" && !data.toFloor) ||
    (step === 2 && data.propertyType !== "Office" && data.propertyType !== "Storage" && !data.bedrooms) ||
    (step === 2 && data.propertyType === "Apartment" && !data.fromFloor) ||
    (step === 2 && data.propertyType !== "Office" && data.propertyType !== "Storage" && data.movingTo !== "Storage" && !data.toBedrooms) ||
    (step === 2 && data.propertyType !== "Office" && data.propertyType !== "Storage" && data.movingTo === "Apartment" && !data.toFloor) ||
    (step === 3 && !data.moveSize) ||
    (step === 4 && (!data.from || !data.to || !data.date));

  const isSubmitDisabled = submitting || !data.name || !data.phone || !data.email;

  if (submitted) return <ThankYou data={data} />;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* ── Left panel: form (60%) ───────────────────────────────────────── */}
      <div className="flex-1 lg:max-w-[60%] flex flex-col">

        {/* Sticky progress bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm px-6 py-4">
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-2">
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
        <div className="flex-1 py-12 px-6 overflow-y-auto">
          <div
            className="max-w-xl mx-auto"
            style={{
              transition: "opacity 0.2s ease, transform 0.2s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(16px)",
            }}
          >

            {/* ── STEP 1: Property Type ── */}
            {step === 1 && (
              <div>
                <p className="text-[#F5C400] font-semibold text-xs uppercase tracking-widest mb-2">Step 1 of 5</p>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  What kind of property are you moving from?
                </h2>
                <p className="text-gray-500 mb-8">Select the option that best describes your current place.</p>
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
                      {[
                        { value: "House", icon: "🏠", label: "House" },
                        { value: "Apartment", icon: "🏢", label: "Apartment" },
                        { value: "Townhouse", icon: "🏘️", label: "Townhouse" },
                        { value: "Villa", icon: "🏡", label: "Villa" },
                        { value: "Storage", icon: "📦", label: "Storage" },
                      ].map((pt) => (
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

            {/* ── STEP 2: Office Size ── */}
            {step === 2 && data.propertyType === "Office" && (
              <div>
                <p className="text-[#F5C400] font-semibold text-xs uppercase tracking-widest mb-2">Step 2 of 5</p>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  How many staff are in your office?
                </h2>
                <p className="text-gray-500 mb-8">This helps us estimate the size and complexity of your move.</p>
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

            {/* ── STEP 2: Storage Size ── */}
            {step === 2 && data.propertyType === "Storage" && (
              <div>
                <p className="text-[#F5C400] font-semibold text-xs uppercase tracking-widest mb-2">Step 2 of 5</p>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  How much are you moving out of storage?
                </h2>
                <p className="text-gray-500 mb-8">This helps us send the right team and truck.</p>
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
                    <div className="border-t border-gray-200 my-6" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-3">
                        Moving <span className="text-[#F5C400]">to</span> — {data.movingTo}
                      </p>
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
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-[#1A1A1A] mb-3">What floor is the apartment on?</p>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { value: "Ground", label: "Ground Floor" },
                              { value: "1-3", label: "1st – 3rd Floor" },
                              { value: "4-10", label: "4th – 10th Floor" },
                              { value: "10+", label: "10th Floor+" },
                            ].map((f) => (
                              <SelectCard
                                key={f.value}
                                label={f.label}
                                selected={data.toFloor === f.value}
                                onClick={() => update("toFloor", f.value)}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── STEP 2: Property Details (non-Office/Storage) ── */}
            {step === 2 && data.propertyType !== "Office" && data.propertyType !== "Storage" && (
              <div>
                <p className="text-[#F5C400] font-semibold text-xs uppercase tracking-widest mb-2">Step 2 of 5</p>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  Tell us about both properties
                </h2>
                <p className="text-gray-500 mb-8">This helps us plan your move accurately.</p>

                {/* ── Moving FROM details ── */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-3">
                    Moving <span className="text-[#F5C400]">from</span> — {data.propertyType}
                  </p>
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
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-3">What floor are you on?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: "Ground", label: "Ground Floor" },
                          { value: "1-3", label: "1st – 3rd Floor" },
                          { value: "4-10", label: "4th – 10th Floor" },
                          { value: "10+", label: "10th Floor+" },
                        ].map((f) => (
                          <SelectCard
                            key={f.value}
                            label={f.label}
                            selected={data.fromFloor === f.value}
                            onClick={() => update("fromFloor", f.value)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Moving TO details (appears after FROM is filled) ── */}
                {data.movingTo !== "Storage" &&
                  data.bedrooms &&
                  (data.propertyType !== "Apartment" || data.fromFloor) && (
                  <>
                    <div className="border-t border-gray-200 my-6" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-3">
                        Moving <span className="text-[#F5C400]">to</span> — {data.movingTo}
                      </p>
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
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-[#1A1A1A] mb-3">What floor is the apartment on?</p>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { value: "Ground", label: "Ground Floor" },
                              { value: "1-3", label: "1st – 3rd Floor" },
                              { value: "4-10", label: "4th – 10th Floor" },
                              { value: "10+", label: "10th Floor+" },
                            ].map((f) => (
                              <SelectCard
                                key={f.value}
                                label={f.label}
                                selected={data.toFloor === f.value}
                                onClick={() => update("toFloor", f.value)}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── STEP 3: Move Size ── */}
            {step === 3 && (
              <div>
                <p className="text-[#F5C400] font-semibold text-xs uppercase tracking-widest mb-2">Step 3 of 5</p>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  What are you moving?
                </h2>
                <p className="text-gray-500 mb-8">Choose the option that best describes the size of your move.</p>
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

            {/* ── STEP 4: Addresses & Date ── */}
            {step === 4 && (
              <div>
                <p className="text-[#F5C400] font-semibold text-xs uppercase tracking-widest mb-2">Step 4 of 5</p>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  Where and when are you moving?
                </h2>
                <p className="text-gray-500 mb-8">
                  Enter your addresses and preferred date.
                </p>

                <div className="space-y-6">
                  {/* Pick-up address */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Pick-up Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={data.from}
                      onChange={(e) => update("from", e.target.value)}
                      placeholder="e.g. 36 Abbott St, Cairns City QLD 4870"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
                    />
                  </div>

                  {/* Drop-off address */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Drop-off Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={data.to}
                      onChange={(e) => update("to", e.target.value)}
                      placeholder="e.g. 122 Ashover Circuit, Brisbane QLD 4108"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
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
                </div>
              </div>
            )}

            {/* ── STEP 5: Contact Details ── */}
            {step === 5 && (
              <div>
                <p className="text-[#F5C400] font-semibold text-xs uppercase tracking-widest mb-2">Step 5 of 5 — Final Step</p>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  Almost done! How can we reach you?
                </h2>
                <p className="text-gray-500 mb-8">
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
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F5C400] transition-colors"
                    />
                  </div>

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
            <div className="flex items-center gap-4 mt-10">
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
                Select an option above to continue — takes about 90 seconds
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

          {/* Middle: trust badges */}
          <div className="relative space-y-3">
            {[
              { icon: "🛡️", label: "Fully Insured", desc: "Public liability & goods in transit" },
              { icon: "⭐", label: "5-Star Rated", desc: "900+ verified Google reviews" },
              { icon: "🚛", label: "10+ Years Experience", desc: "Trusted across QLD" },
              { icon: "✅", label: "No Hidden Fees", desc: "Transparent pricing, always" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom: testimonial */}
          <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#F5C400]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 text-sm italic leading-relaxed">
              &ldquo;R2G made our interstate move from Cairns to Brisbane completely stress-free. Professional,
              on time, and not a single item damaged.&rdquo;
            </p>
            <p className="text-gray-500 text-xs mt-3">— Jamie T., Cairns to Brisbane</p>
          </div>
        </div>
      </div>

      {/* ── Sticky phone widget (bottom-right) ───────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={PHONE_HREF}
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
