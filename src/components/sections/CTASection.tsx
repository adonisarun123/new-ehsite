import { Button } from "@/components/ui/Button";
import { CallButton, WhatsAppButton } from "@/components/ContactActions";

interface Props {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

/** Reusable final CTA band (spec §12.1 final CTA). */
export function CTASection({
  title = "Talk to EzyHelpers about your family's needs",
  description = "Our team will call you to understand your requirement before suggesting a helper or caregiver. No obligation.",
  primaryHref = "/contact",
  primaryLabel = "Get Free Consultation",
}: Props) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-accent-deep px-6 py-12 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-brand-bright/25 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-cta/25 blur-3xl" aria-hidden />
          <h2 className="relative mx-auto max-w-2xl font-heading text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/80">{description}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} variant="cta" size="lg">
              {primaryLabel}
            </Button>
            <CallButton size="lg" className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20" />
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
