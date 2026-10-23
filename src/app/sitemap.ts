import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects/monte-carlo-option-pricing", "/projects/research-impact", "/journey", "/life", "/photos"].map(path => ({
    url: `https://pestopasta74.com${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.8,
  }));
}
