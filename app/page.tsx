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
import { HOME_FAQS, RATING_VALUE, REVIEW_COUNT, REVIEW_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "R2G Removalists | Local & Interstate | Reliable & Affordable" },
  description:
    `Make the right move with R2G — 10+ years experience, ${REVIEW_DISPLAY} five-star reviews, fully insured. Local & interstate removalists. Get a free quote now.`,
  keywords: ["removalists cairns", "removalists brisbane", "removalists gold coast", "removalists sunshine coast", "interstate removalists", "r2g transport and storage", "cairns removalists", "brisbane removalists"],
  alternates: { canonical: "https://www.r2g.com.au" },
  openGraph: {
    title: "Removalists Cairns & Brisbane | R2G Transport & Storage",
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
  telephone: "1300 959 498",
  email: "contact@r2g.com.au",
  image: "https://www.r2g.com.au/images/r2g-logo.png",
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
  location: [
    {
      "@type": "Place",
      name: "R2G Transport & Storage — Cairns",
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
      telephone: "1300 959 498",
    },
    {
      "@type": "Place",
      name: "R2G Transport & Storage — Brisbane",
      address: {
        "@type": "PostalAddress",
        streetAddress: "122 Ashover Circuit",
        addressLocality: "Archerfield",
        addressRegion: "QLD",
        postalCode: "4108",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -27.5665,
        longitude: 153.0085,
      },
      telephone: "1300 959 498",
    },
  ],
  areaServed: [
    "Cairns",
    "Far North Queensland",
    "Townsville",
    "Brisbane",
    "Gold Coast",
    "Sunshine Coast",
    "Australia",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING_VALUE,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
  },
  sameAs: [
    "https://www.facebook.com/r2gtransport",
    "https://www.instagram.com/r2gtransport",
    "https://www.google.com/maps?cid=11773202456138120338",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
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
