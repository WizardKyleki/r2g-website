import { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = DOMAIN;

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/removalists-cairns`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/interstate-removals-cairns`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/office-removals-cairns`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/packing-services-cairns`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/storage-cairns`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/removalists-brisbane`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/boxes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
  ];
}
