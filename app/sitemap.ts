import type { MetadataRoute } from "next";
import { legalSlugs } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://perscom.io";
  return [
    { url: `${base}/`, priority: 1 },
    ...legalSlugs.map((slug) => ({
      url: `${base}/legal/${slug}`,
      priority: 0.3,
    })),
  ];
}
