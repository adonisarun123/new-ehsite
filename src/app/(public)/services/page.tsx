import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CareConditionCards } from "@/components/sections/CareConditionCards";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getAllServices, getAllCareServices } from "@/features/services/queries";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "All Services — Caregiving & Home Help in Bangalore",
  description:
    "Explore all EzyHelpers services in Bangalore: caregiving support for elders and patients, plus verified maids, cooks, nannies, and housekeeping help.",
  path: "/services",
});

export default async function AllServicesPage() {
  const services = await getAllServices();
  const careServices = await getAllCareServices();

  return (
    <>
      <PageHero
        eyebrow="All services"
        title="Caregiving and home help, on one trusted platform"
        subtitle="EzyHelpers brings together trained caregiving support and verified home help for families in Bangalore."
        breadcrumbs={[{ name: "Services", href: "/services" }]}
      />
      <section className="section">
        <div className="container-page space-y-10">
          <AnswerBlock>
            EzyHelpers offers two kinds of support in Bangalore: trained caregiving for elders,
            patients, and recovering family members, and verified home help such as maids, cooks,
            and nannies. Every helper and caregiver is screened, trained, and matched to your home.
          </AnswerBlock>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Caregiving" title="Care services" />
              <Button href="/care-services" variant="outline">All care services</Button>
            </div>
            <div className="mt-8">
              <CareConditionCards services={careServices} />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Home help" title="Domestic help services" />
              <Button href="/home-help-services" variant="outline">All home help</Button>
            </div>
            <div className="mt-8">
              <ServiceCards services={services} />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
