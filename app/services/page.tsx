import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE_HREF, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Moving Services Cairns & Brisbane",
  description:
    "Full range of moving services — local removals, interstate moves, office relocations & professional packing. Get a free quote today.",
  alternates: { canonical: "https://www.r2g.com.au/services" },
  openGraph: {
    title: "Moving Services Cairns & Brisbane | R2G Transport & Storage",
    description: "Complete moving services in Cairns: local, interstate, office, and packing. Get a free quote today.",
    url: "https://www.r2g.com.au/services",
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
  ],
};

const services = [
  {
    href: "/removalists-cairns",
    title: "Removalists Cairns",
    subtitle: "Local House & Unit Moves",
    description:
      "Moving within Cairns? Our local removalists are experts in navigating every suburb, street, and staircase in the region. We make local moves fast, efficient, and completely stress-free.",
    features: [
      "All Cairns suburbs covered",
      "Single items to full households",
      "Careful furniture wrapping & protection",
      "Competitive hourly or fixed rates",
      "Experienced, friendly team",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: "/interstate-removalists",
    title: "Interstate Removals",
    subtitle: "Long-Distance Moving from Cairns",
    description:
      "Moving interstate from Cairns? We handle the entire journey — from packing up your Cairns home to delivering safely at your new destination anywhere in Australia.",
    features: [
      "Door-to-door interstate service",
      "Regular runs to Brisbane & south",
      "Fully insured goods in transit",
      "Shared & exclusive load options",
      "Detailed tracking & communication",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    href: "/office-removalists",
    title: "Office Removalists",
    subtitle: "Commercial & Business Relocations",
    description:
      "Business moves require precision planning. We work around your schedule — including weekends — to ensure your office relocation is seamless with minimal disruption to your operations.",
    features: [
      "After-hours & weekend availability",
      "Safe handling of IT equipment",
      "Furniture disassembly & reassembly",
      "Full project planning support",
      "Minimal business downtime",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    href: "/packing-services-brisbane",
    title: "Packing Services",
    subtitle: "Professional Packing & Unpacking",
    description:
      "Let our professional packers take the stress out of packing. We use premium materials to protect every item — from fragile glassware to large appliances.",
    features: [
      "Full or partial packing service",
      "Premium packing materials supplied",
      "Fragile item specialists",
      "Secure labelling & inventory",
      "Unpacking service available",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Full range of moving services including local removals, interstate moves, office relocations, and professional packing in Cairns and Brisbane.",
  telephone: "1300 959 498",
  url: "https://www.r2g.com.au",
  areaServed: ["Cairns", "Brisbane", "Gold Coast", "Sunshine Coast"],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <PageHero
        title="Our Moving Services"
        subtitle="From local house moves to interstate relocations — R2G Transport & Storage has a service to suit every move in Cairns."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.href}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[#F5C400] mb-5">{service.icon}</div>
                  <p className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest mb-2">{service.subtitle}</p>
                  <h2 className="text-3xl font-black text-[#1A1A1A] mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={service.href}
                      className="bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/quote"
                      className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:border-[#F5C400] hover:text-[#F5C400] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className={`bg-gray-50 rounded-2xl p-12 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-center">
                    <div className="text-[#F5C400] flex justify-center mb-4 opacity-20 scale-150">{service.icon}</div>
                    <p className="text-gray-400 text-sm">
                      <a href={PHONE_HREF} className="text-[#F5C400] font-semibold hover:underline">{PHONE}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
