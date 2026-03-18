import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const FAQ = dynamic(() => import("@/components/FAQ"));
import dynamic from "next/dynamic";
const HeroQuoteWidget = dynamic(() => import("@/components/HeroQuoteWidget"));
const PricingTable = dynamic(() => import("@/components/PricingTable"));
const HeroTrustBadges = dynamic(() => import("@/components/HeroTrustBadges"));
import { PHONE, PHONE_HREF, heroSubtitle } from "@/lib/constants";
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));
import { goldCoastSuburbs, getGoldCoastSuburb, getGoldCoastSuburbHref, type GoldCoastSuburb } from "@/data/gold-coast-suburbs";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS — one page per suburb
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return goldCoastSuburbs.map((s) => ({ suburb: s.slug }));
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getGoldCoastSuburb(slug);
  if (!suburb) return {};

  return {
    title: { absolute: suburb.metaTitle },
    description: suburb.metaDescription,
    keywords: [
      `removalists ${suburb.name.toLowerCase()}`,
      `${suburb.name.toLowerCase()} removalists`,
      `moving company ${suburb.name.toLowerCase()}`,
      `house removals ${suburb.name.toLowerCase()}`,
      `local removalists ${suburb.name.toLowerCase()}`,
      `removalists gold coast`,
      "r2g transport and storage",
    ],
    alternates: { canonical: `https://www.r2g.com.au/removalists-gold-coast/${suburb.slug}` },
    openGraph: {
      title: suburb.metaTitle,
      description: suburb.metaDescription,
      url: `https://www.r2g.com.au/removalists-gold-coast/${suburb.slug}`,
      type: "website",
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const GENERIC_AREA_PILLS = [
  "Surfers Paradise",
  "Southport",
  "Robina",
  "Broadbeach",
  "Burleigh Heads",
  "Nerang",
  "Coomera",
  "Helensvale",
];

function getAreaPills(suburb: GoldCoastSuburb): string[] {
  const used = new Set([suburb.name, ...suburb.nearbySubs]);
  const generics = GENERIC_AREA_PILLS.filter((s) => !used.has(s)).slice(0, 6);
  return [...new Set([...suburb.nearbySubs, "Surfers Paradise", ...generics])];
}

function getFaqItems(suburb: GoldCoastSuburb) {
  const genericFaqs = [
    {
      question: `How do you charge for local moves in ${suburb.name}?`,
      answer:
        `We charge an hourly rate starting from $179/hr for a 2-man team and truck for 1-2 bedroom homes. Larger homes (3-4 bedrooms) are charged at $209/hr with 2-3 removalists. There is a minimum 2-hour booking. We also offer fixed-price quotes for larger moves — just ask when you get your quote.`,
    },
    {
      question: "Do you move single items or just whole households?",
      answer:
        "We move everything from a single heavy item like a fridge or sofa, right through to full household relocations. Single item moves start from $130 with a minimum booking fee.",
    },
    {
      question: "Do you move pianos and heavy items?",
      answer:
        "Yes. Our team is trained and equipped to move heavy and awkward items including pianos, pool tables, large fridges, gym equipment and safes. Let us know about specialty items when requesting your quote.",
    },
  ];
  const localFaqs = suburb.localFaqs ?? [];
  return [...localFaqs, ...genericFaqs];
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default async function RemovalistsGoldCoastSuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb: slug } = await params;
  const suburb = getGoldCoastSuburb(slug);
  if (!suburb) notFound();

  const faqItems = getFaqItems(suburb);
  const areaPills = getAreaPills(suburb);

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: `R2G Transport & Storage — Removalists ${suburb.name}`,
    description: `Professional removalists in ${suburb.name} with 10+ years experience. Local and interstate moves from ${suburb.priceFrom}. Fully insured.`,
    url: `https://www.r2g.com.au/removalists-gold-coast/${suburb.slug}`,
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
      latitude: suburb.latitude,
      longitude: suburb.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
    areaServed: [suburb.name, ...suburb.nearbySubs, "Gold Coast"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Removalist Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Local Removals ${suburb.name}`,
            description: `Professional removalist services in ${suburb.name} and surrounding Gold Coast suburbs.`,
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.r2g.com.au/" },
      { "@type": "ListItem", position: 2, name: "Removalists Gold Coast", item: "https://www.r2g.com.au/removalists-gold-coast" },
      { "@type": "ListItem", position: 3, name: `Removalists ${suburb.name}`, item: `https://www.r2g.com.au/removalists-gold-coast/${suburb.slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `R2G Transport & Storage — ${suburb.name}`,
    description: `Removalist services in ${suburb.name}, Gold Coast. Local moves from $179/hr, fully insured, 4.8★ rated.`,
    url: `https://www.r2g.com.au/removalists-gold-coast/${suburb.slug}`,
    telephone: "1300 959 498",
    email: "contact@r2g.com.au",
    image: "https://www.r2g.com.au/images/r2g-logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: suburb.latitude,
      longitude: suburb.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: suburb.latitude, longitude: suburb.longitude },
      geoRadius: "20000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "900",
      bestRating: "5",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const steps = [
    {
      number: "01",
      title: "Get Your Free Quote",
      text: `Contact us online or call ${PHONE}. Tell us about your ${suburb.name} move — suburb, home size, and preferred date. We'll provide a clear, upfront quote with no hidden fees.`,
    },
    {
      number: "02",
      title: "We Pack & Load",
      text: `Our professional removalists arrive on time on moving day. We carefully wrap, pack (if required), and load all your belongings onto our modern, well-equipped truck — treating everything as if it were our own.`,
    },
    {
      number: "03",
      title: "Settle In With Ease",
      text: `We transport your belongings safely to your new ${suburb.name} home and unload everything exactly where you want it. We won't leave until you're completely happy — it's that simple.`,
    },
  ];

  const tips = suburb.tips;

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#F5C400] transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-400">Services</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/removalists-gold-coast" className="hover:text-[#F5C400] transition-colors">Removalists Gold Coast</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#F5C400]">Removalists {suburb.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ── Left ── */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  {suburb.serviceArea}
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
                Removalists {suburb.name}
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {heroSubtitle(suburb.name, "South-East Queensland")}
              </p>

              {/* Widget — mobile only */}
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
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                title: "Fully Insured",
                text: "Comprehensive public liability & goods-in-transit insurance on every move",
              },
              {
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "10+ Years Experience",
                text: "Trusted by hundreds of families and businesses across the Gold Coast",
              },
              {
                icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
                title: "5-Star Rated",
                text: "4.9 stars across 900+ verified Google reviews",
              },
              {
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                title: "Gold Coast Coverage",
                text: "Local depot at Archerfield — covering all Gold Coast and South-East Queensland",
              },
            ].map((badge) => (
              <div key={badge.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-[#F5C400] shrink-0">{badge.icon}</div>
                <div>
                  <p className="font-bold text-[#1A1A1A] text-sm mb-1">{badge.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{badge.text}</p>
                </div>
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
                {suburb.name}&apos;s Local Moving Specialists
              </h2>

              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/r2g-cairns-removalists-loading-truck.webp"
                  alt={`R2G removalists truck in ${suburb.name}, Gold Coast`}
                  title={`R2G Removalists ${suburb.name} - Professional Local Moving Team`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>{suburb.uniquePara1}</p>
                <p>{suburb.uniquePara2}</p>
                <p>{suburb.uniquePara3}</p>
                <p>
                  {suburb.serviceSummary ??
                    "Our modern trucks are clean, well-maintained, and stocked with premium moving equipment including furniture blankets, tie-down straps, dollies, and protective padding. You won't find bare timber floors or loose loads with R2G."}
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
                        { label: "Removalists Gold Coast", href: "/removalists-gold-coast" },
                        { label: "Interstate Removals", href: "/interstate-removalists" },
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

      {/* ── SECTION 3B: MOVING DAY (only if suburb has moveDay content) ───── */}
      {suburb.moveDay && (
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  What to Expect
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                Moving Day in {suburb.name}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {suburb.moveDay.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
              {suburb.name} Removalist Pricing for Local Moves
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
                How Your {suburb.name} Move Works
              </h2>
              <div className="flex mb-8">
                <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
                  <path d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4" stroke="#F5C400" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="space-y-8">
                {steps.map((step) => (
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
                alt={`R2G removalist team serving ${suburb.name} Gold Coast`}
                title={`R2G Professional Packing Service ${suburb.name}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SERVICE AREA & TIPS ──────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Coverage</span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              {suburb.name} and Surrounding Areas
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              We cover {suburb.name} and all surrounding suburbs throughout {suburb.region}.
              Our locally-based team knows the streets and access challenges in this part of the Gold Coast.
              If you&apos;re unsure whether we service your address, just give us a call.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {areaPills.map((s) => {
              const href = getGoldCoastSuburbHref(s);
              const classes = "px-3 py-1.5 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors";
              return href ? (
                <Link key={s} href={href} title={`Removalists ${s} - R2G Transport & Storage`} className={classes}>
                  {s}
                </Link>
              ) : (
                <span key={s} className={classes}>
                  {s}
                </span>
              );
            })}
          </div>

          {/* Cross-city links */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <p className="w-full text-center text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Also Servicing</p>
            {[
              { label: "Removalists Cairns", href: "/removalists-cairns" },
              { label: "Removalists Brisbane", href: "/removalists-brisbane" },
              { label: "Removalists Sunshine Coast", href: "/removalists-sunshine-coast" },
              { label: "Removalists Townsville", href: "/removalists-townsville" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-12 mt-10">
            <h3 className="text-2xl font-black text-white text-center mb-8">
              Tips for a Smooth {suburb.name} Move
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip) => (
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
      <FAQ items={faqItems} heading={`${suburb.name} Removals FAQ`} />

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
            Ready to move to or from {suburb.name}?
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

      {/* Spacer for mobile sticky bar */}
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
