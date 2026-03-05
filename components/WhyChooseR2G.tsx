import Image from "next/image";

const reasons = [
  {
    title: "10+ Years Experience",
    description:
      "With over a decade in the removals industry, our team has handled thousands of moves across Queensland and interstate. Experience you can rely on.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Fully Insured",
    description:
      "Complete peace of mind with full public liability and goods in transit insurance on every move. Your belongings are protected from pickup to delivery.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "No Hidden Fees",
    description:
      "Transparent, upfront pricing with no surprises on moving day. We provide detailed quotes so you know exactly what you're paying.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Queensland Locals",
    description:
      "Locally owned and operated with teams based in Cairns and Brisbane. We know Queensland — the streets, the suburbs, and the people.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseR2G() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">

          {/* Left: Team image */}
          <div className="relative h-[420px] lg:h-[580px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/r2g-removalists-cairns-team.webp"
              alt="Professional R2G removalist team Cairns QLD - trusted local removalists"
              sizes="(max-width: 768px) 100vw, 50vw"
              title="R2G Removalists Cairns - Trusted Local Moving Team"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">Why R2G</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
              Why Queensland Businesses &amp; Families Trust R2G
            </h2>
            <div className="flex mb-5">
              <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
                <path d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4" stroke="#F5C400" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              For over 10 years, R2G Transport &amp; Storage has been the trusted removalist choice across Cairns, Brisbane, Gold Coast and Sunshine Coast.
            </p>

            <div className="space-y-7">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#F5C400] rounded-xl flex items-center justify-center text-[#1A1A1A] shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{reason.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
