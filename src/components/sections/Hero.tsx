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
    <section className="relative overflow-hidden bg-ivory">
      {/* soft background tints */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 animate-float-slow rounded-full bg-brand/10 blur-3xl motion-reduce:animate-none" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cta/10 blur-3xl" aria-hidden />

      <div className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          {/* Availability status pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-card">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Helpers &amp; caregivers available across Bangalore
          </div>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Trusted care and home help,
            <span className="block text-brand-deep">for the people you love.</span>
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

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Button href="/helper-jobs" variant="ghost" size="sm">
              Apply as Helper / Caregiver →
            </Button>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
              <span className="flex" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-cta text-cta" />
                ))}
              </span>
              {RATING_BADGE}
            </span>
          </div>
        </div>

        {/* Lead form card */}
        <div className="relative animate-fade-up rounded-3xl border border-edge bg-white p-6 shadow-lift sm:p-8">
          {/* Floating verified chip (reference: ezycaregivers floating trust chips) */}
          <div className="absolute -top-4 right-6 inline-flex items-center gap-2 rounded-full border border-edge bg-white px-3.5 py-2 shadow-card">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent" aria-hidden>
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-semibold text-ink">Verified &amp; trained</span>
          </div>
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
