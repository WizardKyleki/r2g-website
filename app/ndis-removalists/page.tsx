import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/FAQ"));
const HeroQuoteWidget = dynamic(() => import("@/components/HeroQuoteWidget"));
const HeroTrustBadges = dynamic(() => import("@/components/HeroTrustBadges"));
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));

import { PHONE, PHONE_HREF, RATING_VALUE, REVIEW_COUNT } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────────────────────
const ndisFaqs = [
  {
    question: "What is an NDIS removalist?",
    answer:
      "An NDIS removalist is a moving company that works with NDIS participants and understands how plan-funded relocations work. They provide patient, supportive services tailored to people with disabilities, and handle NDIS-compliant invoicing so claims are straightforward.",
  },
  {
    question: "Can I use my NDIS funding for removalist services?",
    answer:
      "Yes. NDIS participants can use plan funding for removalist services when the move is related to disability support needs. The cost is typically covered under Core Supports (Assistance with Daily Life) or Capacity Building (Improved Daily Living). Check with your plan manager or support coordinator to confirm your specific funding allocation.",
  },
  {
    question: "Does R2G work with plan managers and support coordinators?",
    answer:
      "Yes. R2G works directly with plan managers, support coordinators, and Local Area Coordinators to arrange NDIS moves. We handle the quoting, invoicing, and paperwork so participants can focus on settling into their new home.",
  },
  {
    question: "What areas do you cover for NDIS removals?",
    answer:
      "R2G provides NDIS removals across Cairns, Brisbane, Gold Coast, Sunshine Coast, Townsville, and interstate. We cover over 800 suburbs across Queensland and can arrange NDIS-funded interstate relocations to any major Australian city.",
  },
  {
    question: "How do I book an NDIS removal with R2G?",
    answer:
      "Call 1300 959 498 or request a free quote at r2g.com.au/quote. Let us know you are an NDIS participant and we will guide you through the process, including liaising with your plan manager for pre-approval if needed.",
  },
  {
    question: "Is R2G insured for NDIS moves?",
    answer:
      "Yes. Every R2G move includes comprehensive public liability insurance and goods-in-transit cover. Mobility aids, medical equipment, and specialist devices are all protected from pickup to delivery.",
  },
  {
    question: "Do I need to use an NDIS-registered provider?",
    answer:
      "If your plan is NDIA-managed, you must use a registered NDIS provider. If your plan is plan-managed or self-managed, you have more flexibility and can choose any qualified removalist as long as the service is reasonable and necessary. Choosing a removalist with NDIS experience makes the process smoother either way.",
  },
  {
    question: "Can NDIS funding cover storage as well?",
    answer:
      "In some cases, yes. If there is a gap between your move-out and move-in dates and the storage is directly related to your disability-funded relocation, it may be covered. R2G offers secure storage in Cairns and Brisbane that can be included in your NDIS moving quote.",
  },
  {
    question: "What if my plan does not have enough funding for the move?",
    answer:
      "If your current plan does not have sufficient funding, speak with your support coordinator about requesting a plan review. If the move is directly related to your disability needs, the NDIA may approve additional funding. Start this process early as plan reviews can take several weeks.",
  },
  {
    question: "Will your team handle mobility equipment and medical devices?",
    answer:
      "Yes. Our team is trained to carefully handle wheelchairs, hoists, hospital beds, ceiling track equipment, and other mobility aids. We use protective wrapping and secure tie-downs to ensure everything arrives safely at your new home.",
  },
  {
    question: "Can you coordinate with support workers on moving day?",
    answer:
      "Absolutely. We regularly coordinate with support workers, occupational therapists, and family members on moving day. We schedule around therapy sessions and can arrange arrival times that suit the participant and their support team.",
  },
  {
    question: "How far in advance should I book an NDIS move?",
    answer:
      "We recommend booking at least 2-3 weeks in advance, as NDIS moves sometimes require plan manager pre-approval which can take a few days. For interstate NDIS relocations, 4-6 weeks notice is ideal. Call us as early as possible and we will work around your timeline.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "NDIS registered removalists helping participants relocate across Queensland and interstate. Fully insured, experienced with disability-related moves, and NDIS-compliant invoicing.",
  url: "https://www.r2g.com.au/ndis-removalists",
  telephone: "1300 959 498",
  email: "contact@r2g.com.au",
  image: "https://www.r2g.com.au/images/r2g-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "122 Ashover Circuit",
    addressLocality: "Archerfield",
    addressRegion: "QLD",
    postalCode: "4108",
    addressCountry: "AU",
  },
  areaServed: [
    "Cairns",
    "Brisbane",
    "Gold Coast",
    "Sunshine Coast",
    "Townsville",
    "Queensland",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NDIS Removalist Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NDIS Local Removals",
          description:
            "Plan-funded local moving services for NDIS participants across Queensland.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NDIS Interstate Removals",
          description:
            "NDIS-funded interstate relocations between major Australian cities.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING_VALUE,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
  },
  sameAs: [
    "https://www.facebook.com/r2gtransport",
    "https://www.instagram.com/r2gtransport",
    "https://www.google.com/maps?cid=11773202456138120338",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ndisFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "NDIS Removalists",
      item: "https://www.r2g.com.au/ndis-removalists",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    absolute: "NDIS Registered Removalists | Trusted NDIS Movers QLD",
  },
  description:
    "NDIS registered removalists in QLD. Fully insured, plan-funded support, NDIS-compliant invoicing. Cairns, Brisbane, Gold Coast. Free quote.",
  keywords: [
    "ndis removalists",
    "ndis moving services",
    "ndis funded removalists",
    "ndis movers",
    "ndis removalists cairns",
    "ndis removalists brisbane",
    "ndis removalists gold coast",
    "disability moving services",
    "ndis registered removalists",
    "ndis removalists queensland",
  ],
  alternates: { canonical: "https://www.r2g.com.au/ndis-removalists" },
  openGraph: {
    title: "NDIS Registered Removalists | R2G Transport & Storage",
    description:
      "NDIS registered removalists across Queensland. Fully insured, plan-funded support, NDIS-compliant invoicing. Free quote.",
    url: "https://www.r2g.com.au/ndis-removalists",
    type: "website",
    images: [
      {
        url: "https://www.r2g.com.au/images/Registerd-NDIS-Provider.webp",
        width: 1200,
        height: 630,
        alt: "R2G Transport & Storage - Registered NDIS Removalists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Registered Removalists | R2G Transport & Storage",
    description:
      "NDIS registered removalists across Queensland. Fully insured, plan-funded support. Free quote.",
    images: ["https://www.r2g.com.au/images/Registerd-NDIS-Provider.webp"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function NdisRemovalistsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-gray-500 mb-8"
          >
            <Link href="/" className="hover:text-[#F5C400] transition-colors">
              Home
            </Link>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-400">Services</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-[#F5C400]">NDIS Removalists</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left: heading + subtext + phone + trust badges */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  NDIS Removalist Services
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
                NDIS Removalists
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Professional, patient removalists for NDIS participants across
                Queensland. We work with plan managers and support coordinators
                to make your move stress-free. Fully insured, NDIS-compliant
                invoicing, and trusted by hundreds of families.
              </p>

              {/* Widget mobile only */}
              <div className="lg:hidden mb-8">
                <HeroQuoteWidget />
              </div>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 border-2 border-white/25 hover:border-[#F5C400] text-white hover:text-[#F5C400] font-bold px-7 py-3.5 rounded-lg text-base transition-all mb-8"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Prefer to call? {PHONE}
              </a>

              <HeroTrustBadges />
            </div>

            {/* Right: widget desktop only */}
            <div className="hidden lg:flex flex-col justify-center">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3 pl-1">
                Get a free NDIS moving quote
              </p>
              <HeroQuoteWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST BADGES BAR ─────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Fully Insured",
                description:
                  "Comprehensive public liability and goods-in-transit insurance covering mobility aids and medical equipment",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "NDIS Experienced",
                description:
                  "Works with plan managers, support coordinators, and families. NDIS-compliant invoicing included.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
                title: "5-Star Rated",
                description:
                  "4.9 stars across 900+ verified Google reviews from families across Queensland",
              },
            ].map((badge) => (
              <div
                key={badge.title}
                className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors group"
              >
                <svg
                  aria-hidden="true"
                  className="absolute top-0 right-0 text-[#F5C400] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                >
                  <path d="M0 0 L36 0 L36 36 Z" opacity="0.18" />
                </svg>
                <div className="text-[#F5C400] mb-4 group-hover:scale-110 transition-transform">
                  {badge.icon}
                </div>
                <p className="font-bold text-[#1A1A1A] text-lg mb-2">
                  {badge.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  About Our NDIS Service
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                Removalists Who Understand NDIS Moves
              </h2>

              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/Registerd-NDIS-Provider.webp"
                  alt="R2G Transport and Storage - Registered NDIS Provider"
                  title="R2G Registered NDIS Removalists Queensland"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Moving home is stressful for anyone, but for people living with
                  a disability it can be especially challenging. R2G Transport
                  &amp; Storage provides professional NDIS removalist services
                  designed around the unique needs of participants and their
                  support teams.
                </p>
                <p>
                  We work with NDIS plan managers, support coordinators, and
                  Local Area Coordinators to arrange every detail of the move.
                  From quoting and pre-approval through to NDIS-compliant
                  invoicing, we handle the administrative side so participants
                  and their families can focus on settling in.
                </p>
                <p>
                  Our team is trained to carefully handle mobility aids,
                  wheelchairs, hoists, hospital beds, ceiling track equipment,
                  and other specialist devices. We use protective wrapping and
                  secure tie-downs for every piece of equipment, and we
                  coordinate with support workers and therapists to make sure
                  moving day runs smoothly.
                </p>
                <p>
                  Whether the move is to more accessible housing, closer to
                  essential services, or transitioning from supported
                  accommodation, we provide the patience, care, and
                  professionalism that NDIS participants deserve. No rush, no
                  pressure, and no hidden fees.
                </p>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-[#252525] border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-black text-xl mb-1">
                    Get a Free NDIS Quote
                  </p>
                  <p className="text-gray-400 text-sm mb-5">
                    We handle plan manager invoicing and paperwork.
                  </p>

                  <div className="space-y-3 mb-5">
                    <Link
                      href="/quote"
                      className="flex items-center justify-center w-full bg-[#F5C400] hover:bg-[#e0b400] text-[#1A1A1A] font-bold py-3.5 rounded-lg text-sm tracking-wide transition-colors"
                    >
                      Request a Quote Online
                    </Link>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-[#F5C400]/60 text-white hover:text-[#F5C400] font-semibold py-3.5 rounded-lg text-sm transition-colors"
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

                  <div className="border-t border-white/10 pt-5 mb-5 space-y-2.5">
                    {[
                      "NDIS-compliant invoicing",
                      "Fully insured",
                      "No hidden fees",
                      "Equipment specialists",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#F5C400] shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
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
                        {
                          label: "Removalists Brisbane",
                          href: "/removalists-brisbane",
                        },
                        {
                          label: "Removalists Cairns",
                          href: "/removalists-cairns",
                        },
                        {
                          label: "Interstate Removals",
                          href: "/interstate-removalists",
                        },
                        {
                          label: "Storage Solutions",
                          href: "/storage-brisbane",
                        },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 text-gray-400 hover:text-[#F5C400] text-sm transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
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

      {/* ── SECTION 4: NDIS FUNDING GUIDE ───────────────────────────────────── */}
      <section className="bg-[#FFFBEB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
                Funding Guide
              </span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
              Can the NDIS Pay for Removalists?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Yes. Under the right circumstances, the NDIS can fund removalist
              services as a reasonable and necessary support. Here are the
              funding categories that may apply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Core Supports",
                subtitle: "Assistance with Daily Life",
                text: "Covers help with everyday tasks, including moving to a new home when the relocation is disability-related. This is the most common funding category used for removalist services.",
              },
              {
                title: "Capital Supports",
                subtitle: "Assistive Technology",
                text: "May cover the transport and setup of specialist equipment like hoists, ceiling tracks, modified furniture, and other assistive technology that needs professional handling.",
              },
              {
                title: "Capacity Building",
                subtitle: "Improved Daily Living",
                text: "Can fund support that helps participants live more independently, including transitioning to a new, more accessible home or moving closer to essential services.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#F5C400] transition-colors"
              >
                <p className="font-black text-[#1A1A1A] text-lg mb-1">
                  {card.title}
                </p>
                <p className="text-[#F5C400] text-sm font-semibold mb-3">
                  {card.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#F5C400]/20 border-l-4 border-[#F5C400] rounded-r-2xl p-5 max-w-3xl mx-auto">
            <p className="font-bold text-[#1A1A1A] text-sm mb-1">
              Check your plan first
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Before booking a removalist, speak with your plan manager, support
              coordinator, or Local Area Coordinator (LAC) to confirm that
              removalist services are covered under your current NDIS plan. The
              funding category and available budget will determine what can be
              claimed.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT'S INCLUDED ──────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
                Our Service
              </span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
              What Our NDIS Removalist Service Includes
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need for a safe, supported move.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Full packing and unpacking",
              "Mobility aid and wheelchair handling",
              "Medical equipment transport",
              "Furniture disassembly and reassembly",
              "Protective wrapping for all items",
              "Flexible scheduling around therapy",
              "Coordination with support workers",
              "Door-to-door service, no hidden fees",
              "NDIS-compliant invoicing",
              "Plan manager liaison and pre-approval",
              "Short and long-term storage options",
              "Interstate NDIS relocations",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200"
              >
                <svg
                  className="w-4 h-4 text-[#F5C400] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  Simple Process
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
                How Your NDIS Move Works
              </h2>
              <div className="flex mb-8">
                <svg
                  aria-hidden="true"
                  width="100"
                  height="8"
                  viewBox="0 0 100 8"
                  fill="none"
                >
                  <path
                    d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4"
                    stroke="#F5C400"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Contact Us and Get a Quote",
                    text: "Call 1300 959 498 or request a quote online. Let us know you are an NDIS participant and tell us about your move. We will provide a clear, written quote that your plan manager can use for pre-approval.",
                  },
                  {
                    number: "02",
                    title: "We Coordinate with Your Support Team",
                    text: "We work directly with your plan manager or support coordinator to confirm funding and arrange the details. We schedule the move around therapy sessions, support worker visits, and your preferred timing.",
                  },
                  {
                    number: "03",
                    title: "Safe, Supported Moving Day",
                    text: "Our team arrives on time, handles all packing, wrapping, and loading with care. We transport your belongings and equipment safely, set everything up at your new home, and provide NDIS-compliant invoices for easy claims.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-full bg-[#F5C400] flex items-center justify-center text-[#1A1A1A] font-black text-lg shadow-md shrink-0">
                      {step.number}
                    </div>
                    <div className="pt-3">
                      <p className="text-lg font-bold text-[#1A1A1A] mb-1">
                        {step.title}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[420px] lg:h-[540px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-professional-packing-service-cairns.webp"
                alt="R2G NDIS removalist team carefully packing"
                title="R2G NDIS Removalists - Professional and Patient Service"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SERVICE AREAS ────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
                Coverage
              </span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              NDIS Removalists Across Queensland
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              We provide NDIS removalist services across all major Queensland
              cities and interstate. Over 800 suburbs covered with local teams
              ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                city: "Cairns & Far North QLD",
                href: "/ndis-removalists/cairns",
                suburbs:
                  "Cairns CBD, Smithfield, Palm Cove, Trinity Beach, Port Douglas, Innisfail, Atherton, Mareeba, Edmonton, Gordonvale",
                count: "96+",
              },
              {
                city: "Brisbane & South-East QLD",
                href: "/ndis-removalists/brisbane",
                suburbs:
                  "Brisbane CBD, Chermside, Sunnybank, Carindale, Indooroopilly, Logan, Ipswich, Springfield, Redcliffe, Caboolture",
                count: "421+",
              },
              {
                city: "Gold Coast",
                href: "/ndis-removalists/gold-coast",
                suburbs:
                  "Surfers Paradise, Southport, Robina, Burleigh Heads, Nerang, Coomera, Helensvale, Palm Beach, Coolangatta, Mudgeeraba",
                count: "81+",
              },
              {
                city: "Sunshine Coast",
                href: "/ndis-removalists/sunshine-coast",
                suburbs:
                  "Maroochydore, Caloundra, Noosa Heads, Buderim, Mooloolaba, Nambour, Coolum Beach, Kawana, Bli Bli, Palmwoods",
                count: "107+",
              },
              {
                city: "Townsville & North QLD",
                href: "/ndis-removalists/townsville",
                suburbs:
                  "Townsville City, Aitkenvale, Kirwan, Thuringowa, Bohle Plains, Annandale, Douglas, Idalia, Cranbrook, Deeragun",
                count: "56+",
              },
              {
                city: "Interstate Moves",
                href: "/interstate-removalists",
                suburbs:
                  "Brisbane to Sydney, Brisbane to Melbourne, Cairns to Brisbane, Brisbane to Adelaide, and all major city-to-city routes across Australia",
                count: "42 routes",
              },
            ].map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#F5C400]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg group-hover:text-[#F5C400] transition-colors">
                    {area.city}
                  </h3>
                  <span className="text-[#F5C400] text-xs font-semibold bg-[#F5C400]/10 px-2.5 py-1 rounded-full">
                    {area.count} suburbs
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {area.suburbs}
                </p>
              </Link>
            ))}
          </div>

          {/* Cross-links */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <p className="w-full text-center text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">
              Other Services
            </p>
            {[
              {
                label: "Office Removalists",
                href: "/office-removalists",
              },
              {
                label: "Packing Services",
                href: "/packing-services-brisbane",
              },
              { label: "Storage Cairns", href: "/storage-cairns" },
              { label: "Storage Brisbane", href: "/storage-brisbane" },
              { label: "Moving Boxes", href: "/boxes" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tips */}
          <div className="border-t border-white/10 pt-12 mt-10">
            <h3 className="text-2xl font-black text-white text-center mb-8">
              Tips for a Smooth NDIS Move
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  heading: "Start the process early.",
                  text: "NDIS moves can require plan manager pre-approval and coordination with multiple support providers. Begin planning at least 3-4 weeks before your move date to allow time for quotes, approvals, and scheduling.",
                },
                {
                  heading: "Keep all documentation organised.",
                  text: "Save written quotes, invoices, and receipts from your removalist. Your plan manager or the NDIA may request these for auditing purposes. A professional NDIS removalist will provide NDIS-compliant invoices automatically.",
                },
                {
                  heading:
                    "Brief your removalist on accessibility needs.",
                  text: "Let your removalist know about any accessibility requirements at both homes. This includes ramp access, narrow doorways, lift availability, and where specialist equipment needs to be positioned in the new home.",
                },
                {
                  heading:
                    "Coordinate support workers for moving day.",
                  text: "If you need a support worker present on moving day, arrange this well in advance. Let both your support worker and removalist team know each other's contact details so they can coordinate timing and responsibilities.",
                },
              ].map((tip) => (
                <div
                  key={tip.heading}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <p className="text-white font-bold mb-2">{tip.heading}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: TESTIMONIALS ─────────────────────────────────────────── */}
      <GoogleReviews />

      {/* ── SECTION 9: FAQ ──────────────────────────────────────────────────── */}
      <FAQ items={ndisFaqs} heading="NDIS Removalists FAQ" />

      {/* ── SECTION 10: FINAL CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F5C400] py-20">
        <svg
          aria-hidden="true"
          className="absolute top-4 left-4 text-[#1A1A1A] opacity-[0.07]"
          width="60"
          height="60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute bottom-4 right-4 text-[#1A1A1A] opacity-[0.07]"
          width="60"
          height="60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">
            Need an NDIS Removalist?
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote. We work with your plan manager and
            support team to make your move stress-free. NDIS-compliant invoicing
            included.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-[#1A1A1A] text-white hover:bg-black font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Get My Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICE AREAS ──────────────────────────────────────────── */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-2">
            We Also Serve
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            R2G operates across Queensland and interstate
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "Removalists Cairns",
                href: "/removalists-cairns",
              },
              {
                label: "Removalists Brisbane",
                href: "/removalists-brisbane",
              },
              {
                label: "Removalists Gold Coast",
                href: "/removalists-gold-coast",
              },
              {
                label: "Removalists Sunshine Coast",
                href: "/removalists-sunshine-coast",
              },
              {
                label: "Removalists Townsville",
                href: "/removalists-townsville",
              },
              {
                label: "Interstate Removals",
                href: "/interstate-removalists",
              },
              {
                label: "Office Removalists",
                href: "/office-removalists",
              },
              {
                label: "Storage Brisbane",
                href: "/storage-brisbane",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 bg-gray-50 text-gray-700 rounded-lg text-sm text-center border border-gray-100 hover:border-[#F5C400] hover:text-[#F5C400] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer so mobile sticky bar doesn't cover the CTA */}
      <div className="h-20 lg:hidden" />

      {/* ── MOBILE STICKY BOTTOM BAR ────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1A1A1A] border-t border-white/10 p-3 flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:border-[#F5C400]/50 text-white font-bold py-3 rounded-lg text-sm transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center bg-[#F5C400] hover:bg-[#e0b400] text-[#1A1A1A] font-bold py-3 rounded-lg text-sm transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
