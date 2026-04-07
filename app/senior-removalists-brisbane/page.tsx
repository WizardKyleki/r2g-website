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
  title: "Senior Removalists Brisbane | Downsizing & Aged Care Moves | R2G",
  description:
    "Gentle, patient removalist service for Brisbane seniors. Specialising in downsizing moves and aged care transitions. Fully insured and respectful. Get a free quote.",
  keywords: ["senior removalists brisbane", "downsizing removalists brisbane", "aged care movers brisbane", "elderly moving service brisbane"],
  alternates: { canonical: "https://www.r2g.com.au/senior-removalists-brisbane" },
  openGraph: {
    title: "Senior Removalists Brisbane | Downsizing & Aged Care Moves | R2G",
    description: "Gentle, patient removalist service for Brisbane seniors. Downsizing and aged care transitions handled with care. Get a free quote.",
    url: "https://www.r2g.com.au/senior-removalists-brisbane",
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
      name: "Senior Removalists Brisbane",
      item: "https://www.r2g.com.au/senior-removalists-brisbane",
    },
  ],
};

const faqs = [
  {
    question: "How much does a senior move cost in Brisbane?",
    answer: "The cost depends on the size of the move, the distance, and any additional services like sorting or packing. Most downsizing moves are smaller than a full house move, so costs are often lower. We provide a free, no-obligation quote tailored to your situation.",
  },
  {
    question: "Do you help with downsizing decisions?",
    answer: "We can assist with the physical side of sorting and organising your belongings. While we are not decluttering consultants, our experienced crew can help you decide what furniture will fit in your new space and carefully handle items you want to keep, donate, or dispose of.",
  },
  {
    question: "Can you coordinate with aged care facility staff?",
    answer: "Yes. We regularly work with aged care coordinators and facility managers to ensure a smooth move-in. We will confirm delivery times, access requirements, and room layout details before arrival so everything is ready when we get there.",
  },
  {
    question: "How long does a senior move usually take?",
    answer: "Most downsizing moves take between 3 and 5 hours depending on the volume of items and the distance. We never rush. Our team works at a comfortable pace and keeps you informed throughout the process.",
  },
  {
    question: "Do you dispose of unwanted furniture?",
    answer: "Yes. We can remove and dispose of unwanted furniture and household items as part of your move. We will arrange responsible disposal or donation where possible. Just let us know what needs to go when we provide your quote.",
  },
  {
    question: "Can family members be present during the move?",
    answer: "Absolutely. We encourage family members to be involved as much or as little as they would like. Having a familiar face around can make the transition easier, and we are happy to work alongside your family throughout the day.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Senior Removalists Brisbane",
  description:
    "Patient and respectful removalist service for Brisbane seniors. Specialising in downsizing from family homes to smaller units or aged care facilities.",
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

export default function SeniorRemovalistsBrisbanePage() {
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
        title="Senior Removalists Brisbane"
        subtitle="Gentle, patient service for downsizing and aged care transitions. We treat your belongings and your family with the respect they deserve."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Senior Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Senior Moving Specialists</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Moving Later in Life Deserves Extra Care
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-removalists-brisbane-truck.webp"
                  alt="R2G removalists helping Brisbane seniors with a careful and respectful downsizing move"
                  title="R2G senior removalists providing patient moving service in Brisbane"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Moving later in life is both emotionally and physically demanding. Whether it is leaving a family home of 30 years or helping a parent transition into care, the process can feel overwhelming. R2G provides a patient and respectful removalist service designed specifically for seniors and their families. Our crew understands that every item carries a memory, and we handle each one with the care it deserves.
                </p>
                <p>
                  We specialise in downsizing moves from larger family homes to smaller units, townhouses, or aged care facilities. Our team can help with sorting what goes and what stays, carefully wrapping sentimental items, and making sure fragile heirlooms are protected throughout the move. There is no pressure and no rush. We work at a pace that feels comfortable for you.
                </p>
                <p>
                  We regularly work alongside families, aged care coordinators, and estate agents across Brisbane. Whether the move needs to happen within a week or over the course of a month, we offer flexible scheduling to suit your timeline. Our goal is to make the transition as smooth and stress-free as possible for everyone involved.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Downsizing Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Family Home to Unit</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Moving from a larger home into a smaller space. We help ensure only what you need comes with you.</p>
                  <ul className="space-y-2">
                    {["Family home to unit", "Furniture sorting assistance", "Careful with fragile heirlooms", "Patient and unhurried"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Aged Care Transitions</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Residential Facility Moves</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Moving into an aged care or assisted living facility. We coordinate with staff to make it seamless.</p>
                  <ul className="space-y-2">
                    {["Residential facility moves", "Single room setups", "Coordination with facility staff", "Compassionate team"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Get a Senior Moving Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about the move and we&apos;ll provide a patient, no-pressure quote for your senior relocation.</p>
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
                  {["Patient and respectful crew", "Downsizing specialists", "Fully insured"].map((item) => (
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

      <FAQ items={faqs} heading="Senior Removalists Brisbane FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and South East Queensland.", href: "/removalists-brisbane" },
              { title: "Packing Services Brisbane", desc: "Professional packing to protect your belongings during the move.", href: "/packing-services-brisbane" },
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
        heading="Helping Brisbane Seniors Move with Care and Dignity."
        subtext="Our team is ready to support you or your loved ones through this transition. Get a free, no-obligation quote today."
      />
    </>
  );
}
