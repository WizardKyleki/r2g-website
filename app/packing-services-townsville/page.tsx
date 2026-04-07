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
  title: "Packing Services Townsville | Professional & Fully Insured",
  description:
    "Professional packing services in Townsville. Trained packers, quality materials, full or partial packing available. Fully insured. Get a free quote today.",
  keywords: ["packing services townsville", "professional packers townsville", "packing boxes townsville", "removal packing townsville"],
  alternates: { canonical: "https://www.r2g.com.au/packing-services-townsville" },
  openGraph: {
    title: "Packing Services Townsville | Professional & Fully Insured",
    description: "Professional packing services in Townsville. Quality materials, expert packers, full or partial service. Get a free quote today.",
    url: "https://www.r2g.com.au/packing-services-townsville",
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
      name: "Packing Services Townsville",
      item: "https://www.r2g.com.au/packing-services-townsville",
    },
  ],
};

const faqs = [
  {
    question: "Do your packers cover all of Townsville?",
    answer: "Yes. Our professional packing team services all Townsville suburbs including Townsville City, South Townsville, Aitkenvale, Kirwan, Cranbrook, Douglas, Idalia, and the surrounding areas. We also cover Magnetic Island relocations.",
  },
  {
    question: "What packing materials do you provide for Townsville moves?",
    answer: "We bring everything you need. This includes cardboard boxes in multiple sizes, bubble wrap, acid-free packing paper, furniture blankets, stretch wrap, tape, and labelling markers. There is nothing for you to buy or organise.",
  },
  {
    question: "Can I just get help packing my kitchen and breakables?",
    answer: "Yes. Our partial packing service lets you pick the rooms or item types you need help with. Kitchens, glassware, artwork, and electronics are the most common requests from Townsville customers. You handle the rest at your own pace.",
  },
  {
    question: "How long does packing a Townsville home take?",
    answer: "A standard 2 to 3 bedroom home in suburbs like Aitkenvale or Kirwan typically takes 3 to 5 hours with two packers. Larger 4-bedroom homes can take 6 to 8 hours. We always provide a time estimate before we arrive.",
  },
  {
    question: "Do you protect items against Townsville's heat and humidity?",
    answer: "Yes. We understand the North Queensland climate. Our packing materials include moisture-resistant options, and we take extra care wrapping items that could be affected by heat during transit. Your belongings stay protected throughout the entire move.",
  },
  {
    question: "Can you pack and move me on the same day in Townsville?",
    answer: "Absolutely. For most Townsville homes, we can pack in the morning and have you loaded and moving by the afternoon. For larger properties, we may recommend a pack-the-day-before approach so everything runs smoothly on moving day.",
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
  name: "Packing Services Townsville",
  description:
    "Professional packing services in Townsville. Trained packers handle your belongings with care using quality materials. Full or partial packing available.",
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
  areaServed: "Townsville",
};

export default function PackingServicesTownsvillePage() {
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
        title="Packing Services Townsville"
        subtitle="Professional packing by trained experts using premium materials. Your belongings arrive at your new Townsville home in perfect condition."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Packing Services Townsville" }]}
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
                Trusted Packing Services for Townsville Moves
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-furniture-packing.webp"
                  alt="R2G professional packers carefully wrapping and boxing belongings for a Townsville move - R2G Packing Services Townsville"
                  title="R2G professional packers carefully wrapping and boxing belongings for a Townsville move"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Townsville&apos;s climate adds a layer of complexity to packing that most southern
                  removalists do not consider. Heat and humidity from October through April can
                  damage electronics, warp wooden furniture, and degrade cardboard if materials are
                  not chosen carefully. Our Townsville packers use moisture-resistant wrapping,
                  heavy-duty reinforced cartons, and silica packets for sensitive electronics to
                  keep your belongings protected from the tropics.
                </p>
                <p>
                  Military families relocating to or from Lavarack Barracks make up a significant
                  portion of our Townsville packing work. We understand the tight timelines and
                  inventory requirements that come with Defence moves. For civilian households in
                  Kirwan, Aitkenvale, and the northern beaches, we pack kitchens with cell-divided
                  cartons, wrap furniture in padded blankets, and crate artwork and mirrors
                  individually. Every box is labelled by room and numbered against an inventory
                  list.
                </p>
                <p>
                  Our full packing service covers your entire Townsville home, typically completed
                  in a single day for a 3-bedroom house. Partial packing is available if you only
                  need help with the kitchen, fragile items, or specific rooms. Both options can be
                  bundled with your Townsville removal so the same crew packs and loads your home
                  without any handover between teams.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Full Packing</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">We Pack Everything</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Our team packs your entire Townsville home from top to bottom. Every room, every cupboard, every item.</p>
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
                <p className="text-gray-400 text-sm mb-6">Tell us about your Townsville home and we&apos;ll give you a fast, free packing quote.</p>
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

      <FAQ items={faqs} heading="Packing Services Townsville FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials delivered to your door.", href: "/boxes" },
              { title: "Storage Cairns", desc: "Secure short and long-term storage in North Queensland.", href: "/storage-cairns" },
              { title: "Removalists Townsville", desc: "Local moves across Townsville and North Queensland.", href: "/removalists-townsville" },
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
        heading="Townsville Packing, Heat-Proofed"
        subtext="Humidity-resistant materials, stilt-house experience, and Defence move expertise. Get a free packing quote for your Townsville home."
      />
    </>
  );
}
