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
  title: "Removalists Moreton Bay | Trusted Movers | R2G",
  description:
    "Trusted removalists in the Moreton Bay Region covering North Lakes, Caboolture, Redcliffe, Strathpine, and Kallangur. Fully insured moves with free quotes from R2G.",
  keywords: ["removalists moreton bay", "movers moreton bay", "removalists north lakes", "removalists caboolture", "removalists redcliffe"],
  alternates: { canonical: "https://www.r2g.com.au/removalists-moreton-bay" },
  openGraph: {
    title: "Removalists Moreton Bay | Trusted Movers | R2G",
    description: "Trusted removalists across the Moreton Bay Region. North Lakes, Caboolture, Redcliffe, and all surrounding suburbs. Free quotes from R2G.",
    url: "https://www.r2g.com.au/removalists-moreton-bay",
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
      name: "Removalists Moreton Bay",
      item: "https://www.r2g.com.au/removalists-moreton-bay",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Professional removalists in the Moreton Bay Region providing local and interstate moving services across North Lakes, Caboolture, Redcliffe, Strathpine, Kallangur, and surrounding suburbs.",
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
    "Moreton Bay",
    "North Lakes",
    "Caboolture",
    "Redcliffe",
    "Strathpine",
    "Kallangur",
    "Deception Bay",
    "Narangba",
    "Burpengary",
    "Petrie",
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
    question: "How much do removalists cost in the Moreton Bay Region?",
    answer:
      "Moreton Bay local moves typically start from $179 per hour for a 2-person team with a truck. The final quote depends on your home size, distance, access conditions, and any additional services. We provide clear, upfront pricing with no hidden charges.",
  },
  {
    question: "Do you service North Lakes and the Westfield area?",
    answer:
      "Yes. We regularly move families in and out of North Lakes, including the newer estates around North Lakes, Mango Hill, and Griffin. We know the residential layouts in these areas and can navigate them efficiently on moving day.",
  },
  {
    question: "How far north do you cover towards Caboolture?",
    answer:
      "We cover the entire Moreton Bay Region, including Caboolture, Morayfield, Upper Caboolture, Wamuran, and Elimbah. Whether you are in the established parts of Caboolture or the rural outskirts, our team can reach you.",
  },
  {
    question: "What about moves to and from the Redcliffe peninsula?",
    answer:
      "We handle Redcliffe peninsula moves regularly, covering Redcliffe, Scarborough, Margate, Woody Point, and Clontarf. We are experienced with the single-access roads in and out of the peninsula and schedule around peak traffic times.",
  },
  {
    question: "Is traffic on the Bruce Highway a problem for my move?",
    answer:
      "Bruce Highway congestion can affect travel times, particularly during weekday peaks. We schedule Moreton Bay moves to avoid the worst traffic windows and use Gateway Motorway alternatives where possible. We factor travel conditions into your quote so there are no surprises.",
  },
  {
    question: "Do you offer storage for Moreton Bay residents?",
    answer:
      "Yes. Our secure storage facility at Archerfield is accessible from the Moreton Bay Region via the Bruce Highway or Gateway Motorway. We offer flexible short-term and long-term storage, and we can collect and deliver items as part of your move.",
  },
];

export default function RemovalistsMoretonBayPage() {
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
        title="Removalists Moreton Bay"
        subtitle="Professional movers across the Moreton Bay Region, from North Lakes and Caboolture to Redcliffe, Strathpine, and Kallangur. Fully insured with competitive rates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Removalists Moreton Bay" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Moreton Bay Removalists</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Reliable Movers Across the Moreton Bay Region
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-removalists-brisbane-truck.webp"
                  alt="R2G removalist truck on a Moreton Bay moving job - R2G Removalists Moreton Bay"
                  title="R2G removalist truck on a Moreton Bay moving job"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Moreton Bay Region is Queensland&apos;s third largest local government area by population, and it continues to grow at a rapid pace. Suburbs like North Lakes, Mango Hill, Griffin, and the expanding Caboolture corridor attract thousands of new residents each year. R2G Transport &amp; Storage provides a complete removalist service for families and businesses across the entire region, handling everything from single-unit moves to large multi-bedroom homes.
                </p>
                <p>
                  Moreton Bay offers a wide variety of housing, and that variety shapes how each move needs to be planned. Newer estates around North Lakes and Burpengary East feature modern two-storey homes with double garages. Established suburbs like Strathpine, Brendale, and Lawnton have older homes with different access considerations. The Redcliffe peninsula adds another layer, with waterfront properties, apartment blocks, and narrow streets that require careful truck positioning. Our crews have worked across all of these environments and know how to approach each one.
                </p>
                <p>
                  R2G covers the full Moreton Bay Region from our Brisbane depot, with quick access via the Bruce Highway and Gateway Motorway. Suburbs from Petrie and Kallangur in the south through to Caboolture, Morayfield, and Bribie Island in the north are all within our regular service area. We schedule around Bruce Highway congestion and use alternative routes to keep your move on time and on budget.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Local Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Moreton Bay Local Moves</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Moving within the Moreton Bay Region. Efficient, affordable local relocations with full furniture protection.</p>
                  <ul className="space-y-2">
                    {["All Moreton Bay suburbs", "Furniture blankets & stretch wrap", "Careful handling of fragile items", "Flexible scheduling options"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Regional & Interstate</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Moreton Bay to Brisbane / Interstate</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Relocating from Moreton Bay to Brisbane, the Sunshine Coast, or interstate. Direct highway access for smooth, timely moves.</p>
                  <ul className="space-y-2">
                    {["Brisbane & Sunshine Coast routes", "Sydney & Melbourne interstate", "Door-to-door service", "Storage options available"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Get a Moreton Bay Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your move and we&apos;ll provide a fast, free quote for removalists in Moreton Bay.</p>
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
                  {["Fully insured moves", "Entire Moreton Bay Region", "Secure storage available"].map((item) => (
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

      <FAQ items={faqs} heading="Removalists Moreton Bay FAQ" />

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
        heading="Moving in Moreton Bay? Let the Locals Handle It."
        subtext="From North Lakes to Caboolture and the Redcliffe peninsula. Get a free, no-obligation quote today."
      />
    </>
  );
}
