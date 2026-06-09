import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CareServiceContent } from "@/components/sections/CareServiceContent";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAnyServiceBySlug } from "@/features/services/queries";
import { buildMetadata } from "@/features/seo/metadata";
import { serviceSchema } from "@/features/seo/schema";
import { leadLabelFor } from "@/features/services/leadLabel";
import { BRAND } from "@/lib/constants/brand";
import { CITIES, getCity, resolveServiceSlug } from "@/lib/constants/locations";
import type { RelatedLink } from "@/components/sections/RelatedPages";

interface Params {
  params: Promise<{ citySlug: string; serviceSlug: string }>;
}

export function generateStaticParams() {
  // Bangalore service pages from the spec (§8.2–8.3), incl. singular maid aliases.
  const urlSlugs = [
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
  return CITIES.filter((c) => c.slug === "bangalore").flatMap((c) =>
    urlSlugs.map((serviceSlug) => ({ citySlug: c.slug, serviceSlug }))
  );
}

async function resolve(citySlug: string, serviceSlug: string) {
  const city = getCity(citySlug);
  if (!city) return null;
  const canonical = resolveServiceSlug(serviceSlug);
  const any = await getAnyServiceBySlug(canonical);
  if (!any) return null;
  return { city, any, canonical };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { citySlug, serviceSlug } = await params;
  const r = await resolve(citySlug, serviceSlug);
  if (!r) return {};
  const name = r.any.service.name;
  const isCare = r.any.kind === "care";
  return buildMetadata({
    title: isCare
      ? `${name} at Home in ${r.city.name}`
      : `${name} in ${r.city.name}`,
    description: r.any.service.metaDescription.replace("Bangalore", r.city.name),
    path: `/cities/${citySlug}/${serviceSlug}`,
  });
}

export default async function CityServicePage({ params }: Params) {
  const { citySlug, serviceSlug } = await params;
  const r = await resolve(citySlug, serviceSlug);
  if (!r) notFound();

  const { city, any, canonical } = r;
  const leadService = leadLabelFor(canonical, any.service.name);
  const cityCrumb = { name: city.name, href: `/cities/${city.slug}` };

  if (any.kind === "care") {
    const service = any.service;
    const related: RelatedLink[] = [
      { label: `Elderly care in ${city.name}`, href: `/cities/${city.slug}/elderly-care` },
      { label: `Patient care in ${city.name}`, href: `/cities/${city.slug}/patient-care` },
      { label: "All care services", href: "/care-services" },
      { label: "Caregiver jobs", href: "/caregiver-jobs" },
      { label: "Contact EzyHelpers", href: "/contact" },
    ].filter((l) => l.href !== `/cities/${city.slug}/${serviceSlug}`);

    return (
      <>
        <JsonLd
          data={serviceSchema({
            name: `${service.name} at Home in ${city.name}`,
            description: service.metaDescription,
            url: `${BRAND.url}/cities/${city.slug}/${serviceSlug}`,
            serviceType: service.name,
            areaServed: city.name,
          })}
        />
        <CareServiceContent
          service={service}
          locationLabel={city.name}
          defaultCity={city.name}
          breadcrumbs={[
            { name: "Care Services", href: "/care-services" },
            cityCrumb,
            { name: service.name, href: `/cities/${city.slug}/${serviceSlug}` },
          ]}
          related={related}
          leadService={leadService}
        />
      </>
    );
  }

  const service = any.service;
  const related: RelatedLink[] = [
    { label: `Live-in maids in ${city.name}`, href: `/cities/${city.slug}/live-in-maids` },
    { label: `Full-time maids in ${city.name}`, href: `/cities/${city.slug}/full-time-maid` },
    { label: "All home help", href: "/home-help-services" },
    { label: "Helper jobs", href: "/helper-jobs" },
  ].filter((l) => l.href !== `/cities/${city.slug}/${serviceSlug}`);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} in ${city.name}`,
          description: service.metaDescription,
          url: `${BRAND.url}/cities/${city.slug}/${serviceSlug}`,
          serviceType: service.name,
          areaServed: city.name,
        })}
      />
      <ServiceContent
        service={service}
        locationLabel={city.name}
        defaultCity={city.name}
        breadcrumbs={[
          { name: "Home Help", href: "/home-help-services" },
          cityCrumb,
          { name: service.name, href: `/cities/${city.slug}/${serviceSlug}` },
        ]}
        related={related}
        leadService={leadService}
      />
    </>
  );
}
