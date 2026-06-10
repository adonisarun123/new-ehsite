import { ShieldCheck, UserCheck, RefreshCw, HeartHandshake } from "lucide-react";

const POINTS = [
  { icon: UserCheck, label: "Verified & background-checked", tile: "bg-accent/10 text-accent" },
  { icon: HeartHandshake, label: "Trained, respectful caregivers", tile: "bg-brand/10 text-brand" },
  { icon: ShieldCheck, label: "Safety-first daily care", tile: "bg-cta/15 text-cta-ink" },
  { icon: RefreshCw, label: "Replacement support", tile: "bg-accent-deep/10 text-accent-deep" },
];

/** Trust signals strip. Uses qualitative claims only — no invented numbers (spec §4.1). */
export function TrustBar() {
  return (
    <section className="border-y border-edge bg-white" aria-label="Why families trust EzyHelpers">
      <div className="container-page grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
        {POINTS.map((p) => (
          <div key={p.label} className="flex items-center gap-3">
            <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${p.tile}`}>
              <p.icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-sm font-medium text-ink">{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
