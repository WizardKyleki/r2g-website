import { RATING_VALUE, REVIEW_DISPLAY } from "@/lib/constants";

const badges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Fully Insured",
    description: "Comprehensive public liability & goods-in-transit insurance on every move",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "10+ Years Experience",
    description: "Trusted by hundreds of families and businesses across Australia",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "5-Star Rated",
    description: `${RATING_VALUE} stars across ${REVIEW_DISPLAY} verified Google reviews`,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Cairns & Brisbane",
    description: "Two depots — Cairns City and Archerfield, Brisbane",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors group"
            >
              {/* Corner triangle accent on hover */}
              <svg aria-hidden="true" className="absolute top-0 right-0 text-[#F5C400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
                <path d="M0 0 L36 0 L36 36 Z" opacity="0.18"/>
              </svg>
              <div className="text-[#F5C400] mb-4 group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <p className="font-bold text-[#1A1A1A] text-lg mb-2">{badge.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
