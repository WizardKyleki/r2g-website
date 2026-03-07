// ═══════════════════════════════════════════════════════
//  OFFICE REMOVALISTS LOCATION DATA — R2G Transport & Storage
// ═══════════════════════════════════════════════════════

// ── DEFAULT IMAGES (single source of truth) ──────────────────────────────────
// Change these once → updates the general page AND all location pages that
// don't set their own override.
export const OFFICE_DEFAULT_IMAGES = {
  /** Main content section — first image */
  hero: "/images/r2g-office-relocation-cairns.webp",
  /** Main content section — second image (woven into content) */
  content: "/images/r2g-storage-facility-cairns.webp",
  /** How It Works section */
  howItWorks: "/images/r2g-professional-packing-service-cairns.webp",
};

export interface OfficeLocation {
  slug: string;
  name: string;
  region: string;
  state: string;
  postcode: string;
  latitude: number;
  longitude: number;
  address: string;
  aboutParagraphs: [string, string, string];
  faqItems: { question: string; answer: string }[];
  tips: { heading: string; text: string }[];
  metaTitle: string;
  metaDescription: string;
  /** Optional per-location image overrides. Falls back to OFFICE_DEFAULT_IMAGES. */
  images?: {
    hero?: string;
    content?: string;
    howItWorks?: string;
  };

  // ── Unique-content fields (SEO differentiation) ───────────────────────────
  /** Hero section subtitle — replaces generic paragraph */
  heroSubtitle: string;
  /** 3 feature cards with bullet checklists */
  featureCards: { title: string; bullets: [string, string, string] }[];
  /** 3 scheduling / flexibility cards */
  schedulingCards: { title: string; desc: string }[];
  /** Services checklist items */
  servicesList: string[];
  /** How-it-works steps */
  howItWorksSteps: { number: string; title: string; text: string }[];
  /** Office-move testimonials */
  reviews: { text: string; name: string; company: string; date: string }[];
  /** Local business districts for SEO pills */
  businessDistricts: string[];
  /** CTA section subtitle */
  ctaSubtitle: string;
}

// ═══════════════════════════════════════════════════════
//  LOCATIONS
// ═══════════════════════════════════════════════════════

