import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import BlogPostsWidget from "@/components/BlogPostsWidget";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Ready to Move? Get Your Free Quote Today",
  subtext = "Servicing Cairns, Brisbane, Gold Coast, Sunshine Coast and all of Australia. Call us on 1300 959 498 or get an instant quote online.",
}: CTABannerProps) {
  return (
    <>
    <BlogPostsWidget />
    <section className="relative overflow-hidden py-20 bg-[#F5C400]">
      {/* Background decorations */}
      <svg aria-hidden="true" className="absolute top-4 left-4 text-[#1A1A1A] opacity-[0.07]" width="60" height="60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
      <svg aria-hidden="true" className="absolute bottom-4 right-4 text-[#1A1A1A] opacity-[0.07]" width="60" height="60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <svg aria-hidden="true" className="absolute top-6 right-20 text-[#1A1A1A] opacity-[0.13]" width="14" height="14" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
      <svg aria-hidden="true" className="absolute bottom-6 left-20 text-[#1A1A1A] opacity-[0.10]" width="10" height="10" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
      <svg aria-hidden="true" className="absolute top-1/2 left-8 -translate-y-1/2 text-[#1A1A1A] opacity-[0.05]" width="10" height="10" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0L10.8 7.2L18 9L10.8 10.8L9 18L7.2 10.8L0 9L7.2 7.2Z"/></svg>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4">{heading}</h2>
        <p className="text-[#1A1A1A]/70 text-lg mb-10 max-w-2xl mx-auto">{subtext}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className="bg-[#1A1A1A] text-white hover:bg-black font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Get My Free Quote
          </Link>
          <a
            href={PHONE_HREF}
            className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
