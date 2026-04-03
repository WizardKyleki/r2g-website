import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const PageHero = dynamic(() => import("@/components/PageHero"));
const PricingTable = dynamic(() => import("@/components/PricingTable"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF, RATING_VALUE, REVIEW_COUNT } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// CITY DATA
// ─────────────────────────────────────────────────────────────────────────────
interface CityData {
  name: string;
  slug: string;
  pricingLocation: string;
  twoManRate: string;
  twoManLargeRate: string;
  threeManRate: string;
  weekendSurcharge: string;
  avgLocalCost: string;
  avgInterstateCost: string;
  removalistHref: string;
  packingHref: string | null;
  storageHref: string | null;
  metaDescription: string;
  intro: string;
  localFactors: string[];
  interstateDests: string[];
  faqs: { question: string; answer: string }[];
}

const CITIES: Record<string, CityData> = {
  brisbane: {
    name: "Brisbane",
    slug: "brisbane",
    pricingLocation: "brisbane",
    twoManRate: "$170/hr",
    twoManLargeRate: "$189/hr",
    threeManRate: "$220/hr",
    weekendSurcharge: "$189-$290/hr",
    avgLocalCost: "$400 to $1,200",
    avgInterstateCost: "$3,000 to $7,500",
    removalistHref: "/removalists-brisbane",
    packingHref: "/packing-services-brisbane",
    storageHref: "/storage-brisbane",
    metaDescription:
      "How much do removalists cost in Brisbane? Local rates from $170/hr, interstate from $3,000. Full 2026 pricing guide with no hidden fees.",
    intro:
      "Brisbane removalist costs depend on a few straightforward factors: the size of your home, the day of the week, distance between addresses, and whether you need extra services like packing or storage. Most local Brisbane moves for a 2-bedroom home run between $400 and $800, while larger 4-bedroom homes typically cost $800 to $1,500. Here is a full breakdown of what to expect.",
    localFactors: [
      "Apartment moves with lift access or narrow corridors take longer, which increases hourly costs. Buildings with booking requirements for lifts or loading docks may also restrict your moving window.",
      "Homes on steep driveways (common in suburbs like Paddington, Red Hill, and West End) require extra care and sometimes a longer carry distance from the truck to the front door.",
      "Moves across greater distances within Brisbane (for example, from Redcliffe to Logan) add travel time between addresses, which is included in your hourly rate.",
      "Peak periods like end of month, school holidays, and the December to January window attract higher demand. Booking midweek and mid-month usually saves money.",
    ],
    interstateDests: [
      "Brisbane to Cairns: $3,500 to $7,000 (shared load, 2-3 bedroom home)",
      "Brisbane to Sydney: $2,500 to $5,500",
      "Brisbane to Melbourne: $3,000 to $6,500",
      "Brisbane to Gold Coast: $1,500 to $3,000",
      "Brisbane to Adelaide: $4,000 to $8,000",
    ],
    faqs: [
      {
        question: "How much do removalists charge per hour in Brisbane?",
        answer:
          "A 2-person team with a truck starts from $170 per hour on weekdays. A larger truck with 2 movers starts from $189 per hour. Saturday rates are slightly higher, and Sunday or public holiday rates range from $269 to $325 per hour depending on team size. All rates include GST.",
      },
      {
        question: "What is the average cost of a local move in Brisbane?",
        answer:
          "A typical 2-bedroom local move in Brisbane costs between $400 and $800. A 3-bedroom home averages $700 to $1,200, and a 4-bedroom home can range from $1,000 to $1,800 depending on distance and access. These estimates are based on weekday moves with standard access.",
      },
      {
        question: "Are there any hidden fees I should watch out for?",
        answer:
          "With R2G, the price we quote is the price you pay. There are no call-out fees, fuel surcharges, or charges for furniture blankets and basic wrapping. Some other companies charge extra for stairs, long carries, or weekend moves, so always ask for a full breakdown before booking.",
      },
      {
        question: "Is it cheaper to move during the week?",
        answer:
          "Yes. Weekday rates (Monday to Friday) are the most affordable. Saturday rates are slightly higher, and Sunday and public holiday rates are the most expensive. If your schedule allows, booking a Tuesday or Wednesday move can save you a significant amount.",
      },
      {
        question: "How much does an interstate move from Brisbane cost?",
        answer:
          "Interstate moves are quoted at a fixed price based on volume (cubic metres) and distance. A shared load for a 2-bedroom home from Brisbane to Sydney typically ranges from $2,500 to $5,500. Brisbane to Melbourne runs $3,000 to $6,500. Exclusive loads cost more but offer faster transit and dedicated scheduling.",
      },
      {
        question: "Do you charge a minimum booking?",
        answer:
          "Yes, there is a minimum 2-hour booking for all local moves. This covers the time needed for loading, transit, and unloading on smaller jobs. Most moves take at least 2 to 3 hours even for a studio or 1-bedroom apartment.",
      },
    ],
  },
  cairns: {
    name: "Cairns",
    slug: "cairns",
    pricingLocation: "cairns",
    twoManRate: "$179/hr",
    twoManLargeRate: "$189/hr",
    threeManRate: "$269/hr",
    weekendSurcharge: "$199-$359/hr",
    avgLocalCost: "$450 to $1,300",
    avgInterstateCost: "$3,500 to $8,000",
    removalistHref: "/removalists-cairns",
    packingHref: "/packing-services-cairns",
    storageHref: "/storage-cairns",
    metaDescription:
      "How much do removalists cost in Cairns? Local rates from $179/hr, interstate from $3,500. Full 2026 pricing guide with no hidden fees.",
    intro:
      "Removalist costs in Cairns are influenced by home size, access difficulty, distance, and seasonal demand. Local moves for a 2-bedroom home in Cairns typically cost between $450 and $900, while larger homes range from $900 to $1,500. Cairns has some unique factors that can affect pricing, including stilt houses, steep driveways in the northern beaches, and wet season scheduling. Here is a complete breakdown.",
    localFactors: [
      "Stilt houses and Queenslander-style homes (very common across Cairns) require carrying items up and down stairs, which adds time. Narrow internal staircases in older homes are particularly challenging for large furniture.",
      "Northern Beaches suburbs like Trinity Beach, Palm Cove, and Clifton Beach often have steep driveways and limited truck access on residential streets. This can add 30 to 60 minutes to a move.",
      "Wet season moves (November to April) can face weather delays. Heavy rain and flooding occasionally affect access to certain roads and suburbs. Booking flexibility during this period helps avoid rescheduling fees.",
      "Moves to or from the Atherton Tablelands, Port Douglas, or Innisfail involve additional travel time factored into your hourly rate.",
    ],
    interstateDests: [
      "Cairns to Brisbane: $3,500 to $7,000 (shared load, 2-3 bedroom home)",
      "Cairns to Sydney: $5,000 to $9,000",
      "Cairns to Melbourne: $5,500 to $10,000",
      "Cairns to Townsville: $1,500 to $3,500",
      "Cairns to Adelaide: $6,000 to $11,000",
    ],
    faqs: [
      {
        question: "How much do removalists charge per hour in Cairns?",
        answer:
          "A 2-person team with a standard truck starts from $179 per hour on weekdays. A 3-person team with a large truck starts from $269 per hour. Saturday rates start from $199 and Sunday or public holiday rates start from $269 for a 2-man team. All rates include GST.",
      },
      {
        question: "Why are Cairns removalist rates slightly higher than Brisbane?",
        answer:
          "Cairns rates reflect the smaller local market, higher fuel costs in regional QLD, and the additional challenges of Cairns housing (stilt homes, steep access, tropical conditions). The difference is typically $10 to $20 per hour compared to Brisbane.",
      },
      {
        question: "What is the average cost of a local move in Cairns?",
        answer:
          "A 2-bedroom home typically costs $450 to $900 for a local Cairns move. A 3-bedroom home ranges from $800 to $1,300. These estimates assume weekday rates and standard access. Stilt houses, long driveways, or moves involving the northern beaches may cost more due to extra time.",
      },
      {
        question: "How much does it cost to move from Cairns to Brisbane?",
        answer:
          "A shared load for a 2-3 bedroom home from Cairns to Brisbane typically costs between $3,500 and $7,000. An exclusive (dedicated truck) load costs more but offers faster transit and full scheduling control. We provide a fixed-price quote based on your inventory volume.",
      },
      {
        question: "Does wet season affect moving costs in Cairns?",
        answer:
          "Weather itself does not increase our rates, but wet season can cause scheduling delays. If a move needs to be rescheduled due to flooding or road closures, we work with you to find the next available date at no extra cost. Booking with some flexibility during November to April is recommended.",
      },
      {
        question: "Do you charge extra for stilt houses in Cairns?",
        answer:
          "We do not charge a separate stilt house fee. However, carrying items up and down stairs takes more time, which is reflected in the total hourly cost. We factor this into your quote estimate so there are no surprises on moving day.",
      },
    ],
  },
  "gold-coast": {
    name: "Gold Coast",
    slug: "gold-coast",
    pricingLocation: "brisbane",
    twoManRate: "$170/hr",
    twoManLargeRate: "$189/hr",
    threeManRate: "$220/hr",
    weekendSurcharge: "$189-$290/hr",
    avgLocalCost: "$400 to $1,200",
    avgInterstateCost: "$2,500 to $6,500",
    removalistHref: "/removalists-gold-coast",
    packingHref: "/packing-services-gold-coast",
    storageHref: "/storage-gold-coast",
    metaDescription:
      "How much do removalists cost on the Gold Coast? Local rates from $170/hr, interstate from $2,500. Full 2026 pricing guide with no hidden fees.",
    intro:
      "Gold Coast removalist costs are comparable to Brisbane rates, with a few local factors that can influence your final bill. A typical 2-bedroom local move on the Gold Coast costs between $400 and $900, while larger family homes run $900 to $1,500. High-rise apartment moves and beachside access can add extra time. Here is what to expect when budgeting your Gold Coast move.",
    localFactors: [
      "High-rise apartments in Surfers Paradise, Broadbeach, and Main Beach often require lift bookings, loading dock access, and longer carry distances from the parking area to your unit. This adds time to the move.",
      "Beachfront properties and canal-side homes in areas like Mermaid Waters, Clear Island Waters, and Runaway Bay may have narrow access, limited truck parking, or body corporate restrictions on moving hours.",
      "Moves between the northern Gold Coast (Coomera, Pimpama, Ormeau) and southern suburbs (Coolangatta, Tweed Heads) cover significant distance, adding travel time to your hourly rate.",
      "The Gold Coast is one of the busiest moving markets in Queensland. End-of-month weekends and the January to February holiday period see high demand. Booking 2 to 3 weeks ahead during these periods is recommended.",
    ],
    interstateDests: [
      "Gold Coast to Sydney: $2,500 to $5,500 (shared load, 2-3 bedroom home)",
      "Gold Coast to Melbourne: $3,000 to $6,500",
      "Gold Coast to Brisbane: $400 to $1,200 (local rate applies)",
      "Gold Coast to Cairns: $3,500 to $7,500",
      "Gold Coast to Adelaide: $4,500 to $9,000",
    ],
    faqs: [
      {
        question: "How much do removalists charge per hour on the Gold Coast?",
        answer:
          "A 2-person team with a truck starts from $170 per hour on weekdays. A larger truck with 2 movers starts from $189 per hour. Weekend and public holiday rates range from $189 to $325 per hour depending on team size and day. All rates include GST.",
      },
      {
        question: "What is the average cost of a local Gold Coast move?",
        answer:
          "A 2-bedroom local move on the Gold Coast typically costs between $400 and $900. A 3-4 bedroom home ranges from $900 to $1,500. These estimates are based on weekday rates with standard ground-level access. High-rise moves and long-distance local moves (such as Coomera to Coolangatta) may cost more.",
      },
      {
        question: "Do high-rise apartments cost more to move?",
        answer:
          "High-rise moves do not have a separate surcharge, but they generally take longer due to lift access, loading dock bookings, and longer carry distances. A 2-bedroom high-rise move in Surfers Paradise might take 4 to 5 hours compared to 3 to 4 hours for a ground-level home.",
      },
      {
        question: "How much does it cost to move from the Gold Coast to Sydney?",
        answer:
          "A shared load for a 2-3 bedroom home from the Gold Coast to Sydney typically costs between $2,500 and $5,500. The exact price depends on your total volume in cubic metres. We provide a fixed-price quote so you know the full cost before booking.",
      },
      {
        question: "Is the Gold Coast more expensive than Brisbane for removalists?",
        answer:
          "No. Gold Coast and Brisbane share the same hourly rates as our team operates across South East Queensland from our Archerfield depot. The only difference is travel time if your Gold Coast suburb is further from our base, which may add to the total hours.",
      },
      {
        question: "When is the cheapest time to move on the Gold Coast?",
        answer:
          "Midweek moves (Tuesday to Thursday) in the middle of the month are the most affordable. Avoid end-of-month weekends, school holidays, and the December to February peak season if budget is a priority. Early morning start times also help keep costs down by avoiding traffic delays.",
      },
    ],
  },
  "sunshine-coast": {
    name: "Sunshine Coast",
    slug: "sunshine-coast",
    pricingLocation: "brisbane",
    twoManRate: "$170/hr",
    twoManLargeRate: "$189/hr",
    threeManRate: "$220/hr",
    weekendSurcharge: "$189-$290/hr",
    avgLocalCost: "$450 to $1,300",
    avgInterstateCost: "$2,800 to $7,000",
    removalistHref: "/removalists-sunshine-coast",
    packingHref: "/packing-services-sunshine-coast",
    storageHref: "/storage-sunshine-coast",
    metaDescription:
      "How much do removalists cost on the Sunshine Coast? Local rates from $170/hr, interstate from $2,800. Full 2026 pricing guide with no hidden fees.",
    intro:
      "Sunshine Coast removalist costs follow the same hourly rates as Brisbane, though certain local factors can influence the total. A typical 2-bedroom move on the Sunshine Coast costs between $450 and $900, while larger homes range from $900 to $1,500. Hinterland properties, narrow Noosa streets, and acreage homes are the main factors that add complexity. Here is a full pricing guide.",
    localFactors: [
      "Hinterland suburbs like Maleny, Montville, Mapleton, and Eumundi often have steep driveways, gravel access, and longer distances from the road to the front door. Larger trucks sometimes cannot access these properties, requiring a shuttle service.",
      "Noosa and Noosa Heads have narrow streets, limited parking, and strict council rules about truck access during peak tourist hours. Some beachside streets have time-of-day restrictions that need to be factored into scheduling.",
      "Acreage properties in Buderim, Palmwoods, and Woombye may have long driveways or gated entries that require coordination with the property owner for truck access.",
      "Moves between the northern Sunshine Coast (Noosa, Tewantin) and southern areas (Caloundra, Beerwah) cover 50+ kilometres, adding travel time to the hourly total.",
    ],
    interstateDests: [
      "Sunshine Coast to Sydney: $2,800 to $6,000 (shared load, 2-3 bedroom home)",
      "Sunshine Coast to Melbourne: $3,200 to $7,000",
      "Sunshine Coast to Brisbane: $500 to $1,200 (local rate applies)",
      "Sunshine Coast to Cairns: $3,500 to $7,500",
      "Sunshine Coast to Gold Coast: $500 to $1,200",
    ],
    faqs: [
      {
        question: "How much do removalists charge per hour on the Sunshine Coast?",
        answer:
          "A 2-person team with a truck starts from $170 per hour on weekdays. A larger truck starts from $189 per hour. Weekend and public holiday rates range from $189 to $325 per hour. All rates include GST and there are no hidden fees.",
      },
      {
        question: "What is the average cost of a local Sunshine Coast move?",
        answer:
          "A 2-bedroom local move on the Sunshine Coast typically costs $450 to $900. A 3-4 bedroom home ranges from $900 to $1,500. Hinterland moves and long-distance local moves (Noosa to Caloundra, for example) may cost more due to travel time and access challenges.",
      },
      {
        question: "Do hinterland properties cost more to move?",
        answer:
          "There is no separate hinterland surcharge, but hinterland moves often take longer due to steep driveways, gravel access, and sometimes the need for a smaller shuttle vehicle. We assess access during the quoting process and factor this into our estimate.",
      },
      {
        question: "How much does it cost to move from the Sunshine Coast to Sydney?",
        answer:
          "A shared load for a 2-3 bedroom home from the Sunshine Coast to Sydney typically costs between $2,800 and $6,000. The price is based on your total volume in cubic metres. We provide a fixed-price quote with no hidden charges.",
      },
      {
        question: "Is there a travel fee from Brisbane to the Sunshine Coast?",
        answer:
          "Our team operates from Archerfield in Brisbane. For Sunshine Coast jobs, travel time from our depot to your address is factored into the total estimate we provide. There is no separate call-out or travel fee. The quote you receive covers everything from arrival to completion.",
      },
      {
        question: "When is the best time to book a Sunshine Coast move?",
        answer:
          "Midweek moves in the middle of the month offer the best rates and availability. The Sunshine Coast sees high demand during school holidays, long weekends, and from November through January. Booking 3 to 4 weeks ahead during peak periods helps secure your preferred date.",
      },
    ],
  },
  townsville: {
    name: "Townsville",
    slug: "townsville",
    pricingLocation: "cairns",
    twoManRate: "$179/hr",
    twoManLargeRate: "$189/hr",
    threeManRate: "$269/hr",
    weekendSurcharge: "$199-$359/hr",
    avgLocalCost: "$450 to $1,200",
    avgInterstateCost: "$3,000 to $8,000",
    removalistHref: "/removalists-townsville",
    packingHref: "/packing-services-townsville",
    storageHref: "/storage-townsville",
    metaDescription:
      "How much do removalists cost in Townsville? Local rates from $179/hr, interstate from $3,000. Full 2026 pricing guide with no hidden fees.",
    intro:
      "Removalist costs in Townsville are similar to Cairns rates, reflecting the North Queensland market. A local 2-bedroom move in Townsville typically costs between $450 and $900, while larger homes range from $900 to $1,400. Defence force relocations, mining town moves, and seasonal demand from the dry season all play a role in Townsville moving costs. Here is a full breakdown.",
    localFactors: [
      "Defence force relocations are common in Townsville due to Lavarack Barracks and RAAF Base Townsville. These moves often have specific timing requirements and may qualify for Defence-funded relocation packages.",
      "Moves to and from mining towns like Charters Towers, Ayr, and Bowen involve additional travel time that is factored into the hourly rate. Some mining accommodation has restricted access hours.",
      "Older Queenslander homes on stumps in suburbs like North Ward, Belgian Gardens, and Railway Estate require carrying items up and down stairs, adding time to the move.",
      "Dry season (May to October) is the busiest moving period in Townsville. Wet season moves are quieter and often more affordable, though weather delays are possible during heavy rain events.",
    ],
    interstateDests: [
      "Townsville to Brisbane: $2,500 to $5,500 (shared load, 2-3 bedroom home)",
      "Townsville to Sydney: $4,000 to $8,000",
      "Townsville to Melbourne: $4,500 to $9,000",
      "Townsville to Cairns: $1,500 to $3,500",
      "Townsville to Adelaide: $5,000 to $10,000",
    ],
    faqs: [
      {
        question: "How much do removalists charge per hour in Townsville?",
        answer:
          "A 2-person team with a truck starts from $179 per hour on weekdays. A 3-person team with a large truck starts from $269 per hour. Saturday rates start from $199 and Sunday or public holiday rates start from $269. All rates include GST.",
      },
      {
        question: "What is the average cost of a local move in Townsville?",
        answer:
          "A 2-bedroom local move in Townsville typically costs $450 to $900. A 3-bedroom home ranges from $800 to $1,200. Moves within the Townsville CBD area are generally on the lower end, while moves to outer suburbs like Kelso, Bohle Plains, or Bushland Beach take longer.",
      },
      {
        question: "Do Defence relocations get special rates?",
        answer:
          "We work with Defence members regularly and understand the relocation process. While we do not offer a separate Defence discount, we provide competitive fixed-price quotes that work within Defence relocation budgets. We also handle the paperwork and timing requirements that come with Defence postings.",
      },
      {
        question: "How much does it cost to move from Townsville to Brisbane?",
        answer:
          "A shared load for a 2-3 bedroom home from Townsville to Brisbane typically costs between $2,500 and $5,500. The exact price depends on your inventory volume. We provide a fixed-price quote before your move date so there are no surprises.",
      },
      {
        question: "Are Townsville rates higher than Brisbane?",
        answer:
          "Townsville rates are slightly higher than Brisbane, typically by $10 to $20 per hour. This reflects the smaller local market and higher operating costs in North Queensland. However, Townsville moves tend to be shorter in distance, which often balances out the total cost.",
      },
      {
        question: "When is the cheapest time to move in Townsville?",
        answer:
          "Wet season (November to April) is the quietest period for Townsville removalists, so availability is better and scheduling is more flexible. Midweek moves during this period offer the best value. The dry season (May to October) is peak moving season due to Defence postings and the end of school year.",
      },
    ],
  },
};

function getCityData(slug: string): CityData | null {
  return CITIES[slug] || null;
}

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(CITIES).map((city) => ({ city }));
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityData(slug);
  if (!city) return {};

  const title = `How Much Do Removalists Cost in ${city.name}? 2026 Price Guide`;
  const canonical = `https://www.r2g.com.au/removalist-costs/${city.slug}`;

  return {
    title,
    description: city.metaDescription,
    keywords: [
      `removalist costs ${city.name.toLowerCase()}`,
      `how much do removalists cost ${city.name.toLowerCase()}`,
      `moving costs ${city.name.toLowerCase()}`,
      `removalist prices ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} removalist rates`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description: city.metaDescription,
      url: canonical,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default async function RemovalistCostsPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityData(slug);
  if (!city) notFound();

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
        name: `Removalists ${city.name}`,
        item: `https://www.r2g.com.au${city.removalistHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Removalist Costs ${city.name}`,
        item: `https://www.r2g.com.au/removalist-costs/${city.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Removalist Services ${city.name}`,
    description: `Professional removalist services in ${city.name}. Local and interstate moves, fully insured, transparent pricing.`,
    provider: {
      "@type": "MovingCompany",
      name: "R2G Transport & Storage",
      telephone: "1300 959 498",
      url: "https://www.r2g.com.au",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: RATING_VALUE,
        reviewCount: REVIEW_COUNT,
        bestRating: "5",
      },
    },
    areaServed: city.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: city.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <PageHero
        title={`Removalist Costs in ${city.name}`}
        subtitle={`Transparent ${city.name} removalist pricing for 2026. No hidden fees, no surprises. See exactly what local and interstate moves cost.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: `Removalists ${city.name}`, href: city.removalistHref },
          { label: `Costs` },
        ]}
      />

      {/* ── INTRO + OVERVIEW ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
                  Pricing Guide
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                How Much Do Removalists Cost in {city.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{city.intro}</p>

              {/* Quick cost summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "2 Movers + Truck", value: city.twoManRate, sub: "Weekday rate" },
                  { label: "Avg. Local Move", value: city.avgLocalCost, sub: "2-3 bedroom home" },
                  { label: "Avg. Interstate", value: city.avgInterstateCost, sub: "Shared load" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center"
                  >
                    <p className="text-2xl font-black text-[#F5C400] mb-1">{item.value}</p>
                    <p className="text-sm font-bold text-[#1A1A1A]">{item.label}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>

              {/* Local factors */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">
                What Affects {city.name} Removalist Costs?
              </h3>
              <div className="space-y-4 mb-10">
                {city.localFactors.map((factor, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F5C400] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#1A1A1A] text-xs font-black">{i + 1}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{factor}</p>
                  </div>
                ))}
              </div>

              {/* Interstate costs */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">
                Interstate Moving Costs from {city.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Interstate moves are priced at a fixed rate based on volume (cubic metres) and
                distance. Here are typical cost ranges for a 2-3 bedroom shared load:
              </p>
              <div className="space-y-2 mb-10">
                {city.interstateDests.map((dest) => (
                  <div
                    key={dest}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-[#F5C400] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{dest}</span>
                  </div>
                ))}
              </div>

              {/* Tips to save */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">
                Tips to Reduce Your {city.name} Moving Costs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Book midweek for the lowest hourly rates",
                  "Declutter before moving day to reduce load size",
                  "Disassemble flat-pack furniture yourself",
                  "Pack non-fragile items yourself, leave breakables to us",
                  "Book 2 to 4 weeks in advance for best availability",
                  "Move mid-month to avoid end-of-month rush",
                  "Consider a shared load for interstate moves",
                  "Get a detailed quote so there are no surprises",
                ].map((tip) => (
                  <div
                    key={tip}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700"
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
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get Your Free Quote</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Tell us about your {city.name} move and we will give you an exact price. No
                  obligation, no hidden fees.
                </p>
                <Link
                  href="/quote"
                  className="block w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg transition-colors text-center mb-3"
                >
                  Request a Quote Online
                </Link>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 w-full border border-white/20 text-white hover:border-[#F5C400] hover:text-[#F5C400] font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {PHONE}
                </a>
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  {[
                    "No hidden fees",
                    "Transparent hourly rates",
                    "Fixed interstate pricing",
                    "Free, no-obligation quotes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-[#F5C400]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
                Rate Card
              </span>
              <div className="w-10 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl font-black text-[#1A1A1A] mb-2">
              {city.name} Removalist Rates
            </h2>
            <p className="text-gray-600">
              Transparent rates. No hidden fees. No surprises.
            </p>
          </div>
          <PricingTable location={city.pricingLocation} />
          <p className="text-center text-sm text-gray-400 mt-6">
            All rates include GST. Minimum 2-hour booking applies. Rates are subject to change.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ items={city.faqs} heading={`${city.name} Removalist Costs FAQ`} />

      {/* ── RELATED SERVICES ── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href={city.removalistHref}
              className="group p-5 bg-white border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors"
            >
              <h3 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F5C400] transition-colors">
                Removalists {city.name}
              </h3>
              <p className="text-gray-500 text-sm">
                Local removalists covering all {city.name} suburbs.
              </p>
            </Link>
            {city.packingHref && (
              <Link
                href={city.packingHref}
                className="group p-5 bg-white border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors"
              >
                <h3 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F5C400] transition-colors">
                  Packing Services {city.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Professional packing for your {city.name} move.
                </p>
              </Link>
            )}
            {city.storageHref && (
              <Link
                href={city.storageHref}
                className="group p-5 bg-white border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors"
              >
                <h3 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F5C400] transition-colors">
                  Storage {city.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Secure storage solutions in {city.name}.
                </p>
              </Link>
            )}
            <Link
              href="/interstate-removalists"
              className="group p-5 bg-white border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors"
            >
              <h3 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F5C400] transition-colors">
                Interstate Removalists
              </h3>
              <p className="text-gray-500 text-sm">
                Fixed-price interstate moves across Australia.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Get Your ${city.name} Moving Quote`}
        subtext={`No hidden fees, no obligation. Call ${PHONE} or request a quote online. We will get back to you within hours.`}
      />
    </>
  );
}
