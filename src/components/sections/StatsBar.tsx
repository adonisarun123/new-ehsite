import { TRUST_STATS } from "@/lib/constants/brand";

/**
 * Headline trust metrics (from www.ezyhelpers.com).
 * Figures are brand-approved; do not edit without source confirmation.
 * Rendered as a contained dark panel with serif numerals (editorial style).
 */
export function StatsBar() {
  return (
    <section className="bg-ivory py-6 sm:py-10" aria-label="EzyHelpers by the numbers">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep to-accent-deep px-6 py-10 text-white sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-bright/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cta/10 blur-3xl" aria-hidden />
          <p className="relative mb-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Trusted by 10,000+ Indian families
          </p>
          <dl className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-heading text-4xl font-semibold sm:text-5xl">{s.value}</dt>
                <dd className="mt-2 text-sm font-medium text-white/90">{s.label}</dd>
                <dd className="mt-0.5 text-xs text-white/60">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
