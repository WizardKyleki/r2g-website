import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const HeroQuoteWidget = dynamic(() => import("@/components/HeroQuoteWidget"));
const HeroTrustBadges = dynamic(() => import("@/components/HeroTrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
import { PHONE, PHONE_HREF, RATING_VALUE, REVIEW_COUNT, REVIEW_DISPLAY } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — targets "office removalists brisbane" (vol 200/mo, KD 4, CPC $9)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Office Removalists Brisbane | QLD Commercial Movers | R2G" },
  description:
    `Office removalists Brisbane. Commercial moves for offices, warehouses, retail and medical fit-outs across Brisbane and SE QLD. After-hours and weekend moves available. Fully insured. ${REVIEW_DISPLAY} reviews. Free quote.`,
  keywords: [
    "office removalists brisbane",
    "office movers brisbane",
    "commercial removalists brisbane",
    "office relocation brisbane",
    "business removalists brisbane",
    "after hours office movers brisbane",
    "office furniture removalists brisbane",
  ],
  alternates: { canonical: "https://www.r2g.com.au/office-removalists-brisbane" },
  openGraph: {
    title: "Office Removalists Brisbane | R2G Commercial Moves",
    description:
      `Office relocations across Brisbane handled after-hours, on weekends, or during business hours. Fully insured, ${REVIEW_DISPLAY} five-star reviews. Free site visit. 1300 959 498.`,
    url: "https://www.r2g.com.au/office-removalists-brisbane",
  },
  robots: { index: true, follow: true },
};

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://www.r2g.com.au/office-removalists-brisbane#business",
      name: "R2G Transport & Storage — Office Removalists Brisbane",
      url: "https://www.r2g.com.au/office-removalists-brisbane",
      telephone: "1300 959 498",
      email: "contact@r2g.com.au",
      description:
        `Commercial office removalists in Brisbane. Office relocations, warehouse moves, retail fit-outs and medical practice relocations. After-hours service available. ${REVIEW_DISPLAY} five-star reviews.`,
      logo: "https://www.r2g.com.au/images/r2g-logo.png",
      image: "https://www.r2g.com.au/images/r2g-removalists-brisbane-truck.webp",
      priceRange: "$$",
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
      areaServed: [
        "Brisbane",
        "Brisbane CBD",
        "South Brisbane",
        "Fortitude Valley",
        "Newstead",
        "Milton",
        "Toowong",
        "Bowen Hills",
        "Spring Hill",
        "Eagle Farm",
        "Northshore Brisbane",
        "Murarrie",
        "Hemmant",
        "Tingalpa",
        "Hamilton",
        "Pinkenba",
        "South East Queensland",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "08:00",
          closes: "17:00",
          description: "By arrangement for after-hours and weekend office moves",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: RATING_VALUE,
        reviewCount: REVIEW_COUNT,
        bestRating: "5",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Office Removal Services Brisbane",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Relocations Brisbane", description: "Full-service office moves across Brisbane CBD and inner suburbs." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Relocations Brisbane", description: "Industrial and warehouse moves across Brisbane south, east and airport precincts." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retail Fit-Out Moves Brisbane", description: "Retail relocations, store openings and fit-outs Brisbane-wide." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Practice Relocations Brisbane", description: "Sensitive equipment moves for medical and dental practices." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "After-Hours Office Moves Brisbane", description: "Weekend and overnight commercial moves to minimise business downtime." } },
        ],
      },
      sameAs: [
        "https://www.facebook.com/R2Gtransport/",
        "https://www.instagram.com/r2gtransport/",
        "https://au.linkedin.com/company/r2g-transport-storage",
        "https://www.google.com/maps?cid=11773202456138120338",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.r2g.com.au" },
        { "@type": "ListItem", position: 2, name: "Office Removalists Brisbane", item: "https://www.r2g.com.au/office-removalists-brisbane" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do office removalists in Brisbane cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Office moves in Brisbane are quoted based on volume, distance, after-hours requirements, and disassembly needs. Standard hourly rates start from $179/hr for 2 movers + truck and $269/hr for 3 movers + large truck. We offer fixed-price quotes for offices over 200 sqm or moves with complex requirements. Site visits are free.",
          },
        },
        {
          "@type": "Question",
          name: "Can you move our Brisbane office after hours or on weekends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After-hours and weekend office moves are our most-requested service. We commonly relocate Brisbane CBD and Fortitude Valley offices on Friday nights or Saturdays so businesses are operational by Monday morning. After-hours rates apply but are typically far cheaper than the cost of a Monday lost to logistics.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle IT equipment, servers and workstations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We move workstations, monitors, server racks, networking equipment, and printers. Our team uses anti-static packaging for sensitive electronics. We coordinate with your IT manager or MSP for shutdown and reconnection windows. For high-value server moves we recommend a dedicated truck with climate consideration.",
          },
        },
        {
          "@type": "Question",
          name: "Can you disassemble and reassemble office furniture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Workstations, desks, partitions, shelving, conference tables and storage units are all disassembled and reassembled by our team. We label every component during disassembly so reassembly at the new Brisbane site is fast and accurate.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide insurance for commercial office moves in Brisbane?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every R2G commercial move includes public liability insurance and goods-in-transit insurance as standard. Higher-value moves can be arranged with additional cover. We can provide a Certificate of Currency for your building manager prior to the move.",
          },
        },
        {
          "@type": "Question",
          name: "Which Brisbane suburbs do you cover for office removals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We service all Brisbane commercial precincts including Brisbane CBD, Fortitude Valley, Newstead, Milton, Toowong, South Brisbane, Spring Hill, Bowen Hills, Eagle Farm, Northshore, Murarrie, Hemmant, Tingalpa, Hamilton, Archerfield, Acacia Ridge, Rocklea and the airport precinct. We also service the broader SE QLD corridor including Logan, Ipswich and the Gold Coast for office relocations.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Office Removals",
      provider: { "@id": "https://www.r2g.com.au/office-removalists-brisbane#business" },
      areaServed: { "@type": "City", name: "Brisbane" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Office Removalists Brisbane",
      },
    },
  ],
};

