import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { CareConditionCards } from "@/components/sections/CareConditionCards";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { getAllCareServices, getAllServices } from "@/features/services/queries";
import { buildMetadata } from "@/features/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/features/seo/schema";
import { CITIES, getCity, BANGALORE_LOCALITIES } from "@/lib/constants/locations";

interface Params {
  params: Promise<{ citySlug: string }>;
}

export function generateStaticParams() {
  return CITIES.map((c) => ({ citySlug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return buildMetadata({
    title: `Caregivers & Home Helpers in ${city.name}`,
    description: `Verified caregivers and home helpers in ${city.name} with EzyHelpers — elderly care, patient care, maids, cooks, and nannies, screened and matched to your home.`,
    path: `/cities/${city.slug}`,
  });
}

export default async function CityPage({ params }: Params) {
  const { citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const careServices = await getAllCareServices();
  const services = await getAllServices();
  const localities = city.slug === "bangalore" ? BANGALORE_LOCALITIES : [];

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <PageHero
        eyebrow={`${city.name}, ${city.state}`}
        title={`Caregivers and home helpers in ${city.name}`}
        subtitle={`EzyHelpers connects families in ${city.name} with verified, trained caregivers and home helpers for safer, more reliable care at home.`}
        breadcrumbs={[{ name: city.name, href: `/cities/${city.slug}` }]}
      />

      <section className="section">
        <div className="container-page space-y-10">
          <AnswerBlock>{city.intro}</AnswerBlock>

          <div>
            <SectionHeading eyebrow="Caregiving" title={`Care services in ${city.name}`} />
            <div className="mt-8">
              <CareConditionCards services={careServices} />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Home help" title={`Home help in ${city.name}`} />
            <div className="mt-8">
              <ServiceCards services={services} />
            </div>
          </div>
        </div>
      </section>

      {localities.length > 0 && (
        <section className="section bg-brand-mint/40">
          <div className="container-page">
            <SectionHeading title={`Localities we serve in ${city.name}`} />
            <div className="mt-8 flex flex-wrap gap-2">
              {localities.map((l) => (
                <Link
                  key={l.slug}
                  href={`/localities/${city.slug}/${l.slug}/elderly-care`}
                  className="rounded-full border border-edge bg-white px-4 py-2 text-sm text-ink hover:border-brand hover:text-brand-deep"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={`Talk to EzyHelpers about support in ${city.name}`} />
    </>
  );
}
