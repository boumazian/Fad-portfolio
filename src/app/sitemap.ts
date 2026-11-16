import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/aboutme", priority: 0.8 },
  { path: "/education", priority: 0.7 },
  { path: "/hobbies", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
