import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://redformando.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/familia-ministerial", "/blog", "/recursos", "/entrenamiento"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}` })),
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}` })),
  ];
}
