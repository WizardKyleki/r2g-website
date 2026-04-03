import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants";

const LPQuoteWidget = dynamic(() => import("@/components/lp/LPQuoteWidget"));
const LPStickyBar = dynamic(() => import("@/components/lp/LPStickyBar"));
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
  title: "Brisbane Removalists - Free Quote in 60 Seconds | R2G Transport",
  description:
    "Brisbane's most trusted removalists. 4.9 stars from 10,000+ Google reviews. Fully insured, no hidden fees. Get your free moving quote in 60 seconds.",
  robots: { index: false, follow: false },
};

const LP_FAQS = [
  {
    question: "How much do removalists cost in Brisbane?",
    answer:
      "Our Brisbane removalist rates start from $179/hr for a 2-person team with truck. The final price depends on your move size, distance, and any extras like packing. We provide clear, upfront quotes with no hidden fees, so you know exactly what you're paying before we arrive.",
  },
  {
    question: "Are your removalists fully insured?",
    answer:
      "Yes. Every R2G move is covered by comprehensive public liability insurance and goods-in-transit cover. Your belongings are protected from the moment we start loading until everything is placed in your new home.",
  },
  {
    question: "Do you cover all Brisbane suburbs?",
    answer:
      "We cover every suburb across Brisbane and South-East Queensland, from the CBD to Logan, Ipswich, Redlands, and Moreton Bay. Our depot is in Archerfield, so we know the local streets, access points, and parking restrictions across the city.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 1 to 2 weeks ahead, especially for weekend moves. If you need a last-minute move, give us a call and we will do our best to fit you in. The sooner you book, the more flexibility you will have with timing.",
  },
];

export default function BrisbaneLandingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-10 sm:pt-10 sm:pb-16">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <Image
              src="/images/logo-r2g-white.png"
              alt="R2G Transport & Storage"
              width={130}
              height={40}
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-3 font-[family-name:var(--font-montserrat)]">
            Removalists Brisbane<br />
            <span className="text-[#F5C400]">Trusted by 10,000+ Families</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
            4.9-star Google rating. Fully insured. No hidden fees.
            Get your free quote in 60 seconds.
          </p>

          {/* Compact trust row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#F5C400]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9/5 Google Rating
            </span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#F5C400]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Fully Insured
            </span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#F5C400]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              10+ Years Experience
            </span>
          </div>

          {/* Quote widget */}
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6">
            <p className="text-lg font-black text-[#1A1A1A] mb-4">
              Where are you moving?
            </p>
            <LPQuoteWidget />
            {/* Social proof at decision point */}
            <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-gray-400">
              <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1">Rated 4.9/5 from 10,000+ moves</span>
            </div>
          </div>

          {/* Phone CTA - prominent tappable button */}
          <a
            href={PHONE_HREF}
            className="mt-4 flex items-center justify-center gap-2.5 w-full border-2 border-white/20 rounded-xl py-3.5 text-white font-semibold text-sm hover:bg-white/5 transition-colors active:bg-white/10"
          >
            <svg
              className="w-5 h-5 text-[#F5C400]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Prefer to talk? Call {PHONE}
          </a>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="py-10 sm:py-14 bg-white">
        <GoogleReviews />
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              Why Brisbane Families Choose R2G
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Your Belongings Are Protected */}
            <div className="bg-white rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 bg-[#F5C400]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-[#F5C400]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base mb-1">
                Your Stuff Is Protected
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Full insurance from the moment we load to the moment we unload.
              </p>
            </div>

            {/* You Pay What We Quote */}
            <div className="bg-white rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 bg-[#F5C400]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-[#F5C400]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base mb-1">
                You Pay What We Quote
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                No surprise fees on moving day. The price is locked in upfront.
              </p>
            </div>

            {/* We Know Your Suburb */}
            <div className="bg-white rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 bg-[#F5C400]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-[#F5C400]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base mb-1">
                We Know Your Suburb
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Local Brisbane team based in Archerfield. We know the streets, access, and parking.
              </p>
            </div>

            {/* Your Furniture Arrives Safe */}
            <div className="bg-white rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 bg-[#F5C400]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-[#F5C400]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base mb-1">
                Furniture Arrives Safe
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Blanket-wrapped, strapped, and handled with care. 10+ years doing this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              How It Works
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Tell us about your move",
                desc: "Enter your addresses above or give us a call. It takes 60 seconds.",
              },
              {
                step: "2",
                title: "Get your free quote",
                desc: "We send you clear, itemised pricing. No hidden costs, no obligation.",
              },
              {
                step: "3",
                title: "We handle everything",
                desc: "Our team arrives on time, wraps your furniture, and treats your belongings like their own.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5C400] flex items-center justify-center shrink-0">
                  <span className="font-black text-[#1A1A1A] text-sm">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-base mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="py-10 sm:py-12 bg-[#F5C400]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-2">
            Ready to get moving?
          </h2>
          <p className="text-sm text-[#1A1A1A]/70 mb-4">
            Weekend spots fill fast. Lock in your preferred date today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold py-3.5 px-8 rounded-xl text-sm hover:bg-black transition-colors w-full sm:w-auto"
            >
              Get My Free Quote
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold py-3.5 px-8 rounded-xl text-sm hover:bg-[#1A1A1A] hover:text-white transition-colors w-full sm:w-auto"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ items={LP_FAQS} heading="Common Questions" />

      {/* ── FINAL CTA + MICRO FOOTER ── */}
      <section className="py-10 sm:py-14 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-black">
              Get Your Free Brisbane Moving Quote
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Fill in your details and we will get back to you within the hour. Weekend dates go quickly.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 mb-10">
            <LPQuoteWidget />
          </div>
          <div className="text-center text-xs text-gray-500 space-y-1 pb-16 lg:pb-0">
            <p>
              {SITE_NAME} &middot; 122 Ashover Circuit, Archerfield QLD 4108
            </p>
            <p>
              <a
                href="/privacy"
                className="underline hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY BAR ── */}
      <LPStickyBar />
    </>
  );
}
