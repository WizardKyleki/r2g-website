import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const CTABanner = dynamic(() => import("@/components/CTABanner"));
// constants imported as needed

export const metadata: Metadata = {
  title: "Brisbane Moving Checklist 2026 | Week-by-Week Guide",
  description:
    "Free Brisbane moving checklist. Week-by-week guide covering everything from booking removalists to settling in. Download or bookmark for your next Brisbane move.",
  keywords: [
    "brisbane moving checklist",
    "moving checklist brisbane",
    "moving house checklist qld",
    "relocation checklist brisbane",
    "moving to brisbane checklist",
  ],
  alternates: { canonical: "https://www.r2g.com.au/brisbane-moving-checklist" },
  openGraph: {
    title: "Brisbane Moving Checklist 2026 | R2G Transport & Storage",
    description:
      "Free week-by-week Brisbane moving checklist. Everything you need for a smooth move.",
    url: "https://www.r2g.com.au/brisbane-moving-checklist",
    type: "website",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Brisbane Moving Checklist 2026",
  description:
    "A complete week-by-week checklist for moving house in Brisbane, Queensland. Covers everything from booking removalists to settling into your new home.",
  totalTime: "P56D",
  step: [
    {
      "@type": "HowToStep",
      name: "6-8 Weeks Before Your Move",
      text: "Research and compare Brisbane removalists. Get at least 3 written quotes. Set your moving budget. Start decluttering room by room. Notify your landlord or begin settlement process. Research your new suburb. Book your removalist.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "4-5 Weeks Before Your Move",
      text: "Start packing non-essential items. Order packing supplies or arrange packing services. Redirect your mail via Australia Post. Notify employer, bank, insurance, and health providers. Book storage if needed. Transfer or cancel utility accounts. Arrange school transfers if applicable.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "2-3 Weeks Before Your Move",
      text: "Pack room by room and label every box. Take photos of electronics setups. Arrange parking permits for permit zones. Confirm your removalist booking. Arrange pet or child care for moving day. Use up perishable food. Clean out garage, shed, and outdoor areas.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "1 Week Before Your Move",
      text: "Finish packing everything except daily essentials. Prepare a moving day essentials bag. Defrost and clean the fridge. Disassemble furniture or confirm your removalist will handle it. Confirm final details with your removalist. Take final meter readings. Back up important files.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Moving Day",
      text: "Do a final walk-through of every room and cupboard. Check all windows and doors are locked. Be available to direct the removalist team. Take photos of your old property for bond purposes. Keep valuables and medications with you.",
      position: 5,
    },
    {
      "@type": "HowToStep",
      name: "First Week in Your New Home",
      text: "Unpack essentials first. Test all appliances and check for damage. Update your address with the ATO, Medicare, electoral roll, and vehicle registration. Meet your neighbours. Leave a Google review for your removalist.",
      position: 6,
    },
  ],
};

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
      name: "Brisbane Moving Checklist",
      item: "https://www.r2g.com.au/brisbane-moving-checklist",
    },
  ],
};

/* ── Checklist data ───────────────────────────────────────────────── */

interface ChecklistSection {
  heading: string;
  items: (string | { text: string; href: string })[];
}

