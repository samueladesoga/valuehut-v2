/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetadataRoute } from "next";
import { getAllCourses } from "@/lib/courseApi";
import { getAllArticles } from "./lib/api";
import { SITE_URL, toIsoDate } from "@/lib/seo";

// Posts republished from another site point their canonical there. A sitemap
// may only list this site's own URLs, so those posts are left out.
function isExternalCanonical(url?: string) {
  if (!url) return false;
  try {
    return new URL(url).origin !== new URL(SITE_URL).origin;
  } catch {
    return false;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [courses, articles] = await Promise.all([getAllCourses(), getAllArticles()]);
  const now = Date.now();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/academy`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/consulting`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/talent-matching`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/faqs`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact-us`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const courseUrls: MetadataRoute.Sitemap = courses.map((course: any) => ({
    url: `${SITE_URL}/academy/${course.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Upcoming classes that still have places, so each date can be found directly.
  const classUrls: MetadataRoute.Sitemap = courses.flatMap((course: any) =>
    (course.classes ?? [])
      .filter((cls: any) => !cls.filled && new Date(cls.startDate).getTime() > now)
      .map((cls: any) => ({
        url: `${SITE_URL}/academy/${course.slug}/details/${cls.classSysId}`,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }))
  );

  const articleUrls: MetadataRoute.Sitemap = articles
    .filter((article: any) => !isExternalCanonical(article.canonicalUrl))
    .map((article: any) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: toIsoDate(article.publishedAt) ?? toIsoDate(article.firstPublishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticUrls, ...courseUrls, ...classUrls, ...articleUrls];
}
