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
  title: "Removalists Ipswich | Trusted Local Movers | R2G",
  description:
    "Trusted removalists in Ipswich covering Springfield, Ripley Valley, Rosewood, Goodna, and Booval. Fully insured local and interstate moves. Get a free quote from R2G today.",
  keywords: ["removalists ipswich", "movers ipswich", "ipswich removalists", "removalists springfield", "removalists ripley valley"],
  alternates: { canonical: "https://www.r2g.com.au/removalists-ipswich" },
  openGraph: {
    title: "Removalists Ipswich | Trusted Local Movers | R2G",
    description: "Trusted removalists in Ipswich covering Springfield, Ripley Valley, Rosewood, and all Ipswich City Council suburbs. Get a free quote today.",
    url: "https://www.r2g.com.au/removalists-ipswich",
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
      name: "Removalists Ipswich",
      item: "https://www.r2g.com.au/removalists-ipswich",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Professional removalists in Ipswich providing local and interstate moving services across Springfield, Ripley Valley, Rosewood, Goodna, Booval, and all Ipswich City Council suburbs.",
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
    "Ipswich",
    "Springfield",
    "Ripley Valley",
    "Rosewood",
    "Goodna",
    "Booval",
    "Brassall",
    "Karalee",
    "Redbank Plains",
    "Bundamba",
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
    question: "How much do removalists cost in Ipswich?",
    answer:
      "Ipswich local moves typically start from $179 per hour for a 2-person team with a truck. Final pricing depends on the size of your home, access difficulty, distance, and any extras like packing or storage. We provide upfront quotes with no hidden fees.",
  },
  {
    question: "Do you cover all suburbs in the Ipswich City Council area?",
    answer:
      "Yes. We service every suburb within the Ipswich City Council area, including Springfield Lakes, Ripley Valley, Rosewood, Brassall, Karalee, Booval, Goodna, Redbank Plains, Bundamba, and everywhere in between.",
  },
  {
    question: "Can you handle moves in the Springfield and Ripley Valley new estates?",
    answer:
      "Absolutely. Our team moves families in and out of new estates across Springfield Lakes, Springfield Central, and Ripley Valley every week. We know the area layouts and access requirements for these newer developments.",
  },
  {
    question: "Do you move heritage Queenslanders and homes on steep blocks?",
    answer:
      "Yes. Many Ipswich suburbs like East Ipswich, Woodend, and North Ipswich have older Queenslander homes on elevated or steep blocks. Our movers are experienced with narrow stairways, tight verandahs, and difficult access points common in these properties.",
  },
  {
    question: "What is the best time to move along the Warrego Highway?",
    answer:
      "We recommend scheduling your move to avoid peak commuter hours on the Warrego and Ipswich Motorway. Mid-morning starts between 9am and 10am or midday departures tend to give the smoothest run between Ipswich and Brisbane.",
  },
  {
    question: "Do you offer storage for Ipswich customers?",
    answer:
      "Yes. Our secure storage facility is located at Archerfield, roughly 30 minutes from central Ipswich. We offer both short-term and long-term storage options, and we can include pickup and delivery as part of your move.",
  },
];

export default function RemovalistsIpswichPage() {
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
        title="Removalists Ipswich"
        subtitle="Local and interstate moves across Ipswich, Springfield, Ripley Valley, Rosewood, Goodna, and Booval. Fully insured, professionally equipped, and trusted by families throughout the region."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Removalists Ipswich" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Ipswich Removalists</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Your Trusted Moving Team in Ipswich
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-removalists-brisbane-truck.webp"
                  alt="R2G removalist truck ready for an Ipswich home move - R2G Removalists Ipswich"
                  title="R2G removalist truck ready for an Ipswich home move"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ipswich is one of South East Queensland&apos;s fastest growing corridors. With thousands of new homes going up across Springfield Lakes, Springfield Central, and the Ripley Valley master-planned communities each year, the demand for reliable removalists in the region has never been higher. R2G Transport &amp; Storage provides a complete moving service for families and businesses relocating within Ipswich or heading further afield.
                </p>
                <p>
                  Beyond the new estates, Ipswich has a rich heritage of older Queenslander homes in suburbs like East Ipswich, Woodend, North Ipswich, and Sadliers Crossing. These properties often sit on elevated stumps with steep access, narrow stairways, and tight verandahs. Our crew is well versed in moving furniture safely in and out of these homes, with the right equipment and techniques to protect both your belongings and the property itself.
                </p>
                <p>
                  Our Brisbane depot at Archerfield is just 30 minutes from the heart of Ipswich via the Ipswich Motorway. That means we can reach every suburb within the Ipswich City Council area quickly and cost-effectively. Whether you are moving from Booval to Brassall, Springfield to Rosewood, or heading interstate to Sydney or Melbourne, R2G has you covered with fully insured, professionally managed relocations.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Local Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Full Home Moves</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Complete local moves within Ipswich, from single-bedroom units through to large family homes across the city.</p>
                  <ul className="space-y-2">
                    {["All Ipswich suburbs covered", "Furniture disassembly & reassembly", "Fridge, washing machine & appliances", "Packing service available"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Long Distance</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Interstate from Ipswich</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Relocating from Ipswich to Brisbane, Sydney, Melbourne, or anywhere in between. Direct routes and competitive flat-rate pricing.</p>
                  <ul className="space-y-2">
                    {["Brisbane, Sydney & Melbourne", "Door-to-door service", "Full transit insurance", "Storage available en route"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Get an Ipswich Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your move and we&apos;ll provide a fast, free quote for removalists in Ipswich.</p>
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
                  {["Fully insured moves", "All Ipswich suburbs covered", "Secure storage available"].map((item) => (
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

      <FAQ items={faqs} heading="Removalists Ipswich FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local and interstate moves across all Brisbane suburbs.", href: "/removalists-brisbane" },
              { title: "Packing Services Brisbane", desc: "Professional packing using premium materials for a stress-free move.", href: "/packing-services-brisbane" },
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
        heading="Moving in Ipswich? Let R2G Handle It."
        subtext="Our experienced team covers every Ipswich suburb. Get a free, no-obligation quote today."
      />
    </>
  );
}
