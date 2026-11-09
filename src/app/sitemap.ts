import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://redformando.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/familia-ministerial", "/recursos", "/entrenamiento"];
  return pages.map((path) => ({ url: `${base}${path}` }));
}
