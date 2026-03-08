import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
const FAQ = dynamic(() => import("@/components/FAQ"));
import dynamic from "next/dynamic";
const HeroQuoteWidget = dynamic(() => import("@/components/HeroQuoteWidget"));
const PricingTable = dynamic(() => import("@/components/PricingTable"));
const HeroTrustBadges = dynamic(() => import("@/components/HeroTrustBadges"));
import { PHONE, PHONE_HREF, heroSubtitle } from "@/lib/constants";
import { goldCoastSuburbs } from "@/data/gold-coast-suburbs";
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));

// ─────────────────────────────────────────────────────────────────────────────
// PAGE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const pageConfig = {
  location: "Gold Coast",
  locationFull: "Gold Coast, QLD",
  h1: "Removalists Gold Coast",
  suburb: "Surfers Paradise",
  postcode: "4217",
  address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
  priceFrom: "$179/hr",
  serviceArea: "Gold Coast and South-East Queensland",
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Professional removalists on the Gold Coast with 10+ years experience. Local and interstate moves from $179/hr. Fully insured.",
  url: "https://www.r2g.com.au/removalists-gold-coast",
  telephone: "1300 959 498",
  email: "contact@r2g.com.au",
  priceRange: "$179 - $359",
  image: "https://www.r2g.com.au/images/r2g-logo.png",
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
    latitude: -28.0024,
    longitude: 153.4297,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  areaServed: [
    "Gold Coast",
    "Surfers Paradise",
    "Southport",
    "Robina",
    "Nerang",
    "Burleigh Heads",
    "Broadbeach",
    "Coomera",
    "Helensvale",
    "Coolangatta",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Removalist Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Removals Gold Coast",
          description: "Professional local moving services on the Gold Coast and South East Queensland.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "179",
          priceCurrency: "AUD",
          unitText: "per hour",
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
  sameAs: [
    "https://www.facebook.com/r2gtransport",
    "https://www.instagram.com/r2gtransport",
    "https://www.google.com/maps?cid=11773202456138120338",
  ],
};

