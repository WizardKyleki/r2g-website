import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import TrustBadges from "@/components/TrustBadges";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseR2G from "@/components/WhyChooseR2G";
import HowItWorks from "@/components/HowItWorks";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { HOME_FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "R2G Transport & Storage | Removalists Cairns, Brisbane, Gold Coast & Sunshine Coast",
  description:
    "R2G Transport & Storage — trusted removalists across Cairns, Brisbane, Gold Coast and Sunshine Coast. 10+ years experience in residential, interstate and office removals. Fully insured. Get a free quote today.",
  keywords: ["removalists cairns", "removalists brisbane", "removalists gold coast", "removalists sunshine coast", "interstate removalists", "r2g transport and storage", "cairns removalists", "brisbane removalists"],
  alternates: { canonical: "https://r2g.com.au" },
  openGraph: {
    title: "R2G Transport & Storage | Removalists Cairns, Brisbane, Gold Coast & Sunshine Coast",
    description: "10+ years experience moving families and businesses across Queensland and Australia. Fully insured, no hidden fees. Get a free quote today.",
    url: "https://r2g.com.au",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <p className="sr-only">R2G Transport &amp; Storage are professional removalists servicing Cairns, Brisbane, Gold Coast and Sunshine Coast. With over 10 years experience in residential removals, office relocations, interstate removals and packing services across Queensland and Australia.</p>
      <LogoMarquee />
      <TrustBadges />
      <ServicesGrid />
      <WhyChooseR2G />
      <HowItWorks />
      <GoogleReviews />
      <ServiceAreas />
      <FAQ items={HOME_FAQS} heading="Frequently Asked Questions" />
      <CTABanner />
    </>
  );
}
