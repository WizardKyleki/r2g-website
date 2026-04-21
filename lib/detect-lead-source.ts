/**
 * Lead source channel enum — normalized for analytics
 */
export type LeadSourceChannel =
  | "paid_search"
  | "paid_social"
  | "organic_search"
  | "social"
  | "referral"
  | "direct"
  | "email"
  | "other";

export interface LeadSourceResult {
  /** Human-readable label, e.g. "Google Ads (brand campaign)" */
  label: string;
  /** Normalized channel for analytics grouping */
  channel: LeadSourceChannel;
}

/**
 * Detect lead source from page URL (UTM params, click IDs) and HTTP referrer.
 *
 * Detection priority:
 * 1. UTM params on page URL (utm_medium = cpc/ppc/paid = paid channel)
 * 2. Click IDs: gclid = Google Ads, fbclid = Facebook, msclkid = Microsoft Ads
 * 3. HTTP referrer domain analysis
 * 4. Fallback: "Direct"
 */
export function detectLeadSource(
  pageUrl: string | undefined,
  httpReferrer?: string,
): LeadSourceResult {
  const params = safeParams(pageUrl);

  // ── 1. UTM parameters ──────────────────────────────────────────────────────
  const utmSource = params.get("utm_source")?.toLowerCase();
  const utmMedium = params.get("utm_medium")?.toLowerCase();
  const utmCampaign = params.get("utm_campaign");

  if (utmMedium && ["cpc", "ppc", "paid"].includes(utmMedium)) {
    // Paid traffic
    if (utmSource === "google") {
      const suffix = utmCampaign ? ` (${utmCampaign})` : "";
      return { label: `Google Ads${suffix}`, channel: "paid_search" };
    }
    if (utmSource === "bing" || utmSource === "microsoft") {
      const suffix = utmCampaign ? ` (${utmCampaign})` : "";
      return { label: `Microsoft Ads${suffix}`, channel: "paid_search" };
    }
    if (utmSource === "facebook" || utmSource === "instagram" || utmSource === "meta") {
      const suffix = utmCampaign ? ` (${utmCampaign})` : "";
      return { label: `Meta Ads${suffix}`, channel: "paid_social" };
    }
    const suffix = utmCampaign ? ` (${utmCampaign})` : "";
    return { label: `${utmSource || "Paid"}${suffix}`, channel: "paid_search" };
  }

  if (utmMedium === "email") {
    return { label: `Email${utmCampaign ? ` (${utmCampaign})` : ""}`, channel: "email" };
  }

  if (utmMedium === "social" || utmMedium === "social-media") {
    return { label: `${utmSource || "Social"}${utmCampaign ? ` (${utmCampaign})` : ""}`, channel: "social" };
  }

  if (utmSource) {
    return { label: `${utmSource}${utmMedium ? ` / ${utmMedium}` : ""}`, channel: "other" };
  }

  // ── 2. Click IDs ───────────────────────────────────────────────────────────
  if (params.has("gclid") || params.has("wbraid") || params.has("gbraid")) {
    return { label: "Google Ads", channel: "paid_search" };
  }
  if (params.has("fbclid")) {
    return { label: "Facebook", channel: "social" };
  }
  if (params.has("msclkid")) {
    return { label: "Microsoft Ads", channel: "paid_search" };
  }

  // ── 3. HTTP referrer domain ────────────────────────────────────────────────
  if (httpReferrer) {
    const result = detectFromReferrer(httpReferrer);
    if (result) return result;
  }

  // ── 4. Fallback ────────────────────────────────────────────────────────────
  return { label: "Direct", channel: "direct" };
}

/** Legacy wrapper: returns just the label string (used by email templates) */
export function detectLeadSourceLabel(
  pageUrl: string | undefined,
  httpReferrer?: string,
): string {
  return detectLeadSource(pageUrl, httpReferrer).label;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function safeParams(url: string | undefined): URLSearchParams {
  if (!url) return new URLSearchParams();
  try {
    return new URL(url).searchParams;
  } catch {
    return new URLSearchParams();
  }
}

function detectFromReferrer(referrer: string): LeadSourceResult | null {
  try {
    const host = new URL(referrer).hostname.toLowerCase();

    // Google (organic search)
    if (host.includes("google.")) {
      return { label: "Google Organic", channel: "organic_search" };
    }
    // Bing (organic search)
    if (host.includes("bing.com")) {
      return { label: "Bing Organic", channel: "organic_search" };
    }
    // Yahoo
    if (host.includes("yahoo.com") || host.includes("search.yahoo")) {
      return { label: "Yahoo Organic", channel: "organic_search" };
    }
    // DuckDuckGo
    if (host.includes("duckduckgo.com")) {
      return { label: "DuckDuckGo", channel: "organic_search" };
    }
    // Facebook / Instagram / Meta
    if (host.includes("facebook.com") || host.includes("fb.com") || host.includes("instagram.com") || host.includes("l.facebook.com")) {
      return { label: "Facebook", channel: "social" };
    }
    // Twitter / X
    if (host.includes("twitter.com") || host.includes("t.co") || host.includes("x.com")) {
      return { label: "Twitter/X", channel: "social" };
    }
    // LinkedIn
    if (host.includes("linkedin.com") || host.includes("lnkd.in")) {
      return { label: "LinkedIn", channel: "social" };
    }
    // YouTube
    if (host.includes("youtube.com") || host.includes("youtu.be")) {
      return { label: "YouTube", channel: "social" };
    }
    // TikTok
    if (host.includes("tiktok.com")) {
      return { label: "TikTok", channel: "social" };
    }
    // Reddit
    if (host.includes("reddit.com")) {
      return { label: "Reddit", channel: "social" };
    }

    // Same-origin (our own site) is not a referral
    if (host.includes("r2g.com.au")) {
      return null;
    }

    // Any other external domain is a referral
    return { label: `Referral (${host})`, channel: "referral" };
  } catch {
    return null;
  }
}
