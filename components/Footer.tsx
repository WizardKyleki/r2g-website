import Link from "next/link";
import Image from "next/image";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  CAIRNS_ADDRESS,
  BRISBANE_ADDRESS,
  HOURS,
  SITE_NAME,
  SERVICES,
  NAV_LINKS,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo-r2g-white.png"
                alt="R2G Transport & Storage"
                width={180}
                height={50}
                style={{ width: "180px", height: "auto" }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Removalists you can trust. Professional moving, packing, and storage services across Cairns, Brisbane, and Australia. Fully insured. Locally owned.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#F5C400] hover:text-[#1A1A1A] rounded-lg flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#F5C400] hover:text-[#1A1A1A] rounded-lg flex items-center justify-center transition-colors text-white"
                aria-label="Google"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-[#F5C400] text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.filter((l) => !l.children).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-[#F5C400] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-[#F5C400] text-sm transition-colors">
                  Get A Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 text-gray-400 hover:text-[#F5C400] text-sm transition-colors">
                  <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-gray-400 hover:text-[#F5C400] text-sm transition-colors">
                  <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Cairns</p>
                  <p>{CAIRNS_ADDRESS}</p>
                  <p className="text-xs text-gray-500 mt-2 mb-1">Brisbane</p>
                  <p>{BRISBANE_ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-[#F5C400] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {HOURS}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">&copy; {year} {SITE_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-gray-500 hover:text-[#F5C400] text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-[#F5C400] text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
