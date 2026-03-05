import Link from "next/link";
import Image from "next/image";

const services = [
  {
    href: "/removalists-cairns",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Home Removals",
    description:
      "Stress-free residential moves across Cairns, Brisbane, Gold Coast and Sunshine Coast. Our experienced team of removalists treat your belongings like their own.",
    features: ["All suburbs covered", "Furniture wrapping included", "Competitive rates"],
  },
  {
    href: "/office-removals",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Office Removals",
    description:
      "Efficient commercial and office relocations with minimal business disruption. We work weekends and after hours to keep your business moving.",
    features: ["Weekend availability", "IT equipment handled", "Full project planning"],
  },
  {
    href: "/interstate-removals-cairns",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Interstate Removals",
    description:
      "Door-to-door interstate removals from Cairns or Brisbane to anywhere in Australia. Fully insured, GPS tracked, and handled by our experienced team.",
    features: ["Door-to-door service", "Insured in transit", "Regular scheduled runs"],
  },
  {
    href: "/packing-services-cairns",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Packing Services",
    description:
      "Professional packing and wrapping services using quality materials. We pack everything from fragile items to full households — saving you time and stress.",
    features: ["All materials supplied", "Fragile specialists", "Full or partial service"],
  },
  {
    href: "/boxes",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Boxes",
    description:
      "Quality moving boxes and packing supplies delivered to your door. Everything you need to pack safely.",
    features: ["Various box sizes", "Bundle packages", "Delivered to your door"],
  },
  {
    href: "/storage",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Storage",
    description:
      "Secure, clean storage facilities in Cairns and Brisbane. Short and long-term options available.",
    features: ["Cairns & Brisbane depots", "Short & long term", "Secure & monitored"],
  },
];

interface ServicesGridProps {
  showHeading?: boolean;
}

export default function ServicesGrid({ showHeading = true }: ServicesGridProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading ? (
          /* ── Homepage: split layout — image left, content right ── */
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-14 items-stretch">

            {/* Left: Truck image */}
            <div className="relative min-h-[320px] lg:min-h-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/r2g-moving-boxes-packing-supplies-cairns.webp"
                alt="R2G moving boxes and packing supplies Cairns - professional removalist service"
                sizes="(max-width: 768px) 100vw, 50vw"
                title="R2G Transport and Storage - Moving Boxes and Packing Supplies Cairns"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Right: Heading + services grid */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">What We Do</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">Removalist Services Across Queensland &amp; Australia</h2>
              <div className="flex mb-4">
                <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
                  <path d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4" stroke="#F5C400" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                From a single bedroom unit to a full office relocation — R2G Transport &amp; Storage has been moving Queensland families and businesses for over 10 years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="relative group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#F5C400]/30 transition-all duration-300 flex flex-col"
                  >
                    <svg aria-hidden="true" className="absolute top-3 right-3 text-[#F5C400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 0 L16 0 L16 14"/>
                    </svg>
                    <div className="text-[#F5C400] mb-3 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-[#1A1A1A] text-base mb-2 group-hover:text-[#F5C400] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3">
                      {service.description}
                    </p>
                    <span className="text-[#F5C400] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* ── Other pages: simple centered grid ── */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="relative group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#F5C400]/30 transition-all duration-300 flex flex-col"
              >
                <svg aria-hidden="true" className="absolute top-3 right-3 text-[#F5C400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 0 L16 0 L16 14"/>
                </svg>
                <div className="text-[#F5C400] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-3 group-hover:text-[#F5C400] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="text-[#F5C400] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
