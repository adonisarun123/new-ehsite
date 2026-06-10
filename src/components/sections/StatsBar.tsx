import { TRUST_STATS } from "@/lib/constants/brand";

/**
 * Headline trust metrics (from www.ezyhelpers.com).
 * Figures are brand-approved; do not edit without source confirmation.
 */
export function StatsBar() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-deep to-accent-deep text-white"
      aria-label="EzyHelpers by the numbers"
    >
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-bright/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cta/20 blur-3xl" aria-hidden />
      <div className="container-page relative py-10 sm:py-12">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-white/80">
          Trusted by 10,000+ Indian families
        </p>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-heading text-3xl font-bold sm:text-4xl">{s.value}</dt>
              <span className="mx-auto mt-2 block h-1 w-8 rounded-full bg-cta" aria-hidden />
              <dd className="mt-1 text-sm font-medium">{s.label}</dd>
              <dd className="mt-0.5 text-xs text-white/70">{s.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
