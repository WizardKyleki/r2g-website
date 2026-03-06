// ═══════════════════════════════════════════════════════
//  INTERSTATE CITY PAGE DATA — R2G Transport & Storage
// ═══════════════════════════════════════════════════════

export interface CityPageData {
  slug: string;
  name: string;
  state: string;
  heroLabel: string;
  heroBody: string;
  aboutParagraphs: [string, string, string];
  truckImageAlt: string;
  reviewsImageAlt: string;
  faqItems: { question: string; answer: string }[];
  relatedRoutes: { slug: string; title: string; desc: string }[];
  reviewsHeading: string;
  ctaHeading: string;
  ctaBody: string;
  tickerHeading: string;
  tickerSubtext: string;
}

// ═══════════════════════════════════════════════════════
//  CITY PAGES
// ═══════════════════════════════════════════════════════

export const CITY_PAGES: CityPageData[] = [
  {
    slug: "brisbane",
    name: "Brisbane",
    state: "QLD",
    heroLabel: "Brisbane \u00B7 Queensland \u00B7 Australia-Wide",
    heroBody:
      "Fully insured door-to-door interstate removals from Brisbane to anywhere in Australia. Experienced team operating from our Archerfield depot \u2014 shared or exclusive loads, handled properly from pickup to delivery.",
    aboutParagraphs: [
      "R2G Transport & Storage are experienced interstate removalists operating from Brisbane. We run regular routes from our Archerfield depot north through Queensland to Cairns and Townsville, south to Sydney and Melbourne, west to Toowoomba and Charleville, and across to Adelaide. Whatever your destination, we move you door to door.",
      "Brisbane is one of Australia\u2019s fastest-growing cities, and interstate relocations \u2014 both in and out \u2014 are at an all-time high. Our team handles hundreds of Brisbane interstate moves every year. We know the routes, the logistics, and the planning required to get your belongings there safely and on time.",
      "Every Brisbane interstate move includes a dedicated move manager, full goods-in-transit insurance, and the choice of shared or exclusive load. No subcontracting. No hidden fees. No surprises.",
    ],
    truckImageAlt:
      "R2G Transport interstate removalists truck departing Brisbane Archerfield depot for long distance move",
    reviewsImageAlt:
      "Interstate removals team loading household furniture for door-to-door move from Brisbane",
    faqItems: [
      {
        question: "What interstate routes do you service from Brisbane?",
        answer:
          "From our Brisbane depot at Archerfield, we service the full Queensland coastal corridor north to Cairns and Townsville, south to Sydney and Melbourne, west to Toowoomba and Charleville, and across to Adelaide. We also service QLD mining towns including Moranbah, Emerald and Dysart.",
      },
      {
        question: "How long does an interstate move from Brisbane take?",
        answer:
          "Transit times depend on your destination. Brisbane to Cairns is 2\u20133 days. Brisbane to Sydney is 1\u20132 days. Brisbane to Melbourne is 2\u20133 days. Brisbane to Adelaide is around 3 days. We provide estimated delivery windows at the time of booking.",
      },
      {
        question: "Do you offer shared loads from Brisbane?",
        answer:
          "Yes. Shared loads consolidate your belongings with other customers heading in the same direction, significantly reducing cost. This works well for 1\u20133 bedroom moves where some flexibility on delivery timing is acceptable. Exclusive loads are also available for larger homes or time-sensitive moves.",
      },
      {
        question: "Is my furniture insured on a Brisbane interstate move?",
        answer:
          "Every interstate move from Brisbane includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from the moment we load them at your Brisbane address to final delivery at your destination.",
      },
      {
        question: "How do I get a quote for an interstate move from Brisbane?",
        answer:
          "Use the quote form on this page or call us on 1300 959 498. Tell us your origin suburb in Brisbane, your destination, your move size and preferred dates \u2014 we\u2019ll come back with a clear, itemised quote with no hidden fees.",
      },
    ],
    relatedRoutes: [
      {
        slug: "brisbane-to-cairns",
        title: "Brisbane to Cairns",
        desc: "1,700 km \u00B7 2\u20133 days transit",
      },
      {
        slug: "brisbane-to-sydney",
        title: "Brisbane to Sydney",
        desc: "920 km \u00B7 1\u20132 days transit",
      },
      {
        slug: "brisbane-to-melbourne",
        title: "Brisbane to Melbourne",
        desc: "1,750 km \u00B7 2\u20133 days transit",
      },
    ],
    reviewsHeading: "What Our Brisbane Customers Say",
    ctaHeading: "Ready to Move Interstate from Brisbane?",
    ctaBody:
      "Get a free, no-obligation quote. Tell us where you\u2019re moving from Brisbane and we\u2019ll take care of the rest.",
    tickerHeading: "Interstate Routes from <gold>Brisbane</gold>",
    tickerSubtext:
      "130+ routes covered from our Brisbane depot. Coastal corridors, mining towns, capital cities \u2014 fully insured, door to door.",
  },
];

// ═══════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════

export function getCityPageBySlug(slug: string): CityPageData | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return CITY_PAGES.map((c) => c.slug);
}
