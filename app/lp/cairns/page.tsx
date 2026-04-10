import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants";
import LPQuoteWidget from "@/components/lp/LPQuoteWidget";
import LPStickyBar from "@/components/lp/LPStickyBar";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: "Cairns Removalists | Trusted Local Movers | R2G",
  description:
    "Trusted Cairns removalists with our own team and trucks. Fully insured, no hidden fees. 900+ five-star reviews. Free quote in minutes.",
  robots: { index: false, follow: false },
};

const SERVICES = [
  {
    title: "House Moves",
    desc: "Full house removals across Cairns and Far North Queensland. We handle everything from a studio apartment to a 5-bedroom home. Careful wrapping, safe loading, and placement in your new home.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    title: "Furniture Removals",
    desc: "Need specific items moved? We move sofas, beds, fridges, washing machines, dining tables, and bulky furniture across Cairns. No minimum load.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    ),
  },
  {
    title: "Office Relocations",
    desc: "Minimal downtime business moves. We relocate desks, IT equipment, filing cabinets, and office furniture. Available after hours and weekends.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    title: "Packing Services",
    desc: "Don't have time to pack? Our trained packers wrap and box everything for you using quality materials. Fragile items, artwork, and electronics handled with care.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    ),
  },
  {
    title: "Interstate Moves",
    desc: "Moving out of Cairns? We run regular services to Brisbane, Townsville, Sydney, Melbourne, and everywhere in between. Door-to-door, fully insured.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
  },
  {
    title: "Storage Solutions",
    desc: "Need somewhere to store your belongings between moves? Secure, clean storage at our Cairns depot. Short or long term, flexible access.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    ),
  },
];

const WHATS_INCLUDED = [
  "Experienced, uniformed movers",
  "Fully equipped moving truck",
  "Furniture blankets and trolleys",
  "Shrink wrap for upholstered items",
  "Mattress covers",
  "Assembly and disassembly of beds",
  "Public liability insurance",
  "Goods-in-transit insurance",
];

const CAIRNS_SUBURBS = [
  "Cairns City", "Cairns North", "Parramatta Park", "Manunda", "Mooroobool",
  "Whitfield", "Edge Hill", "Kanimbla", "Brinsmead", "Freshwater",
  "Stratford", "Trinity Beach", "Palm Cove", "Smithfield", "Yorkeys Knob",
  "Machans Beach", "Holloways Beach", "Kewarra Beach", "Clifton Beach", "Redlynch",
  "Gordonvale", "Edmonton", "Bentley Park", "White Rock", "Woree",
  "Earlville", "Westcourt", "Portsmith", "Manoora", "Bayview Heights",
];

const LP_FAQS = [
  {
    question: "How much do removalists cost in Cairns?",
    answer:
      "Moving costs depend on the size of your home, access at both locations, and the distance between them. Request a free quote and we will give you a clear, written price with no hidden fees, call-out charges, or fuel surcharges. You only pay for the time your move takes.",
  },
  {
    question: "What happens after I submit the quote form?",
    answer:
      "A real member of our Cairns team will call you within 15 minutes during business hours (9am to 5pm). We confirm your move details, answer any questions you have, and give you a clear price over the phone. You also receive a written quote by email so you have everything in writing before making any decisions.",
  },
  {
    question: "Are your removalists fully insured?",
    answer:
      "Yes. Every R2G move is covered by comprehensive public liability insurance and goods-in-transit cover. Your belongings are protected from the moment we start loading until everything is placed in your new home. We can provide a copy of our certificate of currency on request.",
  },
  {
    question: "Are you a real Cairns moving company or a booking platform?",
    answer:
      "We are a real, locally owned Cairns removalist business, not a broker or marketplace that passes your details to third parties. You deal directly with our own team and our own trucks from start to finish. Our depot is at 36 Abbott St, Cairns City.",
  },
  {
    question: "How far in advance should I book movers in Cairns?",
    answer:
      "We recommend booking at least 1 to 2 weeks ahead, especially for weekend moves. If you need a last-minute or same-day move, call us directly on 1300 959 498 and we will do our best to accommodate you. The earlier you book, the more flexibility you have with timing.",
  },
  {
    question: "What suburbs in Cairns do you service?",
    answer:
      "We cover all of Greater Cairns including the CBD, Northern Beaches, Redlynch Valley, Edmonton, Gordonvale, the Tablelands, and everywhere in between. Our depot is in Cairns City so we know every corner of the region. Not sure if we cover your area? Call us and we will confirm straight away.",
  },
  {
    question: "Do you move heavy or bulky items like pianos and pool tables?",
    answer:
      "We move all standard household furniture including fridges, washing machines, large sofas, and gym equipment. For specialty items like pianos and pool tables, please mention this when requesting your quote so we can ensure we send the right team and equipment.",
  },
  {
    question: "Is there a minimum charge?",
    answer:
      "Yes, there is a 2-hour minimum for all bookings. This covers travel to your location, the move itself, and travel from the destination. Most local Cairns moves take between 2 and 5 hours depending on the size of the home. Request a quote for your exact price.",
  },
];

