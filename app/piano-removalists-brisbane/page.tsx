import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF, RATING_VALUE, REVIEW_COUNT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Piano Removalists Brisbane | Specialist Movers | R2G",
  description:
    "Specialist piano removalists in Brisbane. We move uprights, baby grands, and concert grands with piano trolleys, quilted covers, and fully trained movers. Fully insured. Get a free quote.",
  keywords: ["piano removalists brisbane", "piano movers brisbane", "move piano brisbane", "grand piano removalists brisbane"],
  alternates: { canonical: "https://www.r2g.com.au/piano-removalists-brisbane" },
  openGraph: {
    title: "Piano Removalists Brisbane | Specialist Movers | R2G",
    description: "Specialist piano removalists in Brisbane. Uprights, baby grands, and concert grands moved safely with specialist equipment. Fully insured.",
    url: "https://www.r2g.com.au/piano-removalists-brisbane",
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
      name: "Piano Removalists Brisbane",
      item: "https://www.r2g.com.au/piano-removalists-brisbane",
    },
  ],
};

const faqs = [
  {
    question: "How much does it cost to move a piano in Brisbane?",
    answer: "Piano moving costs in Brisbane depend on the type of piano, distance, and access at both locations. Upright piano moves typically start from around $300 to $500 for a local Brisbane move. Grand pianos cost more due to the additional labour and equipment required. Contact us for an accurate quote based on your specific situation.",
  },
  {
    question: "How do you move a grand piano?",
    answer: "Grand pianos require the lid to be secured, the pedal lyre removed, and the legs carefully detached. The body is then wrapped in quilted covers and placed on a specialised piano board for transport. At the destination, our team reassembles everything and positions the piano exactly where you need it. The entire process is handled by trained movers who understand the instrument.",
  },
  {
    question: "Is my piano insured during the move?",
    answer: "Yes. R2G Transport and Storage carries comprehensive goods-in-transit insurance that covers your piano throughout the entire move. We also carry public liability insurance. If you have a particularly high-value instrument, let us know and we can discuss additional cover options.",
  },
  {
    question: "Can you move a piano up or down stairs?",
    answer: "Yes, we regularly move pianos up and down stairs across Brisbane. Our team uses piano trolleys, straps, ramps, and proper lifting techniques to navigate staircases safely. We assess stairway width, turns, and landings before the move to plan the safest approach. Additional movers may be required for multi-storey access.",
  },
  {
    question: "Should I get my piano tuned after the move?",
    answer: "We recommend waiting at least two weeks after your move before having your piano tuned. This gives the instrument time to acclimatise to the temperature and humidity of its new environment. Moving a piano does not damage the tuning mechanism, but the change in conditions can cause the strings to settle.",
  },
  {
    question: "How far in advance should I book a piano move?",
    answer: "We recommend booking your piano move at least one to two weeks in advance so we can schedule the right crew and equipment. During busy periods such as end of month and school holidays, booking earlier is a good idea. We do our best to accommodate shorter notice requests when possible.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Piano Removalists Brisbane",
  description:
    "Specialist piano moving service in Brisbane. We move upright pianos, baby grands, and concert grands with dedicated equipment, trained movers, and full insurance coverage.",
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

export default function PianoRemovalistsBrisbanePage() {
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
        title="Piano Removalists Brisbane"
        subtitle="Specialist piano moving for uprights and grands. Dedicated equipment, trained movers, and full insurance for your instrument."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Piano Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Specialist Piano Movers</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Brisbane&apos;s Trusted Piano Moving Team
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pianos are not ordinary household items. Weighing anywhere from 150kg for a small upright to over 500kg for a full concert grand, they demand specialist handling that goes well beyond what a standard removalist can offer. The internal mechanisms, including hammers, strings, and soundboard, are extremely sensitive to shock, vibration, and changes in angle during transport.
                </p>
                <p>
                  At R2G Transport and Storage, we use purpose-built piano trolleys, heavy-duty quilted covers, and secure ramp loading systems for every piano move. Our team is trained specifically on both upright and grand piano relocations. We know how to detach legs, secure lids, protect pedal assemblies, and navigate tight doorways and hallways without risking damage to the instrument or your property.
                </p>
                <p>
                  We cover all Brisbane suburbs for piano moves, whether your instrument is on the ground floor or needs to go up several flights of stairs. Our service area extends to Ipswich, Logan, Redlands, Moreton Bay, and the Gold Coast. If you need your piano moved further, we can arrange interstate transport as well.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Upright Piano Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Safe, Efficient Transport</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Professional handling for upright pianos of all sizes, from compact studio models to full-size uprights.</p>
                  <ul className="space-y-2">
                    {["Weight up to 300kg", "Piano trolley included", "2-3 trained movers", "Quilted covers for protection"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Grand &amp; Baby Grand</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Specialist Grand Piano Moves</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Full disassembly, custom wrapping, and careful transport for baby grand and concert grand pianos.</p>
                  <ul className="space-y-2">
                    {["Weight up to 500kg", "Custom crating available", "3+ trained movers", "Climate consideration for transport"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Get a Piano Moving Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your piano and we&apos;ll provide a fast, free quote for your Brisbane move.</p>
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
                  {["Specialist piano equipment", "Fully insured for high-value items", "Ground floor or multi-storey"].map((item) => (
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

      <FAQ items={faqs} heading="Piano Removalists Brisbane FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and South East Queensland.", href: "/removalists-brisbane" },
              { title: "Packing Services Brisbane", desc: "Professional packing with quality materials for your move.", href: "/packing-services-brisbane" },
              { title: "Pool Table Removalists Brisbane", desc: "Specialist pool table disassembly, transport, and relevelling.", href: "/pool-table-removalists-brisbane" },
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
        heading="Need a Piano Moved in Brisbane? Call the Specialists."
        subtext="Our trained piano movers handle your instrument with the care it deserves. Get a free, no-obligation quote today."
      />
    </>
  );
}
