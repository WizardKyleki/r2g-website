import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
const LogoMarquee = dynamic(() => import("@/components/LogoMarquee"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"));
const WhyChooseR2G = dynamic(() => import("@/components/WhyChooseR2G"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));
const ServiceAreas = dynamic(() => import("@/components/ServiceAreas"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { HOME_FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "R2G Transport & Storage | Removalists Cairns, Brisbane, Gold Coast & Sunshine Coast",
  description:
    "R2G Transport & Storage — trusted removalists across Cairns, Brisbane, Gold Coast and Sunshine Coast. 10+ years experience in residential, interstate and office removals. Fully insured. Get a free quote today.",
  keywords: ["removalists cairns", "removalists brisbane", "removalists gold coast", "removalists sunshine coast", "interstate removalists", "r2g transport and storage", "cairns removalists", "brisbane removalists"],
  alternates: { canonical: "https://www.r2g.com.au" },
  openGraph: {
    title: "R2G Transport & Storage | Removalists Cairns, Brisbane, Gold Coast & Sunshine Coast",
    description: "10+ years experience moving families and businesses across Queensland and Australia. Fully insured, no hidden fees. Get a free quote today.",
    url: "https://www.r2g.com.au",
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "R2G Transport & Storage",
  description:
    "Trusted removalists across Cairns, Brisbane, Gold Coast and Sunshine Coast. 10+ years experience in residential, interstate and office removals.",
  url: "https://www.r2g.com.au",
  telephone: "+611300959498",
  email: "contact@r2g.com.au",
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
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
