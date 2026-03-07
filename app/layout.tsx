import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const AnimationObserver = dynamic(() => import("@/components/AnimationObserver"));
const MobileStickyBar = dynamic(() => import("@/components/MobileStickyBar"));
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"));
import { SITE_NAME, TAGLINE, DOMAIN } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head />
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
