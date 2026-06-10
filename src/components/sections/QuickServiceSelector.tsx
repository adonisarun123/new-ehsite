"use client";

import Link from "next/link";
import { track } from "@/lib/utils/analytics";

const OPTIONS = [
  { label: "Elderly Care", href: "/care-services/elderly-care", tone: "care" },
  { label: "Dementia Care", href: "/care-services/dementia-care", tone: "care" },
  { label: "Patient Care", href: "/care-services/patient-care", tone: "care" },
  { label: "Live-in Maid", href: "/services/live-in-maids", tone: "home" },
  { label: "Nanny", href: "/services/nanny-babysitter", tone: "home" },
  { label: "Cook", href: "/services/cooks", tone: "home" },
] as const;

const TONE_CLASSES: Record<(typeof OPTIONS)[number]["tone"], string> = {
  care: "border-brand/20 bg-brand-mint/70 text-brand-deep hover:border-brand hover:bg-brand-mint",
  home: "border-cta/25 bg-cta-soft/70 text-cta-ink hover:border-cta hover:bg-cta-soft",
};

/** "I need help with:" quick links (spec §12.1). */
export function QuickServiceSelector() {
  return (
    <section className="border-b border-edge bg-white" aria-label="Quick service selector">
      <div className="container-page py-8">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-muted">
          I need help with
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {OPTIONS.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              onClick={() => track("service_card_click", { service: o.label, location: "quick-selector" })}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-card motion-reduce:transform-none ${TONE_CLASSES[o.tone]}`}
            >
              {o.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
