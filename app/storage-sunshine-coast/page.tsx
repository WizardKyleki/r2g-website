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
  title: "Storage Sunshine Coast | Secure Short & Long-Term Solutions",
  description:
    "Secure storage for Sunshine Coast residents. R2G picks up from your Sunshine Coast home, stores at our Brisbane facility, and delivers when you're ready. Free quote.",
  keywords: ["storage sunshine coast", "self storage sunshine coast", "moving and storage sunshine coast", "short term storage sunshine coast", "long term storage sunshine coast"],
  alternates: { canonical: "https://www.r2g.com.au/storage-sunshine-coast" },
  openGraph: {
    title: "Storage Sunshine Coast | Secure Short & Long-Term Solutions",
    description: "Secure storage for Sunshine Coast residents. Pickup, storage, and delivery all handled by R2G. Get a free quote today.",
    url: "https://www.r2g.com.au/storage-sunshine-coast",
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
      name: "Storage Sunshine Coast",
      item: "https://www.r2g.com.au/storage-sunshine-coast",
    },
  ],
};

const faqs = [
  {
    question: "Where do you store belongings from the Sunshine Coast?",
    answer:
      "All items collected from the Sunshine Coast are stored at our secure facility at Archerfield in Brisbane. R2G handles the full process. We pick up from your Sunshine Coast home, transport to our depot, and deliver back when you are ready.",
  },
  {
    question: "Do you pick up from all Sunshine Coast suburbs?",
    answer:
      "Yes. We service the entire Sunshine Coast region including Maroochydore, Caloundra, Noosa, Mooloolaba, Nambour, Buderim, Coolum Beach, and the hinterland. Our team comes to your door, loads your items, and takes care of everything from there.",
  },
  {
    question: "How secure is the storage facility?",
    answer:
      "Our Archerfield facility is fully fenced, monitored 24/7 by CCTV, and secured with electronic access control. Only authorised persons can enter the site, and each unit is individually locked. Your Sunshine Coast belongings are kept safe at all times.",
  },
  {
    question: "Can I combine my Sunshine Coast move with storage?",
    answer:
      "Absolutely. Our move-and-store package is designed exactly for this. We collect your belongings from your current Sunshine Coast home, store them at our Brisbane facility during the gap, and deliver to your new address once you have the keys. It is the simplest way to handle settlement delays or staggered moves.",
  },
  {
    question: "What storage unit sizes are available?",
    answer:
      "We offer units ranging from small spaces for a few boxes up to large warehouse areas that fit a full 4-bedroom household. Whether you are storing contents from a Mooloolaba unit or a Buderim family home, we will match you with the right size. Get in touch for a recommendation.",
  },
  {
    question: "Is there a minimum storage period for Sunshine Coast customers?",
    answer:
      "No. We offer flexible week-by-week and month-by-month terms with no minimum lock-in. Many Sunshine Coast customers begin with short-term storage during a move and extend if they need more time. You only pay for the duration you use.",
  },
  {
    question: "How much does storage cost from the Sunshine Coast?",
    answer:
      "Pricing depends on the volume of items you need to store and how long you need the space. We offer competitive bundled rates that cover pickup from the Sunshine Coast, secure storage at our Brisbane depot, and delivery to your new address. Contact us for a free, no-obligation quote.",
  },
];

const storageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Storage Sunshine Coast",
  description:
    "Secure storage solutions for Sunshine Coast residents. Pickup from the Sunshine Coast, stored at our Brisbane facility, with delivery when ready.",
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

