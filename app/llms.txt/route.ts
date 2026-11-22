/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCourses } from "@/lib/courseApi";
import { getAllArticles } from "@/lib/api";
import { SITE_URL } from "@/lib/seo";
import { getDisplayDate } from "@/utils/ConvertDate";

// llms.txt (https://llmstxt.org): a plain summary that helps AI assistants
// describe ValueHut accurately and link to the right pages. Built from the
// same Contentful data as the site, so it stays current.
export const revalidate = 3600;

const line = (title: string, path: string, note?: string) =>
  `- [${title}](${SITE_URL}${path})${note ? `: ${note}` : ""}`;

export async function GET() {
  const [courses, articles] = await Promise.all([getAllCourses(), getAllArticles()]);
  const now = Date.now();

  const courseLines = courses.map((course: any) => {
    const next = (course.classes ?? []).find(
      (c: any) => !c.filled && new Date(c.startDate).getTime() > now
    );
    const facts = [
      course.level,
      course.duration ? `${course.duration} hours` : null,
      next ? `next class ${getDisplayDate(next.startDate, next.endDate, next.timeZone)}` : "no public dates scheduled — private classes on request",
    ].filter(Boolean);
    return line(String(course.title).trim(), `/academy/${course.slug}`, facts.join("; "));
  });

  const articleLines = articles
    .slice(0, 15)
    .map((a: any) => line(String(a.title).trim(), `/blog/${a.slug}`, a.description));

  const body = `# ValueHut Consulting

> ValueHut Consulting (ValueHut Limited) is an Agile Management Consultancy serving organisations in London (UK) and Lagos (Nigeria). It runs Agile, Scrum, Agile Leadership and Product Management courses (ValueHut Academy), provides Agile and Product Management consulting, and matches organisations with vetted Agile professionals. It also organises Scrum Day Nigeria.

Key facts:
- Offices: North Westgate House, Harlow, Essex CM20 1YS, United Kingdom; 22 Glover Rd, Ikoyi, Lagos, Nigeria
- Contact: info@valuehut.co, ${SITE_URL}/contact-us
- Course prices depend on the attendee's country of residence; UK prices are in GBP plus 20% VAT, other regions are priced in USD.
- Courses can be paid by card (place confirmed immediately) or by invoice (payment due at least 14 days before the class; the place is held until then and confirmed on payment).

## Services
${line("Academy", "/academy", "Agile and Scrum courses, public and private")}
${line("Consulting", "/consulting", "Agile and Product Management consulting for organisations in London, Lagos, Accra and beyond")}
${line("Talent Matching", "/talent-matching", "pre-qualified Agile and transformation professionals, vetted by practising consultants")}

## Courses
${courseLines.join("\n")}

## About
${line("About us", "/about-us")}
${line("FAQs", "/faqs")}
${line("Contact", "/contact-us")}

## Articles
${articleLines.join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
