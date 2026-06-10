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
import Image from "next/image";
import { MapPin, CalendarClock, ShieldCheck, RefreshCw, IndianRupee } from "lucide-react";
import { careHeroImage } from "@/lib/constants/heroImages";

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

              {/* Illustrative care image */}
              <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-3xl border border-edge shadow-card">
                <Image
                  src={careHeroImage(service.slug).src}
                  alt={careHeroImage(service.slug).alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  priority
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden /> {where}
                </span>
              </div>

              <div className="mt-6">
                <AnswerBlock>{service.answerBlock}</AnswerBlock>
              </div>
            </div>

            {/* Lead form card — sticky so the CTA stays in view on long pages */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift lg:sticky lg:top-24">
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

          {/* Local context fact strip */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, title: `Serving ${where}`, sub: "and nearby areas" },
              { icon: CalendarClock, title: "Day, night & live-in", sub: "options to suit your routine" },
              { icon: ShieldCheck, title: "Verified & trained", sub: "screened before placement" },
              { icon: RefreshCw, title: "Replacement support", sub: "if the fit isn't right" },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 rounded-2xl border border-edge/70 bg-white p-4 shadow-card"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-care text-brand-deep">
                  <f.icon className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{f.title}</span>
                  <span className="mt-0.5 block text-xs text-muted">{f.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for + family concerns */}
      <section className="section bg-white">
        <div className="container-page grid gap-6 lg:grid-cols-2">
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
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
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
        <div className="container-page grid gap-6 lg:grid-cols-2">
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
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <ListBlock title="Safety and verification" items={service.safetyPoints} />
          <ListBlock title="A quick family checklist" items={service.familyChecklist} />
        </div>
      </section>

      {/* Pricing note */}
      <section className="pb-4">
        <div className="container-page">
          <div className="flex gap-4 rounded-2xl border border-cta/25 bg-cream/70 p-6">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cta/15 text-cta-ink">
              <IndianRupee className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-ink">Pricing & consultation</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">{service.pricingNote}</p>
            </div>
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
