import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Moving Quote | R2G",
  description:
    "Get a free, no-obligation moving quote. Instant online estimates for local, interstate & office moves across Queensland.",
  alternates: { canonical: "https://www.r2g.com.au/quote" },
  openGraph: {
    title: "Free Moving Quote | R2G",
    description:
      "Get a free, no-obligation moving quote. Instant online estimates for local, interstate & office moves across Queensland.",
    url: "https://www.r2g.com.au/quote",
  },
};

const quoteSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Get a free, no-obligation moving quote for local, interstate, and office relocations across Cairns, Brisbane, Gold Coast and Sunshine Coast.",
  telephone: "1300 959 498",
  url: "https://www.r2g.com.au",
  areaServed: ["Cairns", "Brisbane", "Gold Coast", "Sunshine Coast", "Queensland", "Australia"],
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quoteSchema) }}
      />
      {children}
    </>
  );
}
