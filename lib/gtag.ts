/**
 * GA4 conversion-tracking helpers.
 *
 * The global `gtag` function is injected by `components/GoogleAnalytics.tsx`.
 * These helpers are safe to call even when GA is not loaded (e.g. dev / ad-blockers).
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}

/** Fire a GA4 custom event. */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

// ── Enhanced Conversions ────────────────────────────────────────────────────

/** Push user-provided data to dataLayer for Google Ads Enhanced Conversions. */
export function pushEnhancedConversionData(userData: {
  email?: string;
  phone?: string;
  name?: string;
}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "enhanced_conversion_data",
    enhanced_conversion_data: {
      ...(userData.email ? { email: userData.email.trim().toLowerCase() } : {}),
      ...(userData.phone ? { phone_number: userData.phone.trim() } : {}),
      ...(userData.name ? { first_name: userData.name.trim() } : {}),
    },
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

// ── Chat widget events ──────────────────────────────────────────────────────

/** Chat lead submitted via AI chat widget. */
export function trackChatLeadSubmit(
  moveType?: string,
  userData?: { email?: string; phone?: string; name?: string },
) {
  if (userData) pushEnhancedConversionData(userData);
  trackEvent("generate_lead", {
    event_category: "engagement",
    event_label: "Chat Lead Submit",
    currency: "AUD",
    value: 0,
    ...(moveType ? { move_type: moveType } : {}),
  });
}
