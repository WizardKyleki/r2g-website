import { MetadataRoute } from "next";
import { getAllRouteSlugs } from "@/lib/interstate-routes";
import { getAllCitySlugs } from "@/lib/interstate-cities";

const BASE_URL = "https://www.r2g.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/quote`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/office-removals`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/removalists-cairns`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/removalists-brisbane`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/interstate-removalists`, priority: 0.9, changeFrequency: "monthly" as const },
  ].map((page) => ({ ...page, lastModified: today }));

  // Cairns suburb pages
  const cairnsSuburbs = [
    "cairns-city", "cairns-north", "cairns-south", "edge-hill", "manunda",
    "parramatta-park", "whitfield", "westcourt", "portsmith", "woree",
    "earlville", "bentley-park", "mount-sheridan", "gordonvale", "smithfield",
    "trinity-beach", "palm-cove", "clifton-beach", "kewarra-beach", "machans-beach",
    "holloways-beach", "yorkeys-knob", "trinity-park", "caravonica", "freshwater",
    "redlynch", "lake-placid", "barron", "mooroobool", "brinsmead",
    "kanimbla", "bayview-heights", "white-rock", "aloomba", "goldsborough",
  ].map((suburb) => ({
    url: `${BASE_URL}/removalists/${suburb}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Brisbane suburb pages
  const brisbaneSuburbs = [
    "brisbane-cbd", "south-brisbane", "fortitude-valley", "new-farm", "teneriffe",
    "west-end", "woolloongabba", "spring-hill", "paddington", "red-hill",
    "ashgrove", "bardon", "toowong", "auchenflower", "milton",
    "kelvin-grove", "herston", "bowen-hills", "newstead", "albion",
    "chermside", "nundah", "clayfield", "ascot", "hamilton",
    "hendra", "eagle-farm", "port-of-brisbane", "cannon-hill", "morningside",
    "hawthorne", "balmoral", "bulimba", "camp-hill", "coorparoo",
    "greenslopes", "mount-gravatt", "upper-mount-gravatt", "eight-mile-plains", "sunnybank",
    "acacia-ridge", "salisbury", "yeronga", "annerley", "moorooka",
    "rocklea", "oxley", "corinda", "graceville", "chelmer",
  ].map((suburb) => ({
    url: `${BASE_URL}/removalists-brisbane/${suburb}`,
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

  return [...staticPages, ...cairnsSuburbs, ...brisbaneSuburbs, ...interstateRoutes, ...interstateCities];
}
