import Image from "next/image";

const logos = [
  { src: "/logos/acu.png", alt: "ACU" },
  { src: "/logos/alliance_airlines.png", alt: "Alliance Airlines" },
  { src: "/logos/allianz.png", alt: "Allianz" },
  { src: "/logos/ambulance_qld.png", alt: "Ambulance Queensland" },
  { src: "/logos/aurizon.png", alt: "Aurizon" },
  { src: "/logos/beam.png", alt: "Beam" },
  { src: "/logos/ndis.png", alt: "NDIS" },
  { src: "/logos/nsw_police.png", alt: "NSW Police" },
  { src: "/logos/qld_gov.png", alt: "Queensland Government" },
  { src: "/logos/qld_police.png", alt: "Queensland Police" },
  { src: "/logos/qut.png", alt: "QUT" },
  { src: "/logos/uq.png", alt: "UQ" },
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
          Queensland&apos;s Most Trusted Organisations Choose R2G
        </p>
      </div>
      <div className="relative">
        <div
          className="flex w-max items-center gap-16 px-8"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
