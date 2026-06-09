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
import {
  BANGALORE_LOCALITIES,
  getCity,
  getLocality,
} from "@/lib/constants/locations";

interface Params {
  params: Promise<{ citySlug: string; localitySlug: string }>;
}

export function generateStaticParams() {
  // Render locality hubs on demand; all are listed in the sitemap.
  return [] as { citySlug: string; localitySlug: string }[];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { citySlug, localitySlug } = await params;
  const city = getCity(citySlug);
  const locality = getLocality(citySlug, localitySlug);
  if (!city || !locality) return {};
  return buildMetadata({
    title: `Caregivers & Home Helpers in ${locality.name}, ${city.name}`,
    description: `Verified caregivers and home helpers in ${locality.name}, ${city.name} with EzyHelpers — elderly care, patient care, maids, cooks, and nannies for local families.`,
    path: `/localities/${citySlug}/${localitySlug}`,
  });
}

export default async function LocalityPage({ params }: Params) {
  const { citySlug, localitySlug } = await params;
  const city = getCity(citySlug);
  const locality = getLocality(citySlug, localitySlug);
  if (!city || !locality) notFound();

  const careServices = await getAllCareServices();
  const services = await getAllServices();
  const nearby = BANGALORE_LOCALITIES.filter((l) => l.slug !== locality.slug).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={`${locality.name}, ${city.name}`}
        title={`Caregivers and home helpers in ${locality.name}`}
        subtitle={`EzyHelpers supports families in ${locality.name} with verified, trained caregivers and home helpers — for elders, patients, children, and busy households.`}
        breadcrumbs={[
          { name: city.name, href: `/cities/${city.slug}` },
          { name: locality.name, href: `/localities/${city.slug}/${locality.slug}` },
        ]}
      />

      <section className="section">
        <div className="container-page space-y-10">
          <AnswerBlock>
            EzyHelpers provides verified caregivers and home helpers in {locality.name}, {city.name}
            , for elderly care, patient care, dementia support, maids, cooks, and nannies. {locality.context}{" "}
            Every helper is screened, trained, and matched to your home, with replacement support.
          </AnswerBlock>

          <div className="prose-care max-w-3xl">
            <h2 className="font-heading text-xl font-semibold text-ink">
              Home support for {locality.name} families
            </h2>
            <p>
              {locality.context} Families here often need dependable support for ageing parents,
              recovering patients, young children, or a busy household. EzyHelpers brings a
              structured, verified alternative to informal hiring — with trained caregivers and
              helpers who fit the rhythm of life in {locality.name}.
            </p>
            <p>
              Whether you live in an apartment community, a gated layout, or an independent home,
              we coordinate the right support and stay available for any concern.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Caregiving" title={`Care services in ${locality.name}`} />
            <div className="mt-8">
              <CareConditionCards services={careServices.slice(0, 6)} />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Home help" title={`Home help in ${locality.name}`} />
            <div className="mt-8">
              <ServiceCards services={services} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-mint/40">
        <div className="container-page">
          <SectionHeading title="Nearby localities we serve" />
          <div className="mt-8 flex flex-wrap gap-2">
            {nearby.map((l) => (
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

      <CTASection title={`Talk to EzyHelpers about support in ${locality.name}`} />
    </>
  );
}
