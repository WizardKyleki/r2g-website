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
  title: "Packing Services Cairns | Fully Insured | R2G",
  description:
    "Professional packing services in Cairns. Trained packers, quality materials, full or partial packing available. Fully insured. Get a free quote today.",
  keywords: ["packing services cairns", "professional packers cairns", "packing boxes cairns", "removal packing cairns"],
  alternates: { canonical: "https://www.r2g.com.au/packing-services-cairns" },
  openGraph: {
    title: "Packing Services Cairns | Fully Insured | R2G",
    description: "Professional packing services in Cairns. Quality materials, expert packers, full or partial service. Get a free quote today.",
    url: "https://www.r2g.com.au/packing-services-cairns",
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
      name: "Packing Services Cairns",
      item: "https://www.r2g.com.au/packing-services-cairns",
    },
  ],
};

const faqs = [
  {
    question: "Do you bring all the packing materials to Cairns jobs?",
    answer: "Yes. Our crew arrives with everything needed: reinforced cartons, bubble wrap, packing paper, moisture-resistant wrapping for the tropical climate, furniture blankets, tape, and markers. You do not need to buy or source anything.",
  },
  {
    question: "Can you just pack the fragile items in my Cairns home?",
    answer: "Yes. Our partial packing service lets you choose specific rooms or item types. Most Cairns customers ask us to handle the kitchen, glassware, artwork, and electronics while they pack bedrooms and clothing themselves.",
  },
  {
    question: "How long does it take to pack a Cairns home?",
    answer: "A 2-bedroom unit or stilt house typically takes 3 to 4 hours with two packers. A larger 4-bedroom home can take a full day. We provide a time estimate during quoting based on your home layout and access.",
  },
  {
    question: "Do you protect items from Cairns humidity during packing?",
    answer: "Yes. We use moisture-resistant plastic wrapping on upholstered furniture, silica packets for electronics, and sealed plastic liners inside cartons for documents and clothing. This is standard on all Cairns packing jobs during the wet season.",
  },
  {
    question: "Can packing and removal happen on the same day in Cairns?",
    answer: "Yes, for smaller homes we can pack in the morning and load the truck in the afternoon. For larger homes, we recommend packing the day before so moving day runs faster and smoother.",
  },
  {
    question: "Do you offer unpacking at the new Cairns address?",
    answer: "Yes. Our team can unpack boxes, place items in the rooms you specify, and remove all packing materials. This is especially popular with interstate arrivals who want to settle into their new Cairns home quickly.",
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
  name: "Packing Services Cairns",
  description:
    "Professional packing services in Cairns. Trained packers handle your belongings with care using quality materials. Full or partial packing available.",
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
  areaServed: "Cairns",
};

export default function PackingServicesPage() {
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
        title="Packing Services Cairns"
        subtitle="Professional, careful packing using premium materials — so your belongings arrive at your new home in perfect condition."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Packing Services" }]}
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
                Let the Experts Handle the Packing
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-professional-packing-service-cairns.webp"
                  alt="R2G professional packers carefully wrapping and boxing belongings for a Cairns move - R2G Packing Services Cairns"
                  title="R2G professional packers carefully wrapping and boxing belongings for a Cairns move"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cairns homes present unique packing challenges that general removalists often
                  overlook. Stilt houses mean every packed box needs to travel down external stairs.
                  Tropical humidity can warp cardboard and damage electronics if items are not
                  wrapped properly. Our Cairns packing crew accounts for both of these factors on
                  every job, using moisture-resistant wrapping and reinforced boxes built to handle
                  the Far North Queensland climate.
                </p>
                <p>
                  We pack kitchens with layered tissue and cell dividers for glassware, wrap
                  furniture in padded blankets before it leaves the room, and use custom crating
                  for artwork, mirrors, and flat-screen TVs. Every box is labelled by room and
                  contents so you can unpack in order at your new address, whether that is across
                  Cairns or at the other end of an interstate move.
                </p>
                <p>
                  Choose our full packing service and we handle your entire home in a single day.
                  Or book partial packing for just the kitchen, breakables, or any rooms you would
                  rather not tackle yourself. Both options can be combined with your Cairns removal
                  for one streamlined booking.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Full Packing</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">We Pack Your Entire Cairns Home</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Our crew packs every room, cupboard, and shelf using humidity-resistant materials suited to the tropics.</p>
                  <ul className="space-y-2">
                    {["All rooms & cupboards", "Moisture-resistant wrapping", "Labelled & inventoried", "Ready to move same day"].map(f => (
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
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Just the Tricky Stuff</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Hand off the kitchen, breakables, or garage while you pack the simpler rooms at your own pace.</p>
                  <ul className="space-y-2">
                    {["Pick your rooms", "Fragile item specialists", "Works around your schedule", "Bundle with removal"].map(f => (
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
                <p className="text-gray-400 text-sm mb-6">Tell us about your Cairns home, stilt access, and rooms to pack. We&apos;ll send a clear quote within hours.</p>
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

      <FAQ items={faqs} heading="Packing Services FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials delivered to your door.", href: "/boxes" },
              { title: "Storage Cairns", desc: "Secure short and long-term storage facilities.", href: "/storage-cairns" },
              { title: "Removalists Cairns", desc: "Local moves across Cairns and Far North Queensland.", href: "/removalists-cairns" },
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
        heading="Ready to Take the Stress Out of Packing?"
        subtext="From stilt houses in Edge Hill to units in Cairns City, our packing crew handles it all. Get a free quote today."
      />
    </>
  );
}
