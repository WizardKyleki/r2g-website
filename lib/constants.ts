export const SITE_NAME = "R2G Transport & Storage"
export const TAGLINE = "Removalists You Can Trust"
export const DOMAIN = "https://www.r2g.com.au"

export const PHONE = "1300 959 498"
export const PHONE_HREF = "tel:1300959498"
export const EMAIL = "contact@r2g.com.au"
export const CAIRNS_ADDRESS = "36 Abbott St, Cairns City QLD 4870"
export const BRISBANE_ADDRESS = "122 Ashover Circuit, Archerfield, Brisbane QLD 4108"
export const HOURS = "9:00 AM – 5:00 PM"

export const SERVICES = [
  { label: "Moving Home", href: "/removalists-cairns" },
  { label: "Office Removalists", href: "/office-removalists" },
  { label: "Moving Interstate", href: "/interstate-removalists" },
  { label: "Packing", href: "/packing-services-cairns" },
  { label: "Boxes", href: "/boxes" },
  { label: "Storage", href: "/storage-cairns" },
]

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Local Removalists",
    href: "/removalists-cairns",
    children: [
      { label: "Removalists Cairns", href: "/removalists-cairns" },
      { label: "Removalists Brisbane", href: "/removalists-brisbane" },
    ],
  },
  {
    label: "Interstate",
    href: "/interstate-removalists",
    children: [
      { label: "All Interstate Routes", href: "/interstate-removalists" },
      { label: "Interstate Removalists Brisbane", href: "/interstate-removalists/brisbane" },
      { label: "Interstate Removalists Sydney", href: "/interstate-removalists/sydney" },
      { label: "Interstate Removalists Melbourne", href: "/interstate-removalists/melbourne" },
      { label: "Interstate Removalists Gold Coast", href: "/interstate-removalists/gold-coast" },
      { label: "Interstate Removalists Sunshine Coast", href: "/interstate-removalists/sunshine-coast" },
      { label: "Interstate Removalists Cairns", href: "/interstate-removalists/cairns" },
    ],
  },
  {
    label: "Office Removalists",
    href: "/office-removalists",
    children: [
      { label: "All Office Removalists", href: "/office-removalists" },
      { label: "Office Removalists Cairns", href: "/office-removalists/cairns" },
      { label: "Office Removalists Brisbane", href: "/office-removalists/brisbane" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
]

export const heroSubtitle = (locationName: string, region = "Far North Queensland") =>
  `Stress-free moves in ${locationName} and surrounding areas. Locally based, fully insured, and trusted by hundreds of ${region} families. Get your free quote today.`

export const HOME_FAQS = [
  {
    question: "How much do removalists cost in Cairns?",
    answer:
      "Local Cairns moves typically start from $170–$189 per hour for a 2-person team with a truck. Pricing depends on the size of your home, the distance, access difficulty, and any additional services like packing or storage. We provide transparent, competitive quotes with no hidden fees. Contact us for a free, no-obligation quote.",
  },
  {
    question: "How much do removalists cost in Brisbane?",
    answer:
      "Brisbane removals typically start from $160–$185 per hour for a 2-person team and truck. Costs vary based on property size, suburb, floor access, and any packing or storage requirements. R2G Transport & Storage provides upfront, itemised quotes with no hidden fees — call 1300 959 498 or request a quote online.",
  },
  {
    question: "Do you move from Cairns to Brisbane?",
    answer:
      "Yes — Cairns to Brisbane is one of our most popular interstate routes. We offer regular scheduled runs between both cities with door-to-door service, full insurance coverage, and competitive flat-rate pricing. We also service the reverse trip, Brisbane to Cairns.",
  },
  {
    question: "Do you service the Gold Coast and Sunshine Coast?",
    answer:
      "Yes. R2G Transport & Storage services both the Gold Coast and Sunshine Coast for local moves and interstate relocations. Our Brisbane-based team covers all surrounding areas including Surfers Paradise, Broadbeach, Noosa, Maroochydore, and Caloundra.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes, R2G Transport & Storage is fully insured with comprehensive public liability and goods-in-transit insurance. Your belongings are protected throughout every stage of the move — from pickup to delivery.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2–4 weeks in advance, especially during peak periods like December–January and on weekends. We do our best to accommodate last-minute bookings too — give us a call on 1300 959 498.",
  },
]
