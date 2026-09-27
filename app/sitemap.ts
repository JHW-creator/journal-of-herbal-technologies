import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

const routes = [
  "/",
  "/about",
  "/editorial-board",
  "/for-authors",
  "/for-authors/article-types",
  "/for-authors/submission",
  "/for-authors/peer-review",
  "/for-authors/preparation",
  "/for-authors/ethics",
  "/for-authors/checklist",
  "/articles",
  "/articles/archive",
  "/articles/special-issues",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
