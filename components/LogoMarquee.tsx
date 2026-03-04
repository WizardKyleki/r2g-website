const companies = [
  "Woolworths",
  "JCU",
  "Cairns Hospital",
  "Ergon Energy",
  "Queensland Rail",
  "Toll Group",
  "Australia Post",
  "Cairns Council",
];

export default function LogoMarquee() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          Businesses We&apos;ve Moved
        </p>
      </div>
      <div className="relative">
        <div
          className="flex w-max gap-16 px-8"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {[...companies, ...companies].map((name, i) => (
            <span
              key={i}
              className="text-2xl font-bold text-gray-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
