import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF, RATING_VALUE, REVIEW_COUNT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Removalists Logan | Local Moving Experts | R2G",
  description:
    "Professional removalists in Logan City covering Springwood, Beenleigh, Marsden, Loganholme, and Shailer Park. Fully insured local and interstate moves. Free quotes from R2G.",
  keywords: ["removalists logan", "movers logan", "logan removalists", "removalists beenleigh", "removalists springwood"],
  alternates: { canonical: "https://www.r2g.com.au/removalists-logan" },
  openGraph: {
    title: "Removalists Logan | Local Moving Experts | R2G",
    description: "Professional removalists in Logan City. Springwood, Beenleigh, Marsden, and all Logan suburbs. Free quotes from R2G.",
    url: "https://www.r2g.com.au/removalists-logan",
  },
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
      name: "Removalists Logan",
      item: "https://www.r2g.com.au/removalists-logan",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Professional removalists in Logan City providing local and interstate moving services across Springwood, Beenleigh, Marsden, Loganholme, Shailer Park, and all Logan suburbs.",
  telephone: "1300 959 498",
  url: "https://www.r2g.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "122 Ashover Circuit",
    addressLocality: "Archerfield",
    addressRegion: "QLD",
    postalCode: "4108",
    addressCountry: "AU",
  },
  areaServed: [
    "Logan",
    "Springwood",
    "Beenleigh",
    "Marsden",
    "Loganholme",
    "Shailer Park",
    "Meadowbrook",
    "Browns Plains",
    "Crestmead",
    "Waterford",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING_VALUE,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
  },
};

const faqs = [
  {
    question: "How much do removalists cost in Logan?",
    answer:
      "Logan local moves typically start from $179 per hour for a 2-person team with a truck. Your final quote depends on the size of your home, access conditions, distance, and any additional services like packing or storage. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "What is the best time to move if I need to use the M1?",
    answer:
      "If your move involves the M1 Pacific Motorway, we recommend avoiding weekday morning (6:30am to 8:30am) and afternoon (3:30pm to 6pm) peaks. Mid-morning or midday starts work best for moves between Logan, Brisbane, and the Gold Coast.",
  },
  {
    question: "Do you service Beenleigh and the southern Logan suburbs?",
    answer:
      "Yes. We cover all southern Logan suburbs including Beenleigh, Eagleby, Bethania, Edens Landing, Holmview, and Windaroo. Our Archerfield depot gives us fast access to the entire Logan region via the M1 and Logan Motorway.",
  },
  {
    question: "Can you move furniture from townhouse complexes in Springwood and Underwood?",
    answer:
      "Absolutely. Our team regularly moves residents in and out of townhouse and apartment complexes across Springwood, Underwood, Rochedale South, and Daisy Hill. We handle tight stairwells, shared driveways, and body corporate access requirements.",
  },
  {
    question: "Do you offer packing services for Logan moves?",
    answer:
      "Yes. We offer full packing (we pack your entire home) and partial packing (just the fragile or tricky items). All packing materials are supplied, including boxes, bubble wrap, packing paper, and furniture blankets. You can add packing to any Logan move.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Yes. R2G Transport and Storage carries comprehensive public liability and goods-in-transit insurance. Your belongings are protected from the moment we pick them up until they are placed in your new home.",
  },
];

export default function RemovalistsLoganPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
      <PageHero
        title="Removalists Logan"
        subtitle="Reliable movers across Logan City, from Springwood and Beenleigh to Marsden, Loganholme, and Shailer Park. Fully insured with competitive hourly rates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Removalists Logan" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Logan Removalists</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Experienced Movers for All of Logan City
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-removalists-brisbane-truck.webp"
                  alt="R2G removalist truck servicing Logan City suburbs - R2G Removalists Logan"
                  title="R2G removalist truck servicing Logan City suburbs"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Logan sits right in the middle of South East Queensland&apos;s busiest growth corridor. Positioned between Brisbane and the Gold Coast with direct M1 Motorway access, the city is home to a rapidly expanding population across suburbs like Marsden, Crestmead, Browns Plains, and Waterford. R2G Transport &amp; Storage provides a full-service removalist solution for Logan residents, whether you are moving locally within the city or heading north to Brisbane or south to the Gold Coast.
                </p>
                <p>
                  Logan&apos;s suburbs offer a genuine mix of housing types. Established areas like Springwood, Underwood, and Daisy Hill feature a combination of standalone houses and townhouse complexes, many with shared driveways and multi-level layouts. Newer estates in areas like Yarrabilba, Park Ridge, and Flagstone continue to attract young families. Our team handles both scenarios, from navigating tight stairwells in unit blocks to efficiently loading up large family homes in the outer suburbs.
                </p>
                <p>
                  Our depot at Archerfield is just 15 minutes from most Logan suburbs via the Logan Motorway. This proximity means lower travel charges, faster arrival times, and the ability to schedule moves across the entire Logan City Council area without delays. We run crews through Logan every week and know the streets, access challenges, and traffic patterns that affect your moving day.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Local Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Logan Local Moves</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Moving within Logan or between nearby suburbs. Fast, affordable, and fully insured local relocations.</p>
                  <ul className="space-y-2">
                    {["All Logan suburbs covered", "Furniture protection guaranteed", "Appliance disconnection & reconnection", "Same-week bookings available"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Regional</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Logan to Gold Coast / Brisbane</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Moving between Logan, Brisbane, or the Gold Coast. Direct M1 access for efficient, cost-effective relocations.</p>
                  <ul className="space-y-2">
                    {["Brisbane & Gold Coast routes", "Competitive flat-rate options", "Full transit insurance", "Packing & storage add-ons"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get a Logan Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your move and we&apos;ll provide a fast, free quote for removalists in Logan.</p>
                <Link
                  href="/quote"
                  className="block w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg transition-colors text-center mb-3"
                >
                  Request a Quote Online
                </Link>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 w-full border border-white/20 text-white hover:border-[#F5C400] hover:text-[#F5C400] font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {PHONE}
                </a>
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  {["Fully insured relocations", "15 minutes from Logan", "Packing & storage options"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Removalists Logan FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local and interstate moves across all Brisbane suburbs.", href: "/removalists-brisbane" },
              { title: "Removalists Gold Coast", desc: "Professional movers covering the entire Gold Coast region.", href: "/removalists-gold-coast" },
              { title: "Storage Brisbane", desc: "Secure short and long-term storage facilities at Archerfield.", href: "/storage-brisbane" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group p-5 bg-white border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors">
                <h3 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F5C400] transition-colors">{link.title}</h3>
                <p className="text-gray-500 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Moving in Logan? We Have Got You Covered."
        subtext="From Springwood to Beenleigh and everywhere in between. Get a free, no-obligation quote today."
      />
    </>
  );
}
