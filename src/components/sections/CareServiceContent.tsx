import type { CareService } from "@/features/services/types";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { MedicalScopeNote } from "@/components/seo/MedicalScopeNote";
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
  service: CareService;
  /** Optional location label e.g. "HSR Layout, Bangalore" for local pages. */
  locationLabel?: string;
  defaultCity?: string;
  defaultLocality?: string;
  breadcrumbs: Crumb[];
  related: RelatedLink[];
  /** Lead-form default service label. */
  leadService: string;
}

/** Full individual care service page body (spec §12.4). Reused by service + local pages. */
export function CareServiceContent({
  service,
  locationLabel,
  defaultCity = "Bangalore",
  defaultLocality,
  breadcrumbs,
  related,
  leadService,
}: Props) {
  const title = locationLabel
    ? `${service.name} at Home in ${locationLabel}`
    : service.heroTitle;
  const where = locationLabel ?? "Bangalore";

  return (
    <>
      <section className="relative overflow-hidden bg-ivory">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-care/70 blur-3xl" aria-hidden />
        <div className="container-page relative py-10 sm:py-14">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-6 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Badge tone="care">
                <Icon name={service.icon} className="h-3.5 w-3.5" /> {service.supportLevel}
              </Badge>
              <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted">{service.heroSubtitle}</p>
              <div className="mt-6">
                <AnswerBlock>{service.answerBlock}</AnswerBlock>
              </div>
            </div>

            {/* Lead form card */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  Request a free care consultation
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Our team will call you to understand the need.
                </p>
                <div className="mt-5">
                  <LeadForm
                    variant="care"
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

      {/* Who this is for + family concerns */}
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <ListBlock title="Who this care is for" items={service.whoItIsFor} />
          {service.familyConcerns.length > 0 && (
            <ListBlock
              title="Common family concerns we help with"
              items={service.familyConcerns}
            />
          )}
        </div>
      </section>

      {/* Can / cannot do + scope note */}
      <section className="section bg-ivory">
        <div className="container-page">
          <SectionHeading
            title="What the caregiver can and cannot do"
            description="We are clear about scope so families know exactly what to expect."
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <ListBlock
              title="What the caregiver can help with"
              items={service.caregiverCanHelpWith}
            />
            <ListBlock
              title="What the caregiver does not do"
              items={service.caregiverCannotDo}
              variant="cross"
            />
          </div>
          <div className="mt-8 max-w-3xl">
            <MedicalScopeNote />
          </div>
        </div>
      </section>

      {/* Care options + recommended profile */}
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <ListBlock title="Types of care options" items={service.careOptions} />
          <ListBlock
            title="Recommended caregiver profile"
            items={service.recommendedCaregiverProfile}
          />
        </div>
      </section>

      <ProcessSteps steps={service.processSteps} title="How EzyHelpers matches caregivers" />

      {/* Safety + family checklist */}
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <ListBlock title="Safety and verification" items={service.safetyPoints} />
          <ListBlock title="A quick family checklist" items={service.familyChecklist} />
        </div>
      </section>

      {/* Pricing note */}
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
        trackContext={`care-${service.slug}`}
        description={`Common questions about ${service.name.toLowerCase()} at home in ${where}.`}
      />

      <RelatedPages title="Related care & support" links={related} />

      <CTASection
        title={`Talk to us about ${service.name.toLowerCase()} for your family`}
        primaryLabel="Request Free Consultation"
      />
    </>
  );
}