const checklist: ChecklistSection[] = [
  {
    heading: "6\u20138 Weeks Before Your Move",
    items: [
      { text: "Research and compare Brisbane removalists", href: "/removalists-brisbane" },
      { text: "Get at least 3 written quotes", href: "/quote" },
      "Set your moving budget and track all costs in a spreadsheet",
      "Start decluttering room by room. Sell, donate, or dump anything you no longer need",
      "Notify your landlord in writing, or begin the settlement process with your solicitor",
      "Research your new suburb, including school catchments, public transport, and local services",
      { text: "Book your preferred removalist once you have compared quotes and checked reviews", href: "/quote" },
    ],
  },
  {
    heading: "4\u20135 Weeks Before",
    items: [
      "Start packing non-essential items like seasonal clothes, books, and decorations",
      { text: "Order packing supplies, or ask your removalist about professional packing services", href: "/packing-services-brisbane" },
      "Arrange to redirect your mail via Australia Post (auspost.com.au). This takes 3 business days to activate",
      "Notify your employer, bank, insurance providers, and health practitioners of your new address",
      { text: "Book storage if there is a gap between your move-out and move-in dates", href: "/storage-brisbane" },
      "Transfer or cancel utility accounts. Set up electricity, gas, internet, and water at your new address",
      "Arrange school transfers and enrolments if applicable",
    ],
  },
  {
    heading: "2\u20133 Weeks Before",
    items: [
      "Pack room by room and label every box with the room name and a brief list of contents",
      "Take photos of your TV, router, and speaker setups before disconnecting cables",
      "Arrange parking permits if moving to or from a permit zone in inner Brisbane (check your local council website)",
      "Confirm your removalist booking and provide access details for both addresses, including stairs, lifts, and parking",
      "Arrange pet care or child care for moving day so you can focus on the move",
      "Use up perishable food and frozen items. Plan meals around what is left in the pantry and freezer",
      "Clean out the garage, shed, and any outdoor areas. These are easy to forget until the last minute",
    ],
  },
  {
    heading: "1 Week Before",
    items: [
      "Finish packing everything except the items you will use in the final days",
      "Prepare a moving day essentials bag with your phone charger, toiletries, medications, snacks, a change of clothes, and important documents",
      "Defrost and clean the fridge at least 24 hours before the move. Leave the door open to air it out",
      { text: "Confirm with your removalist about furniture disassembly and reassembly", href: "/removalists-brisbane" },
      "Confirm final details with your removalist including arrival time, address access, and parking arrangements",
      "Take final meter readings at your current home and photograph them for your records",
      "Back up important files, photos, and documents to cloud storage or an external drive",
    ],
  },
  {
    heading: "Moving Day",
    items: [
      "Do a final walk-through of every room, cupboard, and storage area before the truck leaves",
      "Check that all windows and doors are locked and secure before handing over the keys",
      "Be available to direct the removalist team at both the pickup and delivery addresses",
      "Take dated photos of your old property for bond or condition report purposes",
      "Keep valuables, important documents, and daily medications with you rather than on the truck",
    ],
  },
  {
    heading: "First Week in Your New Home",
    items: [
      "Unpack essentials first: kitchen basics, bathroom supplies, and bedding so you can eat, shower, and sleep comfortably",
      "Test all appliances and check for any transport damage while unpacking. Report issues to your removalist promptly",
      "Update your address with the ATO, Medicare, electoral roll, vehicle registration (TMR in Queensland), and your driver licence",
      "Introduce yourself to your neighbours and explore the local area, parks, shops, and public transport",
      "Leave a Google review for your removalist if you had a good experience. It helps other Brisbane families find reliable movers",
    ],
  },
];

const tips = [
  {
    title: "Watch the Weather",
    description:
      "Brisbane summers bring afternoon storms and heavy rain. If you are moving between November and March, ask your removalist about weatherproof wrapping for furniture and mattresses. Have tarps and towels on hand just in case.",
  },
  {
    title: "Plan Around Traffic",
    description:
      "Avoid scheduling your move during peak hours on Gympie Road, the Pacific Motorway (M1), or the Ipswich Motorway. Brisbane traffic between 7 and 9am and 4 and 6pm can add significant time to your move. A mid-morning start works best.",
  },
  {
    title: "Check Parking Restrictions",
    description:
      "Inner Brisbane suburbs like New Farm, West End, Paddington, and South Brisbane often require council permits for moving trucks. Check with Brisbane City Council at least a week before your move to avoid fines or delays.",
  },
  {
    title: "Book Early in Peak Season",
    description:
      "November through January is the busiest time for Brisbane removalists. End-of-month weekends are especially tight. Book at least 3 to 4 weeks ahead during this period, or consider a mid-week move for better availability and pricing.",
  },
];

