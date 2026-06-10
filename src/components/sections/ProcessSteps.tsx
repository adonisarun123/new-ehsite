import type { ProcessStep } from "@/features/services/types";
import { SectionHeading } from "./SectionHeading";

interface Props {
  steps: ProcessStep[];
  title?: string;
  eyebrow?: string;
}

export function ProcessSteps({ steps, title = "How EzyHelpers works", eyebrow }: Props) {
  return (
    <section className="section bg-gradient-to-b from-brand-mint/60 via-white to-cta-soft/40" aria-labelledby="process-heading">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} center />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={i}
              className="relative rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift motion-reduce:transform-none"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-bright text-base font-bold text-white shadow-glow-brand">
                {i + 1}
              </span>
              <h3 className="font-heading text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
