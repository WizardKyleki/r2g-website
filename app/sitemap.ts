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

const BASE_URL = "https://www.r2g.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/quote`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/office-removalists`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/removalists-cairns`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/removalists-brisbane`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/removalists-gold-coast`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/removalists-sunshine-coast`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/ndis-removalists`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/interstate-removalists`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/boxes`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/packing-services-cairns`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/storage-cairns`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((page) => ({ ...page, lastModified: today }));

  // Cairns suburb pages (dynamically from data)
  const cairnsSuburbs = cairnsSuburbsData.map((s) => ({
    url: `${BASE_URL}/removalists-cairns/${s.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Brisbane suburb pages (dynamically from data)
  const brisbaneSuburbPages = brisbaneSuburbs.map((s) => ({
    url: `${BASE_URL}/removalists-brisbane/${s.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Gold Coast suburb pages (dynamically from data)
  const goldCoastSuburbPages = goldCoastSuburbs.map((s) => ({
    url: `${BASE_URL}/removalists-gold-coast/${s.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Sunshine Coast suburb pages (dynamically from data)
  const sunshineCoastSuburbPages = sunshineCoastSuburbs.map((s) => ({
    url: `${BASE_URL}/removalists-sunshine-coast/${s.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Interstate route pages
  const interstateRoutes = getAllRouteSlugs().map((slug) => ({
    url: `${BASE_URL}/interstate-removalists/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Interstate city pages
  const interstateCities = getAllCitySlugs().map((slug) => ({
    url: `${BASE_URL}/interstate-removalists/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Office removalists location pages
  const officeLocations = getAllOfficeLocationSlugs().map((slug) => ({
    url: `${BASE_URL}/office-removalists/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Office removalists suburb pages
  const officeSuburbs = getAllOfficeSuburbParams().map(({ city, suburb }) => ({
    url: `${BASE_URL}/office-removalists/${city}/${suburb}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPosts = getAllBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cairnsSuburbs, ...brisbaneSuburbPages, ...goldCoastSuburbPages, ...sunshineCoastSuburbPages, ...interstateRoutes, ...interstateCities, ...officeLocations, ...officeSuburbs, ...blogPosts];
}
