import { ShieldCheck, UserCheck, RefreshCw, HeartHandshake } from "lucide-react";

/** Trust signals strip. Uses qualitative claims only — no invented numbers (spec §4.1). */
const POINTS = [
  {
    icon: UserCheck,
    title: "Verified & background-checked",
    sub: "Screened before they enter your home",
    tile: "bg-accent/10 text-accent-deep",
  },
  {
    icon: HeartHandshake,
    title: "Trained, respectful caregivers",
    sub: "Skill-assessed and trained for the role",
    tile: "bg-brand/10 text-brand-deep",
  },
  {
    icon: ShieldCheck,
    title: "Safety-first daily care",
    sub: "Clear scope of work, no surprises",
    tile: "bg-cta/15 text-cta-ink",
  },
  {
    icon: RefreshCw,
    title: "Replacement support",
    sub: "We stay involved after placement",
    tile: "bg-brand-mint text-brand-deep",
  },
];

export function TrustBar() {
  return (
    <section className="bg-ivory" aria-label="Why families trust EzyHelpers">
      <div className="container-page grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p) => (
          <div
            key={p.title}
            className="flex items-start gap-3 rounded-2xl border border-edge/70 bg-white p-4 shadow-card"
          >
            <span
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${p.tile}`}
            >
              <p.icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">{p.title}</span>
              <span className="mt-0.5 block text-xs text-muted">{p.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
