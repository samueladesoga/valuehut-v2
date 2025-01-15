/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCourses } from "@/lib/courseApi";
import { getAllArticles } from "./lib/api";

const generateSitemap = async () => {
  const baseUrl = "https://www.valuehut.co";

  const courses = await getAllCourses();

  const courseUrls = courses.map((course: any) => ({
    url: `${baseUrl}/academy/${course.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const {
    props: { posts },
  } = await getAllArticles();

  const articleUrls = posts.map((article: any) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/academy`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/consulting`, lastModified: new Date().toISOString() },
    {
      url: `${baseUrl}/talent-matching`,
      lastModified: new Date().toISOString(),
    },
    { url: `${baseUrl}/faqs`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about-us`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact-us`, lastModified: new Date().toISOString() },
  ];

  return [...staticUrls, ...courseUrls, ...articleUrls];
};

export default generateSitemap;
