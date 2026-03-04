import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Interstate Removals Cairns | Cairns to Brisbane, Sydney & Beyond | R2G Transport & Storage",
  description:
    "Planning an interstate move from Cairns? R2G Transport & Storage offers reliable, fully insured interstate removals to Brisbane, Sydney, Melbourne, and everywhere in between. Shared & exclusive loads. Get a free quote.",
  keywords: [
    "interstate removals cairns",
    "cairns to brisbane removalists",
    "interstate movers cairns",
    "moving interstate from cairns",
    "cairns to sydney removalists",
    "cairns to melbourne removalists",
  ],
  openGraph: {
    title: "Interstate Removals Cairns | R2G Transport & Storage",
    description: "Reliable interstate removals from Cairns to Brisbane, Sydney, Melbourne and beyond. Fully insured. Shared & exclusive loads. Get a free quote today.",
    url: "https://r2g.com.au/interstate-removals-cairns",
  },
};

const routes = [
  { from: "Cairns", to: "Brisbane", time: "2–3 days", km: "~1,700 km" },
  { from: "Cairns", to: "Townsville", time: "1 day", km: "~350 km" },
  { from: "Cairns", to: "Sydney", time: "4–5 days", km: "~2,900 km" },
  { from: "Cairns", to: "Melbourne", time: "5–6 days", km: "~3,500 km" },
  { from: "Cairns", to: "Darwin", time: "2–3 days", km: "~2,800 km" },
  { from: "Cairns", to: "Adelaide", time: "6–7 days", km: "~3,800 km" },
];

const faqs = [
  {
    question: "How long does an interstate move from Cairns take?",
    answer:
      "Transit times depend on your destination. Cairns to Brisbane typically takes 2–3 days, Cairns to Sydney 4–5 days, and Cairns to Melbourne or beyond can take 5–7 days. We&apos;ll confirm the specific schedule and timeline in your quote.",
  },
  {
    question: "What does interstate removal from Cairns cost?",
    answer:
      "Pricing is based on the volume of your load (cubic metres) or the weight, plus distance and any additional services. Shared loads start from around $85–$120 per cubic metre depending on destination. Exclusive (dedicated) loads are priced by the trip. We provide a detailed quote after assessing your needs.",
  },
  {
    question: "What's the difference between a shared load and an exclusive load?",
    answer:
      "A shared load (also called a backload or groupage) means your belongings share truck space with other customers heading in the same direction. It&apos;s significantly more affordable for smaller loads. An exclusive load means a dedicated truck just for your move — your timeline, your truck.",
  },
  {
    question: "Do you offer rail freight for interstate moves from Cairns?",
    answer:
      "Yes. For certain routes and load sizes, rail transport is a reliable and often more cost-effective option. We can arrange rail freight for your belongings as part of a complete door-to-door service — we load at your Cairns property and coordinate delivery at the other end.",
  },
  {
    question: "How is my furniture protected during interstate transit?",
    answer:
      "All items are professionally wrapped in furniture blankets and secured with tie-down straps inside the truck or container. Fragile items receive additional padding and careful placement. We also offer a full pre-packing service using premium materials if you need it.",
  },
  {
    question: "What is the best time to book an interstate move from Cairns?",
    answer:
      "We recommend booking 4–6 weeks in advance for interstate moves — especially for popular routes like Cairns to Brisbane and for peak periods around Christmas and school holidays. Contact us as early as possible to secure your preferred dates.",
  },
  {
    question: "Do you handle interstate office or commercial moves?",
    answer:
      "Yes — we regularly move businesses interstate from Cairns. Our commercial interstate service includes careful handling of IT equipment, furniture disassembly and reassembly, after-hours loading, and flexible scheduling to minimise your downtime.",
  },
];

