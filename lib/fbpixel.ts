/**
 * Meta Pixel tracking helpers.
 *
 * The global `fbq` function is injected by `components/MetaPixel.tsx`.
 * These helpers are safe to call even when the pixel is not loaded (e.g. dev / ad-blockers).
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

function fbq(...args: any[]) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(...args);
  }
}

/** Quote form submitted — fires the Lead standard event. */
export function trackMetaLead(data?: {
  email?: string;
  phone?: string;
  name?: string;
  propertyType?: string;
}) {
  fbq("track", "Lead", {
    content_name: "Quote Form Submit",
    currency: "AUD",
    value: 0,
    ...(data?.propertyType ? { content_category: data.propertyType } : {}),
  });
}

/** Enquiry form submitted — fires the Contact standard event. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function trackMetaContact(data?: {
  email?: string;
  phone?: string;
  name?: string;
}) {
  fbq("track", "Contact", {
    content_name: "Enquiry Form Submit",
  });
}
