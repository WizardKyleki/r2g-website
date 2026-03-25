import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
const FAQ = dynamic(() => import("@/components/FAQ"));
import dynamic from "next/dynamic";
const HeroQuoteWidget = dynamic(() => import("@/components/HeroQuoteWidget"));
const HeroTrustBadges = dynamic(() => import("@/components/HeroTrustBadges"));
import { PHONE, PHONE_HREF } from "@/lib/constants";
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));
import { OFFICE_DEFAULT_IMAGES } from "@/data/office-locations";

// ─────────────────────────────────────────────────────────────────────────────
// PAGE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const pageConfig = {
  h1: "Office Removalists",
  eyebrow: "Commercial Removalists",
  subtitle:
    "Professional office relocations across Queensland. Minimal downtime, fully insured — trusted by businesses of all sizes.",
  canonicalUrl: "https://www.r2g.com.au/office-removalists",
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // MovingCompany — organisation-level
    {
      "@type": "MovingCompany",
      "@id": "https://www.r2g.com.au/#organization",
      name: "R2G Transport & Storage",
      description:
        "Professional office removalists with 10+ years experience. Commercial relocations across Queensland and Australia with minimal downtime. Fully insured.",
      url: pageConfig.canonicalUrl,
      telephone: "1300 959 498",
      email: "contact@r2g.com.au",
      image: "https://www.r2g.com.au/images/r2g-logo.png",
      areaServed: ["Queensland", "New South Wales", "Victoria", "Australia"],
      location: [
        {
          "@type": "Place",
          name: "R2G Transport & Storage — Cairns",
          address: {
            "@type": "PostalAddress",
            streetAddress: "36 Abbott St",
            addressLocality: "Cairns City",
            addressRegion: "QLD",
            postalCode: "4870",
            addressCountry: "AU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -16.9186,
            longitude: 145.7781,
          },
          telephone: "1300 959 498",
        },
        {
          "@type": "Place",
          name: "R2G Transport & Storage — Brisbane",
          address: {
            "@type": "PostalAddress",
            streetAddress: "122 Ashover Circuit",
            addressLocality: "Archerfield",
            addressRegion: "QLD",
            postalCode: "4108",
            addressCountry: "AU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -27.5665,
            longitude: 153.0085,
          },
          telephone: "1300 959 498",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Office Removalist Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Office & Commercial Relocations",
              description:
                "Professional office moving services including workstation disassembly, IT equipment handling, furniture wrapping, and after-hours availability.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "900",
        bestRating: "5",
      },
    },
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.r2g.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.r2g.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Office Removalists",
          item: pageConfig.canonicalUrl,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    question: "Can you move our office on a weekend to avoid disruption?",
    answer:
      "Absolutely. Weekend and after-hours moves are our specialty for business customers. We understand that every hour of downtime costs money, so we work around your schedule — including evenings, Saturdays, and Sundays.",
  },
  {
    question: "Do you handle computers and IT equipment?",
    answer:
      "Yes. Our team is trained to carefully handle and transport computers, servers, monitors, and other sensitive IT equipment. We use protective wrapping and padding for all electronics. We recommend backing up all data prior to moving as a precaution.",
  },
  {
    question: "Do you help with furniture disassembly and reassembly?",
    answer:
      "Yes — we can disassemble workstations, desks, partitions, and shelving at the old location and reassemble everything at the new office exactly where you need it. Our team brings all necessary tools.",
  },
  {
    question: "How do you plan a large office move?",
    answer:
      "We offer a free pre-move consultation to walk through both locations, plan the logistics, and create a detailed moving schedule that minimises disruption. Our team coordinates every detail — from access arrangements to equipment requirements.",
  },
  {
    question: "Are you insured for commercial moves?",
    answer:
      "Yes. R2G Transport & Storage carries comprehensive public liability insurance and goods-in-transit insurance covering all commercial and office moves. Your business assets are fully protected throughout the relocation.",
  },
  {
    question: "How long does an office move typically take?",
    answer:
      "This depends on the size of your office and the complexity of the move. A small office (5-10 staff) can often be completed in a single day. Larger corporate environments may require a phased approach over a weekend. We'll provide a detailed timeline during our pre-move consultation.",
  },
  {
    question: "Can you move specialist equipment like medical or laboratory gear?",
    answer:
      "Yes — we have experience moving specialist equipment including medical, dental, and laboratory items. We take extra precautions with sensitive equipment and can coordinate with your equipment suppliers if needed.",
  },
  {
    question: "Do you provide storage for office furniture and equipment?",
    answer:
      "Yes — R2G offers secure short and long-term storage in Cairns and Brisbane. This is ideal if there is a gap between your move-out and move-in dates, or if you need to store surplus furniture and equipment. Contact us to discuss storage options.",
  },
];