export default function InterstateRemovalsPage() {
  return (
    <>
      <PageHero
        title="Interstate Removals from Cairns"
        subtitle="Reliable, fully insured long-distance moves from Cairns to Brisbane, Sydney, Melbourne, and everywhere in between. Shared or exclusive loads available."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Interstate Removals" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Long Distance</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Moving Interstate from Cairns Made Easy
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-cairns-removalists-loading-truck.webp"
                  alt="R2G removalists loading truck for an interstate removal from Cairns QLD - R2G Transport & Storage"
                  title="R2G removalists loading truck for an interstate removal from Cairns QLD"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Relocating interstate is one of the biggest moves you&apos;ll ever make — and it deserves a removalist team that takes it as seriously as you do. R2G Transport &amp; Storage has extensive experience moving Cairns families and businesses to destinations all across Australia, from Brisbane to Sydney, Melbourne, Darwin, and everywhere in between.
                </p>
                <p>
                  We handle everything from a careful pack-up of your Cairns home through to safe, secure road or rail transport and professional delivery at your new front door — no matter where in Australia that may be. Our interstate moves are fully insured with goods-in-transit coverage, and we maintain open communication throughout the journey so you always know where your belongings are.
                </p>
                <p>
                  Whether you&apos;re moving a single bedroom&apos;s worth of belongings or an entire 5-bedroom household, we have the right solution at the right price. Our shared load service is ideal for smaller moves, while our exclusive load option gives you a dedicated truck on your schedule.
                </p>
              </div>

              {/* Load options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Shared Load</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Cost-Effective Option</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Your belongings share truck space with other customers on the same route. Ideal for smaller moves and tighter budgets — from ~$85–$120/m³.
                  </p>
                  <ul className="space-y-2">
                    {["Cost-effective for smaller loads", "Regular scheduled runs", "Same insurance coverage", "Flexible booking dates"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Exclusive Load</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Your Truck, Your Time</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    A dedicated truck just for your move. Choose your exact pick-up and delivery dates. Ideal for large households or when timing is critical.
                  </p>
                  <ul className="space-y-2">
                    {["Dedicated truck for your move", "You choose the timeline", "Fastest transit option", "Best for large loads"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mt-10 mb-5">Popular Routes from Cairns</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {routes.map((route) => (
                  <div key={route.to} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{route.from}</span>
                      <svg className="w-4 h-4 text-[#F5C400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="font-bold text-[#1A1A1A]">{route.to}</span>
                    </div>
                    <p className="text-xs text-gray-400">Transit: {route.time} &bull; {route.km}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">What&apos;s Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  "Door-to-door interstate service",
                  "Professional loading & unloading",
                  "Furniture wrapping & protection",
                  "Goods-in-transit insurance",
                  "Regular progress updates",
                  "Shared or exclusive load options",
                  "Rail freight available",
                  "Packing service available",
                  "Disassembly & reassembly",
                  "Storage between moves available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              {/* Planning tips */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Planning Your Interstate Move from Cairns</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#1A1A1A]">Get your quote early.</strong> Interstate moves require coordination between multiple locations and sometimes rail or port logistics. The earlier you get a quote, the better your pricing options and date availability.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Consider a combined move and store.</strong> Not ready to move everything at once? We can move your belongings from Cairns and store them in our Brisbane depot until you&apos;re settled and ready for delivery. It&apos;s a popular option for phased relocations.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">Think about what goes vs. what gets replaced.</strong> For long-distance moves, it sometimes makes more financial sense to sell bulky items locally and purchase replacements at your destination. Our team can advise on what&apos;s worth moving given your destination.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get an Interstate Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Free, no-obligation quote for your interstate move from Cairns.</p>
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
                  {["Goods-in-transit insurance", "Door-to-door service", "Shared & exclusive loads"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[#F5C400] text-xs font-bold uppercase tracking-widest mb-3">Related Services</p>
                  <div className="space-y-2">
                    {[
                      { label: "Packing Services", href: "/packing-services-cairns" },
                      { label: "Storage Cairns", href: "/storage-cairns" },
                      { label: "Local Removalists", href: "/removalists-cairns" },
                    ].map((link) => (
                      <Link key={link.href} href={link.href} className="block text-gray-400 text-sm hover:text-[#F5C400] transition-colors">
                        → {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Interstate Removals FAQ" />
      <CTABanner
        heading="Moving Interstate from Cairns?"
        subtext="Get a free, no-obligation quote for your interstate move. We&apos;ll handle the heavy lifting — you focus on your exciting new chapter."
      />
    </>
  );
}
