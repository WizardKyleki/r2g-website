import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF, BRISBANE_ADDRESS, CAIRNS_ADDRESS, RATING_VALUE, REVIEW_COUNT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Storage Townsville | Short & Long-Term | R2G",
  description:
    "Secure storage for Townsville residents. R2G picks up from your Townsville home, stores at our Cairns facility, and delivers when you're ready. Free quote.",
  keywords: ["storage townsville", "self storage townsville", "moving and storage townsville", "short term storage townsville", "long term storage townsville"],
  alternates: { canonical: "https://www.r2g.com.au/storage-townsville" },
  openGraph: {
    title: "Storage Townsville | Short & Long-Term | R2G",
    description: "Secure storage for Townsville residents. Pickup, storage, and delivery all handled by R2G. Get a free quote today.",
    url: "https://www.r2g.com.au/storage-townsville",
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
      name: "Storage Townsville",
      item: "https://www.r2g.com.au/storage-townsville",
    },
  ],
};

const faqs = [
  {
    question: "Where is the storage facility for Townsville customers?",
    answer:
      "Our storage facility is located at 36 Abbott St in Cairns City. R2G handles the entire process for Townsville customers. We pick up your belongings from your Townsville home, transport them to our secure Cairns depot, and deliver everything back to any Townsville address when you are ready.",
  },
  {
    question: "How does the pickup and delivery process work from Townsville?",
    answer:
      "Our removalists travel to your Townsville property in Townsville City, Aitkenvale, Kirwan, Cranbrook, or wherever you are located. We load your items onto our truck, transport them to our Cairns storage facility, and keep them safe until you need them. When the time comes, we deliver straight back to your new Townsville address or anywhere else in North Queensland.",
  },
  {
    question: "How secure is your Cairns storage facility?",
    answer:
      "Our Cairns facility is fully fenced, monitored 24/7 by CCTV, and secured with electronic access control. Only authorised persons can access the site, and all units are individually locked. Your Townsville belongings are in safe hands.",
  },
  {
    question: "Can I store my belongings during a Townsville move?",
    answer:
      "Absolutely. Our combined move-and-store service is popular with Townsville customers who have a gap between properties. We collect your items, store them at our Cairns facility, and deliver to your new home once settlement is complete or your new place is ready.",
  },
  {
    question: "What storage unit sizes are available?",
    answer:
      "We offer a range of unit sizes from small spaces suitable for a few boxes through to large warehouse areas that fit a full 4-bedroom household. Whether you are storing items from a Townsville City apartment or a Kirwan family home, we will recommend the right fit. Contact us to discuss your needs.",
  },
  {
    question: "Is there a minimum storage period?",
    answer:
      "No. We offer flexible week-by-week and month-by-month storage with no minimum lock-in period. Many Townsville customers start with short-term storage during a move and extend as their situation requires. You only pay for the time you use.",
  },
  {
    question: "How much does storage cost for Townsville customers?",
    answer:
      "Pricing depends on the volume of items and the duration of storage. We offer competitive bundled rates that include pickup from Townsville, secure storage at our Cairns depot, and delivery to your new address. Contact us for a free, no-obligation quote tailored to your situation.",
  },
];

const storageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Storage Townsville",
  description:
    "Secure storage solutions for Townsville residents. Pickup from Townsville, stored at our Cairns facility, with delivery when ready.",
  provider: {
    "@type": "MovingCompany",
    name: "R2G Transport & Storage",
    telephone: "1300 959 498",
    url: "https://www.r2g.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "36 Abbott St",
      addressLocality: "Cairns City",
      addressRegion: "QLD",
      postalCode: "4870",
      addressCountry: "AU",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_VALUE,
      reviewCount: REVIEW_COUNT,
      bestRating: "5",
    },
  },
  areaServed: "Townsville",
};

