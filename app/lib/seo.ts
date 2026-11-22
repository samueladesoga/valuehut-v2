// One place for the site URL and the structured data (schema.org JSON-LD)
// used across pages, so search engines and AI assistants get consistent facts.

export const SITE_URL = "https://www.valuehut.co";
export const SITE_NAME = "ValueHut Consulting";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
// Square 180×180 mark: Google requires logos of at least 112×112.
export const LOGO_URL = `${SITE_URL}/logo192.png`;

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Short reference to the organisation, for use inside other schemas. */
export const organizationRef = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  legalName: "ValueHut Limited",
  url: SITE_URL,
  logo: LOGO_URL,
  email: "info@valuehut.co",
  description:
    "ValueHut Consulting is an Agile Management Consultancy helping organisations discover better ways of working to deliver exceptional products and services. We run Scrum.org courses and provide Agile consulting and talent matching in London and Lagos.",
  areaServed: ["London", "United Kingdom", "Lagos", "Nigeria"],
  knowsAbout: [
    "Agile",
    "Scrum",
    "Kanban",
    "Agile Leadership",
    "Product Management",
    "Evidence-Based Management",
    "Organisational change",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "North Westgate House",
      addressLocality: "Harlow",
      addressRegion: "Essex",
      postalCode: "CM20 1YS",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "22 Glover Rd, Ikoyi",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  ],
  // Same profiles the footer links to.
  sameAs: [
    "https://linkedin.com/company/valuehut-limited",
    "https://www.scrum.org/valuehut-consulting-limited",
    "https://twitter.com/valuehut",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@valuehut.co",
    url: `${SITE_URL}/contact-us`,
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-GB",
  publisher: { "@id": ORGANIZATION_ID },
};

export const localBusinessSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#uk-office`,
    name: "ValueHut Consulting — UK",
    url: SITE_URL,
    email: "info@valuehut.co",
    image: LOGO_URL,
    parentOrganization: { "@id": ORGANIZATION_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "North Westgate House",
      addressLocality: "Harlow",
      addressRegion: "Essex",
      postalCode: "CM20 1YS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.77085589811162,
      longitude: 0.08191492476874897,
    },
    areaServed: ["London", "Harlow", "Essex", "United Kingdom"],
    description:
      "Agile Management Consultancy serving clients across London and the United Kingdom.",
    priceRange: "££",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#nigeria-office`,
    name: "ValueHut Consulting — Nigeria",
    url: SITE_URL,
    email: "info@valuehut.co",
    image: LOGO_URL,
    parentOrganization: { "@id": ORGANIZATION_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "22 Glover Rd, Ikoyi",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.455306393509238,
      longitude: 3.4277628114152754,
    },
    areaServed: ["Lagos", "Nigeria"],
    description: "Agile Management Consultancy serving clients in Lagos, Nigeria.",
    priceRange: "₦₦",
  },
];

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** ISO 8601 date for schema (e.g. 2026-08-06T09:00:00.000Z), or undefined. */
export function toIsoDate(value: string | Date | undefined | null): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return isNaN(d.getTime()) ? undefined : d.toISOString();
}

interface SchemaClass {
  classSysId: string;
  startDate: string;
  endDate: string;
  classType: string;
  filled: boolean;
  ukPrice?: number;
}

interface SchemaCourse {
  title: string;
  description: string;
  image: string;
  acronym?: string;
  duration?: number;
  classes: SchemaClass[];
}

const isOnline = (classType: string) => /virtual|online|remote/i.test(classType ?? "");

function classOffer(cls: SchemaClass, url: string) {
  if (!cls.ukPrice) return undefined;
  return {
    "@type": "Offer",
    category: "Paid",
    price: cls.ukPrice,
    priceCurrency: "GBP",
    // UK prices are shown before 20% VAT; other regions are priced in USD at checkout.
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: cls.ukPrice,
      priceCurrency: "GBP",
      valueAddedTaxIncluded: false,
    },
    availability: cls.filled ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
    url,
  };
}

/** Course + upcoming CourseInstances, so classes can appear in course rich results. */
export function courseSchema(course: SchemaCourse, slug: string) {
  const url = absoluteUrl(`/academy/${slug}`);
  const now = Date.now();
  const upcoming = course.classes.filter((c) => {
    const start = new Date(c.startDate).getTime();
    return !isNaN(start) && start > now;
  });

  const instances = upcoming.map((c) => {
    const classUrl = absoluteUrl(`/academy/${slug}/details/${c.classSysId}`);
    const online = isOnline(c.classType);
    return {
      "@type": "CourseInstance",
      name: course.title,
      url: classUrl,
      courseMode: online ? "Online" : "Onsite",
      startDate: toIsoDate(c.startDate),
      endDate: toIsoDate(c.endDate),
      ...(online
        ? { location: { "@type": "VirtualLocation", url: classUrl } }
        : {}),
      ...(course.duration ? { courseWorkload: `PT${course.duration}H` } : {}),
      instructor: organizationRef,
      offers: classOffer(c, classUrl),
    };
  });

  const offers = upcoming.map((c) => classOffer(c, url)).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}#course`,
    name: course.title,
    description: course.description,
    image: course.image,
    url,
    ...(course.acronym ? { courseCode: course.acronym } : {}),
    inLanguage: "en",
    provider: organizationRef,
    ...(course.duration ? { timeRequired: `PT${course.duration}H` } : {}),
    ...(instances.length ? { hasCourseInstance: instances } : {}),
    ...(offers.length ? { offers } : {}),
  };
}
