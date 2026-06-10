import { BRAND } from "@/lib/constants/brand";

const sameAs = Object.values(BRAND.social).filter(Boolean);

/** Organization schema (spec §15.2). EzyHelpers is a home-support service, NOT a medical clinic. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/logos/ezyhelpers-logo.png`,
    email: BRAND.email,
    telephone: BRAND.phone,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** LocalBusiness schema for the city presence. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    url: BRAND.url,
    telephone: BRAND.phone,
    email: BRAND.email,
    areaServed: BRAND.cities.map((c) => ({ "@type": "City", name: c })),
    image: `${BRAND.url}/og/ezyhelpers-og.png`,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: BRAND.url,
  };
}

/** Service schema (spec §15.3). */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
    areaServed: { "@type": "City", name: opts.areaServed ?? BRAND.primaryCity },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** JobPosting schema for individual career role pages. */
export function jobPostingSchema(opts: {
  title: string;
  description: string;
  url: string;
  employmentType: string;
  city: string;
  datePosted?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opts.title,
    description: opts.description,
    url: opts.url,
    employmentType: opts.employmentType,
    ...(opts.datePosted ? { datePosted: opts.datePosted } : {}),
    hiringOrganization: {
      "@type": "Organization",
      name: BRAND.name,
      sameAs: BRAND.url,
      logo: `${BRAND.url}/logos/ezyhelpers-logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: opts.city,
        addressCountry: "IN",
      },
    },
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    image: `${BRAND.url}/og/ezyhelpers-og.png`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
      logo: { "@type": "ImageObject", url: `${BRAND.url}/logos/ezyhelpers-logo.png` },
    },
  };
}
