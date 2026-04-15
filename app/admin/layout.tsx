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
        data-key="pk_98c82458cae7045f337169e0"
        strategy="afterInteractive"
      />
    </>
  );
}