const INCLUDED = [
  "After-hours and weekend availability",
  "Workstation disassembly & reassembly",
  "IT equipment and server handling",
  "Filing cabinet and archive box moves",
  "Office furniture wrapping & padding",
  "Lift bookings and dock coordination",
  "Building manager Certificate of Currency",
  "Free site visit & detailed written quote",
  "Goods-in-transit & public liability insurance",
  "Storage between offices available",
];

const REVIEWS = [
  {
    name: "Joe D'Souza",
    text: "From start to finish, the process was smooth, efficient, and completely stress-free. Every item, from heavy furniture to fragile pieces, was handled with exceptional care and professionalism. Communication was clear throughout, and they went above and beyond to ensure everything was placed exactly where we wanted.",
    role: "Brisbane CBD Office Move",
    rating: 5,
  },
  {
    name: "Naree Stariha",
    text: "Mateus and Will are AMAZING! They are careful and did everything we asked to move and pack perfectly! HIGHLY RECOMMEND THE GUYS AND THE COMPANY!!! So happy!",
    role: "Fortitude Valley Office Relocation",
    rating: 5,
  },
  {
    name: "Darlene Murphy",
    text: "Daniel and Marcos handled the entire process, and I couldn't be more impressed with their professionalism and care. The price was very reasonable and actually much lower than I expected for such a big task.",
    role: "Eagle Farm Warehouse Move",
    rating: 5,
  },
];

export default function OfficeRemovalistsBrisbanePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] bg-[#1A1A1A] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2a1f00] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F5A800] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-[#F5A800] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/office-removalists" className="hover:text-[#F5A800] transition-colors">Office Removalists</Link>
                <span>/</span>
                <span className="text-[#F5A800]">Brisbane</span>
              </nav>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-10 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Brisbane &amp; SE QLD
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                Office <br />
                <span className="text-[#F5A800]">Removalists</span> <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-bold">Brisbane</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
                Commercial office moves across Brisbane handled by an in-house team. After-hours,
                weekends, or business hours. Workstations, IT, archives, fit-outs. Fully insured.
                Free site visit and detailed quote.
              </p>
              <div className="xl:hidden mb-8">
                <HeroQuoteWidget />
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center px-7 py-3.5 bg-[#F5A800] text-black font-bold rounded-lg hover:bg-[#e09900] transition-colors"
                >
                  Get a Free Site Visit →
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  <span>📞</span>
                  <span>{PHONE}</span>
                </a>
              </div>
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
              { stat: REVIEW_DISPLAY, label: "5-Star Reviews" },
              { stat: "24/7", label: "After-Hours Available" },
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
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#F5A800]" />
                <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                  Office Removalists Brisbane
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                Commercial Office Moves Done Right
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Office relocations are not residential moves. The schedule is tighter, the items
                  are more sensitive, the building access rules are stricter, and every hour of
                  business downtime costs money. R2G Transport &amp; Storage handles office
                  removals across Brisbane with that reality in mind.
                </p>
                <p>
                  We&apos;ve moved Brisbane offices ranging from 5-person consultancies in
                  Fortitude Valley to 80+ workstation operations in Eagle Farm and Murarrie.
                  Our team handles workstation disassembly, IT equipment, server relocations,
                  filing archives, fit-out furniture, retail stock and medical practice equipment.
                  Every Brisbane office move is fully insured and includes Certificate of
                  Currency for your building manager.
                </p>
                <p>
                  Most clients book us for after-hours or weekend moves so they can keep
                  business running normally. We start a Friday night, work through Saturday,
                  and the new office is operational Monday morning. For larger moves we run
                  multiple trucks in parallel and coordinate dock and lift bookings with the
                  building manager directly.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-office-relocation-cairns.webp"
                alt="R2G office removalists relocating Brisbane commercial office"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE MOVE ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                Brisbane Commercial Moves
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">
              The Types of Office Moves We Handle
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Brisbane covers a wide range of commercial environments &mdash; corporate towers, low-rise
              office parks, warehouses, retail strips, medical precincts. We&apos;ve moved them all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏢",
                title: "Corporate Office Relocations",
                desc: "Full-service corporate office moves across Brisbane CBD, Fortitude Valley, Newstead, Milton and Toowong. Workstations, executive offices, board rooms, breakout areas.",
              },
              {
                icon: "📦",
                title: "Warehouse & Distribution Moves",
                desc: "Industrial and warehouse relocations across Brisbane south (Acacia Ridge, Archerfield, Rocklea), east (Murarrie, Hemmant, Tingalpa) and airport precinct.",
              },
              {
                icon: "🛍️",
                title: "Retail Fit-Out Moves",
                desc: "Retail relocations and store openings across Brisbane shopping centres and high streets. Stock, fixtures, POS systems and display furniture.",
              },
              {
                icon: "🏥",
                title: "Medical Practice Relocations",
                desc: "Specialist moves for GP clinics, dental practices and allied health. Sensitive equipment, sterilisation gear, patient files, custom cabinetry.",
              },
              {
                icon: "💻",
                title: "Co-Working & Tech Office Moves",
                desc: "Brisbane co-working tenants and tech startups in The Precinct, Fishburners, WeWork, and similar. Laptop docks, monitors, gaming chairs and standing desks.",
              },
              {
                icon: "📁",
                title: "Archive & Filing Relocations",
                desc: "Bulk archive box moves with chain of custody, ideal for legal, accounting, government and healthcare offices with large physical record requirements.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
                Process
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              How a Brisbane Office Move Works With R2G
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Free Site Visit",
                desc: "We come to your Brisbane office, walk through every floor, count workstations, photograph access points, check lift dimensions and dock requirements. We leave with a detailed list and you get a written quote within 24 hours.",
              },
              {
                step: "02",
                title: "Move Plan & Timeline",
                desc: "We build a move plan around your business hours. Weekend, after-hours, or staged daytime moves. We coordinate with your building manager, IT team and reception so nothing gets missed.",
              },
              {
                step: "03",
                title: "Pack, Disassemble & Load",
                desc: "Our team arrives with crates, anti-static padding, dollies and all required protection. Workstations are disassembled with labelled components. IT equipment is wrapped properly. Archives are sealed.",
              },
              {
                step: "04",
                title: "Reinstall At New Office",
                desc: "We reassemble workstations, place furniture per floor plan, set up server rooms back to a switch-on state, and remove all packing material at the end. Your team walks in Monday morning to a working office.",
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
      <section className="bg-white py-20">
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
                What Every Brisbane Office Move Includes
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Office moves include a comprehensive set of services as standard. We don&apos;t
                  charge separately for things that should simply be part of a professional
                  commercial relocation. Insurance, packing protection, lift bookings and a
                  dedicated point of contact are baked in.
                </p>
                <p>
                  Optional services like packing of personal effects, IT shutdown coordination,
                  storage of surplus furniture, and fit-out wash-up cleaning can all be added
                  to your quote.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDED.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
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

      {/* ── BRISBANE PRECINCTS ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                Coverage
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
              Brisbane Commercial Precincts We Service
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mt-3">
              From corporate towers in the CBD to industrial estates south and east of the city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: "Brisbane CBD & Inner", suburbs: ["CBD", "Fortitude Valley", "Newstead", "Spring Hill", "Bowen Hills", "South Brisbane", "Milton", "Paddington"] },
              { region: "North & Airport", suburbs: ["Eagle Farm", "Hamilton", "Northshore", "Pinkenba", "Hendra", "Ascot", "Clayfield", "Kedron"] },
              { region: "South & Industrial", suburbs: ["Archerfield", "Acacia Ridge", "Rocklea", "Salisbury", "Coopers Plains", "Sunnybank", "Mount Gravatt", "Underwood"] },
              { region: "East & Bayside", suburbs: ["Murarrie", "Hemmant", "Tingalpa", "Cannon Hill", "Wynnum", "Manly", "Capalaba", "Cleveland"] },
            ].map((group) => (
              <div key={group.region}>
                <h3 className="font-bold text-[#1A1A1A] mb-3 border-b-2 border-[#F5A800] pb-2">
                  {group.region}
                </h3>
                <ul className="space-y-1">
                  {group.suburbs.map((s) => (
                    <li key={s} className="text-sm text-gray-600">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-10">
            Don&apos;t see your suburb? We service all of Greater Brisbane and SE QLD. Call {PHONE} for a quick check.
          </p>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#F5A800]" />
              <span className="text-[#F5A800] text-sm font-semibold tracking-widest uppercase">
                Brisbane Customer Reviews
              </span>
              <div className="h-[2px] w-8 bg-[#F5A800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
              What Brisbane Businesses Say
            </h2>
            <p className="text-gray-500 mt-2">{RATING_VALUE} stars across {REVIEW_DISPLAY} verified Google reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
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
                <div className="text-xs text-gray-500 mt-1">{review.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F5A800] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-4">
            Ready to Plan Your Brisbane Office Move?
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-lg mx-auto">
            Free site visit. Detailed written quote within 24 hours. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition-colors"
            >
              Get a Free Site Visit
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black font-bold text-lg rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              📞 {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        heading="Office Removalists Brisbane FAQ"
        items={[
          {
            question: "How much do office removalists in Brisbane cost?",
            answer:
              "Standard rates start from $179/hr for 2 movers + truck and $269/hr for 3 movers + large truck. Larger moves are quoted as fixed-price after a free site visit. After-hours and weekend rates apply. Office moves typically include disassembly, reassembly, and packing protection in the rate.",
          },
          {
            question: "Can you move our office after hours or on weekends?",
            answer:
              "Yes — this is our most-requested service for Brisbane office moves. Friday night through Saturday is the most common window. Your business stays open Friday and Monday with no disruption.",
          },
          {
            question: "Do you handle IT equipment and servers?",
            answer:
              "Yes. Workstations, monitors, server racks, networking equipment and printers are all moved using anti-static packaging. We coordinate shutdown and reconnection windows with your IT team.",
          },
          {
            question: "Do you disassemble and reassemble office furniture?",
            answer:
              "Yes. Workstations, desks, partitions, conference tables and shelving are all disassembled and reassembled. Components are labelled during disassembly so reassembly at the new Brisbane site is fast and accurate.",
          },
          {
            question: "Can you provide a Certificate of Currency for our building manager?",
            answer:
              "Yes. R2G holds public liability and goods-in-transit insurance and we provide a Certificate of Currency on request prior to the move date. Required by most Brisbane CBD and tower buildings.",
          },
          {
            question: "Which Brisbane suburbs do you cover?",
            answer:
              "All Brisbane commercial precincts including CBD, Fortitude Valley, Newstead, Milton, Toowong, South Brisbane, Spring Hill, Bowen Hills, Eagle Farm, Northshore, Murarrie, Hemmant, Tingalpa, Hamilton, Archerfield, Acacia Ridge, Rocklea and the airport precinct. We also cover Logan, Ipswich, Gold Coast and Sunshine Coast for office relocations.",
          },
        ]}
      />

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#1A1A1A]">Related R2G Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Removalists Brisbane", desc: "Local residential moves across Brisbane.", href: "/removalists-brisbane" },
              { title: "Interstate Removalists", desc: "Brisbane to Sydney, Melbourne, Cairns and beyond.", href: "/interstate-removalists" },
              { title: "Office Removalists (All Locations)", desc: "Commercial moves across QLD.", href: "/office-removalists" },
              { title: "Storage Brisbane", desc: "Flexible storage between offices.", href: "/storage-brisbane" },
              { title: "Same-Day Removalists Brisbane", desc: "Urgent commercial and residential moves.", href: "/same-day-removalists-brisbane" },
              { title: "Removalists Cairns", desc: "Office moves and relocations in Cairns.", href: "/removalists-cairns" },
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
