import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroQuoteWidget from "@/components/HeroQuoteWidget";
import HeroTrustBadges from "@/components/HeroTrustBadges";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Interstate Removalists | Fully Insured, Long Distance Moves",
  description:
    "R2G Transport & Storage — interstate removalists operating from Cairns and Brisbane. Door-to-door moves across QLD, NSW and VIC. Fully insured, 900+ five-star reviews. Get a free quote today.",
  openGraph: {
    title: "Interstate Removalists | R2G Transport & Storage",
    description:
      "Door-to-door interstate removals from Cairns & Brisbane. Fully insured, experienced team, 900+ five-star reviews. Free quote — 1300 959 498.",
    url: "https://www.r2g.com.au/interstate-removalists",
  },
  alternates: {
    canonical: "https://www.r2g.com.au/interstate-removalists",
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Queensland, Australia",
  },
};

const schemaMarkup = {
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
          address: {
            "@type": "PostalAddress",
            streetAddress: "36 Abbott St",
            addressLocality: "Cairns City",
            addressRegion: "QLD",
            postalCode: "4870",
            addressCountry: "AU",
          },
        },
        {
          "@type": "Place",
          name: "R2G Transport & Storage — Brisbane",
          address: {
            "@type": "PostalAddress",
            streetAddress: "122 Ashover Cct",
            addressLocality: "Archerfield",
            addressRegion: "QLD",
            postalCode: "4108",
            addressCountry: "AU",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "900",
        bestRating: "5",
      },
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
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What interstate routes does R2G service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "R2G services interstate routes across the full Queensland coastal corridor from Cairns to Brisbane, the QLD mining and resources belt including Moranbah, Emerald and Dysart, and long-haul routes south to Sydney and Melbourne. We operate from depots in Cairns City and Archerfield, Brisbane.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an interstate move from Cairns to Brisbane take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cairns to Brisbane typically takes 2–3 transit days by road. Shared loads may take slightly longer due to consolidation scheduling. Exclusive loads offer faster, more direct delivery. We provide estimated delivery windows at the time of booking.",
          },
        },
        {
          "@type": "Question",
          name: "What is a shared load interstate move?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A shared load means your belongings travel on the same truck as other customers' goods heading in the same direction. This significantly reduces cost compared to booking an exclusive truck. It is ideal for 1–3 bedroom moves where flexibility on delivery timing is acceptable.",
          },
        },
        {
          "@type": "Question",
          name: "What is an exclusive load interstate move?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An exclusive load means the entire truck is dedicated solely to your move. You get full control over pickup and delivery timing, faster transit, and no other goods share the space. Best suited for larger homes, time-sensitive moves or high-value items.",
          },
        },
        {
          "@type": "Question",
          name: "Is my furniture insured during an interstate move with R2G?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every interstate move with R2G includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from the moment we load them to the moment they are delivered.",
          },
        },
        {
          "@type": "Question",
          name: "Do R2G interstate removalists service mining towns like Moranbah and Emerald?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. R2G regularly services the Queensland mining and resources belt including Moranbah, Emerald, Dysart, Middlemount and Charters Towers. We are experienced with FIFO relocations and the specific logistics of moves in and out of resource industry towns.",
          },
        },
      ],
    },
  ],
};


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