const faqItems = [
  {
    question: "How do you charge for local moves on the Gold Coast?",
    answer:
      "We charge an hourly rate starting from $179/hr for a 2-man team and truck for 1-2 bedroom homes. Larger homes (3-4 bedrooms) are charged at $209/hr with 2-3 removalists. There is a minimum 2-hour booking. We also offer fixed-price quotes for larger moves — just ask when you get your quote.",
  },
  {
    question: "Do you move single items or just whole households?",
    answer:
      "We move everything from a single heavy item like a fridge or sofa, right through to full household relocations. Single item moves start from $130 with a minimum booking fee.",
  },
  {
    question: "How many removalists will come on the day?",
    answer:
      "For 1-2 bedroom homes we typically send 2 experienced removalists plus a truck. For larger 3-4 bedroom homes we send 2-3 removalists. For 5+ bedroom homes or complex moves we'll discuss team size when you get your quote.",
  },
  {
    question: "Do you move pianos and heavy items on the Gold Coast?",
    answer:
      "Yes. Our team is trained and equipped to move heavy and awkward items including pianos, pool tables, large fridges, gym equipment and safes. Let us know about specialty items when requesting your quote.",
  },
  {
    question: "Do you cover all Gold Coast suburbs?",
    answer:
      "Yes — we cover the entire Gold Coast region including Surfers Paradise, Southport, Robina, Broadbeach, Burleigh Heads, Nerang, Coomera, Helensvale, Coolangatta, Varsity Lakes, Mudgeeraba, Palm Beach, and all surrounding areas.",
  },
  {
    question: "Can I book a last-minute removal on the Gold Coast?",
    answer:
      "We do our best to accommodate last-minute bookings on the Gold Coast, subject to availability. Call us on 1300 959 498 to check our earliest available date. For guaranteed availability we recommend booking at least 1-2 weeks in advance.",
  },
  {
    question: "Do you offer packing services on the Gold Coast?",
    answer:
      "Yes — we offer full and partial packing services for Gold Coast moves. Our team can pack your entire home using quality materials, or just pack specific fragile items like TVs, artwork, glassware and mirrors. Ask about packing when you request your quote.",
  },
  {
    question: "How far in advance should I book my Gold Coast move?",
    answer:
      "We recommend booking at least 2 weeks in advance for local Gold Coast moves, and 3-4 weeks during peak periods like November through January. That said, we always try to accommodate last-minute bookings — call 1300 959 498 to check availability.",
  },
  {
    question: "Do you provide storage on the Gold Coast?",
    answer:
      "Yes — R2G offers secure short and long-term storage for Gold Coast customers. This is ideal if there is a gap between your move-out and move-in dates. Contact us to discuss storage options when booking your move.",
  },
  {
    question: "Are your removalists on the Gold Coast fully insured?",
    answer:
      "Absolutely. Every R2G move on the Gold Coast is covered by comprehensive public liability insurance and goods-in-transit insurance. Your belongings are protected from the moment we load the truck to the moment we unload at your new home.",
  },
  {
    question: "Can you move me interstate from the Gold Coast?",
    answer:
      "Yes — we offer interstate removals from the Gold Coast to Brisbane, Sydney, Melbourne, Cairns and all major Australian cities. We provide fixed-price interstate quotes based on volume and distance. Contact us for a tailored interstate quote.",
  },
  {
    question: "What areas near the Gold Coast do you service?",
    answer:
      "We service the entire Gold Coast region from Coomera and Helensvale in the north to Coolangatta at the border, and west to Nerang and Mudgeeraba in the hinterland. We also cover Brisbane, Logan, and all of South-East Queensland.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    absolute: "Removalists Gold Coast | R2G Transport & Storage | From $179/hr",
  },
  description:
    "Trusted removalists on the Gold Coast with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees. Call 1300 959 498 or get a free quote online.",
  keywords: [
    "removalists gold coast",
    "gold coast removalists",
    "moving company gold coast",
    "house removals gold coast",
    "local removalists gold coast",
    "r2g transport and storage",
  ],
  alternates: { canonical: "https://www.r2g.com.au/removalists-gold-coast" },
  openGraph: {
    title: "Removalists Gold Coast | R2G Transport & Storage | From $179/hr",
    description:
      "Trusted removalists on the Gold Coast with 10+ years experience. Local & interstate moves from $179/hr. Fully insured, no hidden fees.",
    url: "https://www.r2g.com.au/removalists-gold-coast",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function RemovalistsGoldCoastPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#F5C400] transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-400">Services</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#F5C400]">Removalists Gold Coast</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ── Left: heading + subtext + phone + trust badges ── */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  {pageConfig.serviceArea}
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
                {pageConfig.h1}
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {heroSubtitle("Gold Coast", "South-East Queensland")}
              </p>

              {/* Widget — mobile only (between subtext and phone) */}
              <div className="lg:hidden mb-8">
                <HeroQuoteWidget />
              </div>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 border-2 border-white/25 hover:border-[#F5C400] text-white hover:text-[#F5C400] font-bold px-7 py-3.5 rounded-lg text-base transition-all mb-8"
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
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3 pl-1">
                Get an instant quote
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
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                title: "Fully Insured",
                description: "Comprehensive public liability & goods-in-transit insurance on every move",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
                title: "5-Star Rated",
                description: "4.9 stars across 900+ verified Google reviews",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                title: "10+ Years Experience",
                description: "Trusted by hundreds of families and businesses across the Gold Coast",
              },
            ].map((badge) => (
              <div
                key={badge.title}
                className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors group"
              >
                <svg aria-hidden="true" className="absolute top-0 right-0 text-[#F5C400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
                  <path d="M0 0 L36 0 L36 36 Z" opacity="0.18"/>
                </svg>
                <div className="text-[#F5C400] mb-4 group-hover:scale-110 transition-transform">
                  {badge.icon}
                </div>
                <p className="font-bold text-[#1A1A1A] text-lg mb-2">{badge.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{badge.description}</p>
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
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">About Our Service</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                Gold Coast&apos;s Local Moving Specialists
              </h2>

              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/r2g-cairns-removalists-loading-truck.webp"
                  alt="R2G removalists truck on the Gold Coast"
                  title="R2G Removalists Gold Coast - Professional Local Moving Team"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  When it comes to moving on the Gold Coast, local knowledge makes all the difference.
                  R2G Transport &amp; Storage operates a full-service removals depot in Archerfield,
                  giving us the reach to cover all Gold Coast suburbs, Brisbane, Logan
                  and beyond.
                </p>
                <p>
                  Whether you&apos;re moving from a unit in Surfers Paradise to a house in Robina,
                  relocating from Southport to Burleigh Heads, or simply moving a few streets
                  over — our experienced team of Gold Coast removalists handles every move with the same
                  level of care and professionalism.
                </p>
                <p>
                  We arrive on time, work efficiently, and treat your belongings as if they were our
                  own. From wrapping delicate furniture to carefully disassembling and reassembling
                  large beds, wardrobes, and flat-pack furniture — we&apos;ve got every detail covered.
                </p>
                <p>
                  Our modern trucks are clean, well-maintained, and stocked with premium moving
                  equipment including furniture blankets, tie-down straps, dollies, and protective
                  padding. You won&apos;t find bare timber floors or loose loads with R2G.
                </p>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-[#252525] border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-black text-xl mb-1">Get a Free Quote</p>
                  <p className="text-gray-400 text-sm mb-5">
                    No obligation. We&apos;ll get back to you within hours.
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
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call {PHONE}
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5 mb-5 space-y-2.5">
                    {["Fully insured", "No hidden fees", "Free quotes"].map((item) => (
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
                        { label: "Interstate Removals", href: "/interstate-removals-brisbane" },
                        { label: "Removalists Brisbane", href: "/removalists-brisbane" },
                        { label: "Removalists Cairns", href: "/removalists-cairns" },
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

      {/* ── SECTION 4: PRICING ──────────────────────────────────────────────── */}
      <section className="bg-[#FFFBEB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Pricing</span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
              Gold Coast Removalist Pricing for Local Moves
            </h2>
            <p className="text-gray-600 text-lg">Transparent rates. No hidden fees. No surprises.</p>
          </div>

          <PricingTable />

          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-black text-[#1A1A1A] mb-6 text-center">
              What&apos;s Included in Our Local Move Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Professional loading & unloading",
                "Furniture wrapping & blankets",
                "Disassembly & reassembly",
                "All Gold Coast suburbs covered",
                "Heavy item specialists",
                "Careful, trained removalists",
                "Modern, clean trucks",
                "Competitive hourly & fixed rates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-200">
                  <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">Simple Process</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
                How Your Gold Coast Move Works
              </h2>
              <div className="flex mb-8">
                <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
                  <path d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4" stroke="#F5C400" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Get Your Free Quote",
                    text: "Contact us online or call 1300 959 498. Tell us about your Gold Coast move — suburbs, home size, and preferred date. We'll provide a clear, upfront quote with no hidden fees.",
                  },
                  {
                    number: "02",
                    title: "We Pack & Load",
                    text: "Our professional Gold Coast removalists arrive on time on moving day. We carefully wrap, pack (if required), and load all your belongings onto our modern, well-equipped truck — treating everything as if it were our own.",
                  },
                  {
                    number: "03",
                    title: "Settle In With Ease",
                    text: "We transport your belongings safely to your new Gold Coast location and unload everything exactly where you want it. We won't leave until you're completely happy — it's that simple.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-full bg-[#F5C400] flex items-center justify-center text-[#1A1A1A] font-black text-lg shadow-md shrink-0">
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

            <div className="relative h-[420px] lg:h-[540px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-professional-packing-service-cairns.webp"
                alt="R2G removalist team serving the Gold Coast"
                title="R2G Professional Packing Service Gold Coast"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SUBURBS & TIPS ───────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Coverage</span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Gold Coast Suburbs We Service
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              We cover the entire Gold Coast region — from Coomera and Helensvale in the north to Coolangatta
              at the border, and west to Nerang and Mudgeeraba in the hinterland.
              If you&apos;re not sure whether we cover your area, just give us a call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {["Gold Coast North", "Gold Coast Central", "Gold Coast South", "Gold Coast Hinterland"].map((region) => {
              const suburbs = goldCoastSuburbs
                .filter((s) => s.region === region)
                .sort((a, b) => a.name.localeCompare(b.name));
              return (
                <div key={region}>
                  <h3 className="text-white font-bold text-lg mb-3 border-b border-[#F5C400]/30 pb-2">
                    {region}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {suburbs.map((suburb) => (
                      <Link
                        key={suburb.slug}
                        href={`/removalists-gold-coast/${suburb.slug}`}
                        title={`Removalists ${suburb.name}`}
                        className="px-2.5 py-1 bg-white/5 text-gray-300 rounded-full text-xs border border-white/10 hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors"
                      >
                        {suburb.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-12">
            <h3 className="text-2xl font-black text-white text-center mb-8">
              Tips for a Smooth Gold Coast Move
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  heading: "Book early during peak holiday season.",
                  text: "The Gold Coast is one of Australia's busiest holiday destinations. Removalist services fill up fast from November through January and around school holidays. Book at least 3-4 weeks ahead to secure your preferred date.",
                },
                {
                  heading: "Plan around Gold Coast traffic and parking.",
                  text: "High-rise apartments in Surfers Paradise and Broadbeach often have strict loading dock bookings and time limits. Let us know your building details so we can arrange access and avoid delays on moving day.",
                },
                {
                  heading: "Prepare for the subtropical climate.",
                  text: "Gold Coast summers bring heat, humidity, and afternoon storms. We take extra precautions to protect your belongings in wet weather — but it helps to keep an eye on the forecast and communicate any concerns with our team.",
                },
                {
                  heading: "Declutter before you move.",
                  text: "The less you move, the less you pay. Take the opportunity to sell, donate, or dispose of items you no longer need. Our team can also advise on what's worth moving versus replacing at your new Gold Coast home.",
                },
              ].map((tip) => (
                <div key={tip.heading} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-white font-bold mb-2">{tip.heading}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: TESTIMONIALS ─────────────────────────────────────────── */}
      <GoogleReviews />

      {/* ── SECTION 8: FAQ ──────────────────────────────────────────────────── */}
      <FAQ items={faqItems} heading="Gold Coast Removals FAQ" />

      {/* ── SECTION 9: FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F5C400] py-20">
        <svg aria-hidden="true" className="absolute top-4 left-4 text-[#1A1A1A] opacity-[0.07]" width="60" height="60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <svg aria-hidden="true" className="absolute bottom-4 right-4 text-[#1A1A1A] opacity-[0.07]" width="60" height="60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">
            Ready to Move on the Gold Coast?
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote and we&apos;ll be in touch as soon as possible — usually within the hour.
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

      {/* ── MOBILE STICKY BOTTOM BAR ────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1A1A1A] border-t border-white/10 p-3 flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:border-[#F5C400]/50 text-white font-bold py-3 rounded-lg text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