export default function StorageTownsvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storageSchema) }}
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
        title="Storage Townsville"
        subtitle="Secure storage for Townsville residents. We pick up from your home, store safely at our Cairns facility, and deliver when you need it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Storage Townsville" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Secure Storage</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Townsville Storage With Full Pickup and Delivery
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-storage-facility-cairns.webp"
                  alt="R2G secure storage facility in Cairns servicing Townsville customers with clean dry monitored units - R2G Removalists Townsville Storage"
                  title="R2G secure storage facility in Cairns servicing Townsville customers with clean dry monitored units"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Need storage in Townsville? Whether you are moving between homes in Townsville City, renovating in Kirwan, waiting for settlement in Aitkenvale, or relocating from Cranbrook, R2G Transport &amp; Storage provides a full storage solution with pickup and delivery included.
                </p>
                <p>
                  Our storage facility is located at 36 Abbott St in Cairns City, and we manage all the logistics for you. Our removalists travel to your Townsville property, carefully load your belongings, transport them to our secure Cairns depot, and store them in clean, dry, CCTV-monitored units. When you are ready, we deliver everything to your new address in Townsville or anywhere else in North Queensland.
                </p>
                <p>
                  This door-to-door service is especially popular with Townsville families dealing with settlement gaps, defence relocations, or home renovations. Rather than hiring a self-storage unit and doing the heavy lifting yourself, R2G takes care of the full process from collection to delivery.
                </p>
                <p>
                  We work with both residential and commercial clients across Townsville. From storing a few boxes during a unit move in the CBD to holding the entire contents of a family home in Douglas or Annandale, we have the right solution at the right price.
                </p>
              </div>

              {/* Storage options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 mb-10">
                {[
                  {
                    title: "Short-Term",
                    desc: "Week-by-week storage while you move, renovate, or wait for settlement in Townsville.",
                  },
                  {
                    title: "Long-Term",
                    desc: "Monthly storage with no lock-in period. Perfect for extended renovations or defence postings.",
                  },
                  {
                    title: "Move & Store",
                    desc: "We collect from your Townsville home, store at our Cairns facility, and deliver when you\u0027re ready.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="w-8 h-1 bg-[#F5C400] mb-3" />
                    <h4 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Storage Facility Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  "24/7 CCTV monitoring",
                  "Electronic access control",
                  "Clean, dry storage units",
                  "Range of unit sizes available",
                  "Flexible weekly & monthly terms",
                  "No lock-in contracts",
                  "Residential & commercial storage",
                  "Combined move & store packages",
                  "Townsville pickup & delivery",
                  "Cairns City depot location",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              {/* Who uses it */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Who Uses Our Townsville Storage?</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  <strong className="text-[#1A1A1A]">Families between homes</strong> - Sold your place in Aitkenvale but not yet settled into your new Kirwan property? Our short-term storage bridges the gap, with our removalists handling the pickup and the final delivery.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Defence personnel</strong> - Townsville has a large defence community, and many ADF members use our storage when posted to a new base. We collect your household items, store them securely, and deliver to your next location when you are ready.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Townsville renovators</strong> - Protect your furniture and valuables while your home is being renovated. We collect from your Cranbrook or Douglas property, store everything safely in Cairns, and return it once the work is complete.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Local businesses</strong> - Townsville businesses use our storage during office relocations, fit-outs, or seasonal stock management. We offer the same secure, flexible terms for commercial clients across the city.
                </p>
              </div>

              {/* Locations */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Our Storage Locations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { city: "Cairns", address: CAIRNS_ADDRESS, primary: true },
                  { city: "Brisbane", address: BRISBANE_ADDRESS, primary: false },
                ].map((loc) => (
                  <div key={loc.city} className={`rounded-xl p-6 border ${loc.primary ? "bg-[#F5C400]/10 border-[#F5C400]/30" : "bg-gray-50 border-gray-200"}`}>
                    <p className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">{loc.city}</p>
                    <p className="text-gray-700 text-sm">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get a Storage Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us what you need to store and we&apos;ll provide a fast, free quote for Townsville storage.</p>
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
                  {[
                    "No lock-in contracts",
                    "24/7 security monitoring",
                    "Combined move & store",
                  ].map((item) => (
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

      <FAQ items={faqs} heading="Townsville Storage FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Townsville", desc: "Trusted removalists across Townsville.", href: "/removalists-townsville" },
              { title: "Storage Cairns", desc: "Secure storage at our Cairns City facility.", href: "/storage-cairns" },
              { title: "Interstate Removals", desc: "Move between cities Australia-wide.", href: "/interstate-removalists" },
              { title: "Removalists Cairns", desc: "Local moves across Cairns and FNQ.", href: "/removalists-cairns" },
              { title: "Storage Brisbane", desc: "Secure storage at our Archerfield facility.", href: "/storage-brisbane" },
              { title: "Office Removalists", desc: "Commercial moving for businesses across QLD.", href: "/office-removalists" },
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials.", href: "/boxes" },
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and SEQ.", href: "/removalists-brisbane" },
              { title: "NDIS Removalists", desc: "NDIS-funded moving services across QLD.", href: "/ndis-removalists" },
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
        heading="Need Storage in Townsville?"
        subtext="Get a free, no-obligation storage quote today. We pick up from your Townsville home, store your belongings securely in Cairns, and deliver when you are ready."
      />
    </>
  );
}
