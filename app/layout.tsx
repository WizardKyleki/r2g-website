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
import { SITE_NAME, TAGLINE, DOMAIN } from "@/lib/constants";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/GoogleTagManager";
import MetaPixel from "@/components/MetaPixel";
import { Analytics } from '@vercel/analytics/next';

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
    icon: "/images/r2g-symbol.png",
    shortcut: "/images/r2g-symbol.png",
    apple: "/images/r2g-symbol.png",
  },
  description:
    "R2G Transport & Storage — trusted removalists in Cairns & Brisbane. Moving, packing & storage across Queensland. Fully insured. Get a free quote.",
  metadataBase: new URL(DOMAIN),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_AU",
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
      <head>
        <GoogleAnalytics />
        <GoogleTagManagerHead />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Detailed Information" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="URYFtNox7eR9I3W12rlXvA" async />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w27dnl2d8m");`}
        </Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`} suppressHydrationWarning>
        <GoogleTagManagerBody />
        <MetaPixel />
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
        <Analytics />
      </body>
    </html>
  );
}
