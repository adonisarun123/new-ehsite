import type { ProcessStep } from "@/features/services/types";
import { SectionHeading } from "./SectionHeading";

interface Props {
  steps: ProcessStep[];
  title?: string;
  eyebrow?: string;
}

export function ProcessSteps({ steps, title = "How EzyHelpers works", eyebrow }: Props) {
  return (
    <section className="section bg-ivory" aria-labelledby="process-heading">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} center />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={i}
              className="relative rounded-2xl border border-edge/70 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift motion-reduce:transform-none"
            >
              <span
                className="font-heading text-4xl font-medium text-brand-deep/80"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 border-l-2 border-brand/20 pl-3 font-heading text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 border-l-2 border-transparent pl-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
