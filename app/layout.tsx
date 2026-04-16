import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const AnimationObserver = dynamic(() => import("@/components/AnimationObserver"));
const MobileStickyBar = dynamic(() => import("@/components/MobileStickyBar"));
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"));
import SiteChrome from "@/components/SiteChrome";
import { SITE_NAME, DOMAIN } from "@/lib/constants";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/GoogleTagManager";
const DeferredScripts = dynamic(() => import("@/components/DeferredScripts"));

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
    default: "Removalists Cairns & Brisbane | R2G Transport & Storage",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "R2G Transport & Storage — trusted removalists in Cairns & Brisbane. Moving, packing & storage across Queensland. Fully insured. Get a free quote.",
  metadataBase: new URL(DOMAIN),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_AU",
    title: "Removalists Cairns & Brisbane | R2G Transport & Storage",
    description:
      "R2G Transport & Storage. Trusted removalists in Cairns & Brisbane. Moving, packing & storage across Queensland. Fully insured. Get a free quote.",
    url: DOMAIN,
    images: [
      {
        url: `${DOMAIN}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "R2G Transport & Storage - Trusted Removalists in Queensland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Removalists Cairns & Brisbane | R2G Transport & Storage",
    description:
      "R2G Transport & Storage. Trusted removalists in Cairns & Brisbane. Moving, packing & storage across Queensland. Fully insured.",
    images: [`${DOMAIN}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <GoogleAnalytics />
        <GoogleTagManagerHead />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="alternate" hrefLang="en-AU" href="https://www.r2g.com.au" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Detailed Information" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`} suppressHydrationWarning>
        <GoogleTagManagerBody />
        <DeferredScripts />
        <SiteChrome>
          <Header />
        </SiteChrome>
        <main>{children}</main>
        <SiteChrome>
          <Footer />
          <MobileStickyBar />
          <AnimationObserver />
          <ExitIntentPopup />
        </SiteChrome>
      </body>
    </html>
  );
}
