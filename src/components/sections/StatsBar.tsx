import { TRUST_STATS } from "@/lib/constants/brand";

/**
 * Headline trust metrics (from www.ezyhelpers.com).
 * Figures are brand-approved; do not edit without source confirmation.
 */
export function StatsBar() {
  return (
    <section
      className="bg-gradient-to-br from-brand to-brand-deep text-white"
      aria-label="EzyHelpers by the numbers"
    >
      <div className="container-page py-10 sm:py-12">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-white/80">
          Trusted by 10,000+ Indian families
        </p>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-heading text-3xl font-bold sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-sm font-medium">{s.label}</dd>
              <dd className="mt-0.5 text-xs text-white/70">{s.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
