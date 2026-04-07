import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF, RATING_VALUE, REVIEW_COUNT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pool Table Removalists Brisbane | Disassembly & Relevelling | R2G",
  description:
    "Expert pool table removalists in Brisbane. Full disassembly, safe slate transport, reassembly, and relevelling included. Home and commercial tables. Get a free quote.",
  keywords: ["pool table removalists brisbane", "pool table movers brisbane", "move pool table brisbane", "pool table relocation brisbane"],
  alternates: { canonical: "https://www.r2g.com.au/pool-table-removalists-brisbane" },
  openGraph: {
    title: "Pool Table Removalists Brisbane | Disassembly & Relevelling | R2G",
    description: "Expert pool table removalists in Brisbane. Full disassembly, slate transport, reassembly, and relevelling. Home and commercial tables.",
    url: "https://www.r2g.com.au/pool-table-removalists-brisbane",
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
      name: "Pool Table Removalists Brisbane",
      item: "https://www.r2g.com.au/pool-table-removalists-brisbane",
    },
  ],
};

const faqs = [
  {
    question: "How much does it cost to move a pool table in Brisbane?",
    answer: "Pool table moving costs in Brisbane typically range from $400 to $800 for a standard local move. The price depends on the table size, whether it has a one-piece or three-piece slate, the distance between locations, and access at both ends. We provide a fixed quote upfront so there are no surprises.",
  },
  {
    question: "Can you move a pool table without disassembling it?",
    answer: "In most cases, pool tables must be disassembled for safe transport. Slate tops are extremely heavy and can crack under their own weight if the table is moved whole. Disassembly also protects the frame, rails, and pockets from damage. Our team handles the full process, so you do not need to worry about any of it.",
  },
  {
    question: "Do you relevel the table after moving it?",
    answer: "Yes, relevelling is included as a standard part of our pool table moving service. After reassembly at your new location, we use precision levelling tools to ensure the slate is perfectly flat. We will not leave until the table plays true.",
  },
  {
    question: "Can you replace the felt during the move?",
    answer: "We inspect the felt during disassembly and let you know its condition. If it needs replacing, we can coordinate with a felt specialist or arrange new felt installation at the destination. This is an optional add-on and not included in the standard move price.",
  },
  {
    question: "How long does it take to move and set up a pool table?",
    answer: "A typical pool table move takes around 2 to 4 hours in total. This includes disassembly at the origin, transport, reassembly, and relevelling at the destination. Larger tables or difficult access can take longer. We will give you a time estimate when we quote.",
  },
  {
    question: "Is my pool table insured during the move?",
    answer: "Yes. R2G Transport and Storage carries comprehensive goods-in-transit insurance and public liability insurance. Your pool table is fully covered from the moment we begin disassembly to the final relevelling at your new location.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pool Table Removalists Brisbane",
  description:
    "Expert pool table moving service in Brisbane. Full disassembly, safe slate transport, reassembly, and relevelling for home and commercial pool tables.",
  provider: {
    "@type": "MovingCompany",
    name: "R2G Transport & Storage",
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
  },
  areaServed: "Brisbane",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING_VALUE,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
  },
};

export default function PoolTableRemovalistsBrisbanePage() {
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
        title="Pool Table Removalists Brisbane"
        subtitle="Full disassembly, safe transport, reassembly, and relevelling. Your table, handled by specialists."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Pool Table Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Specialist Pool Table Movers</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Professional Pool Table Moving Across Brisbane
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pool tables are among the heaviest and most delicate items in any home or business. Weighing anywhere from 200kg to over 600kg, they feature precision-ground slate tops that can crack or chip if handled incorrectly. A pool table should never be moved in one piece. Proper disassembly is essential to protect the slate, frame, rails, and felt from damage during transport.
                </p>
                <p>
                  The R2G process is thorough. We start by removing the rails and pockets, then carefully lift each slate piece individually using proper technique and equipment. The felt is inspected, protected, and wrapped. All hardware is bagged and labelled. At your new location, we reassemble the table from the ground up, re-attach every component, and relevel the slate using precision tools so the playing surface is perfectly flat.
                </p>
                <p>
                  We move pool tables across all Brisbane suburbs, from inner-city apartments to acreage properties in the outer suburbs. We also handle coin-operated and commercial table moves for pubs, clubs, and entertainment venues. Whether you are renovating, moving house, or relocating your business, our team has the experience to get it done right.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Home Pool Tables</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Complete Move Service</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">End-to-end pool table relocation for your home, including disassembly, transport, and full setup.</p>
                  <ul className="space-y-2">
                    {["Disassembly + transport + reassembly", "Relevelling included", "Felt inspection", "2-3 experienced movers"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Commercial &amp; Coin-Op</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Business Table Relocations</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Pub, club, and entertainment venue pool table moves with multi-table discounts available.</p>
                  <ul className="space-y-2">
                    {["Pub and club table moves", "Multi-table discounts", "Same-day turnaround available", "Brisbane metro wide"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Get a Pool Table Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your table and we&apos;ll provide a fast, free quote for your Brisbane move.</p>
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
                  {["Full disassembly and reassembly", "Relevelling included", "Slate handled with care"].map((item) => (
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

      <FAQ items={faqs} heading="Pool Table Removalists Brisbane FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and South East Queensland.", href: "/removalists-brisbane" },
              { title: "Piano Removalists Brisbane", desc: "Specialist piano moving with dedicated equipment and trained movers.", href: "/piano-removalists-brisbane" },
              { title: "Packing Services Brisbane", desc: "Professional packing with quality materials for your move.", href: "/packing-services-brisbane" },
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
        heading="Pool Table Needs Moving? We Handle the Heavy Work."
        subtext="Expert disassembly, safe transport, and precision relevelling. Get a free, no-obligation quote today."
      />
    </>
  );
}