export default function InterstateRemovalistsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#1A1A1A] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2a1f00] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F5A800] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5A800] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-10 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Cairns · Brisbane · Australia-Wide
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                Interstate <br />
                <span className="text-[#F5A800]">Removalists</span> <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-bold">Cairns, Brisbane &amp; Queensland</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
                Door-to-door interstate moves across Queensland, New South Wales and Victoria.
                Fully insured, experienced team, shared or exclusive loads — handled properly
                from pickup to delivery.
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

      {/* ── INTRO / SEO COPY ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Interstate Removalists
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                Interstate Removalists — Long Distance Moves Done Right
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Interstate moving is a different challenge to a local move. Your belongings
                  travel hundreds — sometimes thousands — of kilometres, often to somewhere
                  you&apos;ve never been. The margin for error is smaller, the consequences
                  of a poorly managed move are bigger, and the trust you place in your
                  removalist matters more than ever.
                </p>
                <p>
                  R2G Transport &amp; Storage has been handling interstate removals across
                  Queensland and Australia for over 10 years. We operate from depots in
                  Cairns City and Archerfield, Brisbane, running regular routes along the
                  full QLD coastal corridor, through the mining and resources belt, and
                  south into New South Wales and Victoria. Every move is managed by an
                  experienced team, fully insured, and tracked door to door.
                </p>
                <p>
                  Our 900+ verified five-star reviews reflect thousands of families and
                  businesses who trusted us with their most important possessions and got
                  exactly what they were promised. Whether you&apos;re looking for
                  interstate movers for a single bedroom or a full household, we deliver
                  the same level of care. No hidden fees. No subcontracting. No surprises.
                </p>
              </div>
            </div>
            {/* Right — truck image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-removal-truck-cairns.webp"
                alt="R2G interstate removalists truck delivering furniture from Cairns to Brisbane Queensland"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Feature cards + reviews image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
            {/* Left — feature cards */}
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
            {/* Right — reviews image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-cairns-removalists-reviews.webp"
                alt="Interstate removals team loading household furniture for door-to-door move from Queensland"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
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

      {/* ── ROUTES TICKER ── */}
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
            We Move Across <span className="text-[#F5A800]">All of Australia</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            130+ routes covered from our Cairns and Brisbane depots.
            Coastal corridors, mining towns, capital cities — fully insured, door to door.
          </p>
        </div>


        {[
          {
            dir: "left" as const, speed: "45s", faded: false,
            routes: [
              { from: "Cairns",      to: "Brisbane",      slug: "cairns-to-brisbane",          km: "1,700", days: "2–3 days" },
              { from: "Brisbane",    to: "Sydney",         slug: "brisbane-to-sydney",          km: "920",   days: "1–2 days" },
              { from: "Townsville",  to: "Melbourne",      slug: "townsville-to-melbourne",     km: "2,500", days: "3–4 days" },
              { from: "Cairns",      to: "Townsville",     slug: "cairns-to-townsville",        km: "350",   days: "1 day"    },
              { from: "Brisbane",    to: "Cairns",         slug: "brisbane-to-cairns",          km: "1,700", days: "2–3 days" },
              { from: "Mackay",      to: "Brisbane",       slug: "mackay-to-brisbane",          km: "970",   days: "1–2 days" },
              { from: "Sydney",      to: "Melbourne",      slug: "sydney-to-melbourne",         km: "870",   days: "1–2 days" },
              { from: "Rockhampton", to: "Cairns",         slug: "rockhampton-to-cairns",       km: "1,150", days: "2 days"   },
              { from: "Brisbane",    to: "Melbourne",      slug: "brisbane-to-melbourne",       km: "1,750", days: "2–3 days" },
              { from: "Cairns",      to: "Sydney",         slug: "cairns-to-sydney",            km: "2,600", days: "3–4 days" },
              { from: "Townsville",  to: "Brisbane",       slug: "townsville-to-brisbane",      km: "1,350", days: "2 days"   },
              { from: "Brisbane",    to: "Rockhampton",    slug: "brisbane-to-rockhampton",     km: "640",   days: "1 day"    },
            ],
          },
          {
            dir: "right" as const, speed: "35s", faded: false,
            routes: [
              { from: "Brisbane",    to: "Gold Coast",     slug: "brisbane-to-gold-coast",      km: "80",    days: "1 day"    },
              { from: "Cairns",      to: "Moranbah",       slug: "cairns-to-moranbah",          km: "1,000", days: "2 days"   },
              { from: "Melbourne",   to: "Brisbane",       slug: "melbourne-to-brisbane",       km: "1,750", days: "2–3 days" },
              { from: "Mackay",      to: "Moranbah",       slug: "mackay-to-moranbah",          km: "190",   days: "1 day"    },
              { from: "Brisbane",    to: "Toowoomba",      slug: "brisbane-to-toowoomba",       km: "130",   days: "1 day"    },
              { from: "Rockhampton", to: "Emerald",        slug: "rockhampton-to-emerald",      km: "270",   days: "1 day"    },
              { from: "Sydney",      to: "Brisbane",       slug: "sydney-to-brisbane",          km: "920",   days: "1–2 days" },
              { from: "Cairns",      to: "Emerald",        slug: "cairns-to-emerald",           km: "1,100", days: "2 days"   },
              { from: "Brisbane",    to: "Sunshine Coast", slug: "brisbane-to-sunshine-coast",  km: "100",   days: "1 day"    },
              { from: "Townsville",  to: "Moranbah",       slug: "townsville-to-moranbah",      km: "600",   days: "1 day"    },
              { from: "Melbourne",   to: "Sydney",         slug: "melbourne-to-sydney",         km: "870",   days: "1–2 days" },
              { from: "Cairns",      to: "Airlie Beach",   slug: "cairns-to-airlie-beach",      km: "680",   days: "1 day"    },
            ],
          },
          {
            dir: "left" as const, speed: "55s", faded: true,
            routes: [
              { from: "Brisbane",    to: "Charleville",    slug: "brisbane-to-charleville",     km: "750",   days: "1 day"    },
              { from: "Rockhampton", to: "Sydney",         slug: "rockhampton-to-sydney",       km: "1,350", days: "2 days"   },
              { from: "Townsville",  to: "Cairns",         slug: "townsville-to-cairns",        km: "350",   days: "1 day"    },
              { from: "Brisbane",    to: "Adelaide",       slug: "brisbane-to-adelaide",        km: "2,050", days: "3 days"   },
              { from: "Cairns",      to: "Melbourne",      slug: "cairns-to-melbourne",         km: "3,100", days: "4–5 days" },
              { from: "Mackay",      to: "Rockhampton",    slug: "mackay-to-rockhampton",       km: "335",   days: "1 day"    },
              { from: "Brisbane",    to: "Emerald",        slug: "brisbane-to-emerald",         km: "870",   days: "1–2 days" },
              { from: "Melbourne",   to: "Cairns",         slug: "melbourne-to-cairns",         km: "3,200", days: "4–5 days" },
              { from: "Rockhampton", to: "Brisbane",       slug: "rockhampton-to-brisbane",     km: "640",   days: "1 day"    },
              { from: "Brisbane",    to: "Moranbah",       slug: "brisbane-to-moranbah",        km: "1,050", days: "2 days"   },
              { from: "Sydney",      to: "Cairns",         slug: "sydney-to-cairns",            km: "2,600", days: "3–4 days" },
              { from: "Mackay",      to: "Emerald",        slug: "mackay-to-emerald",           km: "280",   days: "1 day"    },
            ],
          },
        ].map((row, i) => (
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
              What Our Customers Say
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
            Ready to Plan Your Interstate Move?
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-lg mx-auto">
            Get a free, no-obligation quote. Tell us where you&apos;re moving and
            we&apos;ll take care of the rest.
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
        heading="Interstate Removals FAQ"
        items={[
          {
            question: "What interstate routes does R2G service?",
            answer: "R2G services the full Queensland coastal corridor from Cairns to Brisbane, the QLD mining and resources belt including Moranbah, Emerald and Dysart, and long-haul routes south to Sydney and Melbourne. We operate from depots in Cairns City and Archerfield, Brisbane.",
          },
          {
            question: "How long does an interstate move from Cairns to Brisbane take?",
            answer: "Cairns to Brisbane typically takes 2\u20133 transit days. Shared loads may take slightly longer due to consolidation scheduling. Exclusive loads offer faster, more direct delivery. We provide estimated delivery windows at time of booking.",
          },
          {
            question: "What is the difference between a shared load and an exclusive load?",
            answer: "A shared load means your belongings travel on the same truck as other customers heading in the same direction \u2014 reducing cost significantly. An exclusive load dedicates the entire truck to your move, offering faster transit and full control over scheduling.",
          },
          {
            question: "Is my furniture insured during the interstate move?",
            answer: "Yes. Every interstate move includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from the moment we load them to final delivery.",
          },
          {
            question: "Do you service mining towns like Moranbah and Emerald?",
            answer: "Yes. R2G regularly services the QLD mining and resources belt including Moranbah, Emerald, Dysart, Middlemount and Charters Towers. We\u2019re experienced with FIFO relocations and the logistics of moves in and out of resource industry towns.",
          },
          {
            question: "How far in advance should I book my interstate move?",
            answer: "We recommend booking 3\u20134 weeks ahead where possible, particularly for end-of-month dates and the December\u2013January peak season. The earlier you book, the better your options on timing and load type.",
          },
        ]}
      />

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#1A1A1A]">Our Other Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Removalists Cairns",
                desc: "Local moves across Cairns and Far North Queensland.",
                href: "/removalists-cairns",
              },
              {
                title: "Removalists Brisbane",
                desc: "Professional removalists across Brisbane and South East QLD.",
                href: "/removalists-brisbane",
              },
              {
                title: "Office Relocations",
                desc: "Commercial moving for businesses across QLD and beyond.",
                href: "/office-removals",
              },
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
    </>
  );
}
