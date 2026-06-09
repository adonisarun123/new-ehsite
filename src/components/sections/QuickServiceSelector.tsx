"use client";

import Link from "next/link";
import { track } from "@/lib/utils/analytics";

const OPTIONS = [
  { label: "Elderly Care", href: "/care-services/elderly-care" },
  { label: "Dementia Care", href: "/care-services/dementia-care" },
  { label: "Patient Care", href: "/care-services/patient-care" },
  { label: "Live-in Maid", href: "/services/live-in-maids" },
  { label: "Nanny", href: "/services/nanny-babysitter" },
  { label: "Cook", href: "/services/cooks" },
];

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
              className="rounded-full border border-edge bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:bg-brand-mint hover:text-brand-deep"
            >
              {o.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
