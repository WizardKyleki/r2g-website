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

  // ── SYDNEY ──
  {
    slug: "sydney",
    name: "Sydney",
    state: "NSW",
    heroLabel: "Sydney \u00B7 New South Wales \u00B7 Australia-Wide",
    heroBody:
      "Fully insured door-to-door interstate removals to and from Sydney. Regular runs between Sydney, Brisbane, Melbourne and regional centres. Shared or exclusive loads \u2014 handled properly from pickup to delivery.",
    aboutParagraphs: [
      "R2G Transport & Storage provide interstate removalist services to and from Sydney. We run regular routes connecting Sydney with Brisbane, Melbourne, Cairns and regional Queensland \u2014 door-to-door, fully insured, no subcontractors.",
      "Sydney is Australia\u2019s largest city and one of the busiest interstate relocation corridors in the country. Whether you\u2019re moving to Sydney for work, family or lifestyle, or leaving Sydney for a sea change up the coast, our team handles the logistics so you don\u2019t have to.",
      "Every Sydney interstate move includes a dedicated move manager, full goods-in-transit insurance, and the choice of shared or exclusive load. We deliver to any suburb across Greater Sydney \u2014 from the Northern Beaches to Campbelltown, Parramatta to the Eastern Suburbs.",
    ],
    truckImageAlt:
      "R2G Transport interstate removalists truck arriving in Sydney for a long distance household move",
    reviewsImageAlt:
      "Professional removalists unloading furniture for an interstate delivery in Sydney",
    faqItems: [
      {
        question: "What interstate routes do you service to and from Sydney?",
        answer:
          "We run regular routes between Sydney and Brisbane, Sydney and Melbourne, Sydney and Cairns, and Sydney and regional centres along the Pacific Highway and Hume Highway. We also service Canberra, Newcastle, the Central Coast and Wollongong.",
      },
      {
        question: "How long does an interstate move to or from Sydney take?",
        answer:
          "Sydney to Brisbane is 1\u20132 days. Sydney to Melbourne is 1\u20132 days. Sydney to Cairns is 3\u20134 days. We provide estimated delivery windows at the time of booking based on your chosen load type.",
      },
      {
        question: "Do you offer shared loads to and from Sydney?",
        answer:
          "Yes. Shared loads consolidate your belongings with other customers heading in the same direction, significantly reducing cost. This is ideal for 1\u20133 bedroom moves where some flexibility on delivery timing is acceptable.",
      },
      {
        question: "Is my furniture insured on a Sydney interstate move?",
        answer:
          "Every interstate move to or from Sydney includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from pickup at your Sydney address to final delivery at your destination.",
      },
      {
        question: "How do I get a quote for an interstate move from Sydney?",
        answer:
          "Use the quote form on this page or call us on 1300 959 498. Tell us your Sydney suburb, destination, move size and preferred dates \u2014 we\u2019ll come back with a clear, itemised quote with no hidden fees.",
      },
    ],
    relatedRoutes: [
      { slug: "sydney-to-brisbane", title: "Sydney to Brisbane", desc: "920 km \u00B7 1\u20132 days transit" },
      { slug: "sydney-to-melbourne", title: "Sydney to Melbourne", desc: "870 km \u00B7 1\u20132 days transit" },
      { slug: "sydney-to-cairns", title: "Sydney to Cairns", desc: "2,600 km \u00B7 3\u20134 days transit" },
    ],
    reviewsHeading: "What Our Sydney Customers Say",
    ctaHeading: "Ready to Move Interstate from Sydney?",
    ctaBody:
      "Get a free, no-obligation quote. Tell us where you\u2019re moving from Sydney and we\u2019ll take care of the rest.",
    tickerHeading: "Interstate Routes from <gold>Sydney</gold>",
    tickerSubtext:
      "Regular interstate runs connecting Sydney with Brisbane, Melbourne, Cairns and beyond \u2014 fully insured, door to door.",
  },

  // ── MELBOURNE ──
  {
    slug: "melbourne",
    name: "Melbourne",
    state: "VIC",
    heroLabel: "Melbourne \u00B7 Victoria \u00B7 Australia-Wide",
    heroBody:
      "Fully insured door-to-door interstate removals to and from Melbourne. Regular routes to Brisbane, Sydney, Cairns and regional centres. Shared or exclusive loads \u2014 handled properly from pickup to delivery.",
    aboutParagraphs: [
      "R2G Transport & Storage provide interstate removalist services to and from Melbourne. We run regular routes connecting Melbourne with Brisbane, Sydney, Cairns, Townsville and regional Queensland \u2014 door-to-door, fully insured, with no subcontractors involved.",
      "Melbourne is Australia\u2019s second-largest city and a major destination for interstate relocations. Thousands of Australians move to and from Melbourne every year for career opportunities, lifestyle, education and family. Our team handles these long-distance moves week in, week out.",
      "Every Melbourne interstate move includes a dedicated move manager, full goods-in-transit insurance, and the choice of shared or exclusive load. We deliver to all suburbs across Greater Melbourne \u2014 from the CBD and inner suburbs to the Mornington Peninsula, Geelong and the western growth corridors.",
    ],
    truckImageAlt:
      "R2G Transport interstate removalists truck completing a long distance delivery in Melbourne",
    reviewsImageAlt:
      "Removalists carrying protected furniture into a Melbourne home after an interstate move",
    faqItems: [
      {
        question: "What interstate routes do you service to and from Melbourne?",
        answer:
          "We run regular routes between Melbourne and Brisbane, Melbourne and Sydney, Melbourne and Cairns, and Melbourne and Townsville. We also service Canberra, Albury-Wodonga, Geelong and regional Victorian centres.",
      },
      {
        question: "How long does an interstate move to or from Melbourne take?",
        answer:
          "Melbourne to Sydney is 1\u20132 days. Melbourne to Brisbane is 2\u20133 days. Melbourne to Cairns is 4\u20135 days. We provide estimated delivery windows at the time of booking based on your chosen load type.",
      },
      {
        question: "Do you offer shared loads to and from Melbourne?",
        answer:
          "Yes. Shared loads consolidate your belongings with other customers heading in the same direction, reducing cost by up to 40\u201360%. This works well for 1\u20133 bedroom moves where some flexibility on delivery timing is acceptable.",
      },
      {
        question: "Is my furniture insured on a Melbourne interstate move?",
        answer:
          "Every interstate move to or from Melbourne includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from the moment we load them at your Melbourne address to final delivery.",
      },
      {
        question: "How do I get a quote for an interstate move from Melbourne?",
        answer:
          "Use the quote form on this page or call us on 1300 959 498. Tell us your Melbourne suburb, destination, move size and preferred dates \u2014 we\u2019ll come back with a clear, itemised quote with no hidden fees.",
      },
    ],
    relatedRoutes: [
      { slug: "melbourne-to-brisbane", title: "Melbourne to Brisbane", desc: "1,750 km \u00B7 2\u20133 days transit" },
      { slug: "melbourne-to-sydney", title: "Melbourne to Sydney", desc: "870 km \u00B7 1\u20132 days transit" },
      { slug: "melbourne-to-cairns", title: "Melbourne to Cairns", desc: "3,200 km \u00B7 4\u20135 days transit" },
    ],
    reviewsHeading: "What Our Melbourne Customers Say",
    ctaHeading: "Ready to Move Interstate from Melbourne?",
    ctaBody:
      "Get a free, no-obligation quote. Tell us where you\u2019re moving from Melbourne and we\u2019ll take care of the rest.",
    tickerHeading: "Interstate Routes from <gold>Melbourne</gold>",
    tickerSubtext:
      "Regular interstate runs connecting Melbourne with Brisbane, Sydney, Cairns and beyond \u2014 fully insured, door to door.",
  },

  // ── GOLD COAST ──
  {
    slug: "gold-coast",
    name: "Gold Coast",
    state: "QLD",
    heroLabel: "Gold Coast \u00B7 Queensland \u00B7 Australia-Wide",
    heroBody:
      "Fully insured door-to-door interstate removals to and from the Gold Coast. Regular routes north to Brisbane and Cairns, south to Sydney and Melbourne. Shared or exclusive loads \u2014 handled properly from pickup to delivery.",
    aboutParagraphs: [
      "R2G Transport & Storage provide interstate removalist services to and from the Gold Coast. We service routes from Surfers Paradise, Broadbeach, Robina, Burleigh Heads and all Gold Coast suburbs north to Brisbane and Cairns, south to Sydney and Melbourne, and beyond.",
      "The Gold Coast is one of Australia\u2019s fastest-growing regions, attracting families and professionals from Sydney, Melbourne and across the country. Whether you\u2019re moving to the Gold Coast for the lifestyle or relocating interstate for work, our team handles the full door-to-door journey.",
      "Every Gold Coast interstate move includes a dedicated move manager, full goods-in-transit insurance, and the choice of shared or exclusive load. No subcontracting. No hidden fees. No surprises.",
    ],
    truckImageAlt:
      "R2G Transport interstate removalists truck on the M1 motorway near Gold Coast for a long distance move",
    reviewsImageAlt:
      "Professional removalists delivering household furniture to a Gold Coast home after an interstate move",
    faqItems: [
      {
        question: "What interstate routes do you service from the Gold Coast?",
        answer:
          "From the Gold Coast we service routes north through Brisbane to Cairns and Townsville, south to Sydney and Melbourne, and west via Brisbane to Toowoomba and regional centres. The Gold Coast sits on the QLD\u2013NSW border, making it a natural hub for interstate moves in both directions.",
      },
      {
        question: "How long does an interstate move from the Gold Coast take?",
        answer:
          "Gold Coast to Sydney is 1\u20132 days. Gold Coast to Melbourne is 2\u20133 days. Gold Coast to Cairns is 2\u20133 days via Brisbane. We provide estimated delivery windows at the time of booking.",
      },
      {
        question: "Do you offer shared loads from the Gold Coast?",
        answer:
          "Yes. Shared loads consolidate your belongings with other customers heading in the same direction, significantly reducing cost. This is ideal for 1\u20133 bedroom moves with some flexibility on delivery timing.",
      },
      {
        question: "Is my furniture insured on a Gold Coast interstate move?",
        answer:
          "Every interstate move from the Gold Coast includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from pickup to final delivery.",
      },
      {
        question: "How do I get a quote for an interstate move from the Gold Coast?",
        answer:
          "Use the quote form on this page or call us on 1300 959 498. Tell us your Gold Coast suburb, destination, move size and preferred dates \u2014 we\u2019ll come back with a clear, itemised quote with no hidden fees.",
      },
    ],
    relatedRoutes: [
      { slug: "brisbane-to-gold-coast", title: "Brisbane to Gold Coast", desc: "80 km \u00B7 1 day transit" },
      { slug: "brisbane-to-sydney", title: "Brisbane to Sydney", desc: "920 km \u00B7 1\u20132 days transit" },
      { slug: "brisbane-to-melbourne", title: "Brisbane to Melbourne", desc: "1,750 km \u00B7 2\u20133 days transit" },
    ],
    reviewsHeading: "What Our Gold Coast Customers Say",
    ctaHeading: "Ready to Move Interstate from the Gold Coast?",
    ctaBody:
      "Get a free, no-obligation quote. Tell us where you\u2019re moving from the Gold Coast and we\u2019ll take care of the rest.",
    tickerHeading: "Interstate Routes from the <gold>Gold Coast</gold>",
    tickerSubtext:
      "Regular interstate runs connecting the Gold Coast with Sydney, Melbourne, Brisbane, Cairns and beyond \u2014 fully insured, door to door.",
  },

  // ── SUNSHINE COAST ──
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    state: "QLD",
    heroLabel: "Sunshine Coast \u00B7 Queensland \u00B7 Australia-Wide",
    heroBody:
      "Fully insured door-to-door interstate removals to and from the Sunshine Coast. Regular routes via Brisbane to Sydney, Melbourne, Cairns and beyond. Shared or exclusive loads \u2014 handled properly from pickup to delivery.",
    aboutParagraphs: [
      "R2G Transport & Storage provide interstate removalist services to and from the Sunshine Coast. We service Maroochydore, Noosa, Caloundra, Buderim, Coolum and all Sunshine Coast suburbs, connecting you with Brisbane, Sydney, Melbourne, Cairns and regional centres across Australia.",
      "The Sunshine Coast has become one of Australia\u2019s most popular relocation destinations. Families and professionals from Sydney, Melbourne and Brisbane are moving to the Sunshine Coast in record numbers for the beach lifestyle, hinterland living and growing job market. Our team handles these moves every week.",
      "Every Sunshine Coast interstate move includes a dedicated move manager, full goods-in-transit insurance, and the choice of shared or exclusive load. No subcontracting. No hidden fees. No surprises.",
    ],
    truckImageAlt:
      "R2G Transport interstate removalists truck on the Bruce Highway near Sunshine Coast for a long distance move",
    reviewsImageAlt:
      "Interstate removals team delivering furniture to a Sunshine Coast home after a long distance move",
    faqItems: [
      {
        question: "What interstate routes do you service from the Sunshine Coast?",
        answer:
          "From the Sunshine Coast we connect via Brisbane to routes north to Cairns and Townsville, south to Sydney and Melbourne, and west to Toowoomba. We pick up from all Sunshine Coast suburbs including Maroochydore, Noosa, Caloundra, Buderim, Nambour and Coolum Beach.",
      },
      {
        question: "How long does an interstate move from the Sunshine Coast take?",
        answer:
          "Sunshine Coast to Sydney is 1\u20132 days. Sunshine Coast to Melbourne is 2\u20133 days. Sunshine Coast to Cairns is 2\u20133 days. We provide estimated delivery windows at the time of booking.",
      },
      {
        question: "Do you offer shared loads from the Sunshine Coast?",
        answer:
          "Yes. Shared loads consolidate your belongings with other customers heading in the same direction, significantly reducing cost. This works well for 1\u20133 bedroom moves with some flexibility on delivery timing.",
      },
      {
        question: "Is my furniture insured on a Sunshine Coast interstate move?",
        answer:
          "Every interstate move from the Sunshine Coast includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from pickup to final delivery at your destination.",
      },
      {
        question: "How do I get a quote for an interstate move from the Sunshine Coast?",
        answer:
          "Use the quote form on this page or call us on 1300 959 498. Tell us your Sunshine Coast suburb, destination, move size and preferred dates \u2014 we\u2019ll come back with a clear, itemised quote with no hidden fees.",
      },
    ],
    relatedRoutes: [
      { slug: "brisbane-to-sunshine-coast", title: "Brisbane to Sunshine Coast", desc: "100 km \u00B7 1 day transit" },
      { slug: "brisbane-to-sydney", title: "Brisbane to Sydney", desc: "920 km \u00B7 1\u20132 days transit" },
      { slug: "brisbane-to-cairns", title: "Brisbane to Cairns", desc: "1,700 km \u00B7 2\u20133 days transit" },
    ],
    reviewsHeading: "What Our Sunshine Coast Customers Say",
    ctaHeading: "Ready to Move Interstate from the Sunshine Coast?",
    ctaBody:
      "Get a free, no-obligation quote. Tell us where you\u2019re moving from the Sunshine Coast and we\u2019ll take care of the rest.",
    tickerHeading: "Interstate Routes from the <gold>Sunshine Coast</gold>",
    tickerSubtext:
      "Regular interstate runs connecting the Sunshine Coast with Sydney, Melbourne, Brisbane, Cairns and beyond \u2014 fully insured, door to door.",
  },

  // ── CAIRNS ──
  {
    slug: "cairns",
    name: "Cairns",
    state: "QLD",
    heroLabel: "Cairns \u00B7 Far North Queensland \u00B7 Australia-Wide",
    heroBody:
      "Fully insured door-to-door interstate removals from Cairns to anywhere in Australia. Experienced team operating from our Cairns City depot \u2014 shared or exclusive loads, handled properly from pickup to delivery.",
    aboutParagraphs: [
      "R2G Transport & Storage are experienced interstate removalists operating from Cairns. We run regular routes from our Cairns City depot south through Queensland to Townsville, Mackay, Rockhampton and Brisbane, and onward to Sydney, Melbourne and Adelaide. Whatever your destination, we move you door to door.",
      "Cairns is the gateway to Far North Queensland and a major hub for interstate relocations. Whether you\u2019re moving south for work, relocating to Cairns for the tropical lifestyle, or heading to the mining towns of the Bowen Basin, our team handles hundreds of Cairns interstate moves every year.",
      "Every Cairns interstate move includes a dedicated move manager, full goods-in-transit insurance, and the choice of shared or exclusive load. No subcontracting. No hidden fees. No surprises.",
    ],
    truckImageAlt:
      "R2G Transport interstate removalists truck at the Cairns City depot ready for a long distance move",
    reviewsImageAlt:
      "Removalists loading household furniture at a Cairns home for an interstate move south",
    faqItems: [
      {
        question: "What interstate routes do you service from Cairns?",
        answer:
          "From our Cairns City depot we service routes south along the Bruce Highway to Townsville, Mackay, Rockhampton and Brisbane, and onward to Sydney and Melbourne. We also service Bowen Basin mining towns including Moranbah, Emerald and Dysart, plus Airlie Beach and the Whitsundays.",
      },
      {
        question: "How long does an interstate move from Cairns take?",
        answer:
          "Cairns to Brisbane is 2\u20133 days. Cairns to Sydney is 3\u20134 days. Cairns to Melbourne is 4\u20135 days. Cairns to Townsville is 1 day. We provide estimated delivery windows at the time of booking.",
      },
      {
        question: "Do you offer shared loads from Cairns?",
        answer:
          "Yes. Shared loads consolidate your belongings with other customers heading south along the same corridor, significantly reducing cost. This works well for 1\u20133 bedroom moves where some flexibility on delivery timing is acceptable.",
      },
      {
        question: "Is my furniture insured on a Cairns interstate move?",
        answer:
          "Every interstate move from Cairns includes goods-in-transit insurance and full public liability insurance as standard. Your belongings are covered from the moment we load them at your Cairns address to final delivery at your destination.",
      },
      {
        question: "How do I get a quote for an interstate move from Cairns?",
        answer:
          "Use the quote form on this page or call us on 1300 959 498. Tell us your Cairns suburb, destination, move size and preferred dates \u2014 we\u2019ll come back with a clear, itemised quote with no hidden fees.",
      },
    ],
    relatedRoutes: [
      { slug: "cairns-to-brisbane", title: "Cairns to Brisbane", desc: "1,700 km \u00B7 2\u20133 days transit" },
      { slug: "cairns-to-sydney", title: "Cairns to Sydney", desc: "2,600 km \u00B7 3\u20134 days transit" },
      { slug: "cairns-to-melbourne", title: "Cairns to Melbourne", desc: "3,100 km \u00B7 4\u20135 days transit" },
    ],
    reviewsHeading: "What Our Cairns Customers Say",
    ctaHeading: "Ready to Move Interstate from Cairns?",
    ctaBody:
      "Get a free, no-obligation quote. Tell us where you\u2019re moving from Cairns and we\u2019ll take care of the rest.",
    tickerHeading: "Interstate Routes from <gold>Cairns</gold>",
    tickerSubtext:
      "Regular routes south to Townsville, Brisbane, Sydney and Melbourne \u2014 plus mining towns and regional centres. Fully insured, door to door.",
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
