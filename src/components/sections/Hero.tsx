import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CallButton } from "@/components/ContactActions";
import { LeadForm } from "@/components/forms/LeadForm";
import { ShieldCheck, Star } from "lucide-react";

/** Homepage hero with lead-form card (spec §12.1). */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mint/80 to-white">
      {/* soft background shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-care/60 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-cream/80 blur-3xl" aria-hidden />

      <div className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <Badge tone="brand">
            <ShieldCheck className="h-3.5 w-3.5" /> Verified & trained home support
          </Badge>
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Trusted caregivers and home helpers for families in Bangalore
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            EzyHelpers connects families with verified, trained, and supported caregivers,
            maids, nannies, cooks, and patient attendants for safer, more reliable care at home.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="cta" size="lg">
              Get Free Consultation
            </Button>
            <CallButton size="lg" />
          </div>

          <div className="mt-5">
            <Button href="/helper-jobs" variant="ghost" size="sm">
              Apply as Helper / Caregiver →
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-cta text-cta" aria-hidden />
              ))}
            </span>
            Caring support that families across Bangalore rely on.
          </div>
        </div>

        {/* Lead form card */}
        <div className="animate-fade-up rounded-3xl border border-edge bg-white p-6 shadow-lift sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-ink">
            Tell us what your family needs
          </h2>
          <p className="mt-1 text-sm text-muted">
            Share a few details and our team will call you back.
          </p>
          <div className="mt-6">
            <LeadForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
