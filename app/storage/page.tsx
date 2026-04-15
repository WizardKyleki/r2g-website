import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Storage Solutions Queensland | Cairns & Brisbane | R2G",
  description:
    "Secure short and long-term storage in Cairns and Brisbane. Clean, monitored facilities with flexible terms. Perfect between moves, renovations, or downsizing.",
  alternates: { canonical: "https://www.r2g.com.au/storage" },
  openGraph: {
    title: "Storage Solutions Queensland | Cairns & Brisbane | R2G",
    description:
      "Secure short and long-term storage in Cairns and Brisbane. Clean, monitored facilities with flexible terms.",
    url: "https://www.r2g.com.au/storage",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.r2g.com.au" },
    { "@type": "ListItem", position: 2, name: "Storage", item: "https://www.r2g.com.au/storage" },
  ],
};

const locations = [
  {
    href: "/storage-cairns",
    city: "Storage Cairns",
    description:
      "Secure, climate-considered storage in Cairns. Ideal for moves, renovations, or periods between leases in Tropical North Queensland.",
    features: ["24/7 CCTV monitored", "Flexible weekly or monthly terms", "Combined move-and-store packages"],
  },
  {
    href: "/storage-brisbane",
    city: "Storage Brisbane",
    description:
      "Short and long-term storage options across Brisbane. Convenient depot location with easy access and no lock-in contracts.",
    features: ["Clean, dry, secure units", "Short and long-term options", "Integrated with your move"],
  },
];

export default function StoragePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#1A1A1A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#F5C400]" />
            <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">Storage Services</span>
            <div className="w-10 h-0.5 bg-[#F5C400]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Storage Solutions in Queensland
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Secure, clean storage facilities in Cairns and Brisbane. Flexible short and long-term options with no lock-in contracts. Whether you need a few weeks between leases or months during a renovation, we have you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Location Cards */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1A1A1A] mb-3">Choose Your Location</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              We operate storage depots in Cairns and Brisbane. Select your city for local pricing, unit sizes, and availability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#F5C400]/40 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-black text-[#1A1A1A] mb-3 group-hover:text-[#F5C400] transition-colors">
                  {loc.city}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{loc.description}</p>
                <ul className="space-y-2 mb-6">
                  {loc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="text-[#F5C400] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View {loc.city} options
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why use storage */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1A1A1A] mb-3">When Does Storage Make Sense?</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Storage solves the timing problems that come with moving. Here are the most common situations where our customers use it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Gap between leases", desc: "Your old lease ends before your new one starts. Store your belongings safely rather than rushing a double move." },
              { title: "Settlement delays", desc: "Property settlements rarely run on time. A storage buffer means your move can proceed without pressure." },
              { title: "Renovations", desc: "Clear out rooms during a renovation without getting rid of things you want to keep." },
              { title: "Downsizing", desc: "Moving to a smaller place? Use storage to hold items while you decide what stays, sells, or goes to family." },
              { title: "Interstate moves", desc: "Moving from Cairns to Brisbane or vice versa? Store at the destination until your new home is ready." },
              { title: "Seasonal storage", desc: "Business equipment, outdoor furniture, or items you only use part of the year. Free up space at home." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1A1A1A] text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
