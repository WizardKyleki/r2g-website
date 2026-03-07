import { officeSuburbsCairns } from "./office-suburbs-cairns";
import { officeSuburbsBrisbane } from "./office-suburbs-brisbane";

// ─────────────────────────────────────────────────────────────────────────────
// INTERFACE
// ─────────────────────────────────────────────────────────────────────────────
export interface OfficeSuburb {
  slug: string;
  name: string;
  city: string; // "cairns" | "brisbane"
  postcode: string;
  latitude: number;
  longitude: number;
  metaTitle: string;
  metaDescription: string;

  // UNIQUE content per suburb (hand-written for SEO differentiation)
  industrySpecializations: { title: string; description: string }[];
  localKnowledge: { heading: string; paragraphs: string[] };
  caseStudy: {
    headline: string;
    business: string;
    challenge: string;
    solution: string;
    result: string;
  };

  // Optional overrides
  heroSubtitle?: string;
  faqItems?: { question: string; answer: string }[];
  nearbySuburbs: string[]; // slugs for internal linking
}

// ─────────────────────────────────────────────────────────────────────────────
// COMBINED DATA
// ─────────────────────────────────────────────────────────────────────────────
export const officeSuburbs: OfficeSuburb[] = [
  ...officeSuburbsCairns,
  ...officeSuburbsBrisbane,
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
export function getOfficeSuburb(
  city: string,
  suburb: string
): OfficeSuburb | undefined {
  return officeSuburbs.find((s) => s.city === city && s.slug === suburb);
}

export function getOfficeSuburbsByCity(city: string): OfficeSuburb[] {
  return officeSuburbs.filter((s) => s.city === city);
}

export function getAllOfficeSuburbParams(): { city: string; suburb: string }[] {
  return officeSuburbs.map((s) => ({ city: s.city, suburb: s.slug }));
}
