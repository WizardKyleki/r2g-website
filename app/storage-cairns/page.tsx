import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF, CAIRNS_ADDRESS, BRISBANE_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Storage Cairns — Secure Short & Long-Term",
  description:
    "Secure, clean storage in Cairns. R2G Transport & Storage offers flexible short and long-term storage solutions — perfect between moves, renovations, or for business needs. Get a free quote.",
  keywords: ["storage cairns", "self storage cairns", "moving and storage cairns", "short term storage cairns", "long term storage cairns"],
  alternates: { canonical: "https://www.r2g.com.au/storage-cairns" },
  openGraph: {
    title: "Storage Cairns — Secure Short & Long-Term | R2G Transport & Storage",
    description: "Secure, flexible storage in Cairns. Short or long-term, no lock-in contracts. Get a free quote today.",
    url: "https://www.r2g.com.au/storage-cairns",
  },
};

const faqs = [
  {
    question: "How secure is your Cairns storage facility?",
    answer:
      "Our Cairns storage facility is fully fenced, monitored 24/7 by CCTV, and secured with electronic access control. Only authorised persons can access the site, and all units are individually locked.",
  },
  {
    question: "Can I access my belongings while they're in storage?",
    answer:
      "Yes, customers can access their stored items during business hours (Monday–Friday, 9am–5pm). If you need after-hours or weekend access, please contact us in advance and we can arrange it.",
  },
  {
    question: "What size storage units do you have?",
    answer:
      "We offer a range of unit sizes to suit everything from a few boxes to a full 4-bedroom household. From small 3×3m units to large warehouse spaces — contact us to discuss your requirements and we'll recommend the right size.",
  },
  {
    question: "Can I store my belongings during my move?",
    answer:
      "Absolutely. We specialise in combined move-and-store packages. We pick up your items from your current home, store them safely in Cairns, and deliver them to your new address when you're ready. This is ideal for settlement delays and rental overlaps.",
  },
  {
    question: "Is my stored property insured?",
    answer:
      "We strongly recommend taking out contents insurance for stored goods. R2G carries public liability insurance for the facility, but your personal items in storage should be covered under your own home and contents or a dedicated storage policy. We can provide guidance on suitable options.",
  },
  {
    question: "How long can I store my items?",
    answer:
      "As long as you need. We offer flexible week-by-week and month-by-month storage with no minimum lock-in period. Many customers start with a short-term storage solution and extend as needed — we make it easy to adjust.",
  },
];

export default function StorageCairnsPage() {
  return (
    <>
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
        title="Storage Cairns"
        subtitle="Secure, clean, and flexible storage solutions in Cairns — short-term, long-term, or combined with your removal service."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Storage Cairns" }]}
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
                Cairns Storage You Can Actually Rely On
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-storage-facility-cairns.webp"
                  alt="R2G secure storage facility in Cairns with clean dry monitored units - R2G Removalists Cairns Storage"
                  title="R2G secure storage facility in Cairns with clean dry monitored units"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Whether you need somewhere to store your belongings between moves, during a renovation, while waiting for settlement, or simply to free up space at home or work — R2G Transport &amp; Storage has a secure, clean, and affordable storage solution in Cairns ready for you.
                </p>
                <p>
                  Our Cairns storage facility is monitored 24/7 with CCTV and secured with electronic access control. Units are clean, dry, and maintained to a high standard. We offer flexible weekly and monthly lease terms with no lock-in contracts, so you&apos;re never paying for more time than you need.
                </p>
                <p>
                  One of our most popular options is our combined moving and storage service. Our team picks up your items from your Cairns home, carefully loads them, stores them in our facility, and then delivers everything to your new address once you&apos;re ready. It&apos;s the seamless solution for settlement delays, interstate moves, or staggered relocations.
                </p>
                <p>
                  We cater to both residential and commercial storage needs. Whether you need to store a few boxes, a full household, office furniture, or business equipment — we have the right unit size and the right price.
                </p>
              </div>

              {/* Storage options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 mb-10">
                {[
                  {
                    title: "Short-Term",
                    desc: "Flexible week-by-week storage during your move, renovation, or between settlements.",
                  },
                  {
                    title: "Long-Term",
                    desc: "Secure monthly storage for as long as you need — no lock-in period, cancel anytime.",
                  },
                  {
                    title: "Move & Store",
                    desc: "We pick up, store, and deliver when you&apos;re ready. The seamless solution.",
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
                  "Easy access during business hours",
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
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Who Uses Our Cairns Storage?</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  <strong className="text-[#1A1A1A]">Families moving home</strong> — Need a gap between leaving your old property and getting into your new one? Our short-term storage bridges the gap perfectly, with our removalists handling both ends of the move.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">People moving interstate</strong> — Moving from Cairns to Brisbane or further south? Store your belongings with us while you get settled, then have them delivered when you&apos;re ready. No rush, no stress.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Renovating homeowners</strong> — Protect your furniture and valuables during a home renovation. We&apos;ll store everything safely until your home is ready, then bring it back and put it in place.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Businesses</strong> — Store office furniture, equipment, stock, or documents securely during an office relocation or fit-out. We offer flexible commercial storage with the same high security standards.
                </p>
              </div>

              {/* Locations */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Our Storage Location</h3>
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
                <p className="text-gray-400 text-sm mb-6">Tell us what you need to store and we&apos;ll give you a fast, free quote.</p>
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

      <FAQ items={faqs} heading="Cairns Storage FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Packing Services", desc: "Professional packing for your Cairns move.", href: "/packing-services-cairns" },
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials.", href: "/boxes" },
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
        heading="Need Storage in Cairns?"
        subtext="Get a free, no-obligation storage quote today. Flexible terms, secure facilities, and competitive rates — with the option to combine storage with your move."
      />
    </>
  );
}