export default function StorageSunshineCoastPage() {
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
        title="Storage Sunshine Coast"
        subtitle="Secure storage for Sunshine Coast residents. We collect from your home, store at our Brisbane facility, and deliver when you need it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Storage Sunshine Coast" }]}
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
                Sunshine Coast Storage With Door-to-Door Service
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/blog-storage.webp"
                  alt="R2G secure storage facility servicing Sunshine Coast customers with clean dry monitored units - R2G Removalists Sunshine Coast Storage"
                  title="R2G secure storage facility servicing Sunshine Coast customers with clean dry monitored units"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Looking for storage on the Sunshine Coast? Whether you are moving between homes in Maroochydore, renovating in Buderim, waiting on settlement in Caloundra, or relocating from Noosa, R2G Transport &amp; Storage offers a complete storage solution with full pickup and delivery.
                </p>
                <p>
                  Our secure storage facility is located at Archerfield in Brisbane. We take care of the transport so you do not need to worry about driving or hiring a trailer. Our removalists arrive at your Sunshine Coast property, load your belongings professionally, transport everything to our depot, and store your items in clean, dry, CCTV-monitored units until you need them.
                </p>
                <p>
                  This end-to-end service is particularly popular with Sunshine Coast families who are between properties. Instead of the hassle of renting a self-storage unit and moving items yourself, R2G manages every step. When your new home is ready, we deliver your belongings back to the Sunshine Coast or to any other Queensland address.
                </p>
                <p>
                  We work with residential and commercial clients across the entire Sunshine Coast. From storing personal effects during a Nambour home renovation to holding office equipment for a Mooloolaba business refit, we have the capacity and flexibility to help.
                </p>
              </div>

              {/* Storage options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 mb-10">
                {[
                  {
                    title: "Short-Term",
                    desc: "Week-by-week storage while you move, renovate, or wait for your new Sunshine Coast home.",
                  },
                  {
                    title: "Long-Term",
                    desc: "Monthly storage with no lock-in period. Ideal for extended renovations or overseas travel.",
                  },
                  {
                    title: "Move & Store",
                    desc: "We collect from your Sunshine Coast home, store securely, and deliver when you\u0027re ready.",
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
                  "Sunshine Coast pickup & delivery",
                  "Archerfield depot location",
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
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Who Uses Our Sunshine Coast Storage?</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  <strong className="text-[#1A1A1A]">Families between properties</strong> - Selling in Caloundra and buying in Noosa? Our short-term storage holds your belongings during the gap between settlements, with our team managing the pickup and the final delivery.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Sunshine Coast renovators</strong> - Keep your furniture and valuables protected during a home renovation. We collect from your Buderim or Nambour property, store everything safely, and bring it back when the builders are finished.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Interstate movers</strong> - Relocating from the Sunshine Coast to another city? Store your items with us while you get set up at your destination. We deliver when you give the word, whether that is weeks or months later.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Local businesses</strong> - Sunshine Coast businesses use our storage during office moves, seasonal stock rotation, or commercial fit-outs. We offer the same secure, flexible terms for businesses in Maroochydore, Mooloolaba, and surrounding areas.
                </p>
              </div>

              {/* Locations */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Our Storage Locations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { city: "Brisbane", address: BRISBANE_ADDRESS, primary: true },
                  { city: "Cairns", address: CAIRNS_ADDRESS, primary: false },
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
                <p className="text-gray-400 text-sm mb-6">Tell us what you need to store and we&apos;ll provide a fast, free quote for Sunshine Coast storage.</p>
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

      <FAQ items={faqs} heading="Sunshine Coast Storage FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Removalists Sunshine Coast", desc: "Local movers across the Sunshine Coast region.", href: "/removalists-sunshine-coast" },
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials.", href: "/boxes" },
              { title: "Storage Brisbane", desc: "Secure storage at our Archerfield facility.", href: "/storage-brisbane" },
              { title: "Removalists Brisbane", desc: "Local moves across Brisbane and SEQ.", href: "/removalists-brisbane" },
              { title: "Removalists Gold Coast", desc: "Local removalists covering all Gold Coast suburbs.", href: "/removalists-gold-coast" },
              { title: "Interstate Removals", desc: "Move between cities Australia-wide.", href: "/interstate-removalists" },
              { title: "Office Removalists", desc: "Commercial moving for businesses across QLD.", href: "/office-removalists" },
              { title: "Storage Cairns", desc: "Secure storage in Cairns.", href: "/storage-cairns" },
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
        heading="Need Storage on the Sunshine Coast?"
        subtext="Get a free, no-obligation storage quote today. We collect from your Sunshine Coast home, store your belongings securely in Brisbane, and deliver when you are ready."
      />
    </>
  );
}
