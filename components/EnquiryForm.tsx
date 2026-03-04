"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (key: string, value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try calling us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[320px]">
        <div className="w-14 h-14 bg-[#F5C400] rounded-full flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-[#1A1A1A] mb-2">Message Sent!</h3>
        <p className="text-gray-500">Thanks! We&apos;ll be in touch within 1 business day.</p>
      </div>
    );
  }

  const input =
    "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#F5C400] transition-colors";
  const label = "block text-sm font-semibold text-[#1A1A1A] mb-2";

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
      <h2 className="text-xl font-black text-[#1A1A1A] mb-6">Send an Enquiry</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={label}>
              Full Name or Company Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={fields.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Sarah Thompson or Acme Ltd"
              required
              className={input}
            />
          </div>
          <div>
            <label className={label}>
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              value={fields.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="04XX XXX XXX"
              required
              className={input}
            />
          </div>
        </div>

        <div>
          <label className={label}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            required
            className={input}
          />
        </div>

        <div>
          <label className={label}>
            Topic <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={fields.topic}
            onChange={(e) => update("topic", e.target.value)}
            placeholder="What would you like to discuss?"
            required
            className={input}
          />
        </div>

        <div>
          <label className={label}>
            Description <span className="text-red-400">*</span>
          </label>
          <textarea
            value={fields.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Tell us more details..."
            required
            rows={6}
            className={`${input} resize-none`}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#F5C400] hover:bg-[#d4a900] disabled:opacity-50 disabled:cursor-not-allowed text-[#1A1A1A] font-black py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          {submitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
