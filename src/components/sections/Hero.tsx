import { Button } from "@/components/ui/Button";
import { CallButton } from "@/components/ContactActions";
import { LeadForm } from "@/components/forms/LeadForm";
import { ShieldCheck, Star, Check, Clock, Lock } from "lucide-react";
import { RATING_BADGE } from "@/lib/constants/brand";

const HERO_TRUST = [
  "Background-verified helpers",
  "Quick placement",
  "Fair, transparent pricing",
];

/** Homepage hero with lead-form card (spec §12.1). */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-mint via-white to-cta-soft">
      {/* soft animated background shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 animate-float-slow rounded-full bg-brand/15 blur-3xl motion-reduce:animate-none" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-48 h-80 w-80 animate-float rounded-full bg-accent/10 blur-3xl motion-reduce:animate-none" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 animate-float-slow rounded-full bg-cta/15 blur-3xl motion-reduce:animate-none" aria-hidden />

      <div className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cta/30 bg-white/90 px-3 py-1.5 shadow-card backdrop-blur">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-cta text-cta" aria-hidden />
              ))}
            </span>
            <span className="text-sm font-semibold text-ink">{RATING_BADGE}</span>
          </div>

          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            Trusted <span className="text-gradient-brand">caregivers</span> and{" "}
            <span className="text-cta-deep">home helpers</span> for families in Bangalore
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            EzyHelpers connects families with verified, trained, and supported caregivers,
            maids, nannies, cooks, and patient attendants for safer, more reliable care at home.
          </p>

          {/* Inline trust checks */}
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {HERO_TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-ink">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>

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
        </div>

        {/* Lead form card */}
        <div className="relative animate-fade-up overflow-hidden rounded-3xl border border-edge bg-white p-6 shadow-lift sm:p-8">
          <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-accent to-cta" aria-hidden />
          <div className="flex items-center gap-2 text-brand-deep">
            <ShieldCheck className="h-5 w-5" aria-hidden />
            <span className="text-sm font-semibold">Get a verified helper in 24–72 hours</span>
          </div>
          <h2 className="mt-3 font-heading text-xl font-semibold text-ink">
            Tell us what your family needs
          </h2>
          <p className="mt-1 text-sm text-muted">
            Share a few details and our team will call you back.
          </p>
          <div className="mt-6">
            <LeadForm compact />
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
            <Clock className="h-3.5 w-3.5 text-accent" aria-hidden /> 30-min callback
            <span aria-hidden>·</span>
            <Lock className="h-3.5 w-3.5 text-accent" aria-hidden /> 100% secure
          </p>
        </div>
      </div>
    </section>
  );
}
