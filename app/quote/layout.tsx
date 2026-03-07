import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Moving Quote | R2G Transport & Storage",
  description:
    "Get a free, no-obligation moving quote from R2G Transport & Storage. Instant online quotes for local, interstate, and office relocations across Cairns and Brisbane.",
  alternates: { canonical: "https://www.r2g.com.au/quote" },
  openGraph: {
    title: "Get a Free Moving Quote | R2G Transport & Storage",
    description:
      "Get a free, no-obligation moving quote. Local, interstate, and office relocations across Cairns and Brisbane.",
    url: "https://www.r2g.com.au/quote",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
