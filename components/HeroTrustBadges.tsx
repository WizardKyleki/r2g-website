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

export default function HeroTrustBadges() {
  return (
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
  );
}
