import type { Metadata } from "next";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
import { SITE_NAME, EMAIL, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the R2G Transport & Storage privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.r2g.com.au/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:text-[#1A1A1A] prose-a:text-[#F5C400]">
          <p className="text-gray-500 text-sm">Last updated: 8 March 2026</p>

          <h2>1. About This Policy</h2>
          <p>
            {SITE_NAME} ABN (to be confirmed) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting
            the privacy of individuals whose personal information we collect and handle. This policy
            explains how we collect, use, disclose, and safeguard your information in accordance with
            the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following personal information when you use our website or services:</p>
          <ul>
            <li>Name, email address, phone number, and postal address</li>
            <li>Moving details (origin, destination, property type, preferred dates)</li>
            <li>Communications you send us via forms, email, or phone</li>
            <li>Website usage data such as IP address, browser type, and pages visited (via cookies and analytics tools)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide you with quotes and carry out our removalist, packing, and storage services</li>
            <li>Respond to your enquiries and communicate with you about your move</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We will never sell your personal information to third parties.</p>

          <h2>4. Cookies and Analytics</h2>
          <p>
            Our website uses Google Analytics to understand how visitors interact with our site. This
            service may use cookies to collect anonymous usage data such as pages visited, time on site,
            and referring URLs. You can opt out of Google Analytics by installing the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>

          <h2>5. Disclosure of Information</h2>
          <p>We may share your personal information with:</p>
          <ul>
            <li>Our employees and contractors who need it to deliver our services</li>
            <li>Third-party service providers (e.g. email delivery, payment processing) who are bound by confidentiality</li>
            <li>Government authorities where required by law</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from misuse, loss,
            unauthorised access, modification, or disclosure. Electronic data is stored on secure
            servers and access is restricted to authorised personnel.
          </p>

          <h2>7. Access and Correction</h2>
          <p>
            You have the right to request access to, or correction of, your personal information held
            by us. To make a request, contact us using the details below.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be posted on
            this page with a revised &quot;last updated&quot; date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy or wish to make a complaint, please contact us:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>Phone: <a href="tel:1300959498">{PHONE}</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
