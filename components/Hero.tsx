import dynamic from "next/dynamic";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const HeroQuoteWidget = dynamic(() => import("@/components/HeroQuoteWidget"), {
  loading: () => (
    <div className="w-full h-[280px] bg-white/5 rounded-2xl animate-pulse" />
  ),
});

const badges = [
  {
    label: "Fully Insured",
    desc: "Public liability & goods in transit",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "5-Star Rated",
    desc: "900+ verified Google reviews",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: "10+ Years Experience",
    desc: "Trusted across QLD",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative bg-[#1A1A1A] min-h-screen flex items-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1A1A1A] to-[#252525]" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F5C400]/8 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#F5C400]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#F5C400]/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, #F5C400 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Sparkle accents */}
        <svg aria-hidden="true" className="absolute top-[13%] left-[4%] text-[#F5C400] opacity-[0.22]" width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
        <svg aria-hidden="true" className="absolute top-[52%] left-[2%] text-[#F5C400] opacity-[0.12]" width="10" height="10" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
        <svg aria-hidden="true" className="absolute top-[74%] left-[22%] text-[#F5C400] opacity-[0.15]" width="12" height="12" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
        <svg aria-hidden="true" className="absolute top-[30%] left-[46%] text-[#F5C400] opacity-[0.09]" width="8" height="8" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
        <svg aria-hidden="true" className="absolute top-[18%] right-[3%] text-[#F5C400] opacity-[0.14]" width="20" height="20" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
        <svg aria-hidden="true" className="absolute top-[62%] right-[6%] text-[#F5C400] opacity-[0.08]" width="14" height="14" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>

      </div>

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Headline + subtext + phone + badges ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                Cairns &amp; Far North Queensland
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6">
              Cairns &amp; Brisbane&apos;s Most{" "}
              <span className="text-[#F5C400]">Trusted</span>{" "}
              Removalists
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              With 10+ years experience moving families and businesses across Cairns, Brisbane, Gold Coast, Sunshine Coast and all of Australia — R2G Transport &amp; Storage delivers stress-free moves every time. Fully insured. No hidden fees. Locally owned.
            </p>

            {/* Quote widget — mobile only (sits between text and phone) */}
            <div className="lg:hidden mb-8">
              <HeroQuoteWidget />
            </div>

            {/* Phone CTA */}
            <div className="mb-8">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 border-2 border-white/25 hover:border-[#F5C400] text-white hover:text-[#F5C400] font-bold px-7 py-3.5 rounded-lg text-base transition-all"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Prefer to call? {PHONE}
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                >
                  <div className="text-[#F5C400] shrink-0">{b.icon}</div>
                  <div>
                    <p className="text-white font-semibold text-xs leading-tight">{b.label}</p>
                    <p className="text-gray-500 text-[11px] mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Quote widget — desktop only ── */}
          <div className="hidden lg:flex flex-col justify-center">
            {/* Subtle label above widget */}
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3 pl-1">
              Get an instant quote
            </p>
            <HeroQuoteWidget />
          </div>

        </div>
      </div>

      {/* ── Bottom diagonal into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }}
      />
    </section>
  );
}