export default function CairnsLandingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "R2G Transport & Storage",
    description: "Cairns removalists offering local, interstate and office moves. Fully insured with 900+ five-star reviews.",
    telephone: "1300 959 498",
    url: "https://www.r2g.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "36 Abbott St",
      addressLocality: "Cairns City",
      addressRegion: "QLD",
      postalCode: "4870",
      addressCountry: "AU",
    },
    areaServed: "Cairns",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "900",
      bestRating: "5",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden">
        {/* Background truck image */}
        <div className="absolute inset-0">
          <Image
            src="/images/r2g-removal-truck-cairns.webp"
            alt=""
            fill
            className="object-cover object-center opacity-[0.12]"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pt-6 pb-10 sm:pt-10 sm:pb-16">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <Image
              src="/images/logo-r2g-white.png"
              alt="R2G Transport & Storage Cairns"
              width={130}
              height={40}
              priority
            />
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left: headline + content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-tight mb-4 font-[family-name:var(--font-montserrat)]">
                Cairns Removalists<br />
                <span className="text-[#F5C400]">Trusted Local Movers</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                R2G is a locally owned Cairns moving company with our own team and trucks based in Cairns City.
                Whether you need house movers, furniture removalists, or a full packing service, we handle your
                move from start to finish. Fully insured, no hidden fees, and rated 4.9 stars by 900+ families.
              </p>

              {/* Trust row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { value: "4.9", label: "Google Rating" },
                  { value: "900+", label: "Reviews" },
                  { value: "10K+", label: "Moves Done" },
                  { value: "10+", label: "Years Operating" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center">
                    <div className="text-[#F5C400] font-black text-xl">{stat.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#F5C400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Fully Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#F5C400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  AFRA Member
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#F5C400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Servicing All Cairns Suburbs
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#F5C400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  7 Days a Week
                </span>
              </div>
            </div>

            {/* Right: quote form */}
            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6">
                <p className="text-lg font-black text-[#1A1A1A] mb-1">Get your free moving quote</p>
                <p className="text-sm text-gray-500 mb-4">
                  No obligation. A real person calls you back in 15 minutes.
                </p>
                <LPQuoteWidget />
                <div className="flex items-start gap-2 mt-4 bg-gray-50 rounded-xl px-3 py-2.5">
                  <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Your details are only used to prepare your quote. We never share your information with third parties.
                  </p>
                </div>
              </div>
              {/* Phone CTA */}
              <a
                href={PHONE_HREF}
                className="mt-3 flex items-center justify-center gap-2.5 w-full border-2 border-white/20 rounded-xl py-3.5 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Prefer to talk? Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-10 sm:py-14 bg-[#F9F9F9]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              What is Included in Every Move
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Everything you need for a smooth move, included as standard. No add-ons or extras.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-72 sm:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-cairns-removalists-loading-truck.webp"
                alt="R2G removalists loading truck in Cairns"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {WHATS_INCLUDED.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1A1A1A] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              Cairns Moving Services
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Local moves, interstate relocations, office moves, and more. One company, every type of move.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-11 h-11 bg-[#F5C400]/10 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#F5C400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {service.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-base mb-1.5">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-10 sm:py-14 bg-[#F9F9F9]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              How to Book Cairns Removalists
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Three simple steps from quote to move day. No automated emails or being passed around.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Request a free quote",
                desc: "Fill in your moving addresses and preferred date above. No payment needed, no commitment required. We just need the basics to give you an accurate price.",
              },
              {
                step: "2",
                title: "We call you within 15 minutes",
                desc: "A real member of our Cairns team calls you back (not an automated system). We confirm your details, answer any questions, and give you a clear price over the phone.",
              },
              {
                step: "3",
                title: "Receive your written quote",
                desc: "Everything in writing: what is included, the price, and your confirmed date. No pressure to book. Compare us against other Cairns removalists and decide when you are ready.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#F5C400] flex items-center justify-center shrink-0">
                  <span className="font-black text-[#1A1A1A] text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
            What Cairns Families Say About Us
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            4.9 stars from 900+ verified Google reviews. Real feedback from real customers.
          </p>
        </div>
        <GoogleReviews />
      </section>

      {/* ── WHY CHOOSE R2G ── */}
      <section className="py-10 sm:py-14 bg-[#F9F9F9]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              Why Choose R2G Over Other Cairns Movers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "We Are Not a Broker",
                desc: "Many online removalist companies are actually brokers that sell your details to whoever is available. R2G is a real moving company. Our own team, our own trucks, our own depot in Cairns City. You deal with us directly from quote to move day.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
              },
              {
                title: "Fully Licensed and Insured",
                desc: "Every move is covered by comprehensive public liability and goods-in-transit insurance. Your furniture, appliances, and personal belongings are protected from the moment we load them to the moment we place them in your new home.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                title: "Transparent Pricing",
                desc: "We send you a clear, written quote before anything is booked. What we quote is what you pay. No verbal estimates that change on the day, no fuel surcharges, and no hidden call-out fees.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
              },
              {
                title: "10,000+ Families Moved",
                desc: "Over 10 years and 10,000 successful moves across Cairns and Queensland. Our 4.9-star Google rating is from 900+ real families who trusted us with their homes, furniture, and belongings.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
              },
            ].map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 bg-[#F5C400]/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#F5C400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {pillar.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-base mb-1">{pillar.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBURB COVERAGE ── */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              Removalists Covering All Cairns Suburbs
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              From the CBD to the Northern Beaches and Tablelands. Our local team knows every street, access point, and parking restriction.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {CAIRNS_SUBURBS.map((suburb) => (
              <span
                key={suburb}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
              >
                {suburb}
              </span>
            ))}
            <span className="px-3 py-1.5 bg-[#F5C400]/20 text-[#1A1A1A] text-xs font-bold rounded-full">
              + all Greater Cairns
            </span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 sm:py-14 bg-[#F9F9F9]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {LP_FAQS.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-base font-bold text-[#1A1A1A] list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-0 text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-10 sm:py-14 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-black">
              Get Your Free Cairns Moving Quote
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              A real person from our Cairns team will call you within 15 minutes.
              No obligation. Take all the time you need to decide.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 mb-4">
            <LPQuoteWidget />
          </div>
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2.5 w-full border-2 border-white/20 rounded-xl py-3.5 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Or call us: {PHONE}
          </a>
          <div className="text-center text-xs text-gray-500 space-y-1 mt-6 pb-16 lg:pb-0">
            <p>{SITE_NAME} &middot; 36 Abbott St, Cairns City QLD 4870</p>
            <p>ABN registered. Licensed and fully insured removalists.</p>
            <p>
              <Link href="/privacy" className="underline hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY BAR ── */}
      <LPStickyBar />
    </>
  );
}
