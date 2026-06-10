import { Button } from "@/components/ui/Button";
import { CallButton, WhatsAppButton } from "@/components/ContactActions";

interface Props {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

/** Reusable final CTA band (spec §12.1 final CTA) — light editorial panel. */
export function CTASection({
  title = "Talk to EzyHelpers about your family's needs",
  description = "Our team will call you to understand your requirement before suggesting a helper or caregiver. No obligation.",
  primaryHref = "/contact",
  primaryLabel = "Get Free Consultation",
}: Props) {
  return (
    <section className="section bg-ivory">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-edge/60 bg-white px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cta/15 blur-3xl" aria-hidden />
          <span className="relative inline-flex items-center rounded-full border border-edge bg-ivory px-3.5 py-1.5 text-sm font-medium text-muted">
            Care, when you&apos;re ready
          </span>
          <h2 className="relative mx-auto mt-5 max-w-2xl font-heading text-3xl font-semibold text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted">{description}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
            </Button>
            <CallButton size="lg" />
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
