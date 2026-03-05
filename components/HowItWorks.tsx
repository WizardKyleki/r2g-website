import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Get Your Free Quote",
    description:
      "Tell us about your move online or call 1300 959 498. We service Cairns, Brisbane, Gold Coast, Sunshine Coast and all interstate routes.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Pack & Load",
    description:
      "Our professional removalists arrive on time, fully equipped. We carefully wrap, pack and load your belongings using proven techniques built over 10+ years.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Settle In With Ease",
    description:
      "We deliver and unload everything exactly where you want it. We won't leave until you're completely happy — that's the R2G guarantee.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          {/* Left: Steps content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">Simple Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">How Your Move Works</h2>
            <div className="flex mb-5">
              <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
                <path d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4" stroke="#F5C400" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Moving with R2G is simple. Here&apos;s how we make your Queensland or interstate move stress-free in 3 easy steps.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#F5C400] flex items-center justify-center text-[#1A1A1A] shadow-md">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center text-xs font-black">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Packing image */}
          <div className="relative h-[420px] lg:h-[540px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/r2g-professional-packing-service-cairns.webp"
              alt="R2G removalists packing and wrapping furniture Cairns QLD"
              sizes="(max-width: 768px) 100vw, 50vw"
              title="R2G Professional Packing Service Cairns"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
