"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  heading?: string;
}

export default function FAQ({ items, heading = "Frequently Asked Questions" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F5C400]" />
            <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <div className="w-10 h-1 bg-[#F5C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">{heading}</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                openIndex === i ? "border-[#F5C400]/40 shadow-sm" : "border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#1A1A1A] hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-[#F5C400] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
