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
  title: "Same Day Removalists Brisbane | Emergency Movers | R2G",
  description:
    "Genuine same-day removalist service in Brisbane. Emergency and urgent moves with real-time crew dispatch. Fully insured, no compromises. Call now.",
  keywords: ["same day removalists brisbane", "emergency movers brisbane", "urgent removalists brisbane", "same day moving service brisbane"],
  alternates: { canonical: "https://www.r2g.com.au/same-day-removalists-brisbane" },
  openGraph: {
    title: "Same Day Removalists Brisbane | Emergency Movers | R2G",
    description: "Genuine same-day removalist service in Brisbane. Emergency moves, real-time dispatch, fully insured. Call now.",
    url: "https://www.r2g.com.au/same-day-removalists-brisbane",
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
      name: "Same Day Removalists Brisbane",
      item: "https://www.r2g.com.au/same-day-removalists-brisbane",
    },
  ],
};

const faqs = [
  {
    question: "How do I book a same-day move?",
    answer: "Call us on 1300 959 498 as early in the morning as possible. Our dispatch team will check real-time crew availability in your area. If a team is available, we can have them at your door within hours.",
  },
  {
    question: "Is there an extra cost for same-day service?",
    answer: "No. Our hourly rate stays the same regardless of how far in advance you book. There are no emergency surcharges, no same-day premiums, and no hidden fees. You pay for the hours worked, just like any other move.",
  },
  {
    question: "What time do I need to call by?",
    answer: "The earlier the better. Calling first thing in the morning gives us the best chance of finding a crew near your suburb. We can sometimes accommodate requests made later in the day, but morning calls are ideal for same-day dispatch.",
  },
  {
    question: "What size moves can you do same day?",
    answer: "Same-day availability is most reliable for small to medium moves, including studios, 1-2 bedroom units, and single-room relocations. Larger homes may require additional crew or a bigger truck, which can affect same-day availability. Call us and we will let you know what is possible.",
  },
  {
    question: "Do you bring packing materials for same-day moves?",
    answer: "Yes. Our trucks carry a full supply of blankets, stretch wrap, and basic packing materials. If you need full packing with boxes and bubble wrap, let us know on the phone and we will bring everything required.",
  },
  {
    question: "Which Brisbane suburbs do you cover for same-day moves?",
    answer: "We cover all Brisbane suburbs for same-day moves, from the CBD and inner-city through to Logan, Ipswich, Redlands, and Moreton Bay. Availability depends on where our nearest crew is located at the time of your call.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Same Day Removalists Brisbane",
  description:
    "Genuine same-day removalist service in Brisbane. Emergency and urgent moves with real-time crew dispatch. Fully insured, no service compromises.",
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

export default function SameDayRemovalistsBrisbanePage() {
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
        title="Same Day Removalists Brisbane"
        subtitle="Emergency and same-day moving service across Brisbane. When you need to move today, not tomorrow."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Same Day Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Same-Day Service</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Need to Move Today? We Can Help
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-removalists-brisbane-truck.webp"
                  alt="R2G removalists dispatched for a same-day emergency move in Brisbane"
                  title="R2G same-day removalist service with real-time crew dispatch in Brisbane"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sometimes you need to move today, not tomorrow. Whether it is an eviction notice, an unexpected settlement date, emergency repairs, or a situation that simply cannot wait, R2G offers a genuine same-day removalist service in Brisbane when crew availability allows. We do not just promise it on a website. We actually deliver.
                </p>
                <p>
                  Call us in the morning and our dispatch team checks real-time crew locations across Brisbane. If a team is available near your suburb, we can have them at your door within hours. Smaller loads and inner-city moves are the easiest to accommodate on short notice, but we will always do our best regardless of the size.
                </p>
                <p>
                  Same professional service. Same insurance coverage. Same equipment and careful handling. We do not cut corners just because the timeline is short. Your belongings get the same protection and attention they would on any other move, whether it was booked today or three weeks ago.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Emergency Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Urgent Relocations</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Eviction, flood, lease termination, or any situation that requires immediate action.</p>
                  <ul className="space-y-2">
                    {["Same-day dispatch", "Priority crew allocation", "All items insured", "Eviction and flood response"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Flexible Same-Day</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Morning Call, Afternoon Move</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Not an emergency, but you need it done today. Call in the morning for an afternoon move.</p>
                  <ul className="space-y-2">
                    {["Morning call for afternoon move", "Smaller loads prioritised", "2-mover team", "All Brisbane suburbs"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Need Movers Today?</h3>
                <p className="text-gray-400 text-sm mb-6">Call us now and we&apos;ll check if a crew is available near your suburb for a same-day move.</p>
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
                  {["Same-day dispatch available", "No compromise on service", "Fully insured as always"].map((item) => (
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

      <FAQ items={faqs} heading="Same Day Removalists Brisbane FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and South East Queensland.", href: "/removalists-brisbane" },
              { title: "Last Minute Removalists Brisbane", desc: "Same-week and next-day availability with no rush fees.", href: "/last-minute-removalists-brisbane" },
              { title: "Storage Brisbane", desc: "Secure short and long-term storage facilities in Brisbane.", href: "/storage-brisbane" },
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
        heading="Need to Move Today? Call R2G Now."
        subtext="Our dispatch team can check same-day availability for your suburb. Call 1300 959 498 or request a quote online."
      />
    </>
  );
}
