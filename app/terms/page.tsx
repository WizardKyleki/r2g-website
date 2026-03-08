import type { Metadata } from "next";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/PageHero"));
import { SITE_NAME, EMAIL, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the R2G Transport & Storage terms of service. Understand the conditions that apply when using our website and removalist services.",
  alternates: { canonical: "https://www.r2g.com.au/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="The conditions that apply when using our website and services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:text-[#1A1A1A] prose-a:text-[#F5C400]">
          <p className="text-gray-500 text-sm">Last updated: 8 March 2026</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the {SITE_NAME} website (www.r2g.com.au) and our removalist,
            packing, and storage services, you agree to be bound by these Terms of Service. If you do
            not agree, please do not use our website or services.
          </p>

          <h2>2. Services</h2>
          <p>
            {SITE_NAME} provides residential and commercial removalist services, packing services,
            storage solutions, and related moving services across Queensland and interstate Australia.
            All services are subject to availability and confirmation by our team.
          </p>

          <h2>3. Quotes and Pricing</h2>
          <ul>
            <li>Quotes provided through our website or by phone are estimates based on the information you supply.</li>
            <li>Final pricing may vary if the actual scope of work differs from the information provided at the time of quoting.</li>
            <li>All prices are in Australian Dollars (AUD) and include GST unless stated otherwise.</li>
          </ul>

          <h2>4. Bookings and Cancellations</h2>
          <ul>
            <li>Bookings are confirmed once you receive written confirmation from our team.</li>
            <li>Cancellations must be made at least 48 hours before your scheduled move to avoid a cancellation fee.</li>
            <li>We reserve the right to reschedule or cancel bookings due to unforeseen circumstances such as extreme weather or vehicle breakdowns. In such cases, we will work with you to arrange an alternative date at no extra cost.</li>
          </ul>

          <h2>5. Your Responsibilities</h2>
          <p>When using our services, you agree to:</p>
          <ul>
            <li>Provide accurate information about the items to be moved, access conditions, and any special requirements</li>
            <li>Ensure clear and safe access to your property for our team and vehicles</li>
            <li>Disclose any hazardous, prohibited, or high-value items prior to the move</li>
            <li>Be present (or have an authorised representative present) at both the pick-up and delivery locations</li>
          </ul>

          <h2>6. Insurance and Liability</h2>
          <p>
            {SITE_NAME} carries public liability insurance and transit insurance for goods in our care.
            However, we are not liable for damage caused by pre-existing defects, improper packing by
            the customer (where our packing service was not used), or items of extraordinary value not
            disclosed prior to the move. Claims must be lodged in writing within 7 days of delivery.
          </p>

          <h2>7. Website Use</h2>
          <ul>
            <li>All content on this website is the property of {SITE_NAME} and is protected by Australian copyright law.</li>
            <li>You may not reproduce, distribute, or commercially exploit any content without our written permission.</li>
            <li>We make reasonable efforts to keep website information accurate but do not guarantee that all content is error-free or up to date.</li>
          </ul>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by Australian Consumer Law, our liability for any claim
            arising out of our services is limited to the cost of re-supplying those services. We are
            not liable for indirect, incidental, or consequential losses.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of Queensland, Australia. Any disputes will be subject
            to the exclusive jurisdiction of the courts of Queensland.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. The updated version will be posted on this
            page with a revised &quot;last updated&quot; date. Continued use of our website or services
            constitutes acceptance of the revised terms.
          </p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about these terms, please contact us:</p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>Phone: <a href="tel:1300959498">{PHONE}</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
