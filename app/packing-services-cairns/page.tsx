import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Packing Services Cairns | Professional Packers | R2G Transport & Storage",
  description:
    "Professional packing services in Cairns. R2G Transport & Storage's trained packers handle your belongings with care using quality materials. Full or partial packing available. Get a free quote.",
  keywords: ["packing services cairns", "professional packers cairns", "packing boxes cairns", "removal packing cairns"],
  alternates: { canonical: "https://www.r2g.com.au/packing-services-cairns" },
  openGraph: {
    title: "Packing Services Cairns | Professional Packers | R2G Transport & Storage",
    description: "Professional packing services in Cairns. Quality materials, expert packers, full or partial service. Get a free quote today.",
    url: "https://www.r2g.com.au/packing-services-cairns",
  },
};

const faqs = [
  {
    question: "Do you supply all the packing materials?",
    answer: "Yes! We supply everything — boxes, bubble wrap, packing paper, furniture blankets, tape, and markers. You don't need to source a single thing.",
  },
  {
    question: "Can I choose to have only part of my home packed?",
    answer: "Absolutely. We offer full packing (your entire home) and partial packing (just the kitchen, fragile items, or any specific rooms). You choose what works best for you.",
  },
  {
    question: "How long does packing take?",
    answer: "Packing time varies by home size. A 2-bedroom unit typically takes 3–4 hours with two packers. A 4-bedroom home can take 6–8 hours. We provide an estimate before your move.",
  },
  {
    question: "Do you also unpack at the new home?",
    answer: "Yes, we offer an unpacking service at your new property. Our team will unpack your boxes and place items in the rooms you specify, leaving you to simply settle in.",
  },
  {
    question: "How do you pack fragile items?",
    answer: "Fragile items like glassware, artwork, mirrors, and crockery are individually wrapped in packing paper and bubble wrap, then placed in double-walled boxes with extra cushioning. We take no chances with your valuables.",
  },
];

const materials = [
  { name: "Cardboard Boxes", desc: "Various sizes including wardrobe boxes" },
  { name: "Bubble Wrap", desc: "For fragile and breakable items" },
  { name: "Packing Paper", desc: "Acid-free paper to protect surfaces" },
  { name: "Furniture Blankets", desc: "Heavy-duty protection for furniture" },
  { name: "Stretch Wrap", desc: "For securing drawers and doors" },
  { name: "Packing Tape", desc: "Strong, durable sealing tape" },
  { name: "Markers & Labels", desc: "Clear labelling for easy unpacking" },
  { name: "Wardrobe Boxes", desc: "Keep your clothes crease-free" },
];

export default function PackingServicesPage() {
  return (
    <>
      <PageHero
        title="Packing Services Cairns"
        subtitle="Professional, careful packing using premium materials — so your belongings arrive at your new home in perfect condition."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Packing Services" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Professional Packers</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Let the Experts Handle the Packing
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-professional-packing-service-cairns.webp"
                  alt="R2G professional packers carefully wrapping and boxing belongings for a Cairns move - R2G Packing Services Cairns"
                  title="R2G professional packers carefully wrapping and boxing belongings for a Cairns move"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Packing is the most time-consuming and often most stressful part of any move. Our professional packing service takes that weight off your shoulders entirely.
                </p>
                <p>
                  Our trained packers work quickly and methodically, using premium packing materials to protect every item — from everyday kitchenware to your most precious breakables. Everything is carefully labelled and inventoried so unpacking at the other end is a breeze.
                </p>
                <p>
                  You can choose our full packing service (we pack everything) or a partial packing service (just the tricky or fragile stuff). We can also combine packing with your removal service for a completely seamless moving experience.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
                <div className="border-2 border-[#F5C400] rounded-2xl p-6">
                  <div className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Full Packing</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">We Pack Everything</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Our team packs your entire home from top to bottom — every room, every cupboard, every item.</p>
                  <ul className="space-y-2">
                    {["All rooms & cupboards", "All materials included", "Fully labelled boxes", "Ready to move same day"].map(f => (
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
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Partial Packing</div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">We Pack What You Need</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">Let us handle the hard stuff — fragile items, kitchen, garage, or any specific rooms you choose.</p>
                  <ul className="space-y-2">
                    {["Choose specific rooms", "Fragile item specialists", "Flexible service", "Combine with removal"].map(f => (
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

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Packing Materials We Use</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {materials.map((m) => (
                  <div key={m.name} className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
                    <svg className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get a Packing Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your home and we&apos;ll give you a fast, free quote.</p>
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
                  {["All materials supplied", "Full or partial packing", "Unpacking service available"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-[#F5C400]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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

      <FAQ items={faqs} heading="Packing Services FAQ" />

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1A1A1A] text-center mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Moving Boxes & Supplies", desc: "Quality boxes and packing materials delivered to your door.", href: "/boxes" },
              { title: "Storage Cairns", desc: "Secure short and long-term storage facilities.", href: "/storage-cairns" },
              { title: "Removalists Cairns", desc: "Local moves across Cairns and Far North Queensland.", href: "/removalists-cairns" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group p-5 bg-white border border-gray-100 rounded-xl hover:border-[#F5C400] transition-colors">
                <h3 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F5C400] transition-colors">{link.title}</h3>
                <p className="text-gray-500 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Take the Stress Out of Packing?"
        subtext="Our professional packers in Cairns are ready to help. Get a free, no-obligation quote today."
      />
    </>
  );
}
