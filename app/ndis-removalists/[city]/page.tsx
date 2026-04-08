import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));

import {
  PHONE,
  PHONE_HREF,
  RATING_VALUE,
  REVIEW_COUNT,
} from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// CITY DATA
// ─────────────────────────────────────────────────────────────────────────────
interface CityData {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
  };
  suburbs: string[];
  localRemovalistHref: string;
  storageHref: string | null;
  intro: string[];
  faqs: { question: string; answer: string }[];
}

const cityData: CityData[] = [
  // ── CAIRNS ──────────────────────────────────────────────────────────────
  {
    name: "Cairns",
    slug: "cairns",
    metaTitle: "NDIS Removalists Cairns | Plan-Funded Moving Services",
    metaDescription:
      "NDIS removalists in Cairns for Far North Queensland relocations. Fully insured, plan-funded, NDIS-compliant invoicing. Free quote.",
    address: {
      streetAddress: "36 Abbott St",
      addressLocality: "Cairns City",
      postalCode: "4870",
    },
    suburbs: [
      "Cairns CBD",
      "Smithfield",
      "Trinity Beach",
      "Edmonton",
      "Gordonvale",
      "Manoora",
      "Whitfield",
      "Earlville",
    ],
    localRemovalistHref: "/removalists-cairns",
    storageHref: "/storage-cairns",
    intro: [
      "Cairns presents unique challenges for NDIS participants who need to move. Many homes in Far North Queensland are built on stilts to manage flooding and airflow, which requires careful planning when relocating mobility equipment, hospital beds, and heavy medical devices. R2G Transport and Storage has years of experience navigating these raised properties safely and efficiently.",
      "Our Cairns NDIS removalist team works closely with local disability support organisations including the Cairns NDIS office on Grafton Street,Abled Australia, and CPL (Choice, Passion, Life) in the region. We coordinate with your support coordinator or plan manager to arrange pre-approval, schedule around therapy sessions at the Cairns Hospital rehabilitation unit, and ensure NDIS-compliant invoicing for every job.",
      "Whether you are moving to more accessible housing in Smithfield, relocating closer to specialist services in Cairns CBD, or transitioning from supported accommodation in Edmonton, our team delivers patient and professional service. We understand the tropical climate can complicate moving schedules, especially during the wet season from November to April, and we plan around weather disruptions so your move stays on track.",
    ],
    faqs: [
      {
        question: "Where is the NDIS office in Cairns?",
        answer:
          "The Cairns NDIS office is located on Grafton Street in Cairns CBD. You can also access NDIS support through local partners includingAbled Australia on Mulgrave Road, CPL in Cairns, and the Partners in the Community program run through Uniting Care. Your support coordinator can help arrange a face-to-face planning meeting at any of these locations.",
      },
      {
        question: "Can you move stilt houses in Cairns for NDIS participants?",
        answer:
          "Yes. Many Cairns homes are built on stilts, which creates additional challenges when moving heavy items like hospital beds, hoists, and powered wheelchairs. Our team uses specialist equipment including ramps and hydraulic lifts to safely navigate raised properties. We inspect the property before moving day to plan the safest route for every item.",
      },
      {
        question: "Do you move NDIS participants during cyclone season?",
        answer:
          "We operate year-round in Cairns, including during the wet season from November to April. If a severe weather warning is issued, we will reschedule at no extra cost to keep everyone safe. We recommend booking NDIS moves during the dry season (May to October) when possible, but understand that housing transitions cannot always wait.",
      },
      {
        question: "What Cairns suburbs do you cover for NDIS moves?",
        answer:
          "We cover all suburbs across the Cairns region including Cairns CBD, Smithfield, Trinity Beach, Edmonton, Gordonvale, Manoora, Whitfield, Earlville, Brinsmead, Kanimbla, Woree, Bayview Heights, and surrounding Far North Queensland communities. We also handle NDIS moves between Cairns and Townsville or Brisbane.",
      },
      {
        question: "Can you move a participant from Cairns to Brisbane under NDIS?",
        answer:
          "Yes. Interstate NDIS relocations between Cairns and Brisbane are one of our most common routes. We provide door-to-door service with full insurance covering mobility aids and medical equipment for the entire journey. We coordinate with plan managers in both cities to ensure a smooth funding transition.",
      },
      {
        question: "How much does an NDIS move cost in Cairns?",
        answer:
          "Local NDIS moves in Cairns typically start from $170 to $189 per hour for a 2-person team and truck. The total cost depends on your home size, accessibility requirements, the amount of medical equipment, and any packing services needed. We provide a detailed written quote that your plan manager can use for pre-approval.",
      },
    ],
  },

  // ── BRISBANE ────────────────────────────────────────────────────────────
  {
    name: "Brisbane",
    slug: "brisbane",
    metaTitle: "NDIS Removalists Brisbane | Plan-Funded Moving Services",
    metaDescription:
      "NDIS removalists in Brisbane offering plan-funded moving services for participants. High-rise specialists, fully insured, NDIS-compliant invoicing. Free quote.",
    address: {
      streetAddress: "122 Ashover Circuit",
      addressLocality: "Archerfield",
      postalCode: "4108",
    },
    suburbs: [
      "Brisbane CBD",
      "Chermside",
      "Sunnybank",
      "Carindale",
      "Indooroopilly",
      "Logan",
      "Springfield",
      "Redcliffe",
    ],
    localRemovalistHref: "/removalists-brisbane",
    storageHref: "/storage-brisbane",
    intro: [
      "Brisbane is home to the largest concentration of NDIS participants in Queensland, and R2G Transport and Storage is the trusted choice for plan-funded removals across the city. Our Archerfield-based team understands the specific challenges of moving in Brisbane, from navigating high-rise apartment buildings with restricted lift access to working within tight CBD loading zones that require careful scheduling.",
      "We work directly with Brisbane-based NDIS plan managers, support coordinators, and organisations including Montrose Therapy and Respite Services, Multicap, and Endeavour Foundation. Our team liaises with the Brisbane NDIS office in the CBD and local Partners in the Community providers to ensure every move is properly funded and approved before moving day.",
      "Whether your participant is transitioning from a group home to independent living in Springfield, downsizing to accessible housing in Chermside, or moving closer to specialist disability services at the Princess Alexandra Hospital, we handle every detail. Brisbane traffic and parking restrictions can complicate moving logistics, so we plan routes and timing carefully to keep your move efficient and stress-free.",
    ],
    faqs: [
      {
        question: "Where is the NDIS office in Brisbane?",
        answer:
          "The Brisbane NDIS office is located in the CBD. You can also access support through local Partners in the Community providers including Carers Queensland, which operates multiple offices across Brisbane. Your support coordinator can arrange planning meetings and help confirm that your removalist costs are covered under your current plan.",
      },
      {
        question: "Can you handle high-rise NDIS moves in Brisbane?",
        answer:
          "Yes. Many NDIS participants in Brisbane live in apartment complexes with lift restrictions, narrow corridors, and loading dock booking requirements. We manage all building logistics including pre-booking service lifts, arranging loading zone permits, and protecting common areas during the move. We have experience in most major residential buildings across Brisbane.",
      },
      {
        question: "Do you work with Brisbane disability support organisations?",
        answer:
          "Yes. We work regularly with Multicap, Montrose Therapy and Respite Services, Endeavour Foundation, CPL, Carers Queensland, and other Brisbane-based disability service providers. We coordinate with support workers and therapists to ensure equipment is set up correctly at the new property.",
      },
      {
        question: "What Brisbane suburbs do you cover for NDIS removals?",
        answer:
          "We cover over 420 suburbs across Brisbane and the surrounding region including Brisbane CBD, Chermside, Sunnybank, Carindale, Indooroopilly, Logan, Springfield, Redcliffe, Ipswich, Caboolture, and all areas in between. Our Archerfield depot gives us fast access to every part of greater Brisbane.",
      },
      {
        question: "Can NDIS funding cover storage in Brisbane?",
        answer:
          "In some cases, yes. If there is a gap between your move-out and move-in dates and the storage is directly related to your disability-funded relocation, it may be covered under your NDIS plan. R2G offers secure, accessible storage at our Archerfield facility that can be included in your NDIS moving quote.",
      },
      {
        question: "How quickly can you arrange an NDIS move in Brisbane?",
        answer:
          "We recommend 2-3 weeks notice for NDIS moves to allow time for plan manager pre-approval. However, we understand that housing situations can change quickly. If you need an urgent NDIS relocation in Brisbane, call us on 1300 959 498 and we will do our best to accommodate your timeline.",
      },
    ],
  },

  // ── GOLD COAST ──────────────────────────────────────────────────────────
  {
    name: "Gold Coast",
    slug: "gold-coast",
    metaTitle: "NDIS Removalists Gold Coast | Plan-Funded Moving Services",
    metaDescription:
      "NDIS removalists on the Gold Coast providing plan-funded moving services. Beachfront apartment specialists, fully insured, NDIS-compliant invoicing. Free quote.",
    address: {
      streetAddress: "122 Ashover Circuit",
      addressLocality: "Archerfield",
      postalCode: "4108",
    },
    suburbs: [
      "Southport",
      "Robina",
      "Burleigh Heads",
      "Nerang",
      "Coomera",
      "Helensvale",
      "Palm Beach",
      "Coolangatta",
    ],
    localRemovalistHref: "/removalists-gold-coast",
    storageHref: null,
    intro: [
      "The Gold Coast has a growing NDIS participant community, and many people with disabilities are choosing to relocate to more accessible housing across the region. R2G Transport and Storage provides professional NDIS removalist services tailored to the unique challenges of moving on the Gold Coast, including navigating beachfront apartment complexes, high-rise buildings with limited lift access, and properties with steep driveways in the hinterland suburbs.",
      "Our team works with Gold Coast NDIS providers including the local Partners in the Community program, Beacon Support, and Life Without Barriers. We coordinate with the Southport NDIS office and local plan managers to arrange pre-approval and handle all invoicing. Gold Coast participants can also access support through the Disability Services office in Southport, which assists with housing transitions and relocation planning.",
      "Whether you are moving from a hinterland property in Nerang to accessible ground-floor housing in Robina, transitioning to supported independent living in Coomera, or relocating closer to Gold Coast University Hospital for specialist treatment, our team provides careful and patient service. We understand that beachfront and canal-front properties often have narrow access points and salt-air exposure that requires extra care when handling medical equipment.",
    ],
    faqs: [
      {
        question: "Where is the NDIS office on the Gold Coast?",
        answer:
          "The Gold Coast NDIS office is located in Southport. You can also access support through local Partners in the Community providers and organisations like Beacon Support and Life Without Barriers who operate across the Gold Coast. Your support coordinator can help arrange pre-approval for removalist services under your current plan.",
      },
      {
        question: "Can you move beachfront apartments on the Gold Coast?",
        answer:
          "Yes. Many Gold Coast NDIS participants live in beachfront or high-rise apartment buildings. We handle all building logistics including service lift bookings, loading dock scheduling, and common area protection. Our team is experienced with the tight access points and salt-environment considerations common in coastal Gold Coast properties.",
      },
      {
        question: "Do you cover Gold Coast hinterland suburbs for NDIS moves?",
        answer:
          "Yes. We service the entire Gold Coast region from Ormeau and Coomera in the north to Coolangatta in the south, including hinterland suburbs such as Nerang, Mudgeeraba, and Tamborine Mountain. Hinterland properties often have steep driveways and limited access, and our team plans for these challenges in advance.",
      },
      {
        question: "Can you move an NDIS participant from the Gold Coast to Brisbane?",
        answer:
          "Yes. Gold Coast to Brisbane is a short-distance move that we handle regularly for NDIS participants. The journey takes under two hours and we provide full insurance for mobility aids and medical equipment. We coordinate with plan managers in both cities if your plan management is changing as part of the relocation.",
      },
      {
        question: "What NDIS disability services are available on the Gold Coast?",
        answer:
          "The Gold Coast has a strong network of NDIS providers including Beacon Support, Life Without Barriers, Feros Care, and the Gold Coast Health disability services at Gold Coast University Hospital. We work alongside these organisations to ensure your move is coordinated with your broader support plan.",
      },
      {
        question: "How much does an NDIS move cost on the Gold Coast?",
        answer:
          "Local NDIS moves on the Gold Coast typically start from $160 to $185 per hour for a 2-person team with a truck. Costs depend on your property size, the amount of medical equipment, floor access, and any packing requirements. We provide a detailed quote for your plan manager to review before the move.",
      },
    ],
  },

  // ── SUNSHINE COAST ──────────────────────────────────────────────────────
  {
    name: "Sunshine Coast",
    slug: "sunshine-coast",
    metaTitle:
      "NDIS Removalists Sunshine Coast | Plan-Funded Moving Services",
    metaDescription:
      "NDIS removalists on the Sunshine Coast. Plan-funded relocations, fully insured, NDIS-compliant invoicing. Free quote.",
    address: {
      streetAddress: "122 Ashover Circuit",
      addressLocality: "Archerfield",
      postalCode: "4108",
    },
    suburbs: [
      "Maroochydore",
      "Caloundra",
      "Noosa Heads",
      "Buderim",
      "Mooloolaba",
      "Nambour",
      "Kawana",
      "Coolum Beach",
    ],
    localRemovalistHref: "/removalists-sunshine-coast",
    storageHref: null,
    intro: [
      "The Sunshine Coast is home to a significant number of NDIS participants, many of whom are drawn to the region for its relaxed lifestyle and access to quality disability services. R2G Transport and Storage provides dedicated NDIS removalist services across the Sunshine Coast, from beachside suburbs like Mooloolaba and Coolum Beach to the hinterland towns of Nambour, Maleny, and Montville. Each area brings different moving challenges, and our team plans for all of them.",
      "We work closely with Sunshine Coast disability service providers including Suncare Community Services, Open Minds, and the Partners in the Community program based in Maroochydore. Our team coordinates with the local NDIS office and your plan manager or support coordinator to arrange pre-approval, schedule around therapy appointments at Sunshine Coast University Hospital, and manage all invoicing requirements.",
      "Sunshine Coast properties often feature hilly terrain, long driveways, and rural access roads, especially in the hinterland. For participants moving to coastal properties, we manage narrow laneways and strata building requirements with care. Whether you are transitioning to a purpose-built accessible home in Kawana, moving closer to the Sunshine Coast Health Institute, or relocating from supported accommodation in Nambour, R2G provides the patience and expertise that NDIS participants need.",
    ],
    faqs: [
      {
        question: "Where is the NDIS office on the Sunshine Coast?",
        answer:
          "NDIS services on the Sunshine Coast are primarily accessed through the Partners in the Community program based in Maroochydore. You can also connect with local NDIS providers including Suncare Community Services and Open Minds for support coordination. Your Local Area Coordinator (LAC) can help confirm funding for removalist services under your plan.",
      },
      {
        question: "Can you handle hinterland moves on the Sunshine Coast?",
        answer:
          "Yes. Sunshine Coast hinterland suburbs like Nambour, Maleny, Montville, and Palmwoods often have steep driveways, narrow roads, and limited truck access. Our team conducts pre-move inspections for hinterland properties to plan the safest route for medical equipment and mobility aids.",
      },
      {
        question:
          "Do you work with Sunshine Coast disability organisations?",
        answer:
          "Yes. We regularly coordinate with Suncare Community Services, Open Minds, CPL, and other Sunshine Coast disability providers. We also work with occupational therapists and support workers from the Sunshine Coast Health Institute to ensure specialist equipment is positioned correctly at your new home.",
      },
      {
        question: "What Sunshine Coast suburbs do you cover for NDIS moves?",
        answer:
          "We cover over 100 suburbs across the Sunshine Coast including Maroochydore, Caloundra, Noosa Heads, Buderim, Mooloolaba, Nambour, Kawana, Coolum Beach, Bli Bli, Palmwoods, Beerwah, Landsborough, and all surrounding areas. We also handle NDIS moves between the Sunshine Coast and Brisbane.",
      },
      {
        question: "Can you move a participant from the Sunshine Coast to Brisbane?",
        answer:
          "Yes. Sunshine Coast to Brisbane is a common relocation route for NDIS participants moving closer to specialist services. The move takes around 1.5 to 2 hours and we provide full insurance for all mobility equipment and medical devices throughout the journey.",
      },
      {
        question: "How do I arrange an NDIS move on the Sunshine Coast?",
        answer:
          "Call us on 1300 959 498 or request a free quote online at r2g.com.au/quote. Let us know you are an NDIS participant and we will provide a detailed written quote. Your plan manager or support coordinator can use this quote to arrange pre-approval before we schedule your moving day.",
      },
    ],
  },

  // ── TOWNSVILLE ──────────────────────────────────────────────────────────
  {
    name: "Townsville",
    slug: "townsville",
    metaTitle: "NDIS Removalists Townsville | Plan-Funded Moving Services",
    metaDescription:
      "NDIS removalists in Townsville for North Queensland relocations. Fully insured, NDIS-compliant invoicing. Free quote.",
    address: {
      streetAddress: "36 Abbott St",
      addressLocality: "Cairns City",
      postalCode: "4870",
    },
    suburbs: [
      "Townsville City",
      "Aitkenvale",
      "Kirwan",
      "Thuringowa",
      "Bohle Plains",
      "Annandale",
      "Douglas",
      "Cranbrook",
    ],
    localRemovalistHref: "/removalists-townsville",
    storageHref: null,
    intro: [
      "Townsville is the largest city in North Queensland and home to a growing number of NDIS participants who rely on local services for their care and support needs. R2G Transport and Storage offers professional NDIS removalist services across the Townsville region, with a team that understands the specific challenges of relocating in a tropical North Queensland environment. From older character homes in South Townsville to newer accessible builds in Bohle Plains, we handle every type of property.",
      "Our team works with Townsville NDIS service providers including the local Partners in the Community program, Cootharinga North Queensland, and the disability services team at Townsville University Hospital. We coordinate with your plan manager and support coordinator to ensure funding is confirmed before your move, and we provide NDIS-compliant invoicing that makes claiming straightforward.",
      "Townsville experiences extreme heat during summer months, which can affect both moving schedules and the safe transport of temperature-sensitive medical equipment. We plan around the heat with early morning starts and climate-appropriate packing for sensitive devices. Whether you are moving to a more accessible home in Kirwan, transitioning from supported accommodation in Aitkenvale, or relocating closer to the Townsville Hospital for ongoing treatment, R2G provides dependable service from start to finish.",
    ],
    faqs: [
      {
        question: "Where is the NDIS office in Townsville?",
        answer:
          "NDIS services in Townsville are accessed through the local Partners in the Community program and through direct NDIA contact. Local disability organisations including Cootharinga North Queensland and NQ Disability Services can assist with plan coordination. Your support coordinator can help confirm that removalist costs are covered under your current plan.",
      },
      {
        question: "Do you handle the heat when moving NDIS participants in Townsville?",
        answer:
          "Yes. Townsville summers regularly exceed 35 degrees, which can be dangerous for participants with certain disabilities and can affect temperature-sensitive medical equipment. We schedule moves for the coolest parts of the day, typically starting at 6am during summer. We also use climate-appropriate packing to protect sensitive devices during transport.",
      },
      {
        question: "What Townsville suburbs do you cover for NDIS moves?",
        answer:
          "We cover all suburbs across the Townsville region including Townsville City, Aitkenvale, Kirwan, Thuringowa, Bohle Plains, Annandale, Douglas, Cranbrook, Idalia, Deeragun, Kelso, and surrounding areas. We also handle NDIS moves between Townsville and Cairns or Brisbane.",
      },
      {
        question: "Can you move an NDIS participant from Townsville to Cairns?",
        answer:
          "Yes. Townsville to Cairns is approximately a 4-hour drive and we handle this route regularly. We provide full insurance for all mobility equipment, medical devices, and household items. We coordinate with plan managers in both cities and handle all NDIS-compliant invoicing.",
      },
      {
        question: "Do you work with Townsville disability service providers?",
        answer:
          "Yes. We coordinate with Cootharinga North Queensland, NQ Disability Services, the Townsville Hospital disability team, and other local providers. We work with support workers and therapists to ensure specialist equipment is transported and installed correctly at the new property.",
      },
      {
        question: "How much does an NDIS move cost in Townsville?",
        answer:
          "Local NDIS moves in Townsville typically start from $170 to $189 per hour for a 2-person team and truck. Costs vary depending on the property size, amount of medical equipment, access difficulty, and packing needs. We provide a clear written quote that your plan manager can use for pre-approval before the move is scheduled.",
      },
    ],
  },
];

