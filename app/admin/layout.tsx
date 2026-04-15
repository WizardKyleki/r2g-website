import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Admin | R2G Transport & Storage",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        src="https://zoeyai.com.au/inbox.js"
        data-key="pk_168e344362914d6b0994d479"
        strategy="afterInteractive"
      />
    </>
  );
}
