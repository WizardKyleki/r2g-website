import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const AnimationObserver = dynamic(() => import("@/components/AnimationObserver"));
const MobileStickyBar = dynamic(() => import("@/components/MobileStickyBar"));
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"));
import { SITE_NAME, TAGLINE, DOMAIN, EMAIL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | R2G Transport & Storage",
    default: "R2G Transport & Storage — Cairns & Brisbane Removalists",
  },
  icons: {
    icon: "/images/r2g-symbol.png",
    shortcut: "/images/r2g-symbol.png",
    apple: "/images/r2g-symbol.png",
  },
  description:
    "R2G Transport & Storage — Cairns' most trusted removalists. Professional moving, packing, and storage services across Cairns, Brisbane, and all of Australia. Fully insured. Get a free quote today.",
  metadataBase: new URL(DOMAIN),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${SITE_NAME} — ${TAGLINE}` }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: SITE_NAME,
  description: TAGLINE,
  url: DOMAIN,
  telephone: "+611300959498",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 Abbott St",
    addressLocality: "Cairns City",
    addressRegion: "QLD",
    postalCode: "4870",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -16.9186,
    longitude: 145.7781,
  },
  areaServed: [
    "Cairns",
    "Far North Queensland",
    "Townsville",
    "Brisbane",
    "Gold Coast",
    "Sunshine Coast",
    "Australia",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "900",
    bestRating: "5",
  },
  sameAs: [
    "https://www.facebook.com/r2gtransport",
    "https://www.instagram.com/r2gtransport",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
        <AnimationObserver />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
