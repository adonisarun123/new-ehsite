import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllServices,
  getServiceBySlug,
  getRelatedServices,
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
  const services = await getAllServices();
  return services.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = await getServiceBySlug(serviceSlug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle.replace(` | ${BRAND.name}`, ""),
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { serviceSlug } = await params;
  const service = await getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const relatedServices = await getRelatedServices(service.slug, 4);
  const related: RelatedLink[] = [
    ...relatedServices.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
      description: s.category === "childcare" ? "Childcare" : "Home help",
    })),
    { label: "Live-in & full-time maids in Bangalore", href: "/cities/bangalore/full-time-maid" },
    { label: "Helper jobs in Bangalore", href: "/helper-jobs", description: "For helpers seeking work" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} in Bangalore`,
          description: service.metaDescription,
          url: `${BRAND.url}/services/${service.slug}`,
          serviceType: service.name,
        })}
      />
      <ServiceContent
        service={service}
        breadcrumbs={[
          { name: "Home Help", href: "/home-help-services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
        related={related}
        leadService={leadLabelFor(service.slug, "Other")}
      />
    </>
  );
}