const relatedLinks = [
  { title: "Removalists Brisbane", desc: "Local removalists covering all Brisbane suburbs.", href: "/removalists-brisbane" },
  { title: "Cost of Moving Brisbane", desc: "How much does it cost to move in Brisbane? Full breakdown.", href: "/blog/cost-of-moving-brisbane" },
  { title: "Moving to Brisbane Guide", desc: "Everything you need to know about relocating to Brisbane.", href: "/blog/moving-to-brisbane-guide" },
  { title: "Packing Services", desc: "Professional packing for your Brisbane move.", href: "/packing-services-brisbane" },
  { title: "Storage Brisbane", desc: "Secure short and long-term storage in Brisbane.", href: "/storage-brisbane" },
  { title: "Interstate Removalists", desc: "Moving to or from Brisbane? We cover all major routes.", href: "/interstate-removalists" },
  { title: "Brisbane Northside", desc: "Removalists covering all northern Brisbane suburbs.", href: "/removalists-brisbane/northside" },
  { title: "Brisbane Southside", desc: "Removalists covering all southern Brisbane suburbs.", href: "/removalists-brisbane/southside" },
  { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials for your move.", href: "/boxes" },
];

/* ── Check icon (reused across lists) ─────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#F5C400] shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Page component ───────────────────────────────────────────────── */
export default function BrisbaneMovingChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1A1A1A] to-[#252525]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5C400]/8 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #F5C400 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-20">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#F5C400] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Resources</span>
            <span>/</span>
            <span className="text-gray-300">Brisbane Moving Checklist</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F5C400]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Brisbane Moving Checklist
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Your complete week-by-week guide to moving house in Brisbane. Bookmark this page or print it out so nothing slips through the cracks on your next move.
          </p>
          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg mt-10">
            <Image
              src="/images/blog-brisbane-moving-checklist.webp"
              alt="R2G Brisbane Moving Checklist with packing supplies"
              title="Brisbane Moving Checklist - R2G Transport & Storage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── CHECKLIST CONTENT ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {checklist.map((section) => (
              <div key={section.heading}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-1 bg-[#F5C400]" />
                  <h2 className="text-2xl font-black text-[#1A1A1A]">
                    {section.heading}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {section.items.map((item, i) => {
                    const isLink = typeof item === "object";
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon />
                        {isLink ? (
                          <span className="text-gray-700 leading-relaxed">
                            <Link
                              href={item.href}
                              className="text-[#F5C400] font-semibold hover:underline"
                            >
                              {item.text}
                            </Link>
                          </span>
                        ) : (
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRISBANE-SPECIFIC TIPS ────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#F5C400]" />
              <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">
                Local Knowledge
              </span>
              <div className="w-8 h-1 bg-[#F5C400]" />
            </div>
            <h2 className="text-3xl font-black text-[#1A1A1A]">
              Brisbane-Specific Moving Tips
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white border border-gray-100 rounded-xl p-6"
              >
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HELPFUL EXTERNAL RESOURCES ──────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-[#1A1A1A]">Helpful Brisbane Moving Resources</h2>
            <p className="text-gray-500 text-sm mt-2">Official links to help you with your Brisbane relocation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Australia Post Mail Redirect", desc: "Set up mail forwarding to your new address.", href: "https://auspost.com.au/receiving/manage-your-mail/redirect-hold-mail" },
              { title: "Brisbane City Council", desc: "Parking permits, waste collection, and local services.", href: "https://www.brisbane.qld.gov.au" },
              { title: "Queensland Transport (TMR)", desc: "Update your licence and vehicle registration.", href: "https://www.tmr.qld.gov.au" },
              { title: "TransLink", desc: "Brisbane public transport routes, fares, and go card.", href: "https://translink.com.au" },
              { title: "Energex", desc: "Connect or transfer your electricity supply.", href: "https://www.energex.com.au" },
              { title: "ATO Address Update", desc: "Update your tax file details online.", href: "https://www.ato.gov.au" },
            ].map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-[#1A1A1A] text-sm group-hover:text-[#F5C400] transition-colors">{link.title}</h3>
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-500 text-xs">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTABanner
        heading="Ready to Start Your Brisbane Move?"
        subtext="Get a free, no-obligation quote from R2G Transport and Storage. Local Brisbane removalists trusted by hundreds of families across South East Queensland."
      />

      {/* ── RELATED LINKS ─────────────────────────────────────────────── */}
      <section className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-5 bg-white border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors"
              >
                <h3 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F5C400] transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-500 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
