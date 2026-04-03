import { MetadataRoute } from "next";
import { getAllRouteSlugs } from "@/lib/interstate-routes";
import { getAllCitySlugs } from "@/lib/interstate-cities";
import { getAllOfficeLocationSlugs } from "@/data/office-locations";
import { getAllOfficeSuburbParams } from "@/data/office-suburbs";
import { getAllBlogSlugs } from "@/data/blog-posts";
import { suburbs as cairnsSuburbsData } from "@/data/suburbs";
import { brisbaneSuburbs } from "@/data/brisbane-suburbs";
import { goldCoastSuburbs } from "@/data/gold-coast-suburbs";
import { sunshineCoastSuburbs } from "@/data/sunshine-coast-suburbs";
import { townsvilleSuburbs } from "@/data/townsville-suburbs";

const BASE_URL = "https://www.r2g.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  // Fixed dates for service pages that don't change frequently
  // This prevents Google from showing dates in search results (makes pages look like blog posts)
  const SERVICE_PAGE_DATE = "2026-04-03T00:00:00.000Z";
  const SUBURB_PAGE_DATE = "2026-04-03T00:00:00.000Z";

  // Static pages — hub pages and frequently updated pages use today, others use fixed date
  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const, lastModified: today },
    { url: `${BASE_URL}/quote`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/office-removalists`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const, lastModified: today },
    { url: `${BASE_URL}/removalists-cairns`, priority: 1.0, changeFrequency: "weekly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalists-brisbane`, priority: 1.0, changeFrequency: "weekly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalists-gold-coast`, priority: 1.0, changeFrequency: "weekly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalists-sunshine-coast`, priority: 1.0, changeFrequency: "weekly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalists-townsville`, priority: 1.0, changeFrequency: "weekly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/ndis-removalists`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/interstate-removalists`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/boxes`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/packing-services-cairns`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/packing-services-brisbane`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/storage-cairns`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/storage-brisbane`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/services`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/moving-index-2026`, priority: 0.8, changeFrequency: "yearly" as const, lastModified: "2026-03-23T00:00:00.000Z" },
    { url: `${BASE_URL}/brisbane-moving-checklist`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: today },
    { url: `${BASE_URL}/removalists-brisbane/northside`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: today },
    { url: `${BASE_URL}/removalists-brisbane/southside`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: today },
    { url: `${BASE_URL}/interstate-removals-cairns`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    // Packing services (new cities)
    { url: `${BASE_URL}/packing-services-gold-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/packing-services-sunshine-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/packing-services-townsville`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    // Storage (new cities)
    { url: `${BASE_URL}/storage-gold-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/storage-sunshine-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/storage-townsville`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    // NDIS city pages
    { url: `${BASE_URL}/ndis-removalists/cairns`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/ndis-removalists/brisbane`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/ndis-removalists/gold-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/ndis-removalists/sunshine-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/ndis-removalists/townsville`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    // Removalist cost pages
    { url: `${BASE_URL}/removalist-costs/brisbane`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalist-costs/cairns`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalist-costs/gold-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalist-costs/sunshine-coast`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
    { url: `${BASE_URL}/removalist-costs/townsville`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_PAGE_DATE },
  ];

  // Cairns suburb pages — fixed date so Google doesn't show dates in search results
  const cairnsSuburbs = cairnsSuburbsData.map((s) => ({
    url: `${BASE_URL}/removalists-cairns/${s.slug}`,
    lastModified: SUBURB_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Brisbane suburb pages
  const brisbaneSuburbPages = brisbaneSuburbs.map((s) => ({
    url: `${BASE_URL}/removalists-brisbane/${s.slug}`,
    lastModified: SUBURB_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Gold Coast suburb pages
  const goldCoastSuburbPages = goldCoastSuburbs.map((s) => ({
    url: `${BASE_URL}/removalists-gold-coast/${s.slug}`,
    lastModified: SUBURB_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Sunshine Coast suburb pages
  const sunshineCoastSuburbPages = sunshineCoastSuburbs.map((s) => ({
    url: `${BASE_URL}/removalists-sunshine-coast/${s.slug}`,
    lastModified: SUBURB_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Townsville suburb pages
  const townsvilleSuburbPages = townsvilleSuburbs.map((s) => ({
    url: `${BASE_URL}/removalists-townsville/${s.slug}`,
    lastModified: SUBURB_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Interstate route pages
  const interstateRoutes = getAllRouteSlugs().map((slug) => ({
    url: `${BASE_URL}/interstate-removalists/${slug}`,
    lastModified: SERVICE_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Interstate city pages
  const interstateCities = getAllCitySlugs().map((slug) => ({
    url: `${BASE_URL}/interstate-removalists/${slug}`,
    lastModified: SERVICE_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Office removalists location pages
  const officeLocations = getAllOfficeLocationSlugs().map((slug) => ({
    url: `${BASE_URL}/office-removalists/${slug}`,
    lastModified: SERVICE_PAGE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Office removalists suburb pages — REMOVED: these pages don't exist as routes
  // (only /office-removalists/[slug] exists, not /office-removalists/[city]/[suburb])
  // Including them in sitemap caused 62 x 308 redirects flagged by Ahrefs

  // Blog posts — these SHOULD use today's date as they are content pages
  const blogPosts = getAllBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cairnsSuburbs, ...brisbaneSuburbPages, ...goldCoastSuburbPages, ...sunshineCoastSuburbPages, ...townsvilleSuburbPages, ...interstateRoutes, ...interstateCities, ...officeLocations, ...blogPosts];
}
