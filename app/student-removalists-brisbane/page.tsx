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
  title: "Student Removalists Brisbane | Affordable Uni Moves | R2G",
  description:
    "Affordable student removalist service in Brisbane. Small moves near UQ, QUT, Griffith and all Brisbane universities. Fast, budget-friendly, and reliable. Get a free quote.",
  keywords: ["student removalists brisbane", "cheap movers brisbane", "uni moving service brisbane", "student movers brisbane"],
  alternates: { canonical: "https://www.r2g.com.au/student-removalists-brisbane" },
  openGraph: {
    title: "Student Removalists Brisbane | Affordable Uni Moves | R2G",
    description: "Affordable student moves near UQ, QUT, Griffith and Brisbane universities. Fast and budget-friendly. Get a free quote.",
    url: "https://www.r2g.com.au/student-removalists-brisbane",
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
      name: "Student Removalists Brisbane",
      item: "https://www.r2g.com.au/student-removalists-brisbane",
    },
  ],
};

const faqs = [
  {
    question: "How much does a student move cost in Brisbane?",
    answer: "Student moves are typically smaller and faster, so they cost less than a full house move. Most 1-2 bedroom student moves are completed in 2-3 hours. We charge by the hour with no hidden fees. Contact us for a quick quote based on your specific situation.",
  },
  {
    question: "Which university areas do you cover?",
    answer: "We cover all Brisbane university areas including St Lucia (UQ), Kelvin Grove and Gardens Point (QUT), South Bank, Nathan and Mt Gravatt (Griffith), and surrounding suburbs. We also service the Gold Coast campus at Southport.",
  },
  {
    question: "Can I share a move with a friend to split the cost?",
    answer: "Yes, if you and a housemate or friend are both moving on the same day and in the same direction, we can combine loads on one truck. This is a great way to cut costs. Just let us know when you book and we will work out the logistics.",
  },
  {
    question: "Do you move on weekends?",
    answer: "Yes, we operate seven days a week including weekends. Weekend slots are popular with students, so we recommend booking a few days in advance to secure your preferred time.",
  },
  {
    question: "Do you move bikes, desks, and other student items?",
    answer: "Absolutely. We move everything from bikes and desks to mattresses, bookshelves, and whitegoods. Our crew can also disassemble and reassemble flat-pack furniture if needed.",
  },
  {
    question: "How do I book a student move?",
    answer: "You can request a quote online through our website or call us on 1300 959 498. Let us know your pickup and drop-off suburbs, what you are moving, and your preferred date. We will get back to you with a quote the same day.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Student Removalists Brisbane",
  description:
    "Affordable removalist service for Brisbane students. Small, fast moves near UQ, QUT, Griffith and all Brisbane universities.",
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

export default function StudentRemovalistsBrisbanePage() {
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
        title="Student Removalists Brisbane"
        subtitle="Affordable moves for students near UQ, QUT, Griffith and Brisbane universities. Small loads, tight budgets, fast turnaround."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Student Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Student Moves</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Budget-Friendly Moves for Brisbane Students
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-removalists-brisbane-truck.webp"
                  alt="R2G removalists helping Brisbane students move between share houses and university accommodation"
                  title="R2G affordable student removalist service in Brisbane"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Students move more than almost anyone. Between share houses, studio apartments, back to the family home for holidays, and off to the next lease, it adds up fast. R2G offers small, affordable moves designed specifically for students on tight budgets. No oversized trucks or inflated crew sizes. Just the right amount of help to get you sorted quickly.
                </p>
                <p>
                  We cover all major university areas across Brisbane including St Lucia, Kelvin Grove, South Bank, Nathan, Mt Gravatt, Gardens Point, and the Gold Coast campus at Southport. Whether you are swapping rooms in a share house or relocating to a new suburb for the semester, our team knows these areas well and can get the job done efficiently.
                </p>
                <p>
                  A 2-mover team handles most student loads comfortably and quickly. Most 1-2 bedroom moves are wrapped up in 2-3 hours. There are no minimum booking traps, no sneaky fees, and no surprises on the invoice. You pay for the time we work and nothing more.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Studio & Single Room</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Small Load Moves</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Perfect for moving a single room or studio apartment between share houses or back home.</p>
                  <ul className="space-y-2">
                    {["1-2 mover team", "Perfect for share house swaps", "Fast turnaround", "Budget-friendly rates"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Full Unit Moves</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">1-2 Bedroom Apartments</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Moving everything from a full unit. Furniture disassembly included at no extra cost.</p>
                  <ul className="space-y-2">
                    {["1-2 bedroom apartments", "Furniture disassembly included", "All suburbs near campuses", "Combine with mates for split cost"].map(f => (
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
                <h3 className="text-white font-bold text-xl mb-2">Get a Student Moving Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us where you&apos;re moving and we&apos;ll give you a fast, honest quote. No surprises.</p>
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
                  {["Budget-friendly rates", "Fast 2-3 hour moves", "All university areas covered"].map((item) => (
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

      <FAQ items={faqs} heading="Student Removalists Brisbane FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and South East Queensland.", href: "/removalists-brisbane" },
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials delivered to your door.", href: "/boxes" },
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
        heading="Student Move? Quick, Easy, and Affordable."
        subtext="Get a free quote for your next student move in Brisbane. No hidden fees, no minimum bookings."
      />
    </>
  );
}
