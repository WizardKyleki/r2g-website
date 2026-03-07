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
  title: "Office Removals Cairns | Commercial Moving | R2G Transport & Storage",
  description:
    "Professional office and commercial removals in Cairns. R2G Transport & Storage minimises business downtime with efficient, organised office relocations. Get a free quote.",
  keywords: ["office removals cairns", "commercial removalists cairns", "business relocation cairns", "office movers cairns"],
  openGraph: {
    title: "Office Removals Cairns | Commercial Moving | R2G Transport & Storage",
    description: "Professional office relocations in Cairns. Minimal downtime, weekend availability. Get a free quote today.",
    url: "https://r2g.com.au/office-removals",
  },
};

const faqs = [
  {
    question: "Can you move our office on a weekend to avoid disruption?",
    answer: "Absolutely. Weekend and after-hours moves are our specialty for business customers. We understand that every hour of downtime costs money, so we work around your schedule.",
  },
  {
    question: "Do you handle computers and IT equipment?",
    answer: "Yes. Our team is trained to carefully handle and transport computers, servers, monitors, and other sensitive IT equipment. We recommend backing up all data prior to moving as a precaution.",
  },
  {
    question: "Do you help with furniture disassembly and reassembly?",
    answer: "Yes — we can disassemble workstations, desks, partitions, and shelving at the old location and reassemble everything at the new office exactly where you need it.",
  },
  {
    question: "How do you plan a large office move?",
    answer: "We offer a pre-move consultation to walk through both locations, plan the logistics, and create a moving schedule that minimises disruption. Our team coordinates every detail for a smooth transition.",
  },
  {
    question: "Are you insured for commercial moves?",
    answer: "Yes. R2G Transport & Storage carries comprehensive public liability insurance and goods-in-transit insurance covering all commercial and office moves.",
  },
];

export default function OfficeRemovalsPage() {
  return (
    <>
      <PageHero
        title="Office Removals Cairns"
        subtitle="Efficient, professional commercial relocations that minimise downtime and keep your business moving forward."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Office Removals" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Commercial Moving</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                Office Relocations Done Right
              </h2>
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/r2g-office-relocation-cairns.webp"
                  alt="R2G team completing a professional office relocation in Cairns QLD - R2G Removalists Cairns"
                  title="R2G team completing a professional office relocation in Cairns QLD"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Moving your business is a significant undertaking that requires careful planning, precise execution, and minimal disruption. R2G Transport & Storage specialises in commercial relocations across Cairns, with a proven track record of efficient, stress-free office moves.
                </p>
                <p>
                  We work closely with business owners and office managers to plan every aspect of the move — from creating a detailed schedule to coordinating after-hours access. Our goal is simple: get you up and running in your new space as quickly as possible.
                </p>
                <p>
                  Whether you&apos;re relocating a small office of 5 staff or a large corporate environment, our experienced team brings the same level of professionalism and care to every job.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 mb-10">
                {[
                  { title: "Weekend Moves", desc: "Available Saturdays and Sundays to minimise business disruption." },
                  { title: "After-Hours", desc: "Evening moves to keep your business running during the day." },
                  { title: "Full Planning", desc: "Pre-move consultation to map out every step of your relocation." },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h4 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">Our Office Move Services Include</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Pre-move site assessment",
                  "Workstation disassembly & reassembly",
                  "Safe IT equipment handling",
                  "Furniture wrapping & protection",
                  "Labelling & inventory management",
                  "After-hours & weekend availability",
                  "Secure document handling",
                  "Fully insured transit",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get an Office Move Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us about your office move and we&apos;ll provide a tailored quote.</p>
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
                  {["Weekend availability", "Insured commercial moves", "Free site assessment"].map((item) => (
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

      <FAQ items={faqs} heading="Office Removals FAQ" />
      <CTABanner
        heading="Planning an Office Move in Cairns?"
        subtext="Let R2G Transport & Storage handle the logistics. We'll get your business relocated efficiently, safely, and on schedule."
      />
    </>
  );
}
