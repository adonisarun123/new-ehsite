import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CareServiceContent } from "@/components/sections/CareServiceContent";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllCareServices,
  getCareServiceBySlug,
  getRelatedCareServices,
} from "@/features/services/queries";
import { buildMetadata } from "@/features/seo/metadata";
import { serviceSchema } from "@/features/seo/schema";
import { leadLabelFor } from "@/features/services/leadLabel";
import { BRAND } from "@/lib/constants/brand";
import type { RelatedLink } from "@/components/sections/RelatedPages";

interface Params {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateStaticParams() {
  const services = await getAllCareServices();
  return services.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = await getCareServiceBySlug(serviceSlug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle.replace(` | ${BRAND.name}`, ""),
    description: service.metaDescription,
    path: `/care-services/${service.slug}`,
  });
}

export default async function CareServicePage({ params }: Params) {
  const { serviceSlug } = await params;
  const service = await getCareServiceBySlug(serviceSlug);
  if (!service) notFound();

  const relatedServices = await getRelatedCareServices(service.slug, 5);
  const related: RelatedLink[] = [
    ...relatedServices.map((s) => ({
      label: s.name,
      href: `/care-services/${s.slug}`,
      description: s.supportLevel,
    })),
    { label: "Caregiver jobs in Bangalore", href: "/caregiver-jobs", description: "For caregivers seeking work" },
    { label: "Contact EzyHelpers", href: "/contact", description: "Talk to our team" },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} at Home in Bangalore`,
          description: service.metaDescription,
          url: `${BRAND.url}/care-services/${service.slug}`,
          serviceType: service.name,
        })}
      />
      <CareServiceContent
        service={service}
        breadcrumbs={[
          { name: "Care Services", href: "/care-services" },
          { name: service.name, href: `/care-services/${service.slug}` },
        ]}
        related={related}
        leadService={leadLabelFor(service.slug, service.name)}
      />
    </>
  );
}
