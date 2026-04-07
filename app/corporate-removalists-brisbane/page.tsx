import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF, RATING_VALUE, REVIEW_COUNT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Corporate Removalists Brisbane | Office Moving Experts | R2G",
  description:
    "Corporate removalists in Brisbane. Office relocations, IT equipment handling, after-hours moves, and minimal downtime. Project managed for offices of all sizes. Get a free quote.",
  keywords: ["corporate removalists brisbane", "office movers brisbane", "commercial removalists brisbane", "office relocation brisbane"],
  alternates: { canonical: "https://www.r2g.com.au/corporate-removalists-brisbane" },
  openGraph: {
    title: "Corporate Removalists Brisbane | Office Moving Experts | R2G",
    description: "Corporate removalists in Brisbane. Office relocations, IT equipment, after-hours moves, minimal downtime. Project managed for any office size.",
    url: "https://www.r2g.com.au/corporate-removalists-brisbane",
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
      name: "Corporate Removalists Brisbane",
      item: "https://www.r2g.com.au/corporate-removalists-brisbane",
    },
  ],
};

const faqs = [
  {
    question: "How much does a corporate office move cost in Brisbane?",
    answer: "Corporate move costs depend on the size of your office, the volume of furniture and equipment, the distance between sites, and any special requirements like after-hours access or IT handling. A small office of under 20 staff might range from $2,000 to $5,000, while larger relocations are quoted on a project basis. We provide a detailed, itemised quote after an on-site or virtual walkthrough.",
  },
  {
    question: "Can you move our office after hours or on weekends?",
    answer: "Yes. After-hours and weekend moves are one of our core offerings for corporate clients. Most businesses cannot afford to shut down during the working week, so we schedule moves for evenings, overnight, or across weekends to keep your downtime to an absolute minimum.",
  },
  {
    question: "How do you handle IT equipment and servers?",
    answer: "IT equipment is handled with antistatic protection, padded wrapping, and secure transport. We coordinate with your IT team or provider on disconnect and reconnect timelines. Server racks, monitors, printers, and networking equipment are labelled and transported separately from general office furniture to avoid any damage.",
  },
  {
    question: "How long does it take to move a 50-person office?",
    answer: "A 50-person office relocation in Brisbane typically takes one to two days depending on the volume of furniture, IT complexity, and access at both buildings. With a staggered, floor-by-floor approach we can often have your team operational in the new space by Monday morning after a weekend move.",
  },
  {
    question: "Do you supply packing crates for office moves?",
    answer: "Yes, we supply heavy-duty reusable crates for office moves. These are delivered before the move so your team can pack personal desk items, documents, and small equipment. After unpacking at the new office, we collect the crates. This is far more efficient and environmentally friendly than cardboard boxes.",
  },
  {
    question: "Is commercial equipment insured during the move?",
    answer: "Yes. R2G Transport and Storage carries comprehensive goods-in-transit insurance and public liability insurance that covers commercial moves. Your office furniture, IT equipment, and other assets are protected throughout the entire relocation. We can provide a certificate of currency on request.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Removalists Brisbane",
  description:
    "Corporate office relocation service in Brisbane. Project managed moves for businesses of all sizes with after-hours availability, IT equipment handling, and minimal downtime.",
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

export default function CorporateRemovalistsBrisbanePage() {
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
        title="Corporate Removalists Brisbane"
        subtitle="Office relocations, IT equipment handling, after-hours moves, and minimal downtime for your business."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Corporate Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Commercial Moving Specialists</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Office Relocations Built Around Your Business
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Corporate moves are fundamentally different from residential relocations. The priority is minimising disruption to your operations. Every hour of downtime costs your business money, which is why we offer after-hours, overnight, and weekend scheduling as standard. Our team works around your calendar so your staff can leave on Friday afternoon and walk into a fully set-up office on Monday morning.
                </p>
                <p>
                  R2G handles every element of a corporate relocation. Desks, ergonomic chairs, filing cabinets, boardroom tables, reception counters, and artwork are all moved with care. For IT equipment, we use antistatic wrapping and padded transport for servers, monitors, networking gear, and printers. We coordinate directly with your IT team or managed service provider on disconnect and reconnect sequencing to keep everything running smoothly.
                </p>
                <p>
                  Whether you are moving a team of 10 or a multi-floor operation with 200+ staff, we provide project-managed relocations tailored to your scale. For larger moves, we use staggered floor-by-floor staging to keep things orderly and efficient. Our team is experienced with Brisbane CBD loading dock logistics, building management coordination, and lift booking requirements.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Small Office Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Teams Under 20 Staff</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Fast, efficient relocation for small offices, co-working transitions, and boutique businesses.</p>
                  <ul className="space-y-2">
                    {["Under 20 staff", "Weekend or after-hours scheduling", "IT disconnect/reconnect coordination", "Same-day setup available"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Large Corporate Relocations</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">20+ Staff Operations</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Project managed relocations for medium and large businesses, including multi-floor staging.</p>
                  <ul className="space-y-2">
                    {["20+ staff operations", "Dedicated project manager", "Floor-by-floor staging", "Furniture installation included"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Get a Corporate Moving Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your office and we&apos;ll provide a detailed, no-obligation quote for your relocation.</p>
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
                  {["After-hours availability", "IT equipment specialists", "Fully insured for commercial"].map((item) => (
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

      <FAQ items={faqs} heading="Corporate Removalists Brisbane FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Office Removalists Brisbane", desc: "Dedicated office moving service for Brisbane businesses.", href: "/office-removalists/brisbane" },
              { title: "Removalists Brisbane", desc: "Local residential and commercial moves across Brisbane.", href: "/removalists-brisbane" },
              { title: "Storage Brisbane", desc: "Secure short and long-term storage for office furniture and equipment.", href: "/storage-brisbane" },
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
        heading="Relocating Your Brisbane Office? Talk to Our Commercial Team."
        subtext="Project managed office moves with after-hours availability and full insurance. Get a free, no-obligation quote today."
      />
    </>
  );
}
