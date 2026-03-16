import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE_HREF, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Trusted QLD Removalists",
  description:
    "Learn about R2G Transport & Storage — a family-owned, fully insured removalist company operating across Cairns, Brisbane, and all of Australia since 2014.",
  alternates: { canonical: "https://www.r2g.com.au/about" },
  openGraph: {
    title: "About R2G Transport & Storage",
    description: "Family-owned, fully insured removalists based in Cairns and Brisbane. Serving Australia since 2014.",
    url: "https://www.r2g.com.au/about",
  },
};

const values = [
  {
    title: "Care",
    description: "We treat every item as if it were our own. From fragile heirlooms to bulky furniture, everything gets the attention it deserves.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  },
  {
    title: "Reliability",
    description: "We show up on time, every time. You can count on us to be where we say we'll be, when we say we'll be there.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Transparency",
    description: "No hidden fees, no surprise charges. Our quotes are clear and upfront so you know exactly what you're paying for.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Community",
    description: "We're proud locals in both Cairns and Brisbane. We give back to the communities that have supported us for over a decade.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
];

const reasons = [
  "Fully licensed and insured",
  "Offices in Cairns and Brisbane",
  "Experienced, professional team",
  "Modern, well-maintained vehicles",
  "Competitive, transparent pricing",
  "Free quotes — no obligation",
  "Available weekends and public holidays",
  "Secure storage facilities",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Family-owned, fully insured removalist company operating across Cairns, Brisbane, and all of Australia since 2014.",
  url: "https://www.r2g.com.au",
  telephone: "1300 959 498",
  email: "contact@r2g.com.au",
  foundingDate: "2014",
  areaServed: ["Cairns", "Brisbane", "Gold Coast", "Sunshine Coast", "Australia"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "36 Abbott St",
      addressLocality: "Cairns City",
      addressRegion: "QLD",
      postalCode: "4870",
      addressCountry: "AU",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "122 Ashover Circuit",
      addressLocality: "Archerfield",
      addressRegion: "QLD",
      postalCode: "4108",
      addressCountry: "AU",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "833",
    bestRating: "5",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <PageHero
        title="About R2G Transport & Storage"
        subtitle="Cairns and Brisbane-based, community-driven, and committed to making your move as stress-free as possible."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">Built on a Simple Promise</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  R2G Transport &amp; Storage was founded by locals who understood that moving is one of life&apos;s most stressful events. We built R2G on a simple promise: to make every move as smooth, safe, and stress-free as possible.
                </p>
                <p>
                  Since 2014, we&apos;ve helped hundreds of families and businesses move with confidence. With depots in both Cairns and Brisbane, we&apos;re well-placed to handle local, regional, and interstate moves across Australia.
                </p>
                <p>
                  Today, R2G Transport &amp; Storage is proud to be one of Australia&apos;s most trusted moving companies, with a 4.9-star rating from over 87 happy customers. Our team of experienced removalists is ready to make your next move the easiest one yet.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/quote" className="bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg transition-colors">
                  Get A Quote
                </Link>
                <a href={PHONE_HREF} className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:border-[#F5C400] hover:text-[#F5C400] font-bold px-6 py-3 rounded-lg transition-colors">
                  Call {PHONE}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/r2g-removalists-cairns-team.webp"
                  alt="R2G removalists Cairns team ready for a professional house move - R2G Removalists Cairns"
                  title="R2G removalists Cairns team ready for a professional house move"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "10+", label: "Years in Business" },
                  { number: "500+", label: "Moves Completed" },
                  { number: "4.9★", label: "Google Rating" },
                  { number: "2", label: "Depots (Cairns & Brisbane)" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-black text-[#F5C400] mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Our Values</span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#F5C400] rounded-xl flex items-center justify-center text-[#1A1A1A] mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#1A1A1A] rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Why Us</span>
              </div>
              <h2 className="text-3xl font-black text-white mb-8">Why Choose R2G?</h2>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                Moving is Personal.{" "}
                <span className="text-[#F5C400]">We Get That.</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every move tells a story — a growing family finding a bigger home, a business relocating to better premises, a fresh start in a new city. We understand the emotions and logistics that come with each chapter.
                </p>
                <p>
                  That&apos;s why we don&apos;t just move boxes. We take the time to understand your specific needs, communicate clearly throughout the process, and go the extra mile to make sure you feel supported every step of the way.
                </p>
              </div>
              <div className="relative mt-6 h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/r2g-cairns-removalists-reviews.webp"
                  alt="R2G Transport & Storage Cairns 5-star Google reviews from satisfied customers - R2G Removalists Cairns"
                  title="R2G Transport & Storage Cairns 5-star Google reviews from satisfied customers"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
