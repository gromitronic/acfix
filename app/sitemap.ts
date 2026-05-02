import { MetadataRoute } from "next";
import { blogPosts } from "@/src/data/blog";
import { cities } from "@/src/data/cities";
import { siteConfig } from "@/src/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/contact", "/privacy", "/terms"];
  const cityRoutes = cities.map((city) => `/${city.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...cityRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-05-01"),
    changeFrequency: route.includes("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
