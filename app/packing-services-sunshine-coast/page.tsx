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
  title: "Packing Services Sunshine Coast | Professional & Fully Insured",
  description:
    "Professional packing services on the Sunshine Coast. Trained packers, quality materials, full or partial packing available. Fully insured. Get a free quote today.",
  keywords: ["packing services sunshine coast", "professional packers sunshine coast", "packing boxes sunshine coast", "removal packing sunshine coast"],
  alternates: { canonical: "https://www.r2g.com.au/packing-services-sunshine-coast" },
  openGraph: {
    title: "Packing Services Sunshine Coast | Professional & Fully Insured",
    description: "Professional packing services on the Sunshine Coast. Quality materials, expert packers, full or partial service. Get a free quote today.",
    url: "https://www.r2g.com.au/packing-services-sunshine-coast",
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
      name: "Packing Services Sunshine Coast",
      item: "https://www.r2g.com.au/packing-services-sunshine-coast",
    },
  ],
};

const faqs = [
  {
    question: "Do you cover all Sunshine Coast suburbs for packing?",
    answer: "Yes, our professional packers service every Sunshine Coast suburb. This includes Maroochydore, Caloundra, Noosa, Mooloolaba, Buderim, Nambour, Coolum Beach, Peregian Springs, and all surrounding areas from the coast to the hinterland.",
  },
  {
    question: "What packing materials do you bring to Sunshine Coast jobs?",
    answer: "We supply everything needed for a complete pack. This includes cardboard boxes in multiple sizes, bubble wrap, acid-free packing paper, furniture blankets, stretch wrap, heavy-duty tape, and labelling markers. You do not need to purchase anything in advance.",
  },
  {
    question: "Can you pack just my kitchen and fragile items?",
    answer: "Yes. Our partial packing service is designed for exactly this. Many Sunshine Coast customers ask us to handle just the kitchen, glassware, artwork, or other delicate belongings while they take care of bedrooms and general living areas themselves.",
  },
  {
    question: "How far in advance should I book packing on the Sunshine Coast?",
    answer: "We recommend booking at least 2 to 4 weeks ahead, particularly during busy periods from November through January. If you need a last-minute booking, give us a call and we will do our best to fit you in.",
  },
  {
    question: "Can packing and removal happen on the same day?",
    answer: "Yes. For smaller Sunshine Coast homes and apartments, we often pack in the morning and load the truck in the afternoon. For larger properties in areas like Buderim or Noosa, we may recommend packing the day before your move for a smoother experience.",
  },
  {
    question: "Do you offer an unpacking service at my new Sunshine Coast home?",
    answer: "Absolutely. Once we deliver your belongings, our team can unpack every box, place items where you want them, and take away all used packing materials. It is the fastest way to feel settled in your new home.",
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
  name: "Packing Services Sunshine Coast",
  description:
    "Professional packing services on the Sunshine Coast. Trained packers handle your belongings with care using quality materials. Full or partial packing available.",
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
  areaServed: "Sunshine Coast",
};

export default function PackingServicesSunshineCoastPage() {
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
        title="Packing Services Sunshine Coast"
        subtitle="Careful, professional packing using premium materials. Your belongings arrive at your new Sunshine Coast home safe and sound."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Packing Services Sunshine Coast" }]}
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
                Professional Packing for Your Sunshine Coast Move
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-furniture-packing.webp"
                  alt="R2G professional packers carefully wrapping and boxing belongings for a Sunshine Coast move - R2G Packing Services Sunshine Coast"
                  title="R2G professional packers carefully wrapping and boxing belongings for a Sunshine Coast move"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sunshine Coast homes range from compact beachside units in Mooloolaba and
                  Caloundra to large family properties on acreage in the hinterland around
                  Maleny and Montville. Hinterland homes often hold decades of accumulated
                  belongings, bulky outdoor furniture, and workshop equipment that needs careful
                  sorting and wrapping. Coastal properties deal with salt air exposure on metal
                  fixtures and outdoor items. Our Sunshine Coast packers adjust their materials and
                  approach for each property type.
                </p>
                <p>
                  Kitchens are packed with layered tissue and cell dividers to protect glassware
                  and crockery. Artwork and mirrors get corner protectors and custom-cut cardboard
                  sleeves. Wardrobes are transferred directly into hanging boxes so clothes arrive
                  wrinkle-free. Every carton is sealed, labelled by room, and packed to weight so
                  nothing shifts during the drive along the Bruce Highway or Sunshine Motorway.
                </p>
                <p>
                  Book our full packing service and we will pack your entire Sunshine Coast home
                  the day before or morning of your move. Prefer to do some rooms yourself? Our
                  partial packing covers the kitchen, garage, or breakables while you handle
                  bedrooms and personal items. Both options pair with our Sunshine Coast removal
                  service for one coordinated booking.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Full Packing</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">We Pack Everything</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Our team packs your entire Sunshine Coast home from top to bottom. Every room, every cupboard, every item.</p>
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
                <p className="text-gray-400 text-sm mb-6">Tell us about your Sunshine Coast home and we&apos;ll give you a fast, free packing quote.</p>
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

      <FAQ items={faqs} heading="Packing Services Sunshine Coast FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials delivered to your door.", href: "/boxes" },
              { title: "Storage Brisbane", desc: "Secure short and long-term storage near the Sunshine Coast.", href: "/storage-brisbane" },
              { title: "Removalists Sunshine Coast", desc: "Local moves across the Sunshine Coast and South East Queensland.", href: "/removalists-sunshine-coast" },
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
        heading="Sunshine Coast Packing, Done Right"
        subtext="Beachside units, hinterland acreage, or family homes in Buderim. Our Sunshine Coast packers cover it all. Get a free quote."
      />
    </>
  );
}
