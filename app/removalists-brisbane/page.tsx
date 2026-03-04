import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { PHONE, PHONE_HREF, BRISBANE_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Removalists Brisbane | R2G Transport & Storage",
  description:
    "Looking for reliable removalists in Brisbane? R2G Transport & Storage offers professional local house and unit moving services across all Brisbane suburbs. Get your free quote.",
  keywords: ["removalists brisbane", "brisbane removalists", "local removals brisbane", "house movers brisbane"],
  openGraph: {
    title: "Removalists Brisbane | R2G Transport & Storage",
    description: "Professional local removalists in Brisbane. Fully insured. Get a free quote today.",
    url: "https://r2g.com.au/removalists-brisbane",
  },
};

const faqs = [
  {
    question: "Do you cover all Brisbane suburbs?",
    answer: "Yes! We cover all Brisbane suburbs and surrounding areas including the Gold Coast, Ipswich, and Logan. Our Archerfield depot puts us perfectly positioned for the greater Brisbane region.",
  },
  {
    question: "How do you charge for local moves in Brisbane?",
    answer: "We offer competitive hourly rates for local moves with transparent, upfront pricing and no hidden fees. Contact us for a free quote tailored to your specific move.",
  },
  {
    question: "Can you also help me move from Brisbane to Cairns?",
    answer: "Absolutely. With depots in both Brisbane and Cairns, we specialise in moves between the two cities. Ask us about our regular scheduled interstate runs for a competitive rate.",
  },
  {
    question: "Do you offer packing services in Brisbane?",
    answer: "Yes, our professional packing team operates out of our Brisbane depot. We can pack your entire home or just the tricky stuff — fragile items, kitchen, garage, you name it.",
  },
];

export default function RemovalistsBrisbanePage() {
  return (
    <>
      <PageHero
        title="Removalists Brisbane"
        subtitle="Professional local house and unit removals across all Brisbane suburbs. Reliable, careful, and competitively priced."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Local Removalists", href: "/removalists-cairns" }, { label: "Removalists Brisbane" }]}
      />

      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#F5C400]" />
                <span className="text-[#F5C400] text-sm font-semibold uppercase tracking-widest">Brisbane</span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">Brisbane&apos;s Trusted Local Removalists</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  R2G Transport &amp; Storage operates a full-service removals depot in Archerfield, Brisbane, giving us the reach to cover all Brisbane suburbs, the Gold Coast, Ipswich, and beyond.
                </p>
                <p>
                  Whether you&apos;re moving from a unit in Brisbane CBD to a house in Sunnybank, or relocating your family from Chermside to Carindale — our professional Brisbane removalists are ready to make it happen efficiently and safely.
                </p>
                <p>
                  Our Brisbane team brings the same standard of care and professionalism that has made R2G one of Queensland&apos;s most trusted removalist companies.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8 border border-gray-100">
                <p className="text-[#F5C400] text-sm font-bold uppercase tracking-widest mb-2">Brisbane Depot</p>
                <p className="text-[#1A1A1A] font-semibold">{BRISBANE_ADDRESS}</p>
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">What&apos;s Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "All Brisbane suburbs covered",
                  "Professional loading & unloading",
                  "Furniture wrapping & blankets",
                  "Disassembly & reassembly",
                  "Heavy item specialists",
                  "Modern, clean trucks",
                  "Competitive hourly rates",
                  "Fully insured",
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

            <div>
              <div className="bg-[#1A1A1A] rounded-2xl p-8 sticky top-28">
                <h3 className="text-white font-bold text-xl mb-2">Get a Free Quote</h3>
                <p className="text-gray-400 text-sm mb-6">No obligation. We&apos;ll respond within hours.</p>
                <Link href="/quote" className="block w-full bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg transition-colors text-center mb-3">
                  Request a Quote Online
                </Link>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full border border-white/20 text-white hover:border-[#F5C400] hover:text-[#F5C400] font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <FAQ items={faqs} heading="Brisbane Removals FAQ" />
      <CTABanner heading="Moving in Brisbane?" subtext="Get a free quote from R2G Transport & Storage. Professional, reliable Brisbane removalists." />
    </>
  );
}
