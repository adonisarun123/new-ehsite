import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants/brand";
import { CARE_SERVICES } from "@/content/seed-care-services";
import { SERVICES } from "@/content/seed-services";
import { BLOG_POSTS } from "@/content/seed-blog";
import {
  CITIES,
  BANGALORE_LOCALITIES,
} from "@/lib/constants/locations";
import {
  HELPER_JOB_SUBPAGES,
  CAREGIVER_JOB_SUBPAGES,
} from "@/content/seed-jobs";

const CITY_SERVICE_URL_SLUGS = [
  "elderly-care",
  "dementia-care",
  "palliative-care",
  "patient-care",
  "post-operative-care",
  "bedridden-patient-care",
  "parkinsons-care",
  "stroke-care",
  "live-in-maids",
  "full-time-maid",
  "cooks",
  "nanny-babysitter",
  "housekeeping",
];

const LOCALITY_PRIORITY_SLUGS = [
  "elderly-care",
  "dementia-care",
  "patient-care",
  "live-in-maids",
  "nanny-babysitter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.url;
  const now = new Date();
  const url = (path: string): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified: now,
  });

  const staticPages = [
    "/",
    "/about",
    "/services",
    "/care-services",
    "/home-help-services",
    "/contact",
    "/faqs",
    "/blog",
    "/helper-jobs",
    "/caregiver-jobs",
    "/partners/training-institutes",
    "/partners/apartment-associations",
    "/privacy-policy",
    "/terms",
  ].map(url);

  const careServicePages = CARE_SERVICES.map((s) => url(`/care-services/${s.slug}`));
  const servicePages = SERVICES.map((s) => url(`/services/${s.slug}`));
  const blogPages = BLOG_POSTS.map((p) => url(`/blog/${p.slug}`));

  const cityPages = CITIES.map((c) => url(`/cities/${c.slug}`));
  const cityServicePages = CITIES.filter((c) => c.slug === "bangalore").flatMap((c) =>
    CITY_SERVICE_URL_SLUGS.map((s) => url(`/cities/${c.slug}/${s}`))
  );

  const localityPages = BANGALORE_LOCALITIES.map((l) =>
    url(`/localities/${l.citySlug}/${l.slug}`)
  );
  const localityServicePages = BANGALORE_LOCALITIES.flatMap((l) =>
    LOCALITY_PRIORITY_SLUGS.map((s) => url(`/localities/${l.citySlug}/${l.slug}/${s}`))
  );

  const jobSubPages = [...HELPER_JOB_SUBPAGES, ...CAREGIVER_JOB_SUBPAGES].map((s) =>
    url(`/${s.parent}/${s.slug}`)
  );

  return [
    ...staticPages,
    ...careServicePages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages,
    ...localityPages,
    ...localityServicePages,
    ...jobSubPages,
    ...blogPages,
  ];
}
