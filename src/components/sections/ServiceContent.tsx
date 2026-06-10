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
import { MapPin, CalendarClock, ShieldCheck, RefreshCw, IndianRupee } from "lucide-react";

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
              <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift lg:sticky lg:top-24">
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

          {/* Local context fact strip */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, title: `Serving ${where}`, sub: "and nearby areas" },
              { icon: CalendarClock, title: "Flexible arrangements", sub: "live-in, full-time, or part-time" },
              { icon: ShieldCheck, title: "Verified & trained", sub: "screened before placement" },
              { icon: RefreshCw, title: "Replacement support", sub: "if the fit isn't right" },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 rounded-2xl border border-edge/70 bg-white p-4 shadow-card"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cta-soft text-cta-ink">
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

      {service.serviceOptions.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeading title="Service options" />
            <div className="mt-6 flex flex-wrap gap-3">
              {service.serviceOptions.map((opt) => (
                <span
                  key={opt}
                  className="rounded-full border border-cta/25 bg-cta-soft/60 px-4 py-2 text-sm font-medium text-cta-ink"
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-ivory">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <ListBlock title="Who this is for" items={service.whoItIsFor} />
          <ListBlock title="Tasks included" items={service.whatIsIncluded} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <ListBlock title="What is not included" items={service.whatIsNotIncluded} variant="cross" />
          <ListBlock title="Verification and support" items={service.trustPoints} />
        </div>
      </section>

      <ProcessSteps steps={service.processSteps} title="How EzyHelpers matches helpers" />

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
        trackContext={`service-${service.slug}`}
        description={`Common questions about ${service.name.toLowerCase()} in ${where}.`}
      />

      <RelatedPages title="Related services" links={related} />

      <CTASection title={`Find the right ${service.name.toLowerCase()} for your home`} />
    </>
  );
}
