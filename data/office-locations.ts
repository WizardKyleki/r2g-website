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

  // ── Deep-SEO differentiation fields ────────────────────────────────────────
  /** Local industries R2G serves — rendered as a 4-col grid */
  industrySpecializations: {
    title: string;
    description: string;
  }[];
  /** Location-specific moving challenges & knowledge */
  localKnowledge: {
    heading: string;
    paragraphs: string[];
  };
  /** Brief real-world move story for social proof */
  caseStudy: {
    headline: string;
    business: string;
    challenge: string;
    solution: string;
    result: string;
  };
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
      {
        question: "Do you move medical equipment like dental chairs and X-ray machines in Cairns?",
        answer:
          "Yes. We regularly relocate dental practices, specialist clinics, and pathology labs across Cairns. Our team is trained to handle heavy medical equipment including dental chairs, X-ray units, autoclaves, and examination beds. We use specialist padding and secure tie-down systems to protect sensitive instruments during transit.",
      },
      {
        question: "Can you coordinate with our Cairns IT provider for server relocation?",
        answer:
          "Absolutely. We regularly work alongside local Cairns IT providers to coordinate server disconnections, rack relocations, and reconnections at the new premises. We can schedule the IT cutover as part of our move timeline so your network is back online as quickly as possible.",
      },
    ],
    tips: [
      {
        heading: "Book around the dry season if possible.",
        text: "Cairns' wet season (November–April) can bring heavy rain and occasional cyclone warnings. While our team is experienced at moving in tropical conditions with waterproof wrapping as standard, scheduling your office move between May and October means fewer weather-related delays and more predictable timelines.",
      },
      {
        heading: "Coordinate building access early.",
        text: "Many Cairns CBD office buildings — particularly along Abbott St, Shields St, and Lake St — require advance notice for loading dock access and lift bookings. Let us know your building details when booking so we can arrange permits and coordinate with management ahead of time.",
      },
      {
        heading: "Notify your IT provider before the move.",
        text: "If your Cairns office uses a local managed IT provider, coordinate with them at least two weeks before moving day. Server disconnection, network cabling at the new premises, and phone system transfers all need lead time. R2G can liaise directly with your IT team on the day.",
      },
      {
        heading: "Plan for stair carries in older CBD buildings.",
        text: "Several commercial buildings in the Cairns CBD and along Grafton St were built before freight lifts were standard. Our team is experienced with stair carries for heavy furniture and equipment — but knowing in advance lets us allocate the right crew size and protective equipment.",
      },
    ],
    metaTitle:
      "Office Removalists Cairns | Trusted Commercial Movers",
    metaDescription:
      "Expert office removalists in Cairns. Weekend & after-hours moves, fully insured, zero downtime. Get a free quote today.",

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

    // ── Deep-SEO differentiation ───────────────────────────────────────────
    industrySpecializations: [
      {
        title: "Healthcare & Medical",
        description:
          "Dental practices, specialist clinics, pathology labs, and allied health offices across Cairns CBD, Smithfield, and Edmonton. We handle dental chairs, X-ray units, autoclaves, and patient records with privacy-compliant protocols.",
      },
      {
        title: "Tourism & Hospitality",
        description:
          "Tour operators, dive companies, travel agencies, and hotel administration offices throughout the Cairns tourism district. We understand seasonal timing pressures and can schedule moves around peak visitor periods.",
      },
      {
        title: "Legal & Financial",
        description:
          "Law firms, accounting practices, financial advisors, and real estate agencies in the Cairns CBD and Earlville commercial precincts. Secure handling of confidential files, heavy safes, and sensitive client records.",
      },
      {
        title: "Government & Education",
        description:
          "Council offices, James Cook University departments, TAFE Queensland campuses, and government agencies across the Cairns region. We meet public-sector compliance requirements and work around academic calendars.",
      },
    ],
    localKnowledge: {
      heading: "Why Cairns Office Moves Need Local Expertise",
      paragraphs: [
        "Cairns CBD has some of the tightest commercial loading zones in regional Queensland. Abbott St, Lake St, and Grafton St all have restricted parking windows, and council permits are required for extended loading. R2G pre-arranges these permits as part of every CBD office move — so there are no surprises or parking fines on moving day.",
        "Many of the older commercial buildings along Shields St and Spence St were built without freight lifts. Stair carries for heavy desks, server racks, and filing cabinets require extra crew and specialist equipment. Our team has moved offices out of nearly every major Cairns CBD building and knows exactly what each one requires.",
        "Far North Queensland's wet season (November to April) brings heavy tropical downpours that can start without warning. Every Cairns office move includes waterproof wrapping for electronics, documents, and upholstered furniture as standard — not as an optional extra. If a cyclone warning is issued, we reschedule at no cost and prioritise your move once conditions clear.",
      ],
    },
    caseStudy: {
      headline: "Cairns Medical Practice — Weekend Relocation",
      business: "A 15-person dental and specialist medical practice relocating from Cairns CBD to a purpose-built clinic in Smithfield.",
      challenge:
        "The practice couldn't afford to close during weekday appointments. Heavy equipment included three dental chairs, two X-ray units, an autoclave room, and a server rack with patient management systems. The old building had no freight lift — everything had to go down two flights of stairs.",
      solution:
        "R2G completed the entire move over a single weekend. Friday evening: IT provider disconnected servers while our crew wrapped and stair-carried all heavy equipment. Saturday: dental chairs and medical gear were transported to Smithfield and positioned per the new floor plan. Sunday morning: workstations reassembled, IT reconnected, and a full walk-through completed with the practice manager.",
      result:
        "The practice opened Monday at 8 am with zero missed appointments. All patient records were intact, every piece of medical equipment was operational, and the total downtime was limited to the weekend.",
    },
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
      {
        question: "Can you handle high-rise office moves in Brisbane CBD?",
        answer:
          "Yes — high-rise moves are one of our specialties. We coordinate freight lift bookings, loading dock scheduling, and strata requirements for Brisbane CBD towers. Our team has experience with buildings from 5 to 40+ floors and can manage phased moves to work within building access windows.",
      },
      {
        question: "Do you offer phased office relocations for larger Brisbane businesses?",
        answer:
          "Yes. For offices with 20+ staff, we recommend a phased approach — typically moving non-essential items and storage on Friday evening, then workstations and IT equipment on Saturday. This means your team can be fully operational by Monday morning with minimal disruption.",
      },
    ],
    tips: [
      {
        heading: "Book loading dock access early.",
        text: "Brisbane CBD high-rises and Fortitude Valley commercial buildings often require advance booking for loading docks, freight lifts, and after-hours access. Strata committees may need 2–4 weeks' notice. Let us know your building details when you book so we can coordinate with management.",
      },
      {
        heading: "Consider a phased move for large offices.",
        text: "For offices with 20+ staff, a phased move over a Friday evening and Saturday can minimise disruption. We move non-essential items, filing cabinets, and breakroom equipment on Friday night, then finish with workstations and IT Saturday morning so your team is operational by Monday.",
      },
      {
        heading: "Check your new lease for fit-out timelines.",
        text: "Many Brisbane commercial leases allow early access for fit-out before the lease start date. If your new space needs cabling, partitions, or furniture assembly, coordinate with your fit-out contractor so R2G can deliver furniture and equipment as soon as the space is ready.",
      },
      {
        heading: "Plan around Brisbane's summer storm season.",
        text: "Brisbane's storm season (October–March) can produce sudden heavy downpours and hail. Our trucks are enclosed and all items are wrapped, but scheduling loading and unloading between storm windows can save time. We monitor BOM forecasts and adjust logistics on the day.",
      },
    ],
    metaTitle:
      "Office Removalists Brisbane | #1 Commercial Movers SEQ",
    metaDescription:
      "Top-rated office removalists in Brisbane. High-rise specialists, fully insured, weekend & after-hours moves. Get a free quote now.",

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

    // ── Deep-SEO differentiation ───────────────────────────────────────────
    industrySpecializations: [
      {
        title: "Corporate & Professional Services",
        description:
          "Law firms, accounting practices, consultancies, and financial services across Brisbane CBD, Spring Hill, and Fortitude Valley. Secure handling of confidential records, heavy safes, and boardroom furniture.",
      },
      {
        title: "Technology & Startups",
        description:
          "Tech companies, SaaS startups, and digital agencies in Fortitude Valley, Newstead, and Teneriffe. Server rack relocation, standing desk logistics, and open-plan reconfiguration for agile workspaces.",
      },
      {
        title: "Healthcare & Allied Health",
        description:
          "Medical centres, physiotherapy clinics, dental practices, and pathology labs across Brisbane's inner suburbs. Equipment-specific handling for examination beds, imaging machines, and pharmacy fit-outs.",
      },
      {
        title: "Government & Not-for-Profit",
        description:
          "State and local government departments, NGOs, and community organisations across South East Queensland. We meet procurement compliance requirements and coordinate with facility management teams.",
      },
    ],
    localKnowledge: {
      heading: "Why Brisbane Office Moves Need Local Expertise",
      paragraphs: [
        "Brisbane CBD has strict freight access windows — most towers limit loading dock use to before 9 am, after 5 pm, or weekends only. Buildings like 111 Eagle St, Waterfront Place, and the Queens Wharf precinct each have different strata rules for commercial moves. R2G has moved offices in and out of nearly every major Brisbane CBD building and handles dock bookings, lift reservations, and floor-protection requirements as standard.",
        "Fortitude Valley and Newstead have become Brisbane's fastest-growing commercial precincts, but many of the converted warehouse spaces have unusual access challenges — narrow roller doors, mezzanine levels without lifts, and shared loading areas. Our team knows which buildings need special equipment and crew configurations.",
        "Brisbane's storm season (October to March) can bring sudden afternoon downpours and destructive hail. All items are wrapped and loaded under cover where possible, and our Archerfield depot provides secure staging if weather forces a delay. Unlike some operators, we never leave furniture exposed on the street waiting for a loading dock.",
      ],
    },
    caseStudy: {
      headline: "Brisbane Digital Agency — Fortitude Valley Relocation",
      business: "A 40-person digital agency moving from a 10th-floor CBD tower to a converted warehouse in Fortitude Valley.",
      challenge:
        "The CBD building restricted freight lift access to after 6 pm on weekdays. The new Fortitude Valley warehouse had a narrow roller-door entry and a mezzanine level with no lift. The agency needed to be fully operational by Monday morning including a 12-seat server rack and 40 standing desks.",
      solution:
        "R2G split the move into two phases. Friday 6 pm: a dedicated IT crew disconnected and padded the server rack while the main team wrapped and loaded 40 standing desks, chairs, and meeting room furniture via the freight lift. Saturday 7 am: everything was delivered to Fortitude Valley, with a stair-carry team handling the mezzanine level and the server rack reconnected by midday.",
      result:
        "The agency held their Monday standup at 9 am in the new space with all systems online. Total downtime was limited to the weekend — no client deadlines were missed.",
    },
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    region: "South East Queensland",
    state: "QLD",
    postcode: "4217",
    latitude: -28.0167,
    longitude: 153.4,
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    aboutParagraphs: [
      "R2G Transport & Storage delivers professional office relocations across the Gold Coast and its surrounding business districts. From high-rise corporate suites in Surfers Paradise to suburban office parks in Robina and Bundall, our team handles commercial moves of every scale with precision and minimal downtime.",
      "The Gold Coast is one of Australia's fastest-growing business regions, with major commercial precincts in Southport CBD, Bundall, Robina Town Centre, and the emerging health and knowledge corridor at Varsity Lakes. We understand the unique logistics of moving offices here, including high-rise building access in Surfers Paradise, tight loading windows in Southport, and the demands of relocating across a city that stretches 60 kilometres along the coastline.",
      "Every Gold Coast office move includes a free pre-move site assessment, a dedicated move coordinator, and comprehensive insurance coverage. We work weekends and after-hours as standard, because your business cannot afford unnecessary downtime during a relocation.",
    ],
    faqItems: [
      {
        question: "Can you move our Gold Coast office on a weekend?",
        answer:
          "Yes. Weekend and after-hours moves are standard for our Gold Coast business customers. We work around your schedule, including Saturdays, Sundays, and evenings, so your team avoids losing productive weekday hours.",
      },
      {
        question: "Do you handle IT equipment for Gold Coast office moves?",
        answer:
          "Yes. Our team safely transports computers, servers, monitors, printers, and all other IT equipment with protective wrapping and secure loading. We recommend backing up all data before the move as a precaution.",
      },
      {
        question: "How do you plan a large office move on the Gold Coast?",
        answer:
          "We start with a free on-site consultation to assess both locations, plan the logistics, and create a detailed moving schedule. Our team handles everything from lift and loading dock bookings to building management coordination.",
      },
      {
        question: "Are you insured for commercial moves on the Gold Coast?",
        answer:
          "Yes. R2G carries comprehensive public liability and goods-in-transit insurance on every commercial move on the Gold Coast. Your business assets are fully protected from pickup to delivery.",
      },
      {
        question: "Do you provide storage for office furniture on the Gold Coast?",
        answer:
          "Yes. R2G offers secure short and long-term storage options. This is ideal if there is a gap between your move-out and move-in dates, or if you need to store surplus furniture and equipment while your new office is being fitted out.",
      },
      {
        question: "What areas on the Gold Coast do you service for office moves?",
        answer:
          "We cover the entire Gold Coast corridor from Ormeau and Coomera in the north through to Coolangatta and Tweed Heads in the south. This includes Surfers Paradise, Southport, Bundall, Robina, Broadbeach, Burleigh Heads, and all suburbs in between.",
      },
      {
        question: "Can you handle high-rise office moves in Surfers Paradise?",
        answer:
          "Yes. High-rise relocations are one of our specialties. We coordinate freight lift bookings, loading dock scheduling, and building management requirements for Surfers Paradise and Broadbeach towers. Our team has experience with commercial buildings from 5 to 70+ floors.",
      },
      {
        question: "Do you move offices between the Gold Coast and Brisbane?",
        answer:
          "Yes. We regularly handle office relocations between Brisbane and the Gold Coast. With our depot in Archerfield, we are well positioned to manage moves along the M1 corridor efficiently, including Ormeau, Helensvale, and the northern Gold Coast business parks.",
      },
    ],
    tips: [
      {
        heading: "Book loading dock access early for Surfers Paradise towers.",
        text: "Surfers Paradise and Broadbeach high-rises often have limited freight lift and loading dock availability, especially on weekends. Building management may need two to four weeks notice. Let us know your building details when booking so we can arrange access in advance.",
      },
      {
        heading: "Plan for the Gold Coast's linear layout.",
        text: "The Gold Coast stretches over 60 kilometres from Ormeau to Coolangatta. If your old and new offices are at opposite ends of the city, travel time between sites matters. Our team plans routes and crew logistics to account for distance and avoid peak-hour congestion on the M1.",
      },
      {
        heading: "Consider timing around major Gold Coast events.",
        text: "Events like Schoolies, the Gold Coast Marathon, and major conventions at the Gold Coast Convention Centre can affect traffic and building access in Surfers Paradise and Broadbeach. We factor these into our planning and recommend scheduling moves outside peak event periods where possible.",
      },
      {
        heading: "Check car parking access at your new premises.",
        text: "Many Gold Coast commercial buildings have underground parking with height restrictions that limit truck access. Our team will check clearance heights at both locations during the pre-move assessment and arrange street-level loading if needed.",
      },
    ],
    metaTitle:
      "Office Removalists Gold Coast | Trusted Commercial Movers",
    metaDescription:
      "Professional office removalists on the Gold Coast. High-rise specialists, fully insured, weekend and after-hours moves. Get a free quote today.",

    // ── Unique content fields ──────────────────────────────────────────────
    heroSubtitle:
      "Trusted office and commercial relocations across the Gold Coast. From Surfers Paradise high-rises to Robina business parks, our team delivers precision moves with zero downtime for your business.",
    featureCards: [
      {
        title: "High-Rise Specialists",
        bullets: [
          "Freight-lift booking and dock scheduling",
          "Surfers Paradise and Broadbeach tower experience",
          "Multi-floor phased moves for large offices",
        ],
      },
      {
        title: "Coast-Wide Coverage",
        bullets: [
          "Ormeau to Coolangatta, all suburbs covered",
          "M1 corridor logistics planning",
          "Brisbane to Gold Coast office transfers",
        ],
      },
      {
        title: "Business District Experts",
        bullets: [
          "Bundall corporate precinct and Southport CBD",
          "Robina Town Centre and Varsity Lakes corridor",
          "Building management and strata coordination",
        ],
      },
    ],
    schedulingCards: [
      {
        title: "Weekend Moves",
        desc: "Full Saturday and Sunday crews so your Gold Coast office loses zero weekday billing hours.",
      },
      {
        title: "After-Hours",
        desc: "Evening relocations from 6 pm, ideal for high-rise towers with daytime freight restrictions.",
      },
      {
        title: "Event-Aware Scheduling",
        desc: "We plan around major Gold Coast events that affect Surfers Paradise and Broadbeach access and traffic.",
      },
    ],
    servicesList: [
      "Free pre-move site assessment",
      "Workstation disassembly and reassembly",
      "Server room and IT equipment handling",
      "High-rise freight-lift coordination",
      "Secure document and filing cabinet transport",
      "Floor-plan labelling and placement",
      "After-hours and weekend availability",
      "Full public liability and transit insurance",
    ],
    howItWorksSteps: [
      {
        number: "01",
        title: "On-Site Consultation",
        text: "Our team visits both your current and new Gold Coast offices, checks freight lift dimensions and dock access, maps the floor plan, and builds a move schedule. You receive a fixed-price quote with no hidden fees.",
      },
      {
        number: "02",
        title: "Pack, Protect and Relocate",
        text: "We arrive on schedule, whether evenings or weekends. Every desk, chair, and filing cabinet is wrapped, labelled, and loaded. IT equipment and servers are double-padded and handled with care throughout transit.",
      },
      {
        number: "03",
        title: "Install and Handover",
        text: "Everything is placed exactly to your new floor plan. Workstations are connected, meeting rooms set up, and kitchen areas unpacked. Your Gold Coast team walks in ready to work, and we do not leave until you sign off.",
      },
    ],
    reviews: [
      {
        text: "R2G moved our Bundall office over a Saturday. 30 desks, server room, boardroom furniture. Everything was in place by Sunday afternoon and we opened Monday without a hitch.",
        name: "Michael P.",
        company: "Coastal Property Advisory",
        date: "January 2025",
      },
      {
        text: "We relocated from Surfers Paradise to Robina and the team handled the high-rise logistics perfectly. Loading dock booking, freight lift timing, wrapping. Could not fault them.",
        name: "Lisa H.",
        company: "Pacific Wealth Partners",
        date: "November 2024",
      },
      {
        text: "Third time using R2G for office moves on the Gold Coast. They know the buildings, they are always on time, and nothing has ever been damaged. Our go-to commercial movers.",
        name: "Andrew S.",
        company: "GC Digital Solutions",
        date: "March 2025",
      },
    ],
    businessDistricts: [
      "Surfers Paradise",
      "Southport CBD",
      "Bundall",
      "Broadbeach",
      "Robina",
      "Varsity Lakes",
      "Nerang",
      "Helensvale",
      "Coomera",
      "Ormeau",
      "Burleigh Heads",
      "Palm Beach",
      "Coolangatta",
      "Ashmore",
      "Benowa",
      "Labrador",
      "Molendinar",
      "Arundel",
    ],
    ctaSubtitle:
      "Get a free, no-obligation quote for your Gold Coast office move. We will assess your site, coordinate building access, and deliver a detailed proposal, usually within the hour.",

    // ── Deep-SEO differentiation ───────────────────────────────────────────
    industrySpecializations: [
      {
        title: "Property and Finance",
        description:
          "Real estate agencies, mortgage brokers, financial planners, and investment firms across Bundall, Southport CBD, and Surfers Paradise. Secure handling of confidential client files, heavy safes, and boardroom furniture.",
      },
      {
        title: "Tourism and Hospitality",
        description:
          "Tour operators, event companies, hotel management offices, and travel agencies throughout the Surfers Paradise and Broadbeach tourism precincts. We schedule moves around peak visitor seasons and event calendars.",
      },
      {
        title: "Healthcare and Allied Health",
        description:
          "Medical centres, dental practices, physiotherapy clinics, and specialist suites in Robina, Southport, and the Varsity Lakes health corridor. Equipment-specific handling for examination beds, imaging machines, and sensitive patient records.",
      },
      {
        title: "Legal and Professional Services",
        description:
          "Law firms, accounting practices, consultancies, and recruitment agencies across the Gold Coast business precincts. We handle confidential records, library collections, and heavy filing systems with secure chain-of-custody protocols.",
      },
    ],
    localKnowledge: {
      heading: "Why Gold Coast Office Moves Need Local Expertise",
      paragraphs: [
        "The Gold Coast's commercial landscape is spread across a 60-kilometre coastal strip, which makes logistics planning critical. Moving between Southport and Coolangatta during peak hours can take well over an hour on the M1. Our team plans routes, staging points, and crew logistics to avoid traffic bottlenecks and keep your move running on schedule.",
        "Surfers Paradise and Broadbeach high-rises have some of the most complex freight access requirements in Queensland. Many towers restrict loading dock use to specific time windows, require building management approval weeks in advance, and have height-limited underground parking that prevents truck access. R2G has moved offices in and out of towers across the Surfers Paradise skyline and handles all access coordination as standard.",
        "Bundall is the Gold Coast's traditional corporate precinct, home to major law firms, financial services companies, and the Gold Coast Turf Club business district. The area's low-rise office parks generally offer easier truck access than Surfers Paradise towers, but parking and street access can still be restricted during business hours. We schedule Bundall moves to work within local access windows.",
      ],
    },
    caseStudy: {
      headline: "Gold Coast Financial Firm - Surfers Paradise to Robina",
      business: "A 25-person financial advisory firm relocating from a 20th-floor Surfers Paradise tower to a ground-floor office park in Robina.",
      challenge:
        "The Surfers Paradise building restricted freight lift access to after 6 pm on weekdays and limited Saturday windows. The firm had 25 workstations, a 6-rack server room, a large boardroom table, and a secure filing room with confidential client records. Everything needed to be operational by Monday morning.",
      solution:
        "R2G completed the move in two phases. Friday 6 pm: the IT team disconnected servers while our crew wrapped and loaded workstations via the freight lift. Saturday 7 am: all furniture and equipment was delivered to Robina and positioned per the floor plan. The server room was reconnected and tested by Saturday afternoon.",
      result:
        "The firm opened Monday at 8:30 am fully operational. All client files were accounted for, every workstation was connected, and the total business downtime was limited to the weekend.",
    },
  },
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    region: "South East Queensland",
    state: "QLD",
    postcode: "4558",
    latitude: -26.6500,
    longitude: 153.0667,
    address: "122 Ashover Circuit, Archerfield, Brisbane QLD 4108",
    aboutParagraphs: [
      "R2G Transport & Storage provides professional office relocations across the Sunshine Coast, from the Maroochydore CBD to growing business hubs in Caloundra, Birtinya, and Noosa. Our experienced team manages commercial moves of every size with precision and care.",
      "The Sunshine Coast is one of Queensland's fastest-growing business regions. The new Maroochydore City Centre development, the Sunshine Coast University Hospital health precinct at Birtinya, and established commercial areas in Caloundra and Noosa are driving strong demand for office relocations. We understand the local logistics, from navigating the Bruce Highway corridor to coordinating building access across the region's diverse commercial precincts.",
      "Every Sunshine Coast office move includes a free pre-move site assessment, a dedicated move coordinator, and comprehensive insurance coverage. We offer weekend and after-hours availability as standard, so your business keeps running while we handle the heavy lifting.",
    ],
    faqItems: [
      {
        question: "Can you move our Sunshine Coast office on a weekend?",
        answer:
          "Yes. Weekend and after-hours moves are standard for our Sunshine Coast business customers. We work around your schedule, including Saturdays, Sundays, and evenings, to minimise disruption to your operations.",
      },
      {
        question: "Do you handle IT equipment for Sunshine Coast office moves?",
        answer:
          "Yes. Our team safely handles and transports computers, servers, monitors, printers, and all other IT equipment with protective wrapping and secure loading. We recommend backing up all data before the move.",
      },
      {
        question: "How do you plan a large office move on the Sunshine Coast?",
        answer:
          "We start with a free on-site consultation to assess both locations, plan the logistics, and build a detailed moving schedule. Our team handles everything from building access arrangements to equipment requirements and floor-plan placement.",
      },
      {
        question: "Are you insured for commercial moves on the Sunshine Coast?",
        answer:
          "Yes. R2G carries comprehensive public liability and goods-in-transit insurance on every commercial move on the Sunshine Coast. Your business assets are fully protected from pickup to delivery.",
      },
      {
        question: "Do you provide storage for office furniture on the Sunshine Coast?",
        answer:
          "Yes. R2G offers secure short and long-term storage options. This is perfect if there is a gap between your move-out and move-in dates, or if you need to store surplus furniture and equipment during a fit-out period.",
      },
      {
        question: "What areas on the Sunshine Coast do you service for office moves?",
        answer:
          "We cover the entire Sunshine Coast region, including Maroochydore, Caloundra, Mooloolaba, Birtinya, Buderim, Nambour, Noosa, Coolum, and all surrounding suburbs. We also handle moves between the Sunshine Coast and Brisbane.",
      },
      {
        question: "Can you relocate medical offices near the Birtinya health precinct?",
        answer:
          "Yes. We have experience relocating medical practices, specialist clinics, and allied health offices in and around the Birtinya health precinct near Sunshine Coast University Hospital. We handle sensitive medical equipment, patient records, and examination furniture with appropriate care and privacy protocols.",
      },
      {
        question: "Do you move offices between the Sunshine Coast and Brisbane?",
        answer:
          "Yes. We regularly handle office relocations between Brisbane and the Sunshine Coast via the Bruce Highway and M1 corridor. Our team plans logistics to avoid peak-hour congestion and can stage items at our depot if needed.",
      },
    ],
    tips: [
      {
        heading: "Plan for Bruce Highway travel times.",
        text: "The Sunshine Coast is connected to Brisbane via the Bruce Highway, which can experience heavy congestion during peak hours and holiday periods. Our team plans move logistics around traffic patterns and can stage equipment at our depot if a split-day approach is more efficient.",
      },
      {
        heading: "Book building access in the Maroochydore CBD early.",
        text: "The Maroochydore City Centre precinct and commercial buildings along Aerodrome Road and Duporth Avenue may require advance notice for loading zone permits and after-hours access. Let us know your building details when booking so we can coordinate ahead of time.",
      },
      {
        heading: "Consider the health precinct's access requirements.",
        text: "Offices near the Sunshine Coast University Hospital at Birtinya and the adjacent health precinct may have specific access rules, parking restrictions, and security protocols. We coordinate with building management to ensure smooth access on moving day.",
      },
      {
        heading: "Allow extra time for Noosa Heads office moves.",
        text: "Noosa Heads and Noosa Junction have limited truck access in some streets, particularly near Hastings Street. Our team assesses access in advance and uses appropriately sized vehicles to navigate narrow streets and tight car parks.",
      },
    ],
    metaTitle:
      "Office Removalists Sunshine Coast | Trusted Commercial Movers",
    metaDescription:
      "Professional office removalists on the Sunshine Coast. Maroochydore, Caloundra, Birtinya. Fully insured, weekend moves available. Free quote.",

    // ── Unique content fields ──────────────────────────────────────────────
    heroSubtitle:
      "Professional office and commercial relocations across the Sunshine Coast. From the Maroochydore CBD to the Birtinya health precinct, our team delivers smooth moves with minimal downtime for your business.",
    featureCards: [
      {
        title: "Health Precinct Specialists",
        bullets: [
          "Birtinya medical and allied health relocations",
          "Sensitive equipment and patient record handling",
          "Privacy-compliant protocols for healthcare moves",
        ],
      },
      {
        title: "Growing Region Expertise",
        bullets: [
          "Maroochydore City Centre new developments",
          "Caloundra, Noosa, and hinterland coverage",
          "Brisbane to Sunshine Coast corridor moves",
        ],
      },
      {
        title: "Flexible Scheduling",
        bullets: [
          "Weekend and after-hours availability standard",
          "Phased moves for larger offices",
          "Bruce Highway logistics planning included",
        ],
      },
    ],
    schedulingCards: [
      {
        title: "Weekend Moves",
        desc: "Full Saturday and Sunday crews so your Sunshine Coast office loses zero weekday trading hours.",
      },
      {
        title: "After-Hours",
        desc: "Evening relocations ideal for medical suites and professional offices that cannot close during the day.",
      },
      {
        title: "Corridor Planning",
        desc: "Brisbane to Sunshine Coast moves scheduled around Bruce Highway traffic windows for efficient delivery.",
      },
    ],
    servicesList: [
      "Free pre-move site assessment",
      "Workstation disassembly and reassembly",
      "Medical and specialist equipment handling",
      "Server room and IT equipment relocation",
      "Secure document and filing cabinet transport",
      "Floor-plan labelling and placement",
      "After-hours and weekend availability",
      "Full public liability and transit insurance",
    ],
    howItWorksSteps: [
      {
        number: "01",
        title: "On-Site Consultation",
        text: "Our team visits both locations on the Sunshine Coast, checks building access and lift dimensions, maps the floor plan, and builds a detailed move schedule. You receive a fixed-price quote with no surprises.",
      },
      {
        number: "02",
        title: "Pack, Protect and Relocate",
        text: "We arrive on schedule. Every item is wrapped, labelled, and loaded with care. IT equipment and medical gear receive double-padded protection. We plan routes around Bruce Highway congestion to keep your move on time.",
      },
      {
        number: "03",
        title: "Install and Handover",
        text: "Everything is placed exactly to your new floor plan. Workstations are connected, common areas unpacked, and equipment positioned. Your Sunshine Coast team starts the next business day ready to work.",
      },
    ],
    reviews: [
      {
        text: "R2G relocated our medical practice from Caloundra to Birtinya near the hospital. They handled all the equipment carefully and we were seeing patients again by Monday. Very professional team.",
        name: "Dr. Karen W.",
        company: "Sunshine Coast Family Medicine",
        date: "February 2025",
      },
      {
        text: "We moved our 20-person agency from Brisbane to Maroochydore. R2G planned the Bruce Highway logistics perfectly and had us set up in the new office by Saturday afternoon. Impressive service.",
        name: "Tom B.",
        company: "CoastLine Creative Agency",
        date: "December 2024",
      },
      {
        text: "Moving out of our Noosa office was tricky with the narrow street access, but R2G had the right size truck and crew. Everything arrived at our new Mooloolaba office in perfect condition.",
        name: "Rachel M.",
        company: "Noosa Legal Partners",
        date: "October 2024",
      },
    ],
    businessDistricts: [
      "Maroochydore CBD",
      "Caloundra",
      "Mooloolaba",
      "Birtinya",
      "Noosa Heads",
      "Noosa Junction",
      "Buderim",
      "Nambour",
      "Sippy Downs",
      "Kawana",
      "Warana",
      "Coolum Beach",
      "Palmwoods",
      "Beerwah",
      "Landsborough",
      "Maleny",
      "Peregian Springs",
      "Twin Waters",
    ],
    ctaSubtitle:
      "Get a free, no-obligation quote for your Sunshine Coast office move. We will assess your site, plan the logistics, and deliver a detailed proposal, usually within the hour.",

    // ── Deep-SEO differentiation ───────────────────────────────────────────
    industrySpecializations: [
      {
        title: "Healthcare and Medical",
        description:
          "Medical centres, dental practices, physiotherapy clinics, and specialist suites in and around the Birtinya health precinct, Caloundra, and Maroochydore. We handle examination equipment, imaging machines, and patient records with privacy-compliant protocols.",
      },
      {
        title: "Professional Services",
        description:
          "Law firms, accounting practices, financial advisors, and real estate agencies across the Maroochydore CBD, Noosa, and Caloundra commercial precincts. Secure handling of confidential files, heavy safes, and boardroom furniture.",
      },
      {
        title: "Education and Research",
        description:
          "University of the Sunshine Coast departments, TAFE campuses, and research organisations in the Sippy Downs knowledge precinct. We coordinate with campus facility teams and work around academic schedules.",
      },
      {
        title: "Tourism and Creative",
        description:
          "Digital agencies, tourism operators, surf brands, and creative studios across Noosa, Mooloolaba, and the Sunshine Coast hinterland. Flexible scheduling around seasonal business peaks and creative workspace configurations.",
      },
    ],
    localKnowledge: {
      heading: "Why Sunshine Coast Office Moves Need Local Expertise",
      paragraphs: [
        "The Sunshine Coast's commercial landscape is spread across multiple distinct centres rather than a single CBD. Maroochydore, Caloundra, Noosa, and Birtinya each have their own access requirements, parking rules, and building management processes. R2G has completed office moves across all major Sunshine Coast precincts and handles the logistics of each location's unique requirements.",
        "The Birtinya health precinct, anchored by the Sunshine Coast University Hospital, is one of the region's fastest-growing commercial areas. Medical and allied health practices relocating to or within this precinct face specific challenges including sensitive equipment handling, patient record security, and coordination with hospital-adjacent building management. Our team is experienced with these requirements.",
        "Bruce Highway congestion between Brisbane and the Sunshine Coast can add significant time to inter-city moves, especially during morning and afternoon peak hours and holiday weekends. R2G plans all corridor moves around traffic patterns, uses real-time highway monitoring, and can stage items at our Archerfield depot if a split approach delivers a better outcome for your business.",
      ],
    },
    caseStudy: {
      headline: "Sunshine Coast Medical Practice - Caloundra to Birtinya",
      business: "A 12-person medical practice relocating from a ground-floor Caloundra clinic to a purpose-built suite in the Birtinya health precinct.",
      challenge:
        "The practice had three examination rooms worth of medical equipment, a small pathology area, and a server running their patient management system. They could not afford to close for more than one business day, and all patient records needed secure, privacy-compliant handling throughout the move.",
      solution:
        "R2G completed the move over a single weekend. Friday evening: the IT provider disconnected the server while our crew wrapped and loaded all medical equipment and furniture. Saturday: everything was delivered to Birtinya, positioned per the new floor plan, and the server was reconnected by Saturday afternoon. Sunday morning: the practice manager completed a full walk-through and sign-off.",
      result:
        "The practice opened Monday morning on schedule with zero missed appointments. All patient records were intact, medical equipment was operational, and staff reported the transition was seamless.",
    },
  },
  {
    slug: "townsville",
    name: "Townsville",
    region: "North Queensland",
    state: "QLD",
    postcode: "4810",
    latitude: -19.2590,
    longitude: 146.8169,
    address: "36 Abbott St, Cairns City QLD 4870",
    aboutParagraphs: [
      "R2G Transport & Storage delivers professional office relocations across Townsville and the North Queensland region. From the Townsville City CBD to commercial precincts in Aitkenvale, Garbutt, and the Stuart industrial area, our experienced team handles commercial moves of every size.",
      "Townsville is the economic hub of North Queensland, home to major mining company offices, government departments, Defence Force administration, and a growing healthcare and education sector anchored by James Cook University and Townsville University Hospital. We understand the unique demands of moving offices in this region, including the tropical climate, long-distance logistics, and the mix of modern commercial buildings and older CBD premises.",
      "Every Townsville office move includes a free pre-move site assessment, a dedicated move coordinator, and comprehensive insurance coverage. We work weekends and after-hours as standard, because your business needs to be operational again as quickly as possible.",
    ],
    faqItems: [
      {
        question: "Can you move our Townsville office on a weekend?",
        answer:
          "Yes. Weekend and after-hours moves are standard for our Townsville business customers. We schedule around your operations so your team avoids losing productive weekday hours.",
      },
      {
        question: "Do you handle IT equipment for Townsville office moves?",
        answer:
          "Yes. Our team safely handles and transports computers, servers, monitors, printers, and all other IT equipment with protective wrapping and secure loading. We recommend backing up all data before the move as a precaution.",
      },
      {
        question: "How do you plan a large office move in Townsville?",
        answer:
          "We start with a free on-site consultation to assess both locations, plan the logistics, and create a detailed moving schedule. Our team handles everything from building access to equipment requirements and floor-plan placement at the new premises.",
      },
      {
        question: "Are you insured for commercial moves in Townsville?",
        answer:
          "Yes. R2G carries comprehensive public liability and goods-in-transit insurance on every commercial move in Townsville. Your business assets are fully protected from pickup to delivery.",
      },
      {
        question: "Do you provide storage for office furniture in Townsville?",
        answer:
          "Yes. R2G offers secure short and long-term storage options for Townsville businesses. This is ideal if there is a gap between your move-out and move-in dates, or if you need to store surplus furniture during a fit-out period.",
      },
      {
        question: "Can you relocate mining company offices in Townsville?",
        answer:
          "Yes. We regularly relocate offices for mining and resources companies across Townsville, including administrative offices, project management hubs, and field coordination centres. We handle heavy-duty furniture, secure document storage, and specialised equipment with care.",
      },
      {
        question: "Do you handle government office relocations in Townsville?",
        answer:
          "Yes. R2G has experience relocating state and federal government department offices, council facilities, and Defence administration spaces across Townsville. We meet public-sector compliance requirements and coordinate with facility management teams.",
      },
      {
        question: "Can you coordinate moves around the wet season in Townsville?",
        answer:
          "Yes. Our team is experienced with North Queensland's tropical conditions. Every Townsville office move includes waterproof wrapping for electronics and documents as standard. If severe weather forces a delay, we reschedule at no cost and prioritise your move once conditions clear.",
      },
    ],
    tips: [
      {
        heading: "Plan around the wet season if possible.",
        text: "Townsville's wet season (November to April) brings heavy tropical rain and occasional cyclone activity. While our team moves offices in all conditions with waterproof wrapping as standard, scheduling between May and October means fewer weather-related delays and more predictable timelines.",
      },
      {
        heading: "Coordinate building access for CBD offices early.",
        text: "Townsville CBD commercial buildings along Flinders Street, Sturt Street, and Walker Street may require advance notice for loading zone access and after-hours entry. Let us know your building details when booking so we can arrange permits and coordinate with management.",
      },
      {
        heading: "Factor in Lavarack Barracks access requirements.",
        text: "If your office is located within or near Lavarack Barracks in the Stuart area, there may be security clearance and access protocols to follow. Provide details when booking so we can complete any necessary approvals before moving day.",
      },
      {
        heading: "Notify your IT provider at least two weeks ahead.",
        text: "If your Townsville office uses a managed IT provider, coordinate server disconnection, network cabling at the new premises, and phone system transfers at least two weeks before the move. R2G can liaise directly with your IT team on the day to keep everything on schedule.",
      },
    ],
    metaTitle:
      "Office Removalists Townsville | Trusted Commercial Movers NQ",
    metaDescription:
      "Professional office removalists in Townsville. Mining offices, government relocations, fully insured. Weekend and after-hours moves. Free quote.",

    // ── Unique content fields ──────────────────────────────────────────────
    heroSubtitle:
      "Professional office and commercial relocations across Townsville and North Queensland. Mining offices, government departments, and healthcare facilities relocated with minimal downtime and full insurance coverage.",
    featureCards: [
      {
        title: "Mining and Resources",
        bullets: [
          "Mining admin and project management offices",
          "Heavy-duty furniture and secure document handling",
          "Field coordination centre relocations",
        ],
      },
      {
        title: "Government and Defence",
        bullets: [
          "State and federal department moves",
          "Lavarack Barracks admin office relocations",
          "Compliance with public-sector requirements",
        ],
      },
      {
        title: "Tropical-Ready Moves",
        bullets: [
          "Wet-season contingency plans for every job",
          "Waterproof wrapping for electronics and documents",
          "Cyclone-aware scheduling across North Queensland",
        ],
      },
    ],
    schedulingCards: [
      {
        title: "Weekend Moves",
        desc: "Saturday and Sunday availability so your Townsville office loses zero weekday trading hours.",
      },
      {
        title: "After-Hours",
        desc: "Evening relocations ideal for CBD professional offices and government departments with daytime access restrictions.",
      },
      {
        title: "Wet-Season Planning",
        desc: "Flexible scheduling with weather monitoring. We reschedule at no cost if severe weather forces a delay.",
      },
    ],
    servicesList: [
      "Free pre-move site assessment",
      "Workstation disassembly and reassembly",
      "Mining and government office specialists",
      "Waterproof wrapping for tropical conditions",
      "Server room and IT equipment handling",
      "Floor-plan labelling and placement",
      "After-hours and weekend availability",
      "Full public liability and transit insurance",
    ],
    howItWorksSteps: [
      {
        number: "01",
        title: "Site Assessment and Tropical Planning",
        text: "We visit your Townsville office, check building access and loading zones, assess any wet-season timing considerations, and build a detailed move plan. You receive a fixed-price quote with no hidden fees.",
      },
      {
        number: "02",
        title: "Wrap, Protect and Relocate",
        text: "Our crew arrives on schedule. Every item gets waterproof wrapping and protective padding as standard. IT equipment, servers, and sensitive documents are double-protected for tropical conditions.",
      },
      {
        number: "03",
        title: "Set Up and Walk-Through",
        text: "Everything is positioned exactly to your new floor plan. Desks are assembled, workstations connected, and common areas set up. Your Townsville team walks in the next business day ready to work.",
      },
    ],
    reviews: [
      {
        text: "R2G relocated our mining admin office from the CBD to Aitkenvale over a single weekend. Heavy desks, secure filing, server room. Everything was set up and operational by Monday morning.",
        name: "Craig D.",
        company: "NQ Resources Management",
        date: "March 2025",
      },
      {
        text: "We needed to move our government department office during the wet season. R2G had waterproof wrapping on everything and a backup weather plan ready. Not a single document was damaged.",
        name: "Sandra J.",
        company: "Queensland Government Services",
        date: "January 2025",
      },
      {
        text: "R2G moved our accounting firm from Flinders Street to a new space in the CBD. They worked Saturday morning and we were fully set up before lunch. Very efficient team.",
        name: "Paul T.",
        company: "Townsville Financial Group",
        date: "August 2024",
      },
    ],
    businessDistricts: [
      "Townsville City CBD",
      "Aitkenvale",
      "Garbutt",
      "Stuart",
      "Wulguru",
      "Cranbrook",
      "Currajong",
      "Hyde Park",
      "North Ward",
      "South Townsville",
      "Belgian Gardens",
      "Kirwan",
      "Thuringowa Central",
      "Douglas",
      "Annandale",
      "Bohle",
      "Deeragun",
      "Idalia",
    ],
    ctaSubtitle:
      "Get a free, no-obligation quote for your Townsville office move. We will assess your site, plan around tropical weather conditions, and deliver a detailed proposal, usually within the hour.",

    // ── Deep-SEO differentiation ───────────────────────────────────────────
    industrySpecializations: [
      {
        title: "Mining and Resources",
        description:
          "Administrative offices, project management hubs, and field coordination centres for mining and resources companies based in Townsville. We handle heavy-duty furniture, secure document storage systems, and the specialised equipment found in resource-sector offices.",
      },
      {
        title: "Government and Defence",
        description:
          "State and federal government departments, Townsville City Council offices, and Defence Force administration at Lavarack Barracks and RAAF Base Townsville. We meet public-sector compliance requirements and coordinate with facility management and security teams.",
      },
      {
        title: "Healthcare and Education",
        description:
          "Medical practices, specialist clinics, and James Cook University departments across Townsville. We handle sensitive medical equipment, research materials, and patient records with appropriate care and privacy-compliant protocols.",
      },
      {
        title: "Professional Services",
        description:
          "Law firms, accounting practices, insurance brokers, and engineering consultancies in the Townsville CBD and Aitkenvale. Secure handling of confidential files, heavy safes, and boardroom furniture.",
      },
    ],
    localKnowledge: {
      heading: "Why Townsville Office Moves Need Local Expertise",
      paragraphs: [
        "Townsville CBD's commercial buildings along Flinders Street, Sturt Street, and Walker Street vary significantly in age and access. Newer buildings typically offer freight lifts and dedicated loading docks, while older premises may require stair carries and street-level loading with council permits. R2G has moved offices across the Townsville CBD and knows the access requirements for the major commercial buildings.",
        "Townsville's role as North Queensland's mining and government hub means many office moves involve heavy-duty furniture, secure filing systems, and compliance requirements. Mining company offices often contain safes, plan rooms with large-format documents, and specialised communications equipment. Government relocations may require chain-of-custody documentation for sensitive materials. Our team is experienced with both scenarios.",
        "North Queensland's wet season (November to April) brings intense tropical downpours, flooding, and occasional cyclone activity. Every Townsville office move includes waterproof wrapping for all electronics, documents, and upholstered furniture as standard. If a cyclone warning is issued or conditions become unsafe, we reschedule at no cost and prioritise your move as soon as the weather clears.",
      ],
    },
    caseStudy: {
      headline: "Townsville Mining Office - CBD to Aitkenvale",
      business: "A 20-person mining administration office relocating from the Townsville CBD to a new commercial space in Aitkenvale.",
      challenge:
        "The office housed heavy-duty plan room furniture, a secure filing system with confidential project documents, a 4-rack server room, and 20 workstations with dual monitors. The old CBD building had no freight lift, requiring all items to be carried down two flights of stairs. The move needed to be completed over a single weekend.",
      solution:
        "R2G deployed a dedicated stair-carry team for the CBD premises on Friday evening while the IT provider disconnected servers. Saturday morning: all furniture, filing systems, and equipment were delivered to Aitkenvale. The server room was reconnected by Saturday afternoon and workstations were assembled and placed per the floor plan by Sunday morning.",
      result:
        "The office opened Monday at 7:30 am fully operational. All secure documents were accounted for with chain-of-custody sign-off, every workstation was connected, and the team reported zero issues with the transition.",
    },
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