// Append FAQ schema into the @graph
jsonLdSchema["@graph"].push({
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
} as any);

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    absolute: "Office Removalists | Fully Insured, Zero Downtime",
  },
  description:
    "Professional office removalists with 10+ years experience. Weekend & after-hours moves, fully insured, minimal downtime. Get a free quote today.",
  keywords: [
    "office removalists",
    "commercial removalists",
    "office movers",
    "business relocation",
    "office relocation",
    "commercial moving",
  ],
  alternates: { canonical: pageConfig.canonicalUrl },
  openGraph: {
    title: "Office Removalists | R2G Transport & Storage",
    description:
      "Professional office removalists. Weekend & after-hours moves, fully insured, minimal downtime. Get a free quote today.",
    url: pageConfig.canonicalUrl,
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function OfficeRemovalistsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#F5C400] transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/services" className="hover:text-[#F5C400] transition-colors">Services</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#F5C400]">Office Removalists</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left: heading + subtext + phone + trust badges ── */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  {pageConfig.eyebrow}
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-5">
                {pageConfig.h1}
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {pageConfig.subtitle}
              </p>

              {/* Widget — mobile only (between subtext and phone) */}
              <div className="lg:hidden mb-8">
                <HeroQuoteWidget />
              </div>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 border-2 border-[#F5C400]/25 hover:border-[#F5C400] text-white hover:text-[#F5C400] font-bold px-7 py-3.5 rounded-full text-base transition-all mb-8"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Prefer to call? {PHONE}
              </a>

              <HeroTrustBadges />
            </div>

            {/* ── Right: widget — desktop only ── */}
            <div className="hidden lg:flex flex-col justify-center">
              <p className="text-[#F5C400] text-xs font-semibold uppercase tracking-widest mb-3 pl-1">
                Get an instant quote
              </p>
              <HeroQuoteWidget />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST BADGES BAR ─────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                title: "Fully Insured",
                description: "Comprehensive public liability & goods-in-transit insurance on every commercial move",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
                title: "5-Star Rated",
                description: "4.9 stars across 900+ verified Google reviews",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                title: "10+ Years Experience",
                description: "Trusted by hundreds of families and businesses across Australia",
              },
            ].map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg shadow-black/[0.04] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F5C400]/10 flex items-center justify-center text-[#F5C400] mb-4 group-hover:bg-[#F5C400]/20 transition-colors">
                  {badge.icon}
                </div>
                <p className="font-black text-[#1A1A1A] text-xl mb-2">{badge.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MAIN CONTENT + STICKY SIDEBAR ─────────────────────────── */}
      <section className="bg-gray-50/50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">Commercial Moving</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-8">
                Office Relocations Done Right
              </h2>

              {/* Full-width hero image */}
              <div className="relative rounded-3xl overflow-hidden aspect-square mb-8 group">
                <Image
                  src={OFFICE_DEFAULT_IMAGES.hero}
                  alt="R2G professional office removalists relocating commercial furniture and IT equipment in Queensland"
                  title="R2G Office Removalists — Commercial Relocations Australia"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="bg-[#F5C400] text-[#1A1A1A] text-xs font-black px-4 py-2 rounded-full">
                    10+ Years Commercial Experience
                  </span>
                </div>
              </div>

              {/* 3 feature cards with bullet checklists */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    title: "Any Size Office",
                    bullets: [
                      "Small offices (5 staff) to large corporate",
                      "Workstation disassembly & IT transport",
                      "Same professionalism on every job",
                    ],
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    ),
                    title: "Careful Planning",
                    bullets: [
                      "Detailed schedule & timeline creation",
                      "Precise execution, minimal disruption",
                      "Proven track record across QLD & Australia",
                    ],
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Expert Coordination",
                    bullets: [
                      "Work with owners & office managers",
                      "After-hours access coordination",
                      "Fully insured with dedicated coordinator",
                    ],
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-white shadow-lg shadow-black/[0.04] border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F5C400]/10 flex items-center justify-center text-[#F5C400] mb-4 group-hover:bg-[#F5C400]/20 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-[#1A1A1A] text-lg mb-3">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-gray-500 text-sm">
                          <svg className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Scheduling features — compact horizontal cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Weekend Moves",
                    desc: "Available Saturdays and Sundays to minimise business disruption.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "After-Hours",
                    desc: "Evening moves to keep your business running during the day.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    ),
                    title: "Full Planning",
                    desc: "Pre-move consultation to map out every step of your relocation.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white shadow-lg shadow-black/[0.04] border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-2xl bg-[#F5C400]/10 flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400]/20 transition-colors">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-[#1A1A1A]">{item.title}</h4>
                    </div>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Full-width content image */}
              <div className="relative rounded-3xl overflow-hidden aspect-square mb-8 group">
                <Image
                  src={OFFICE_DEFAULT_IMAGES.content}
                  alt="R2G office movers carefully wrapping and packing commercial office equipment for relocation"
                  title="R2G Office Moving Services — 900+ Moves Completed"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="bg-[#1A1A1A] text-white text-xs font-black px-4 py-2 rounded-full">
                    900+ Office Moves Completed
                  </span>
                </div>
              </div>

              {/* Services checklist — single elevated card */}
              <div className="bg-white shadow-lg shadow-black/[0.04] border border-gray-100 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Our Office Move Services Include</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Pre-move site assessment",
                    "Workstation disassembly & reassembly",
                    "Safe IT equipment handling",
                    "Furniture wrapping & protection",
                    "Labelling & inventory management",
                    "After-hours & weekend availability",
                    "Secure document handling",
                    "Fully insured transit",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-[#1A1A1A] rounded-3xl p-8 shadow-2xl">
                  <p className="text-white font-black text-xl mb-1">Get an Office Move Quote</p>
                  <p className="text-gray-400 text-sm mb-5">
                    No obligation. We&apos;ll get back to you within hours.
                  </p>

                  <div className="space-y-3 mb-5">
                    <Link
                      href="/quote"
                      className="flex items-center justify-center w-full bg-[#F5C400] hover:bg-[#e0b400] text-[#1A1A1A] font-bold py-3.5 rounded-full text-sm tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Request a Quote Online
                    </Link>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-[#F5C400]/60 text-white hover:text-[#F5C400] font-semibold py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call {PHONE}
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5 mb-5 space-y-2.5">
                    {["Fully insured", "No hidden fees", "Free site assessment"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-3">
                      Related Services
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: "Removalists Cairns", href: "/removalists-cairns" },
                        { label: "Removalists Brisbane", href: "/removalists-brisbane" },
                        { label: "Interstate Removals", href: "/interstate-removalists" },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 text-gray-400 hover:text-[#F5C400] text-sm transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
            {/* LEFT — Image */}
            <div className="relative h-[420px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={OFFICE_DEFAULT_IMAGES.howItWorks}
                alt="R2G office removalists team preparing workstations and IT equipment for a commercial office move"
                title="R2G Professional Office Relocation Service — How It Works"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* RIGHT — Steps */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">Simple Process</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-8">
                How Your Office Move Works
              </h2>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Consultation & Quote",
                    text: "Contact us online or call 1300 959 498. We'll arrange a free site assessment of your current and new office, then provide a detailed quote with a clear timeline and no hidden fees.",
                  },
                  {
                    number: "02",
                    title: "Pack & Relocate",
                    text: "Our professional office removalists arrive on schedule — including after-hours or weekends. We carefully wrap, label, and transport all furniture, IT equipment, and documents to your new location.",
                  },
                  {
                    number: "03",
                    title: "Set Up & Settle In",
                    text: "We unload and position everything exactly where you need it — workstations, desks, shelving, and equipment. Your team walks in ready to work. We don't leave until you're completely satisfied.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#F5C400] flex items-center justify-center text-[#1A1A1A] font-black text-lg shadow-lg shadow-[#F5C400]/25 shrink-0">
                      {step.number}
                    </div>
                    <div className="pt-3">
                      <p className="text-lg font-bold text-[#1A1A1A] mb-1">{step.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT'S INCLUDED ──────────────────────────────────────── */}
      <section className="bg-gray-50/50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Center-aligned heading with yellow bars */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-1 bg-[#F5C400] rounded-full" />
              <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">Full Service</span>
              <div className="w-12 h-1 bg-[#F5C400] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">
              What&apos;s Included in Every Office Move
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Every R2G commercial relocation comes with a comprehensive service package designed
              to minimise downtime and protect your business assets. No surprises, no hidden costs.
            </p>
          </div>

          {/* 5-column grid of small elevated cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Pre-move site assessment",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
              },
              {
                label: "Detailed moving schedule",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
              },
              {
                label: "Loading & unloading",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
              },
              {
                label: "Furniture wrapping",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
              {
                label: "Workstation reassembly",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
              },
              {
                label: "IT equipment handling",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
              },
              {
                label: "Secure documents",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
              },
              {
                label: "Labelling & tracking",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>,
              },
              {
                label: "After-hours availability",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              },
              {
                label: "Full insurance coverage",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white shadow-lg shadow-black/[0.04] border border-gray-100 rounded-3xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5C400]/10 flex items-center justify-center text-[#F5C400] mx-auto mb-3">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Centered pill CTA */}
          <div className="text-center mt-10">
            <Link
              href="/quote"
              className="inline-flex items-center bg-[#F5C400] hover:bg-[#e0b400] text-[#1A1A1A] font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: GOOGLE REVIEWS ─────────────────────────────────────────── */}
      <GoogleReviews />

      {/* ── SECTION 7: FAQ ──────────────────────────────────────────────────── */}
      <FAQ items={faqItems} heading="Office Removalists FAQ" />

      {/* ── SECTION 8: FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F5C400] py-24 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: "radial-gradient(circle at 10% 20%, #1A1A1A 0%, transparent 50%), radial-gradient(circle at 90% 80%, #1A1A1A 0%, transparent 50%)" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">
            Planning an Office Move?
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote and we&apos;ll be in touch as soon as possible — usually within the hour.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-[#1A1A1A] text-white hover:bg-black font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get My Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Spacer so mobile sticky bar doesn't cover the CTA */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
