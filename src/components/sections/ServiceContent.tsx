import type { Service } from "@/features/services/types";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { SectionHeading } from "./SectionHeading";
import { ListBlock } from "./ListBlock";
import { ProcessSteps } from "./ProcessSteps";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
import { RelatedPages, type RelatedLink } from "./RelatedPages";
import { Badge } from "@/components/ui/Badge";
import { LeadForm } from "@/components/forms/LeadForm";
import { Icon } from "@/components/Icon";

interface Props {
  service: Service;
  locationLabel?: string;
  defaultCity?: string;
  defaultLocality?: string;
  breadcrumbs: Crumb[];
  related: RelatedLink[];
  leadService: string;
}

/** Individual domestic service page body (spec §12.6). Reused by service + local pages. */
export function ServiceContent({
  service,
  locationLabel,
  defaultCity = "Bangalore",
  defaultLocality,
  breadcrumbs,
  related,
  leadService,
}: Props) {
  const title = locationLabel ? `${service.name} in ${locationLabel}` : service.heroTitle;
  const where = locationLabel ?? "Bangalore";

  return (
    <>
      <section className="relative overflow-hidden bg-ivory">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cta/10 blur-3xl" aria-hidden />
        <div className="container-page relative py-10 sm:py-14">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-6 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Badge tone="brand">
                <Icon name={service.icon} className="h-3.5 w-3.5" /> Verified home help
              </Badge>
              <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted">{service.heroSubtitle}</p>
              <div className="mt-6">
                <AnswerBlock>{service.answerBlock}</AnswerBlock>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  Request this service
                </h2>
                <p className="mt-1 text-sm text-muted">We'll call to understand your need.</p>
                <div className="mt-5">
                  <LeadForm
                    compact
                    defaultService={leadService}
                    defaultCity={defaultCity}
                    defaultLocality={defaultLocality}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.serviceOptions.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeading title="Service options" />
            <div className="mt-6 flex flex-wrap gap-3">
              {service.serviceOptions.map((opt) => (
                <span
                  key={opt}
                  className="rounded-full border border-edge bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-ivory">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <ListBlock title="Who this is for" items={service.whoItIsFor} />
          <ListBlock title="Tasks included" items={service.whatIsIncluded} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <ListBlock title="What is not included" items={service.whatIsNotIncluded} variant="cross" />
          <ListBlock title="Verification and support" items={service.trustPoints} />
        </div>
      </section>

      <ProcessSteps steps={service.processSteps} title="How EzyHelpers matches helpers" />

      <section className="pb-4">
        <div className="container-page">
          <div className="rounded-2xl border border-edge bg-cream/60 p-6">
            <h3 className="font-heading text-lg font-semibold text-ink">Pricing & consultation</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">{service.pricingNote}</p>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={service.faqs}
        trackContext={`service-${service.slug}`}
        description={`Common questions about ${service.name.toLowerCase()} in ${where}.`}
      />

      <RelatedPages title="Related services" links={related} />

      <CTASection title={`Find the right ${service.name.toLowerCase()} for your home`} />
    </>
  );
}
