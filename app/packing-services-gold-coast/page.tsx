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
  title: "Packing Services Gold Coast | Professional & Fully Insured",
  description:
    "Professional packing services on the Gold Coast. Trained packers, quality materials, full or partial packing available. Fully insured. Get a free quote today.",
  keywords: ["packing services gold coast", "professional packers gold coast", "packing boxes gold coast", "removal packing gold coast"],
  alternates: { canonical: "https://www.r2g.com.au/packing-services-gold-coast" },
  openGraph: {
    title: "Packing Services Gold Coast | Professional & Fully Insured",
    description: "Professional packing services on the Gold Coast. Quality materials, expert packers, full or partial service. Get a free quote today.",
    url: "https://www.r2g.com.au/packing-services-gold-coast",
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
      name: "Packing Services Gold Coast",
      item: "https://www.r2g.com.au/packing-services-gold-coast",
    },
  ],
};

const faqs = [
  {
    question: "Do you provide packing services across all Gold Coast suburbs?",
    answer: "Yes, our professional packers cover all Gold Coast suburbs including Surfers Paradise, Broadbeach, Robina, Southport, Burleigh Heads, Palm Beach, Coolangatta, and everywhere in between. We also service the Gold Coast hinterland areas like Mudgeeraba and Nerang.",
  },
  {
    question: "Do you supply all the packing materials on the Gold Coast?",
    answer: "Yes. We bring everything needed for your pack, including boxes in various sizes, bubble wrap, packing paper, furniture blankets, stretch wrap, tape, and markers. You do not need to buy or source anything yourself.",
  },
  {
    question: "Can you pack just the fragile items in my Gold Coast home?",
    answer: "Absolutely. Our partial packing service lets you choose exactly what you need help with. Many Gold Coast customers ask us to handle just the kitchen, glassware, artwork, and other breakables while they pack the rest themselves.",
  },
  {
    question: "How long does it take to pack a Gold Coast home?",
    answer: "A 2-bedroom apartment in Surfers Paradise or Broadbeach typically takes 3 to 4 hours with two packers. Larger 4-bedroom homes in suburbs like Robina or Varsity Lakes can take 6 to 8 hours. We always provide a time estimate before your move.",
  },
  {
    question: "Can you combine packing with my Gold Coast removal?",
    answer: "Yes, and most of our Gold Coast customers do exactly that. We can pack your home and move you on the same day, or pack the day before and move the next morning. Combining services gives you a completely hands-off moving experience.",
  },
  {
    question: "Do you offer unpacking services on the Gold Coast?",
    answer: "Yes, we offer full unpacking at your new Gold Coast property. Our team will unpack all boxes, place items in the rooms you direct, and remove all packing materials so you can settle into your new home straight away.",
  },
];

const materials = [
  { name: "Cardboard Boxes", desc: "Various sizes including wardrobe boxes" },
  { name: "Bubble Wrap", desc: "For fragile and breakable items" },
  { name: "Packing Paper", desc: "Acid-free paper to protect surfaces" },
  { name: "Furniture Blankets", desc: "Heavy-duty protection for furniture" },
  { name: "Stretch Wrap", desc: "For securing drawers and doors" },
  { name: "Packing Tape", desc: "Strong, durable sealing tape" },
  { name: "Markers & Labels", desc: "Clear labelling for easy unpacking" },
  { name: "Wardrobe Boxes", desc: "Keep your clothes crease-free" },
];

const packingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packing Services Gold Coast",
  description:
    "Professional packing services on the Gold Coast. Trained packers handle your belongings with care using quality materials. Full or partial packing available.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_VALUE,
      reviewCount: REVIEW_COUNT,
      bestRating: "5",
    },
  },
  areaServed: "Gold Coast",
};

export default function PackingServicesGoldCoastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packingSchema) }}
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
        title="Packing Services Gold Coast"
        subtitle="Professional packing by trained experts using premium materials, so your belongings arrive at your new Gold Coast home in perfect condition."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Packing Services Gold Coast" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Professional Packers</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Expert Packing for Your Gold Coast Move
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-furniture-packing.webp"
                  alt="R2G professional packers carefully wrapping and boxing belongings for a Gold Coast move - R2G Packing Services Gold Coast"
                  title="R2G professional packers carefully wrapping and boxing belongings for a Gold Coast move"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Gold Coast packing jobs come with their own set of considerations. Beachfront
                  apartments in Surfers Paradise and Broadbeach often have strict loading dock
                  schedules and shared lifts, so everything needs to be packed tight and ready to
                  move in a compressed window. Canal-front homes in Isle of Capri and Mermaid Waters
                  have oversized outdoor furniture and water-sport gear that requires custom
                  wrapping. Our Gold Coast packers plan for all of it.
                </p>
                <p>
                  We use cell-divided cartons for glassware, acid-free tissue for artwork, and
                  heavy-duty wardrobe boxes that let your clothes travel on hangers without
                  creasing. Every item is wrapped individually, and boxes are packed to weight
                  limits so nothing shifts in transit on the M1. Each box is labelled with the room
                  and a contents summary for fast, organised unpacking at the other end.
                </p>
                <p>
                  Our full packing option covers your entire Gold Coast home in a single visit.
                  Partial packing lets you hand off the kitchen, garage, or fragile items while you
                  handle the rest at your own pace. Either way, you can bundle packing with your
                  Gold Coast removal so the same team packs and moves your belongings on the same
                  day or back to back.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Full Packing</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">We Pack Everything</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Our team packs your entire Gold Coast home from top to bottom. Every room, every cupboard, every item.</p>
                  <ul className="space-y-2">
                    {["All rooms & cupboards", "All materials included", "Fully labelled boxes", "Ready to move same day"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Partial Packing</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">We Pack What You Need</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Let us handle the tricky stuff. Fragile items, kitchen, garage, or any specific rooms you choose.</p>
                  <ul className="space-y-2">
                    {["Choose specific rooms", "Fragile item specialists", "Flexible service", "Combine with removal"].map(f => (
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

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Packing Materials We Use</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {materials.map((m) => (
                  <div key={m.name} className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
                    <svg className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get a Packing Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your Gold Coast home and we&apos;ll give you a fast, free packing quote.</p>
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
                  {["All materials supplied", "Full or partial packing", "Unpacking service available"].map((item) => (
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

      <FAQ items={faqs} heading="Packing Services Gold Coast FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials delivered to your door.", href: "/boxes" },
              { title: "Storage Brisbane", desc: "Secure short and long-term storage near the Gold Coast.", href: "/storage-brisbane" },
              { title: "Removalists Gold Coast", desc: "Local moves across the Gold Coast and South East Queensland.", href: "/removalists-gold-coast" },
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
        heading="Gold Coast Packing, Sorted"
        subtext="High-rise, canal-front, or hinterland home, our Gold Coast packers handle every property type. Get a free quote today."
      />
    </>
  );
}
