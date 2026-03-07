import type { Metadata } from "next";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"));
import { PHONE, PHONE_HREF, EMAIL, CAIRNS_ADDRESS, BRISBANE_ADDRESS, HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | R2G Transport & Storage",
  description:
    "Contact R2G Transport & Storage. Call 1300 959 498, email us, or use our online quote wizard to get a free, no-obligation moving quote.",
  alternates: { canonical: "https://www.r2g.com.au/contact" },
  openGraph: {
    title: "Contact R2G Transport & Storage",
    description: "Get in touch with R2G Transport & Storage. Free, no-obligation quotes for all moves.",
    url: "https://www.r2g.com.au/contact",
  },
};

const contactDetails = [
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
    label: "Phone",
    value: PHONE,
    href: PHONE_HREF,
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    label: "Cairns Office",
    value: CAIRNS_ADDRESS,
    href: undefined,
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    label: "Brisbane Office",
    value: BRISBANE_ADDRESS,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Use our free quote wizard, call us direct, or drop us an email — we'll get back to you fast."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Enquiry form */}
            <div className="lg:col-span-2">
              <EnquiryForm />
            </div>

            {/* Right: Contact info sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#F5C400]/10 rounded-lg flex items-center justify-center text-[#F5C400] shrink-0">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">{detail.label}</p>
                        {detail.href ? (
                          <a href={detail.href} className="text-[#1A1A1A] font-semibold text-sm hover:text-[#F5C400] transition-colors">
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-[#1A1A1A] font-semibold text-sm">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monday – Friday</span>
                    <span className="font-semibold text-[#1A1A1A]">{HOURS}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Saturday – Sunday</span>
                    <span className="font-semibold text-[#1A1A1A]">By appointment</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-2xl p-8 text-center">
                <p className="text-gray-400 text-sm mb-3">Prefer to talk? Call us now:</p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