export const officeLocations: OfficeLocation[] = [
  {
    slug: "cairns",
    name: "Cairns",
    region: "Far North Queensland",
    state: "QLD",
    postcode: "4870",
    latitude: -16.9186,
    longitude: 145.7781,
    address: "36 Abbott St, Cairns City QLD 4870",
    aboutParagraphs: [
      "R2G Transport & Storage is the trusted choice for office relocations in Cairns and Far North Queensland. Whether you're moving a small professional practice or a large multi-floor corporate office, our experienced team handles every detail — from workstation disassembly to secure IT equipment transport.",
      "Cairns is home to a thriving business community, from CBD medical and legal practices to growing tech and tourism companies across the northern suburbs. We understand the unique challenges of moving offices in the region — including navigating tight CBD loading zones, coordinating building management access, and working around tropical weather conditions.",
      "Every Cairns office move includes a free pre-move site assessment, a dedicated move coordinator, and comprehensive insurance coverage. We work weekends and after-hours as standard — because we know every hour of downtime costs your business money.",
    ],
    faqItems: [
      {
        question: "Can you move our Cairns office on a weekend?",
        answer:
          "Absolutely. Weekend and after-hours moves are our specialty for Cairns business customers. We understand that downtime costs money, so we work around your schedule — including Saturdays, Sundays, and evenings.",
      },
      {
        question: "Do you handle IT equipment for Cairns office moves?",
        answer:
          "Yes. Our team is trained to carefully handle and transport computers, servers, monitors, printers, and other sensitive IT equipment. We use protective wrapping and padding for all electronics. We recommend backing up all data prior to moving.",
      },
      {
        question: "How do you plan a large office move in Cairns?",
        answer:
          "We offer a free pre-move consultation to walk through both locations, plan the logistics, and create a detailed moving schedule. Our team coordinates every detail — from building access arrangements to equipment requirements — to minimise disruption.",
      },
      {
        question: "Are you insured for commercial moves in Cairns?",
        answer:
          "Yes. R2G carries comprehensive public liability insurance and goods-in-transit insurance covering all commercial and office moves in Cairns. Your business assets are fully protected throughout the relocation.",
      },
      {
        question: "Do you provide storage for office furniture in Cairns?",
        answer:
          "Yes — R2G offers secure short and long-term storage at our Cairns facility. This is ideal if there's a gap between your move-out and move-in dates, or if you need to store surplus furniture and equipment.",
      },
      {
        question: "How long does a Cairns office move typically take?",
        answer:
          "This depends on the size of your office. A small office (5-10 staff) can often be completed in a single day. Larger corporate environments may require a phased approach over a weekend. We'll provide a detailed timeline during our pre-move consultation.",
      },
    ],
    tips: [
      {
        heading: "Book around the dry season if possible.",
        text: "Cairns' wet season (November–April) can bring heavy rain. While our team is experienced at moving in tropical weather, scheduling your office move during the dry season means fewer weather-related delays.",
      },
      {
        heading: "Coordinate building access early.",
        text: "Many Cairns CBD office buildings require advance notice for loading dock access and lift bookings. Let us know your building details when booking so we can arrange access with management ahead of time.",
      },
    ],
    metaTitle:
      "Office Removalists Cairns | Commercial Moving | R2G Transport & Storage",
    metaDescription:
      "Professional office removalists in Cairns. Weekend & after-hours moves, fully insured, minimal downtime. 10+ years experience. Call 1300 959 498 or get a free quote.",

    // ── Unique content fields ──────────────────────────────────────────────
    heroSubtitle:
      "Trusted office and commercial relocations across Cairns and Far North Queensland. We handle tropical weather logistics, tight CBD loading zones, and sensitive medical equipment — so your team is back at work fast.",
    featureCards: [
      {
        title: "Tropical-Ready Moves",
        bullets: [
          "Wet-season contingency plans for every job",
          "Waterproof wrapping for electronics & documents",
          "Climate-aware scheduling around FNQ weather",
        ],
      },
      {
        title: "Medical & Specialist Offices",
        bullets: [
          "Dental chairs, X-ray units & lab equipment",
          "Secure patient-record handling (privacy compliant)",
          "Minimal-downtime plans for healthcare practices",
        ],
      },
      {
        title: "CBD & Suburban Expertise",
        bullets: [
          "Cairns CBD loading-zone permits arranged",
          "Building management & lift booking coordination",
          "Experience across Earlville, Smithfield & Edmonton",
        ],
      },
    ],
    schedulingCards: [
      {
        title: "Weekend Moves",
        desc: "Saturday and Sunday availability so your Cairns practice or office loses zero weekday trading hours.",
      },
      {
        title: "After-Hours",
        desc: "Evening relocations ideal for CBD medical suites and legal offices that can't close during business hours.",
      },
      {
        title: "Wet-Season Planning",
        desc: "Flexible scheduling with weather-window monitoring — we reschedule at no cost if a cyclone warning hits.",
      },
    ],
    servicesList: [
      "Free pre-move site walkthrough",
      "Workstation disassembly & reassembly",
      "Medical & dental equipment transport",
      "Waterproof wrapping for tropical conditions",
      "Server rack & IT equipment handling",
      "Labelling & floor-plan placement",
      "After-hours & weekend availability",
      "Comprehensive insurance coverage",
    ],
    howItWorksSteps: [
      {
        number: "01",
        title: "Site Assessment & Tropical Planning",
        text: "We visit your Cairns office, map out loading-zone access, check lift dimensions, and factor in wet-season timing. You get a detailed quote with no hidden fees.",
      },
      {
        number: "02",
        title: "Wrap, Protect & Relocate",
        text: "Our crew arrives on schedule — even after hours or weekends. Every item gets waterproof wrapping and padding. Sensitive medical and IT gear is double-protected and transported in climate-controlled conditions where needed.",
      },
      {
        number: "03",
        title: "Set Up & Walk-Through",
        text: "We position desks, reconnect workstations, and place equipment exactly to your floor plan. Your Cairns team walks in Monday morning ready to work — we don't leave until you sign off.",
      },
    ],
    reviews: [
      {
        text: "R2G moved our entire dental practice on a Saturday — chairs, X-ray units, everything. We were open for patients on Monday. Couldn't believe how smooth it was.",
        name: "Dr. Sarah L.",
        company: "Cairns Family Dental",
        date: "November 2024",
      },
      {
        text: "We were nervous about moving servers in the wet season, but the R2G team had waterproof wrapping and a backup plan ready. Zero data issues, zero downtime.",
        name: "Marcus T.",
        company: "FNQ IT Solutions",
        date: "February 2025",
      },
      {
        text: "Third time using R2G for our Cairns office moves as we've grown. They know the CBD loading zones better than anyone and always finish ahead of schedule.",
        name: "Jennifer K.",
        company: "Pacific Legal Group",
        date: "August 2024",
      },
    ],
    businessDistricts: [
      "Cairns CBD",
      "Cairns North",
      "Earlville",
      "Smithfield",
      "Edmonton",
      "Manunda",
      "Westcourt",
      "Mooroobool",
      "Portsmith",
      "Woree",
      "Bayview Heights",
      "Mount Sheridan",
      "Palm Cove",
      "Trinity Beach",
      "Kuranda",
      "Gordonvale",
      "Mareeba",
      "Atherton",
    ],
    ctaSubtitle:
      "Get a free, no-obligation quote tailored to your Cairns office. We'll assess your site, plan around tropical weather, and have a detailed proposal back to you — usually within the hour.",
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    region: "South East Queensland",
    state: "QLD",
    postcode: "4000",
    latitude: -27.4698,
    longitude: 153.0251,
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    aboutParagraphs: [
      "R2G Transport & Storage provides professional office relocations across Brisbane and South East Queensland. From CBD high-rises to suburban business parks in the western corridors, our experienced team manages commercial moves of every size with precision and care.",
      "Brisbane's booming commercial property market means businesses are constantly moving — upgrading to larger premises, consolidating offices, or relocating to emerging business hubs in Fortitude Valley, South Brisbane, and the inner west. Our team has the local knowledge and logistics experience to handle any Brisbane office move efficiently.",
      "Every Brisbane office move includes a free pre-move site assessment from our Archerfield depot, a dedicated move coordinator, and full insurance coverage. We offer weekend and after-hours availability as standard, so your business keeps running while we handle the heavy lifting.",
    ],
    faqItems: [
      {
        question: "Can you move our Brisbane office on a weekend?",
        answer:
          "Yes. Weekend and after-hours moves are standard for our Brisbane business customers. We work around your schedule — including Saturdays, Sundays, and evenings — to minimise disruption to your operations.",
      },
      {
        question: "Do you handle IT equipment for Brisbane office moves?",
        answer:
          "Yes. Our team safely handles and transports computers, servers, monitors, printers, and all other IT equipment. We use protective wrapping and secure loading practices. We recommend backing up all data before the move as a precaution.",
      },
      {
        question: "How do you plan a large office move in Brisbane?",
        answer:
          "We start with a free on-site consultation to assess both locations, plan logistics, and create a detailed moving schedule. Our team handles everything from lift and loading dock bookings to coordinating with your building management.",
      },
      {
        question: "Are you insured for commercial moves in Brisbane?",
        answer:
          "Yes. R2G carries comprehensive public liability and goods-in-transit insurance on every commercial move in Brisbane. Your business assets are fully protected from pickup to delivery.",
      },
      {
        question: "Do you provide storage for office furniture in Brisbane?",
        answer:
          "Yes — R2G offers secure short and long-term storage at our Archerfield depot in Brisbane. This is ideal if there's a gap between your move-out and move-in dates, or if you need to store surplus furniture and equipment.",
      },
      {
        question: "What areas in Brisbane do you service for office moves?",
        answer:
          "We cover all Brisbane suburbs and the greater South East Queensland region — from the CBD and inner city to suburbs like Chermside, Mt Gravatt, Carindale, Indooroopilly, and out to Logan, Ipswich, and the Gold Coast corridor.",
      },
    ],
    tips: [
      {
        heading: "Book loading dock access early.",
        text: "Brisbane CBD buildings often require advance booking for loading docks, freight lifts, and after-hours access. Let us know your building details when you book so we can coordinate with management.",
      },
      {
        heading: "Consider a phased move for large offices.",
        text: "For offices with 20+ staff, a phased move over a Friday evening and Saturday can minimise disruption. We can move non-essential items first and finish with workstations so your team is operational by Monday.",
      },
    ],
    metaTitle:
      "Office Removalists Brisbane | Commercial Moving | R2G Transport & Storage",
    metaDescription:
      "Professional office removalists in Brisbane. Weekend & after-hours moves, fully insured, minimal downtime. 10+ years experience. Call 1300 959 498 or get a free quote.",

    // ── Unique content fields ──────────────────────────────────────────────
    heroSubtitle:
      "Expert office and commercial relocations across Brisbane and South East Queensland. From CBD high-rise towers to suburban business parks, our Archerfield-based team delivers precision moves with zero downtime.",
    featureCards: [
      {
        title: "High-Rise Specialists",
        bullets: [
          "Freight-lift booking & dock scheduling",
          "Strata and building management liaison",
          "Multi-floor phased moves for 50+ staff offices",
        ],
      },
      {
        title: "Phased Corporate Moves",
        bullets: [
          "Friday-night / Saturday split relocations",
          "Department-by-department sequencing",
          "IT cutover coordination with your tech team",
        ],
      },
      {
        title: "SEQ-Wide Coverage",
        bullets: [
          "Brisbane CBD to Gold Coast & Sunshine Coast",
          "Ipswich, Logan & Moreton Bay corridors",
          "Archerfield depot for fast south-side dispatch",
        ],
      },
    ],
    schedulingCards: [
      {
        title: "Weekend Moves",
        desc: "Full Saturday and Sunday crews so your Brisbane office doesn't lose a single billable hour during the week.",
      },
      {
        title: "After-Hours",
        desc: "Evening relocations from 6 pm — ideal for CBD towers with strict daytime freight restrictions.",
      },
      {
        title: "Phased Rollouts",
        desc: "For large offices (20+ staff), we move non-essential areas Friday night and finish workstations Saturday morning.",
      },
    ],
    servicesList: [
      "Free on-site assessment from Archerfield depot",
      "Workstation disassembly & reassembly",
      "Server room & comms-rack relocation",
      "High-rise freight-lift coordination",
      "Secure document & filing cabinet transport",
      "Floor-plan labelling & placement",
      "After-hours & weekend availability",
      "Full public liability & transit insurance",
    ],
    howItWorksSteps: [
      {
        number: "01",
        title: "On-Site Consultation",
        text: "Our Brisbane team visits both locations, measures freight lifts and dock access, maps the floor plan, and builds a move schedule. You receive a fixed-price quote — no surprises.",
      },
      {
        number: "02",
        title: "Phased Pack & Relocate",
        text: "We arrive on schedule — evenings or weekends preferred. Desks, chairs, and filing cabinets are wrapped and labelled. IT gear is double-padded and transported in air-ride trucks from our Archerfield depot.",
      },
      {
        number: "03",
        title: "Install & Handover",
        text: "Everything is placed exactly to your new floor plan — workstations connected, meeting rooms set up, kitchen unpacked. Your Brisbane team starts Monday as if nothing changed.",
      },
    ],
    reviews: [
      {
        text: "R2G relocated our 40-person Fortitude Valley office over a single weekend. Phased the move perfectly — IT on Friday night, furniture Saturday. We were fully operational Monday at 8 am.",
        name: "David R.",
        company: "Velocity Digital Agency",
        date: "March 2025",
      },
      {
        text: "Moving out of a 15th-floor CBD tower is a nightmare without the right team. R2G coordinated dock bookings, freight lifts, and strata requirements flawlessly. Highly recommend for high-rise moves.",
        name: "Amanda W.",
        company: "Pinnacle Accounting Group",
        date: "January 2025",
      },
      {
        text: "We've used R2G for three office expansions across South Brisbane. They know the area, they're always on time, and nothing has ever been damaged. Our go-to movers.",
        name: "Chris M.",
        company: "SB Architecture Studio",
        date: "October 2024",
      },
    ],
    businessDistricts: [
      "Brisbane CBD",
      "Fortitude Valley",
      "South Brisbane",
      "West End",
      "Newstead",
      "Teneriffe",
      "Milton",
      "Toowong",
      "Spring Hill",
      "Woolloongabba",
      "Chermside",
      "Mt Gravatt",
      "Indooroopilly",
      "Carindale",
      "Eagle Farm",
      "Archerfield",
      "Logan",
      "Ipswich",
    ],
    ctaSubtitle:
      "Get a free, no-obligation quote for your Brisbane office move. Our Archerfield team will assess your site, coordinate building access, and deliver a detailed proposal — usually within the hour.",
  },
];

// ═══════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════

export function getOfficeLocation(slug: string): OfficeLocation | undefined {
  return officeLocations.find((l) => l.slug === slug);
}

export function getAllOfficeLocationSlugs(): string[] {
  return officeLocations.map((l) => l.slug);
}
