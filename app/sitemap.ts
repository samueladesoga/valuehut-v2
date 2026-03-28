/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCourses } from "@/lib/courseApi";
import { getAllArticles } from "./lib/api";

const generateSitemap = async () => {
  const baseUrl = "https://www.valuehut.co";

  const courses = await getAllCourses();

  const courseUrls = courses.map((course: any) => ({
    url: `${baseUrl}/academy/${course.slug}`,
    lastModified: course.updatedAt ?? course.createdAt ?? "2025-01-01",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = await getAllArticles();

  const articleUrls = articles.map((article: any) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.updatedAt ?? article.date ?? "2025-01-01",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: "2026-03-01", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/academy`, lastModified: "2026-03-01", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/consulting`, lastModified: "2026-03-01", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/talent-matching`, lastModified: "2026-03-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/about-us`, lastModified: "2026-03-01", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: "2026-03-01", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/faqs`, lastModified: "2026-03-01", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact-us`, lastModified: "2026-03-01", changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  return [...staticUrls, ...courseUrls, ...articleUrls];
};

export default generateSitemap;
