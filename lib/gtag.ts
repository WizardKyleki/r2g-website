/**
 * GA4 + Google Ads conversion-tracking helpers.
 *
 * The global `gtag` function is injected by `components/GoogleAnalytics.tsx`.
 * These helpers are safe to call even when GA is not loaded (e.g. dev / ad-blockers).
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
    uetq?: any;
  }
}

const AW_CONVERSION_ID = "AW-387461568/1imuCJcgIccEMDj4LgB";

/** Fire a GA4 custom event + push to dataLayer for GTM triggers. */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;

  // GA4 direct (via gtag.js)
  if (window.gtag) {
    window.gtag("event", action, params);
  }

  // GTM dataLayer push — fires Custom Event triggers for Google Ads tags
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: action, ...params });

  // Microsoft Ads UET conversion tracking
  if (window.uetq && action === "generate_lead") {
    window.uetq.push("event", "submit_lead_form", {
      event_category: "lead",
      event_label: params?.lead_source || "website",
      event_value: 100,
    });
  }
}

// ── Enhanced Conversions ────────────────────────────────────────────────────

/** Set user-provided data via gtag for in-page Enhanced Conversions,
 *  AND push to dataLayer for GTM-based Enhanced Conversions. */
export function pushEnhancedConversionData(userData: {
  email?: string;
  phone?: string;
  name?: string;
}) {
  if (typeof window === "undefined") return;

  const enhancedData: Record<string, string> = {};
  if (userData.email) enhancedData.email = userData.email.trim().toLowerCase();
  if (userData.phone) enhancedData.phone_number = userData.phone.trim();
  if (userData.name) enhancedData.first_name = userData.name.trim();

  // In-page gtag approach (what Google recommends for Enhanced Conversions)
  if (window.gtag) {
    window.gtag("set", "user_data", enhancedData);
  }

  // GTM dataLayer approach (kept for backwards compatibility)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "enhanced_conversion_data",
    enhanced_conversion_data: enhancedData,
  });
}

// ── Pre-built conversion events ─────────────────────────────────────────────

/** Contact / enquiry form submitted successfully. */
export function trackEnquirySubmit(userData?: {
  email?: string;
  phone?: string;
  name?: string;
}) {
  if (userData) pushEnhancedConversionData(userData);
  trackEvent("enquiry_form_submit", {
    event_category: "engagement",
    event_label: "Contact Page Enquiry",
  });

  // Fire Google Ads conversion directly via gtag
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: AW_CONVERSION_ID,
      value: 100.0,
      currency: "AUD",
    });
  }
}

/** Quote wizard completed & submitted successfully. */
export function trackQuoteSubmit(
  propertyType?: string,
  userData?: { email?: string; phone?: string; name?: string },
) {
  if (userData) pushEnhancedConversionData(userData);
  trackEvent("generate_lead", {
    event_category: "engagement",
    event_label: "Quote Form Submit",
    currency: "AUD",
    value: 0,
    ...(propertyType ? { property_type: propertyType } : {}),
  });

  // Fire Google Ads conversion directly via gtag
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: AW_CONVERSION_ID,
      value: 100.0,
      currency: "AUD",
    });
  }
}

/** Quote wizard step progression (for funnel analysis). */
export function trackQuoteStep(step: number, stepName: string) {
  trackEvent("quote_step", {
    event_category: "engagement",
    event_label: stepName,
    step_number: step,
  });
}

/** User clicked a phone / call link. */
export function trackPhoneClick(location: string) {
  trackEvent("phone_call_click", {
    event_category: "engagement",
    event_label: location,
    link_url: "tel:1300959498",
  });
}
