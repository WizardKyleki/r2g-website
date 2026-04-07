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
  title: "Last Minute Removalists Brisbane | Next-Day Availability | R2G",
  description:
    "Last minute removalist service in Brisbane with same-week and next-day availability. No rush surcharges, fully insured, same professional care. Get a quote now.",
  keywords: ["last minute removalists brisbane", "urgent movers brisbane", "short notice removalists brisbane", "next day movers brisbane"],
  alternates: { canonical: "https://www.r2g.com.au/last-minute-removalists-brisbane" },
  openGraph: {
    title: "Last Minute Removalists Brisbane | Next-Day Availability | R2G",
    description: "Same-week and next-day removalist availability in Brisbane. No rush surcharges, fully insured. Get a quote now.",
    url: "https://www.r2g.com.au/last-minute-removalists-brisbane",
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
      name: "Last Minute Removalists Brisbane",
      item: "https://www.r2g.com.au/last-minute-removalists-brisbane",
    },
  ],
};

const faqs = [
  {
    question: "Is there a surcharge for last minute bookings?",
    answer: "No. We do not charge rush fees or panic pricing. You pay the same hourly rate whether you book two weeks ahead or the day before. Our rates are transparent and consistent.",
  },
  {
    question: "How fast can you come?",
    answer: "If you call before 2pm, we can often confirm a crew for the next day. Same-week availability is almost always possible. The sooner you call, the more flexibility we have with timing.",
  },
  {
    question: "Do you still provide a quote for last minute moves?",
    answer: "Yes. We provide a quick phone or online quote based on your move details. Even with short notice, we want you to know the cost upfront before we arrive. No surprises on the day.",
  },
  {
    question: "What if I need packing as well?",
    answer: "We can add a packing service to your last minute move. Our crew will bring all the materials needed and pack your home before loading. Let us know when you call and we will plan accordingly.",
  },
  {
    question: "Can you store my items at short notice?",
    answer: "Yes. We have secure storage facilities in Brisbane and can accommodate short-notice storage requests. Whether you need a few days or a few months, we can arrange it as part of your move.",
  },
  {
    question: "Do you cover weekends for last minute moves?",
    answer: "Yes, we operate seven days a week. Weekend availability for short-notice moves depends on crew schedules, so calling as early as possible gives you the best chance of securing your preferred time.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Last Minute Removalists Brisbane",
  description:
    "Short-notice removalist service in Brisbane with same-week and next-day availability. No rush surcharges. Fully insured with the same care as pre-booked moves.",
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

export default function LastMinuteRemovalistsBrisbanePage() {
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
        title="Last Minute Removalists Brisbane"
        subtitle="Same-week and next-day availability across Brisbane. Plans changed? We have got you covered."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Last Minute Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Short Notice Moves</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Plans Changed? We Keep Crews Ready for You
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-removalists-brisbane-truck.webp"
                  alt="R2G removalists ready for last minute and short notice moves across Brisbane"
                  title="R2G last minute removalist service with next-day availability in Brisbane"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lease fell through. Settlement moved forward. Plans changed overnight. Life does not always give you two weeks to organise a move. R2G keeps crew availability specifically for short-notice bookings across Brisbane, so when you need to move fast, we can actually help rather than put you on a waitlist.
                </p>
                <p>
                  A last minute move with R2G gets the same process and the same level of care as a move booked a month ahead. Fully insured, professional crew, proper equipment, and careful handling. There are no rush surcharges, no panic pricing, and no corners cut. The only difference is the timeline.
                </p>
                <p>
                  Call us before 2pm and we can often confirm next-day availability in most Brisbane suburbs. Same-day service is also possible where crew schedules allow. If you need to move this week, give us a call and we will do everything we can to make it happen.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Next-Day Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Call Today, Move Tomorrow</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Call before 2pm and we will confirm your crew by the evening. Full service, no rush fees.</p>
                  <ul className="space-y-2">
                    {["Call before 2pm", "Confirmed crew by evening", "Full service move", "No rush fees"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Same-Week Bookings</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Flexible Short-Notice Scheduling</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Need to move within the week? Choose your preferred day and we will lock in a crew for you.</p>
                  <ul className="space-y-2">
                    {["Flexible scheduling", "Choose your preferred day", "Fully insured service", "All Brisbane suburbs"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Need a Mover Fast?</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us when you need to move and we&apos;ll check crew availability right away. No obligation.</p>
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
                  {["No panic pricing", "Same care as pre-booked moves", "Call before 2pm for next-day"].map((item) => (
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

      <FAQ items={faqs} heading="Last Minute Removalists Brisbane FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and South East Queensland.", href: "/removalists-brisbane" },
              { title: "Same Day Removalists Brisbane", desc: "Need to move today? Genuine same-day service when crews allow.", href: "/same-day-removalists-brisbane" },
              { title: "Packing Services Brisbane", desc: "Professional packing to protect your belongings during the move.", href: "/packing-services-brisbane" },
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
        heading="Plans Changed? We Can Move You Tomorrow."
        subtext="Call us now or request a quote online. Next-day availability across Brisbane, no rush fees."
      />
    </>
  );
}
