import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
const HeroQuoteWidget = dynamic(() => import("@/components/HeroQuoteWidget"));
const HeroTrustBadges = dynamic(() => import("@/components/HeroTrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
import {
  ROUTES,
  CITIES,
  getRouteBySlug,
  getRelatedRoutes,
  getDaysLabel,
  getDaysSuffix,
  getGeoMeta,
  routePassesThroughNorthQLD,
} from "@/lib/interstate-routes";
import type { RouteData, CityData } from "@/lib/interstate-routes";
import { getCityPageBySlug, getAllCitySlugs } from "@/lib/interstate-cities";
import type { CityPageData } from "@/lib/interstate-cities";

// ── STATIC PARAMS ──
export function generateStaticParams() {
  const routeSlugs = ROUTES.map((r) => ({ slug: r.slug }));
  const citySlugs = getAllCitySlugs().map((s) => ({ slug: s }));
  return [...routeSlugs, ...citySlugs];
}

// ── DYNAMIC METADATA ──
type MetaProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
  const { slug } = await params;

  // City page metadata
  const city = getCityPageBySlug(slug);
  if (city) {
    const title = `Interstate Removalists ${city.name} | Reliable & Affordable`;
    const description = `Interstate removalists ${city.name} - the real specialists in long-distance moves. Fully insured, affordable & reliable. Book now.`;
    const url = `https://www.r2g.com.au/interstate-removalists/${city.slug}`;
    const geo = getGeoMeta(city.name);

    return {
      title: { absolute: title },
      description,
      openGraph: {
        title: `Interstate Removalists ${city.name} | R2G Transport & Storage`,
        description: `Door-to-door interstate removals from ${city.name}. Fully insured, 900+ five-star reviews. Free quote — 1300 959 498.`,
        url,
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Interstate Removalists ${city.name} — R2G Transport & Storage` }],
      },
      alternates: { canonical: url },
      robots: { index: true, follow: true },
      other: {
        "geo.region": geo.region,
        "geo.placename": `${city.name}, ${geo.placename}`,
      },
    };
  }

  // Route page metadata
  const route = getRouteBySlug(slug);
  if (!route) return {};

  const title = `${route.from} to ${route.to} Removalists | Professional Movers`;
  const ds = getDaysSuffix(route.days);
  const description = `${route.from} to ${route.to} interstate removalists - the real specialists in long-distance moves. Fully insured, affordable & reliable. Book now.`;
  const url = `https://www.r2g.com.au/interstate-removalists/${route.slug}`;
  const geo = getGeoMeta(route.from);

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title: `${route.from} to ${route.to} Removalists | R2G Transport & Storage`,
      description: `Fully insured door-to-door removals from ${route.from} to ${route.to}. ${route.km} km, ${route.days} ${ds} transit. 900+ five-star reviews. Free quote — 1300 959 498.`,
      url,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${route.from} to ${route.to} Removalists — R2G Transport & Storage` }],
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    other: {
      "geo.region": geo.region,
      "geo.placename": geo.placename,
    },
  };
}

// ── REVIEWS (shared) ──
const REVIEWS = [
  {
    name: "Darlene Murphy",
    text: "I recently used R2G Transport and Storage to help pack and move my mum's belongings as she transitioned into aged care. Daniel and Marcos handled the entire process, and I couldn't be more impressed with their professionalism and care. The price was very reasonable and actually much lower than I expected for such a big task.",
    rating: 5,
  },
  {
    name: "Joe D'Souza",
    text: "From start to finish, the process was smooth, efficient, and completely stress-free. Every item, from heavy furniture to fragile pieces, was handled with exceptional care and professionalism. Communication was clear throughout, and they went above and beyond to ensure everything was placed exactly where we wanted.",
    rating: 5,
  },
  {
    name: "Naree Stariha",
    text: "Mateus and Will are AMAZING! They are careful and did everything we asked to move and pack perfectly! HIGHLY RECOMMEND THE GUYS AND THE COMPANY!!! So happy!",
    rating: 5,
  },
];

// ── INCLUDED (shared for city pages) ──
const INCLUDED = [
  "Door-to-door interstate service",
  "Professional loading & unloading",
  "Furniture wrapping & blanket protection",
  "Goods-in-transit insurance",
  "Dedicated move manager",
  "Shared or exclusive load options",
  "Packing service available",
  "Disassembly & reassembly",
  "Storage between moves available",
  "Regular transit updates",
];

// ── TICKER ROWS (shared) ──
const TICKER_ROWS = [
  {
    dir: "left" as const, speed: "45s", faded: false,
    routes: [
      { from: "Cairns", to: "Brisbane", slug: "cairns-to-brisbane", km: "1,700", days: "2–3 days" },
      { from: "Brisbane", to: "Sydney", slug: "brisbane-to-sydney", km: "920", days: "1–2 days" },
      { from: "Townsville", to: "Melbourne", slug: "townsville-to-melbourne", km: "2,500", days: "3–4 days" },
      { from: "Cairns", to: "Townsville", slug: "cairns-to-townsville", km: "350", days: "1 day" },
      { from: "Brisbane", to: "Cairns", slug: "brisbane-to-cairns", km: "1,700", days: "2–3 days" },
      { from: "Mackay", to: "Brisbane", slug: "mackay-to-brisbane", km: "970", days: "1–2 days" },
      { from: "Sydney", to: "Melbourne", slug: "sydney-to-melbourne", km: "870", days: "1–2 days" },
      { from: "Rockhampton", to: "Cairns", slug: "rockhampton-to-cairns", km: "1,150", days: "2 days" },
      { from: "Brisbane", to: "Melbourne", slug: "brisbane-to-melbourne", km: "1,750", days: "2–3 days" },
      { from: "Cairns", to: "Sydney", slug: "cairns-to-sydney", km: "2,600", days: "3–4 days" },
      { from: "Townsville", to: "Brisbane", slug: "townsville-to-brisbane", km: "1,350", days: "2 days" },
      { from: "Brisbane", to: "Rockhampton", slug: "brisbane-to-rockhampton", km: "640", days: "1 day" },
    ],
  },
  {
    dir: "right" as const, speed: "35s", faded: false,
    routes: [
      { from: "Brisbane", to: "Gold Coast", slug: "brisbane-to-gold-coast", km: "80", days: "1 day" },
      { from: "Cairns", to: "Moranbah", slug: "cairns-to-moranbah", km: "1,000", days: "2 days" },
      { from: "Melbourne", to: "Brisbane", slug: "melbourne-to-brisbane", km: "1,750", days: "2–3 days" },
      { from: "Mackay", to: "Moranbah", slug: "mackay-to-moranbah", km: "190", days: "1 day" },
      { from: "Brisbane", to: "Toowoomba", slug: "brisbane-to-toowoomba", km: "130", days: "1 day" },
      { from: "Rockhampton", to: "Emerald", slug: "rockhampton-to-emerald", km: "270", days: "1 day" },
      { from: "Sydney", to: "Brisbane", slug: "sydney-to-brisbane", km: "920", days: "1–2 days" },
      { from: "Cairns", to: "Emerald", slug: "cairns-to-emerald", km: "1,100", days: "2 days" },
      { from: "Brisbane", to: "Sunshine Coast", slug: "brisbane-to-sunshine-coast", km: "100", days: "1 day" },
      { from: "Townsville", to: "Moranbah", slug: "townsville-to-moranbah", km: "600", days: "1 day" },
      { from: "Melbourne", to: "Sydney", slug: "melbourne-to-sydney", km: "870", days: "1–2 days" },
      { from: "Cairns", to: "Airlie Beach", slug: "cairns-to-airlie-beach", km: "680", days: "1 day" },
    ],
  },
  {
    dir: "left" as const, speed: "55s", faded: true,
    routes: [
      { from: "Brisbane", to: "Charleville", slug: "brisbane-to-charleville", km: "750", days: "1 day" },
      { from: "Rockhampton", to: "Sydney", slug: "rockhampton-to-sydney", km: "1,350", days: "2 days" },
      { from: "Townsville", to: "Cairns", slug: "townsville-to-cairns", km: "350", days: "1 day" },
      { from: "Brisbane", to: "Adelaide", slug: "brisbane-to-adelaide", km: "2,050", days: "3 days" },
      { from: "Cairns", to: "Melbourne", slug: "cairns-to-melbourne", km: "3,100", days: "4–5 days" },
      { from: "Mackay", to: "Rockhampton", slug: "mackay-to-rockhampton", km: "335", days: "1 day" },
      { from: "Brisbane", to: "Emerald", slug: "brisbane-to-emerald", km: "870", days: "1–2 days" },
      { from: "Melbourne", to: "Cairns", slug: "melbourne-to-cairns", km: "3,200", days: "4–5 days" },
      { from: "Rockhampton", to: "Brisbane", slug: "rockhampton-to-brisbane", km: "640", days: "1 day" },
      { from: "Brisbane", to: "Moranbah", slug: "brisbane-to-moranbah", km: "1,050", days: "2 days" },
      { from: "Sydney", to: "Cairns", slug: "sydney-to-cairns", km: "2,600", days: "3–4 days" },
      { from: "Mackay", to: "Emerald", slug: "mackay-to-emerald", km: "280", days: "1 day" },
    ],
  },
];

// ── SCHEMA BUILDERS ──
function buildCitySchema(city: CityPageData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "@id": "https://www.r2g.com.au/#organization",
        name: "R2G Transport & Storage",
        url: "https://www.r2g.com.au",
        telephone: "+611300959498",
        description:
          "Interstate removalists operating from depots in Cairns and Brisbane. Fully insured door-to-door moves across QLD, NSW and VIC. 10+ years experience, 900+ five-star reviews.",
        logo: "https://www.r2g.com.au/images/logo-r2g-white.png",
        areaServed: ["Queensland", "New South Wales", "Victoria", "Australia"],
        location: [
          {
            "@type": "Place",
            name: "R2G Transport & Storage — Cairns",
            address: { "@type": "PostalAddress", streetAddress: "36 Abbott St", addressLocality: "Cairns City", addressRegion: "QLD", postalCode: "4870", addressCountry: "AU" },
          },
          {
            "@type": "Place",
            name: "R2G Transport & Storage — Brisbane",
            address: { "@type": "PostalAddress", streetAddress: "122 Ashover Cct", addressLocality: "Archerfield", addressRegion: "QLD", postalCode: "4108", addressCountry: "AU" },
          },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "900", bestRating: "5" },
        sameAs: [
          "https://www.facebook.com/r2gtransport",
          "https://www.google.com/maps?cid=11773202456138120338",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.r2g.com.au" },
          { "@type": "ListItem", position: 2, name: "Interstate Removalists", item: "https://www.r2g.com.au/interstate-removalists" },
          { "@type": "ListItem", position: 3, name: `Interstate Removalists ${city.name}`, item: `https://www.r2g.com.au/interstate-removalists/${city.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

function buildRouteSchema(route: RouteData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "@id": "https://www.r2g.com.au/#organization",
        name: "R2G Transport & Storage",
        url: "https://www.r2g.com.au",
        telephone: "+611300959498",
        description: `Interstate removalists operating from depots in Cairns and Brisbane. Fully insured door-to-door moves across QLD, NSW and VIC. 10+ years experience, 900+ five-star reviews.`,
        logo: "https://www.r2g.com.au/images/logo-r2g-white.png",
        areaServed: ["Queensland", "New South Wales", "Victoria", "Australia"],
        location: [
          {
            "@type": "Place",
            name: "R2G Transport & Storage — Cairns",
            address: { "@type": "PostalAddress", streetAddress: "36 Abbott St", addressLocality: "Cairns City", addressRegion: "QLD", postalCode: "4870", addressCountry: "AU" },
          },
          {
            "@type": "Place",
            name: "R2G Transport & Storage — Brisbane",
            address: { "@type": "PostalAddress", streetAddress: "122 Ashover Cct", addressLocality: "Archerfield", addressRegion: "QLD", postalCode: "4108", addressCountry: "AU" },
          },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "900", bestRating: "5" },
        sameAs: [
          "https://www.facebook.com/r2gtransport",
          "https://www.google.com/maps?cid=11773202456138120338",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.r2g.com.au" },
          { "@type": "ListItem", position: 2, name: "Interstate Removalists", item: "https://www.r2g.com.au/interstate-removalists" },
          { "@type": "ListItem", position: 3, name: `${route.from} to ${route.to} Removalists`, item: `https://www.r2g.com.au/interstate-removalists/${route.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `How long does a ${route.from} to ${route.to} move take?`,
            acceptedAnswer: { "@type": "Answer", text: `The ${route.from} to ${route.to} route is approximately ${route.km} km and typically takes ${route.days} transit days by road. Shared loads may take slightly longer due to consolidation scheduling. Exclusive loads offer faster, more direct delivery. We provide estimated delivery windows at the time of booking.` },
          },
          {
            "@type": "Question",
            name: `How much does it cost to move from ${route.from} to ${route.to}?`,
            acceptedAnswer: { "@type": "Answer", text: `${route.from} to ${route.to} removal costs vary depending on the volume of your move, whether you choose a shared or exclusive load, and your preferred dates. We don't publish fixed prices because every move is different. Contact us for a free, itemised quote with no obligation.` },
          },
          {
            "@type": "Question",
            name: `What is the difference between a shared and exclusive load on the ${route.from} to ${route.to} route?`,
            acceptedAnswer: { "@type": "Answer", text: `A shared load means your belongings travel with other customers' goods heading in the same direction, reducing cost significantly. An exclusive load means the entire truck is dedicated to your move — faster transit, full scheduling control, and no other goods sharing the space.` },
          },
          {
            "@type": "Question",
            name: `Is my furniture insured on the ${route.from} to ${route.to} move?`,
            acceptedAnswer: { "@type": "Answer", text: `Yes. Every interstate move with R2G includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from the moment we load them at your ${route.from} address to the moment they are delivered to your ${route.to} property.` },
          },
          {
            "@type": "Question",
            name: `How far in advance should I book a ${route.from} to ${route.to} move?`,
            acceptedAnswer: { "@type": "Answer", text: `We recommend booking at least 3–4 weeks ahead, particularly for moves at the end of the month or during the December–January peak season. The earlier you book, the more flexibility you have on load type and departure dates.` },
          },
        ],
      },
    ],
  };
}

// ══════════════════════════════════════════════
//  CITY TEMPLATE
// ══════════════════════════════════════════════

function CityPage({ city }: { city: CityPageData }) {
  const tickerHeadingParts = city.tickerHeading.split(/<gold>(.*?)<\/gold>/);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCitySchema(city)) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#1A1A1A] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2a1f00] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F5A800] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5A800] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-5">
                <ol className="flex items-center gap-2 text-xs text-gray-500">
                  <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/interstate-removalists" className="hover:text-gray-300 transition-colors">Interstate Removalists</Link></li>
                  <li>/</li>
                  <li className="text-gray-400">{city.name}</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-10 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  {city.heroLabel}
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                Interstate <br />
                Removalists <br />
                <span className="text-[#F5A800]">{city.name}</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300 font-bold mb-6">
                Long Distance Moves from {city.name}
              </p>
              <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
                {city.heroBody}
              </p>
              <div className="xl:hidden mb-8">
                <HeroQuoteWidget />
              </div>
              <a
                href="tel:1300959498"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-colors"
              >
                <span>📞</span>
                <span>Call us — 1300 959 498</span>
              </a>
              <div className="mt-8">
                <HeroTrustBadges />
              </div>
            </div>
            <div className="hidden xl:block">
              <HeroQuoteWidget />
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { stat: "10+", label: "Years Experience" },
              { stat: "900+", label: "5-Star Reviews" },
              { stat: "130+", label: "Routes Covered" },
              { stat: "100%", label: "Fully Insured" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-black text-[#F5A800]">{item.stat}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS CITY ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Interstate Removalists {city.name}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                Moving Interstate from {city.name}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {city.aboutParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-removal-truck-cairns.webp"
                alt={city.truckImageAlt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
            <div className="space-y-4">
              {[
                {
                  icon: "🛡️",
                  title: "Fully Insured — Every Move",
                  desc: "Goods-in-transit and public liability insurance included as standard on every interstate job. From the moment we load your first item to final delivery.",
                },
                {
                  icon: "👤",
                  title: "One Point of Contact",
                  desc: "A dedicated move manager assigned to your job from quote through to delivery. No call centres, no being passed around.",
                },
                {
                  icon: "🚛",
                  title: "No Subcontracting",
                  desc: "Your move is handled by our own team, in our own trucks. We don't hand your belongings off to third parties at any point.",
                },
                {
                  icon: "📦",
                  title: "Shared & Exclusive Loads",
                  desc: "Two options to suit your budget and timeline. Shared loads reduce cost significantly. Exclusive loads give you a dedicated truck and faster delivery.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-bold text-[#1A1A1A] mb-1">{item.title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-cairns-removalists-reviews.webp"
                alt={city.reviewsImageAlt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Included as Standard
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                What Every R2G Interstate Move Includes
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every interstate removal with R2G includes a comprehensive set of services
                  as standard. We don&apos;t charge separately for things that should simply
                  be part of a professional service — furniture protection, insurance, and a
                  dedicated point of contact are included on every job regardless of size
                  or distance.
                </p>
                <p>
                  If you need additional services — packing, storage between homes, or
                  disassembly and reassembly — these are available on request. Our team
                  will talk through what your specific move needs when you request a quote.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDED.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100"
                >
                  <div className="w-5 h-5 rounded-full bg-[#F5A800] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                What to Expect
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              How Your Interstate Move Works
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              From your first call to the last box placed in your new home — here&apos;s
              exactly what happens when you move interstate with R2G.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Get a Quote",
                desc: "Tell us your origin, destination, move size and preferred dates — online or by phone. We come back with a clear, itemised quote. No hidden fees, no vague estimates.",
              },
              {
                step: "02",
                title: "We Plan Your Move",
                desc: "Once confirmed, a dedicated move manager is assigned to your job. They coordinate every detail — truck size, departure schedule, storage if needed — and keep you informed throughout.",
              },
              {
                step: "03",
                title: "Pack, Wrap & Load",
                desc: "Our team arrives on moving day fully equipped. Every item is wrapped in blankets and secured before loading. Furniture is disassembled where needed. Nothing gets on the truck unless it\u2019s properly protected.",
              },
              {
                step: "04",
                title: "Delivered to Your Door",
                desc: "Your belongings are transported directly to your new address and carried inside. We keep you updated during transit so you\u2019re never left wondering where your move is at.",
              },
            ].map((step) => (
              <div key={step.step} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-6xl font-black text-[#F5A800] opacity-20 leading-none mb-4">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROUTES TICKER ── */}
      <TickerSection heading={tickerHeadingParts} subtext={city.tickerSubtext} />

      {/* ── REVIEWS ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                Customer Reviews
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
              {city.reviewsHeading}
            </h2>
            <p className="text-gray-500 mt-2">4.9 stars across 900+ verified Google reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F5A800] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="font-bold text-[#1A1A1A] text-sm">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F5A800] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-4">
            {city.ctaHeading}
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-lg mx-auto">
            {city.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition-colors"
            >
              Get a Free Quote Online
            </Link>
            <a
              href="tel:1300959498"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black font-bold text-lg rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              📞 Call 1300 959 498
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        heading={`Interstate Removalists ${city.name} — FAQ`}
        items={city.faqItems}
      />

      {/* ── RELATED ROUTES ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#1A1A1A]">Popular Interstate Routes from {city.name}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {city.relatedRoutes.map((link) => (
              <Link
                key={link.slug}
                href={`/interstate-removalists/${link.slug}`}
                className="group p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#F5A800] transition-colors"
              >
                <h3 className="font-black text-[#1A1A1A] text-lg mb-2 group-hover:text-[#F5A800] transition-colors">
                  {link.title} →
                </h3>
                <p className="text-gray-500 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <InternalLinks />
    </>
  );
}

// ══════════════════════════════════════════════
//  ROUTE TEMPLATE
// ══════════════════════════════════════════════

function RoutePage({ route }: { route: RouteData }) {
  const fromCity = CITIES[route.from] as CityData;
  const toCity = CITIES[route.to] as CityData;
  const related = getRelatedRoutes(route);
  const daysLabel = getDaysLabel(route.days);
  const daysSuffix = getDaysSuffix(route.days);
  const kmNum = parseInt(route.km.replace(/,/g, ""));
  const isLongRoute = kmNum >= 400;
  const isNorthQLD = routePassesThroughNorthQLD(route);
  const fromDepot = fromCity?.depot ?? `your ${route.from} address`;
  const toRegion = toCity?.region ?? route.to;
  const showRegionSubtitle = toRegion !== route.to && !toRegion.toLowerCase().includes(route.to.toLowerCase());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildRouteSchema(route)) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#1A1A1A] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2a1f00] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F5A800] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5A800] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/interstate-removalists" className="hover:text-white transition-colors">Interstate Removalists</Link>
            <span>/</span>
            <span className="text-gray-300">{route.from} to {route.to}</span>
          </nav>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-10 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  {route.from} · {route.to} · {route.km} km
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                {route.from} to {route.to} <br />
                <span className="text-[#F5A800]">Removalists</span> <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-bold">{showRegionSubtitle ? `${route.to} & ${toRegion}` : toRegion}</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
                Fully insured door-to-door removals from {route.from} to {route.to}. {route.km} km
                via the {route.highway}, {route.days} {daysSuffix} transit. Experienced team, shared or
                exclusive loads — handled properly from pickup to delivery.
              </p>
              <div className="xl:hidden mb-8">
                <HeroQuoteWidget />
              </div>
              <a
                href="tel:1300959498"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-colors"
              >
                <span>📞</span>
                <span>Call us — 1300 959 498</span>
              </a>
              <div className="mt-8">
                <HeroTrustBadges />
              </div>
            </div>
            <div className="hidden xl:block">
              <HeroQuoteWidget />
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { stat: route.km, label: "Kilometres" },
              { stat: route.days, label: daysLabel.replace(`${route.days} `, "") },
              { stat: "900+", label: "5-Star Reviews" },
              { stat: "100%", label: "Fully Insured" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-black text-[#F5A800]">{item.stat}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS ROUTE ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  {route.from} to {route.to} Removalists
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                {route.from} to {route.to} Removals — {route.km} km Done Right
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Moving from {route.from} to {route.to} is a {route.km}-kilometre interstate
                  relocation via the {route.highway}. Your furniture, appliances and personal
                  belongings will be on the road for {route.days} {daysSuffix}, passing through{" "}
                  {route.stops.length > 3
                    ? route.stops.slice(1, -1).map((s) => s.town.split(" /")[0]).join(", ")
                    : "key service points"}{" "}
                  before arriving in {route.to} and {toRegion}.
                </p>
                <p>
                  R2G Transport &amp; Storage has been running the {route.from} to {route.to} route
                  for over 10 years. We depart from {fromDepot} and deliver directly to your
                  new {route.to} address — door to door, fully insured, no subcontractors, no
                  third-party handoffs. A dedicated move manager is assigned to your job from
                  the moment you confirm your booking through to final delivery.
                </p>
                <p>
                  Whether you&apos;re relocating a one-bedroom apartment or a full family
                  home, we offer shared and exclusive load options to suit your budget and
                  timeline. Our 900+ verified five-star Google reviews are proof that we deliver
                  on every promise. No hidden fees, no vague estimates, no surprises on
                  delivery day.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-removal-truck-cairns.webp"
                alt={`R2G Transport removalist truck on the ${route.from} to ${route.to} interstate route`}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ROUTE (only for routes 400km+) ── */}
      {isLongRoute && route.stops.length > 3 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-[#F5A800]" />
                  <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                    The Route
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                  {route.from} to {route.to} via the {route.highway}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The {route.highway} is the primary route connecting {route.from} to{" "}
                    {route.to}. At {route.km} kilometres, this is one of the major interstate
                    corridors our trucks run regularly. Our drivers know every stretch — the
                    road conditions, the rest points, and the timing required for safe,
                    efficient delivery.
                  </p>
                  <p>
                    For {route.from} to {route.to} moves, our trucks typically stop at key
                    service points along the {route.highway} for driver rest, fuel and any
                    shared load pickups or drop-offs. This ensures our drivers remain rested
                    and your belongings stay secure throughout the full {route.km}-kilometre journey.
                  </p>
                  {isNorthQLD && kmNum >= 500 && (
                    <p>
                      The wet season (December to March) can affect road conditions in
                      Northern Queensland. Our team monitors conditions closely and adjusts
                      schedules when needed. We&apos;ll always keep you informed if weather
                      impacts your delivery window.
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                {route.stops.map((stop) => (
                  <div
                    key={stop.town}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#F5A800]" />
                      <div className="w-[2px] h-full bg-gray-200 mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-[#1A1A1A] text-sm">{stop.town}</span>
                        <span className="text-xs font-semibold text-[#F5A800] bg-[#fffbf0] border border-[#f0e0b0] px-2 py-0.5 rounded flex-shrink-0">{stop.km}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{stop.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── WHY PEOPLE MOVE ── */}
      {toCity?.reasons && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  {route.from} to {route.to}
                </span>
                <div className="h-[2px] w-8 bg-[#F5A800]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">
                Why People Move from {route.from} to {route.to}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Every year, thousands of Australians relocate from {route.from} to {route.to} and{" "}
                {toRegion}. Here are the most common reasons — and why R2G is the
                removalist they choose.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toCity.reasons.map((item) => (
                <div key={item.title} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SHARED VS EXCLUSIVE ── */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                Load Options
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Shared vs Exclusive Loads — {route.from} to {route.to}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every {route.from} to {route.to} move is different. We offer two load types so
              you can choose the right balance of cost and speed for your situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-[#F5A800] text-sm font-bold tracking-widest uppercase mb-4">Shared Load</div>
              <h3 className="text-white font-black text-2xl mb-4">Budget-Friendly Option</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your belongings are consolidated with other customers heading to {route.to} on
                the same run. This significantly reduces your cost — often by 40–60% compared
                to an exclusive truck. Ideal for 1–3 bedroom moves where you have some
                flexibility on your delivery date.
              </p>
              <ul className="space-y-3">
                {[
                  "Lower cost — share the truck, share the price",
                  "Ideal for smaller moves (1–3 bedrooms)",
                  `Flexible delivery window (${route.days === "1" ? "1–2 days" : `${route.days} days`})`,
                  "Same insurance and protection standards",
                  `Regular departures from ${route.from}`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-[#F5A800] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white/5 border border-[#F5A800]/30 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs font-bold text-black bg-[#F5A800] px-3 py-1 rounded-full">Popular</div>
              <div className="text-[#F5A800] text-sm font-bold tracking-widest uppercase mb-4">Exclusive Load</div>
              <h3 className="text-white font-black text-2xl mb-4">Fastest, Most Flexible</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The entire truck is dedicated to your {route.from} to {route.to} move. You get
                full control over pickup and delivery dates, faster transit, and no other goods
                sharing the space. Best suited for larger homes, time-sensitive moves, or
                high-value items that need maximum care.
              </p>
              <ul className="space-y-3">
                {[
                  "Dedicated truck — your move only",
                  `Fastest transit (${route.days} ${daysSuffix} direct)`,
                  "Full control over pickup and delivery dates",
                  "Best for 3+ bedroom homes or high-value items",
                  "Direct route — no intermediate stops",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-[#F5A800] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT AFFECTS THE COST ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Pricing Guide
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                What Affects the Cost of a {route.from} to {route.to} Move
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We don&apos;t publish fixed prices for {route.from} to {route.to} removals
                  because every move is genuinely different. A one-bedroom unit is a very
                  different job to a four-bedroom house with outdoor furniture and specialty items.
                </p>
                <p>
                  What we can tell you is what factors affect the cost — so you know what
                  to expect when you request a quote. We provide clear, itemised quotes with
                  no hidden fees. The price we quote is the price you pay.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { title: "Volume of Your Move", desc: "The single biggest factor. A 1-bedroom unit requires far less truck space than a 4-bedroom house. We quote based on cubic metres, not arbitrary package deals." },
                { title: "Shared vs Exclusive Load", desc: "Shared loads are significantly cheaper because multiple customers share the truck cost. Exclusive loads cost more but offer speed and scheduling control." },
                { title: "Time of Year", desc: "End-of-month, school holidays and the December–January peak season are the busiest periods. Booking mid-month or during quieter periods can reduce cost." },
                { title: "Access at Both Ends", desc: `Ground-floor houses with driveway access are faster to load and unload. Multi-storey apartments, narrow streets, or long carry distances in ${route.from} or ${route.to} may affect pricing.` },
                { title: "Additional Services", desc: "Professional packing, furniture disassembly/reassembly, storage between homes, and specialty item handling (pianos, pool tables, artwork) are quoted separately." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-[#F5A800] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Included as Standard
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                What Your {route.from} to {route.to} Move Includes
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every {route.from} to {route.to} removal with R2G includes a full set of
                  services as standard. We don&apos;t charge extra for furniture protection,
                  insurance or a dedicated move manager — these are part of every job, whether
                  you&apos;re moving a studio apartment or a five-bedroom house {route.km} km.
                </p>
                <p>
                  Your belongings are wrapped in protective blankets and secured before they
                  leave your {route.from} property. They stay protected for the full journey
                  via the {route.highway} and are delivered directly inside your new {route.to} home.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                `Door-to-door ${route.from} to ${route.to} service`,
                "Professional loading & unloading",
                "Furniture wrapping & blanket protection",
                "Goods-in-transit insurance",
                "Dedicated move manager",
                "Shared or exclusive load options",
                "Packing service available",
                "Disassembly & reassembly",
                `Storage at ${route.from} or ${route.to}`,
                "Regular transit updates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100"
                >
                  <div className="w-5 h-5 rounded-full bg-[#F5A800] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBURBS WE COVER ── */}
      {fromCity?.suburbs && toCity?.suburbs && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Door-to-Door Coverage
                </span>
                <div className="h-[2px] w-8 bg-[#F5A800]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">
                {route.from} Pickup &amp; {route.to} Delivery Areas
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                We pick up from any address across {route.from} and deliver to any address in{" "}
                {route.to} and {toRegion}. Here are some of the areas we service most frequently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-black text-[#1A1A1A] text-lg mb-4">{route.from} Pickup Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {fromCity.suburbs.map((suburb) => (
                    <span key={suburb} className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-black text-[#1A1A1A] text-lg mb-4">{route.to} Delivery Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {toCity.suburbs.map((suburb) => (
                    <span key={suburb} className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              Don&apos;t see your area? We cover all of {route.from} and {toRegion} — call us to confirm.
            </p>
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                What to Expect
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              How Your {route.from} to {route.to} Move Works
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              From your first enquiry to the last box placed in your new {route.to} home — here&apos;s
              exactly how R2G handles your {route.km} km move.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Get a Quote", desc: `Tell us your ${route.from} pickup address, ${route.to} delivery address, move size and preferred dates. We come back with a clear, itemised quote — no hidden fees, no vague estimates.` },
              { step: "02", title: "We Plan Your Move", desc: `A dedicated move manager is assigned to your job. They coordinate truck allocation, departure date, any intermediate stops along the ${route.highway}, and storage if needed.` },
              { step: "03", title: "Pack, Wrap & Load", desc: `Our team arrives at your ${route.from} address fully equipped. Every item is wrapped in protective blankets and secured before loading. Furniture is disassembled where needed.` },
              { step: "04", title: `Delivered to ${route.to}`, desc: `Your belongings travel via the ${route.highway} and are delivered directly inside your new ${route.to} home. We keep you updated during the ${route.days}-${daysSuffix} transit.` },
            ].map((step) => (
              <div key={step.step} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-6xl font-black text-[#F5A800] opacity-20 leading-none mb-4">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Customer Reviews
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
                What Our {route.from} to {route.to} Customers Say
              </h2>
              <p className="text-gray-500 mb-8">4.9 stars across 900+ verified Google reviews</p>
              <div className="space-y-4">
                {REVIEWS.map((review) => (
                  <div key={review.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F5A800] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="font-bold text-[#1A1A1A] text-sm">{review.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-cairns-removalists-reviews.webp"
                alt={`R2G removalists loading furniture for a ${route.from} to ${route.to} interstate move`}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F5A800] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-4">
            Ready to Move from {route.from} to {route.to}?
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-lg mx-auto">
            Get a free, no-obligation quote for your {route.from} to {route.to} move. Tell
            us your details and we&apos;ll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition-colors"
            >
              Get a Free Quote Online
            </Link>
            <a
              href="tel:1300959498"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black font-bold text-lg rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              📞 Call 1300 959 498
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        heading={`${route.from} to ${route.to} Removalists FAQ`}
        items={[
          {
            question: `How long does a ${route.from} to ${route.to} move take?`,
            answer: `The ${route.from} to ${route.to} route is approximately ${route.km} km and typically takes ${route.days} transit days by road. Shared loads may take slightly longer due to consolidation scheduling. Exclusive loads offer faster, more direct delivery. We provide estimated delivery windows at the time of booking.`,
          },
          {
            question: `How much does it cost to move from ${route.from} to ${route.to}?`,
            answer: `${route.from} to ${route.to} removal costs vary depending on the volume of your move, whether you choose a shared or exclusive load, and your preferred dates. We don\u2019t publish fixed prices because every move is different. Contact us for a free, itemised quote with no obligation.`,
          },
          {
            question: `What is the difference between a shared and exclusive load on the ${route.from} to ${route.to} route?`,
            answer: `A shared load means your belongings travel with other customers\u2019 goods heading in the same direction, consolidated into one truck. This reduces cost significantly and works well for smaller moves. An exclusive load means the entire truck is dedicated to your move \u2014 faster transit, full scheduling control, and no other goods sharing the space.`,
          },
          {
            question: `Is my furniture insured on the ${route.from} to ${route.to} move?`,
            answer: `Yes. Every interstate move with R2G includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from the moment we load them at your ${route.from} address to the moment they are delivered to your ${route.to} property.`,
          },
          {
            question: `How far in advance should I book a ${route.from} to ${route.to} move?`,
            answer: `We recommend booking at least 3\u20134 weeks ahead, particularly for moves at the end of the month or during the December\u2013January peak season. The earlier you book, the more flexibility you have on load type and departure dates.`,
          },
        ]}
      />

      {/* ── RELATED ROUTES ── */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-[#1A1A1A]">More Interstate Routes from {route.from}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/interstate-removalists/${rel.slug}`}
                  className="group p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#F5A800] transition-colors"
                >
                  <h3 className="font-black text-[#1A1A1A] text-lg mb-2 group-hover:text-[#F5A800] transition-colors">
                    {rel.from} to {rel.to} →
                  </h3>
                  <p className="text-gray-500 text-sm">{rel.km} km, {rel.days} days transit</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── INTERNAL LINKS ── */}
      <InternalLinks />
    </>
  );
}

// ══════════════════════════════════════════════
//  SHARED COMPONENTS
// ══════════════════════════════════════════════

function TickerSection({ heading, subtext }: { heading: string[]; subtext: string }) {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tickerLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes tickerRight {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .route-tile:hover {
          border-color: #F5A800 !important;
          box-shadow: 0 2px 12px rgba(245, 168, 0, 0.15) !important;
          transform: translateY(-1px) !important;
        }
      `}} />

      <div className="text-center px-6 mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[2px] w-7 bg-[#F5A800]" />
          <span className="text-[#F5A800] text-xs font-bold tracking-widest uppercase">Interstate Routes</span>
          <div className="h-[2px] w-7 bg-[#F5A800]" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A1A] mb-4 leading-tight">
          {heading.map((part, i) =>
            i % 2 === 1
              ? <span key={i} className="text-[#F5A800]">{part}</span>
              : <span key={i}>{part}</span>
          )}
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          {subtext}
        </p>
      </div>

      {TICKER_ROWS.map((row, i) => (
        <div key={i} style={{
          overflow: "hidden", width: "100%", padding: "5px 0",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          marginBottom: 10,
        }}>
          <div style={{
            display: "inline-flex",
            animation: `${row.dir === "right" ? "tickerRight" : "tickerLeft"} ${row.speed} linear infinite`,
            willChange: "transform",
          }}>
            {[...row.routes, ...row.routes, ...row.routes].map((route, j) => (
              <a
                key={j}
                href={`/interstate-removalists/${route.slug}`}
                className={row.faded ? undefined : "route-tile"}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "10px 20px", margin: "0 6px", borderRadius: 10,
                  background: row.faded ? "#f9f9f9" : "#ffffff",
                  border: `1px solid ${row.faded ? "#efefef" : "#e8e8e8"}`,
                  boxShadow: row.faded ? "none" : "0 1px 4px rgba(0,0,0,0.06)",
                  whiteSpace: "nowrap", flexShrink: 0,
                  opacity: row.faded ? 0.45 : 1,
                  textDecoration: "none",
                  transition: "all 0.18s ease",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: row.faded ? "#bbb" : "#333" }}>{route.from}</span>
                <span style={{ color: "#F5A800", fontWeight: 900, fontSize: 14 }}>→</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: row.faded ? "#bbb" : "#111" }}>{route.to}</span>
                <span style={{ width: 1, height: 14, background: row.faded ? "#eee" : "#ddd", flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: row.faded ? "#ccc" : "#999" }}>{route.km} km</span>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  color: row.faded ? "#ddd" : "#c98a00",
                  background: row.faded ? "#fafafa" : "#fffbf0",
                  border: `1px solid ${row.faded ? "#eee" : "#f0e0b0"}`,
                  padding: "2px 8px", borderRadius: 5,
                }}>{route.days}</span>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-14 px-6">
        <p className="text-gray-400 text-sm mb-6">
          Don&apos;t see your route? We cover many more — call us and we&apos;ll sort it.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/quote" className="inline-flex items-center px-8 py-4 bg-[#F5A800] text-black font-bold text-base rounded-lg hover:bg-[#e09900] transition-colors">
            Get a Free Quote →
          </Link>
          <a href="tel:1300959498" className="inline-flex items-center px-8 py-4 border border-gray-200 text-gray-500 font-semibold text-base rounded-lg hover:border-gray-300 transition-colors">
            📞 1300 959 498
          </a>
        </div>
      </div>
    </section>
  );
}

function InternalLinks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-[#1A1A1A]">More Removalist Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Removalists Cairns", desc: "Local moves across Cairns and Far North Queensland.", href: "/removalists-cairns" },
            { title: "Removalists Brisbane", desc: "Professional removalists across Brisbane and South East QLD.", href: "/removalists-brisbane" },
            { title: "Office Removalists", desc: "Commercial moving for businesses across QLD and beyond.", href: "/office-removalists" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#F5A800] transition-colors"
            >
              <h3 className="font-black text-[#1A1A1A] text-lg mb-2 group-hover:text-[#F5A800] transition-colors">
                {link.title} →
              </h3>
              <p className="text-gray-500 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════
//  MAIN PAGE COMPONENT
// ══════════════════════════════════════════════

type PageProps = { params: Promise<{ slug: string }> };

export default async function InterstateSlugPage({ params }: PageProps) {
  const { slug } = await params;

  // Check city first
  const city = getCityPageBySlug(slug);
  if (city) return <CityPage city={city} />;

  // Check route
  const route = getRouteBySlug(slug);
  if (route) return <RoutePage route={route} />;

  // Neither
  notFound();
}
