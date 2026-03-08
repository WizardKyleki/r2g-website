import Link from "next/link";
import { getSuburbHref } from "@/data/suburbs";
import { getBrisbaneSuburbHref } from "@/data/brisbane-suburbs";
import { getGoldCoastSuburbHref } from "@/data/gold-coast-suburbs";
import { getSunshineCoastSuburbHref } from "@/data/sunshine-coast-suburbs";

const areaGroups = [
  {
    region: "Far North Queensland",
    areas: [
      "Cairns City", "Smithfield", "Trinity Beach", "Palm Cove",
      "Edmonton", "Gordonvale", "Innisfail", "Port Douglas",
      "Atherton", "Mareeba",
    ],
  },
  {
    region: "Brisbane & Surrounds",
    areas: [
      "Brisbane CBD", "Archerfield", "Ipswich", "Logan",
      "Redlands", "Redcliffe", "Caboolture", "Springfield",
    ],
  },
  {
    region: "Gold Coast",
    areas: [
      "Surfers Paradise", "Broadbeach", "Robina",
      "Coomera", "Southport", "Coolangatta",
    ],
  },
  {
    region: "Sunshine Coast",
    areas: [
      "Noosa Heads", "Maroochydore", "Caloundra",
      "Nambour", "Kawana Waters",
    ],
  },
  {
    region: "Interstate",
    areas: ["Sydney", "Melbourne", "Adelaide", "Darwin", "Perth"],
  },
];

const interstateSlugs: Record<string, string> = {
  Sydney: "/interstate-removalists/sydney",
  Melbourne: "/interstate-removalists/melbourne",
};

const pillClasses =
  "flex items-center gap-2 bg-white/5 hover:bg-[#F5C400]/10 border border-white/10 hover:border-[#F5C400]/30 rounded-lg px-3 py-2.5 transition-colors";

function SuburbPill({ area }: { area: string }) {
  const href =
    getSuburbHref(area) ??
    getBrisbaneSuburbHref(area) ??
    getGoldCoastSuburbHref(area) ??
    getSunshineCoastSuburbHref(area) ??
    interstateSlugs[area];
  const inner = (
    <>
      <svg className="w-3 h-3 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-gray-300 text-sm">{area}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} title={`Removalists ${area} - R2G Transport & Storage`} className={pillClasses}>
        {inner}
      </Link>
    );
  }

  return <div className={pillClasses}>{inner}</div>;
}

export default function ServiceAreas() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#1A1A1A]">
      {/* Sparkle decorations */}
      <svg aria-hidden="true" className="absolute top-8 left-8 text-[#F5C400] opacity-[0.15]" width="14" height="14" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
      <svg aria-hidden="true" className="absolute top-14 right-10 text-[#F5C400] opacity-[0.10]" width="10" height="10" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
      <svg aria-hidden="true" className="absolute bottom-10 left-1/3 text-[#F5C400] opacity-[0.12]" width="12" height="12" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
      <svg aria-hidden="true" className="absolute bottom-14 right-8 text-[#F5C400] opacity-[0.08]" width="8" height="8" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F5C400]" />
            <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Coverage</span>
            <div className="w-10 h-1 bg-[#F5C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Removalists Servicing All of Queensland &amp; Beyond
          </h2>
          <div className="flex justify-center mb-4">
            <svg aria-hidden="true" width="100" height="8" viewBox="0 0 100 8" fill="none">
              <path d="M0 4 Q12.5 0 25 4 Q37.5 8 50 4 Q62.5 0 75 4 Q87.5 8 100 4" stroke="#F5C400" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            R2G Transport &amp; Storage operates across Queensland with local teams in Cairns and Brisbane, servicing all surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {areaGroups.map((group) => (
            <div key={group.region}>
              <h3 className="text-[#F5C400] font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {group.region}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {group.areas.map((area) => (
                  <SuburbPill key={area} area={area} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm">
          Don&apos;t see your area?{" "}
          <a href="tel:1300959498" className="text-[#F5C400] hover:underline font-medium">
            Call 1300 959 498
          </a>{" "}
          — we likely cover it.
        </p>
      </div>
    </section>
  );
}
