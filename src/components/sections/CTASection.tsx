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
        <div className="overflow-hidden rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-2xl font-heading text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