function getCityData(slug: string): CityData | undefined {
  return cityData.find((c) => c.slug === slug);
}

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return cityData.map((c) => ({ city: c.slug }));
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) return {};

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    keywords: [
      `ndis removalists ${data.name.toLowerCase()}`,
      `ndis movers ${data.name.toLowerCase()}`,
      `ndis funded removalists ${data.name.toLowerCase()}`,
      `disability removalists ${data.name.toLowerCase()}`,
      `ndis moving services ${data.name.toLowerCase()}`,
      "ndis removalists",
      "ndis registered removalists",
      "r2g transport and storage",
    ],
    alternates: {
      canonical: `https://www.r2g.com.au/ndis-removalists/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.r2g.com.au/ndis-removalists/${data.slug}`,
      type: "website",
      images: [
        {
          url: "https://www.r2g.com.au/images/Registerd-NDIS-Provider.webp",
          width: 1200,
          height: 630,
          alt: `R2G Transport & Storage - NDIS Removalists ${data.name}`,
        },
      ],
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default async function NdisCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) notFound();

  // ── JSON-LD: MovingCompany ──────────────────────────────────────────────
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "R2G Transport & Storage",
    description: `NDIS removalists in ${data.name} helping participants relocate with plan-funded moving services. Fully insured, NDIS-compliant invoicing.`,
    url: `https://www.r2g.com.au/ndis-removalists/${data.slug}`,
    telephone: "1300 959 498",
    email: "contact@r2g.com.au",
    image: "https://www.r2g.com.au/images/r2g-logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: "QLD",
      postalCode: data.address.postalCode,
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "City",
      name: data.name,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `NDIS Removalist Services ${data.name}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `NDIS Local Removals ${data.name}`,
            description: `Plan-funded local moving services for NDIS participants in ${data.name}.`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `NDIS Interstate Removals from ${data.name}`,
            description: `NDIS-funded interstate relocations from ${data.name} to major Australian cities.`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `NDIS Move & Store ${data.name}`,
            description: `Combined NDIS moving and secure storage services in ${data.name}.`,
          },
        },
      ],
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

  // ── JSON-LD: FAQPage ────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // ── JSON-LD: BreadcrumbList ─────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.r2g.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "NDIS Removalists",
        item: "https://www.r2g.com.au/ndis-removalists",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `NDIS Removalists ${data.name}`,
        item: `https://www.r2g.com.au/ndis-removalists/${data.slug}`,
      },
    ],
  };

  // ── Related services ────────────────────────────────────────────────────
  const relatedServices: { label: string; href: string }[] = [
    { label: `Removalists ${data.name}`, href: data.localRemovalistHref },
    { label: "NDIS Removalists", href: "/ndis-removalists" },
    { label: "Interstate Removals", href: "/interstate-removalists" },
  ];
  if (data.storageHref) {
    relatedServices.splice(2, 0, {
      label: `Storage ${data.name}`,
      href: data.storageHref,
    });
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <PageHero
        title={`NDIS Removalists ${data.name}`}
        subtitle={`Plan-funded moving services for NDIS participants in ${data.name}. Fully insured, patient service, and NDIS-compliant invoicing. We work with your plan manager and support coordinator so you can focus on settling in.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "NDIS Removalists", href: "/ndis-removalists" },
          { label: `NDIS Removalists ${data.name}` },
        ]}
      />

      {/* ── TRUST BADGES ───────────────────────────────────────────────────── */}
      <TrustBadges />

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
            {/* Main content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-0.5 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-[0.2em]">
                  NDIS Moving in {data.name}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6">
                NDIS Removalists Who Know {data.name}
              </h2>

              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/Registerd-NDIS-Provider.webp"
                  alt={`R2G Transport and Storage - NDIS Removalists ${data.name}`}
                  title={`R2G NDIS Removalists ${data.name}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* City-specific intro paragraphs */}
              <div className="space-y-5 text-gray-600 leading-relaxed">
                {data.intro.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* ── How NDIS Funding Works ──────────────────────────────────── */}
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-6">
                  How NDIS Funding Works for Your Move
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    NDIS participants can use plan funding for removalist
                    services when the move is related to disability support
                    needs. The cost is typically covered under Core Supports
                    (Assistance with Daily Life) or Capacity Building (Improved
                    Daily Living). Capital Supports may also cover the transport
                    and setup of specialist equipment like hoists and ceiling
                    tracks.
                  </p>
                  <p>
                    If your plan is NDIA-managed, you must use a registered NDIS
                    provider. Plan-managed and self-managed participants have
                    more flexibility in choosing their removalist, as long as the
                    service is reasonable and necessary. Either way, choosing a
                    removalist with NDIS experience in {data.name} makes the
                    process significantly smoother.
                  </p>
                  <p>
                    Before booking, speak with your plan manager or support
                    coordinator to confirm that removalist services are covered
                    under your current plan. R2G provides detailed written
                    quotes that plan managers can use for pre-approval, and we
                    issue NDIS-compliant invoices after every job.
                  </p>
                </div>
              </div>

              {/* ── What We Handle ──────────────────────────────────────────── */}
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-6">
                  What We Handle
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Household furniture and belongings",
                    "Wheelchairs and powered mobility aids",
                    "Hospital beds and hoists",
                    "Ceiling track equipment",
                    "Medical devices and monitors",
                    "Modified furniture and seating",
                    "Therapy and rehabilitation equipment",
                    "Full packing and unpacking services",
                    "Furniture disassembly and reassembly",
                    "Protective wrapping for all items",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200"
                    >
                      <svg
                        className="w-4 h-4 text-[#F5C400] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Service Options ─────────────────────────────────────────── */}
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-6">
                  NDIS Moving Services in {data.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "NDIS Local Move",
                      description: `Moving within ${data.name} or to a nearby suburb. Includes full packing, equipment handling, and same-day delivery. Ideal for participants transitioning to more accessible housing locally.`,
                    },
                    {
                      title: "NDIS Interstate Move",
                      description: `Relocating from ${data.name} to another city. Door-to-door service with full insurance, regular scheduled runs, and coordination with plan managers in both locations.`,
                    },
                    {
                      title: "NDIS Move & Store",
                      description: `When there is a gap between your move-out and move-in dates. We move your belongings into secure storage and deliver to your new ${data.name} home when it is ready.`,
                    },
                  ].map((service) => (
                    <div
                      key={service.title}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#F5C400] transition-colors"
                    >
                      <h3 className="font-black text-[#1A1A1A] text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sticky Sidebar ────────────────────────────────────────────── */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-[#252525] border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-black text-xl mb-1">
                    Get a Free NDIS Quote
                  </p>
                  <p className="text-gray-400 text-sm mb-5">
                    Plan manager invoicing and paperwork handled for you.
                  </p>

                  <div className="space-y-3 mb-5">
                    <Link
                      href="/quote"
                      className="flex items-center justify-center w-full bg-[#F5C400] hover:bg-[#e0b400] text-[#1A1A1A] font-bold py-3.5 rounded-lg text-sm tracking-wide transition-colors"
                    >
                      Request a Quote Online
                    </Link>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-[#F5C400]/60 text-white hover:text-[#F5C400] font-semibold py-3.5 rounded-lg text-sm transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call {PHONE}
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5 mb-5 space-y-2.5">
                    {[
                      "NDIS-compliant invoicing",
                      "Fully insured",
                      "No hidden fees",
                      "Equipment specialists",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#F5C400] shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-3">
                      Related Services
                    </p>
                    <div className="space-y-2">
                      {relatedServices.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 text-gray-400 hover:text-[#F5C400] text-sm transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <FAQ
        items={data.faqs}
        heading={`NDIS Removalists ${data.name} FAQ`}
      />

      {/* ── AREAS WE COVER ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
                Coverage
              </span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-3">
              Areas We Cover in {data.name}
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              We provide NDIS removalist services across {data.name} and
              surrounding suburbs. Need a different area? Call us and we will
              make it happen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {data.suburbs.map((suburb) => (
              <div
                key={suburb}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-gray-200"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#F5C400] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm font-medium">
                  {suburb}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={data.localRemovalistHref}
              className="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#F5C400] font-bold text-sm transition-colors"
            >
              View all {data.name} suburbs we service
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
      <CTABanner
        heading={`Need an NDIS Removalist in ${data.name}?`}
        subtext={`Get a free, no-obligation quote. We work with your plan manager and support team to make your ${data.name} move stress-free. NDIS-compliant invoicing included.`}
      />
    </>
  );
}
