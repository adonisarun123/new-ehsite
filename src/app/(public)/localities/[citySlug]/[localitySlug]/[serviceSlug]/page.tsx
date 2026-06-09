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
import { getCity, getLocality, resolveServiceSlug } from "@/lib/constants/locations";
import type { RelatedLink } from "@/components/sections/RelatedPages";

interface Params {
  params: Promise<{ citySlug: string; localitySlug: string; serviceSlug: string }>;
}

/**
 * Locality × service pages render on demand (ISR-style) and are listed in the
 * sitemap. Returning no params here keeps the build fast while every URL still
 * resolves. Pre-render specific high-priority combos by populating this array.
 */
export function generateStaticParams() {
  return [] as { citySlug: string; localitySlug: string; serviceSlug: string }[];
}

async function resolve(citySlug: string, localitySlug: string, serviceSlug: string) {
  const city = getCity(citySlug);
  const locality = getLocality(citySlug, localitySlug);
  if (!city || !locality) return null;
  const canonical = resolveServiceSlug(serviceSlug);
  const any = await getAnyServiceBySlug(canonical);
  if (!any) return null;
  return { city, locality, any, canonical };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { citySlug, localitySlug, serviceSlug } = await params;
  const r = await resolve(citySlug, localitySlug, serviceSlug);
  if (!r) return {};
  const name = r.any.service.name;
  const place = `${r.locality.name}, ${r.city.name}`;
  return buildMetadata({
    title: r.any.kind === "care" ? `${name} at Home in ${place}` : `${name} in ${place}`,
    description: r.any.service.metaDescription.replace("Bangalore", place),
    path: `/localities/${citySlug}/${localitySlug}/${serviceSlug}`,
  });
}

export default async function LocalityServicePage({ params }: Params) {
  const { citySlug, localitySlug, serviceSlug } = await params;
  const r = await resolve(citySlug, localitySlug, serviceSlug);
  if (!r) notFound();

  const { city, locality, any, canonical } = r;
  const label = `${locality.name}, ${city.name}`;
  const leadService = leadLabelFor(canonical, any.service.name);
  const base = `/localities/${city.slug}/${locality.slug}`;

  const breadcrumbsTop =
    any.kind === "care"
      ? { name: "Care Services", href: "/care-services" }
      : { name: "Home Help", href: "/home-help-services" };

  const related: RelatedLink[] = [
    { label: `Elderly care in ${locality.name}`, href: `${base}/elderly-care` },
    { label: `Live-in maids in ${locality.name}`, href: `${base}/live-in-maids` },
    { label: `All services in ${locality.name}`, href: base },
    { label: `${city.name} services`, href: `/cities/${city.slug}` },
    { label: "Contact EzyHelpers", href: "/contact" },
  ].filter((l) => l.href !== `${base}/${serviceSlug}`);

  const schema = serviceSchema({
    name: `${any.service.name} in ${label}`,
    description: any.service.metaDescription,
    url: `${BRAND.url}${base}/${serviceSlug}`,
    serviceType: any.service.name,
    areaServed: locality.name,
  });

  const breadcrumbs = [
    breadcrumbsTop,
    { name: city.name, href: `/cities/${city.slug}` },
    { name: locality.name, href: base },
    { name: any.service.name, href: `${base}/${serviceSlug}` },
  ];

  return (
    <>
      <JsonLd data={schema} />
      {any.kind === "care" ? (
        <CareServiceContent
          service={any.service}
          locationLabel={label}
          defaultCity={city.name}
          defaultLocality={locality.name}
          breadcrumbs={breadcrumbs}
          related={related}
          leadService={leadService}
        />
      ) : (
        <ServiceContent
          service={any.service}
          locationLabel={label}
          defaultCity={city.name}
          defaultLocality={locality.name}
          breadcrumbs={breadcrumbs}
          related={related}
          leadService={leadService}
        />
      )}
    </>
  );
}
