import type { JobPage } from "@/content/seed-jobs";
import { PageHero } from "./PageHero";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { SectionHeading } from "./SectionHeading";
import { ListBlock } from "./ListBlock";
import { ProcessSteps } from "./ProcessSteps";
import { FAQSection } from "./FAQSection";
import { HelperApplicationForm } from "@/components/forms/HelperApplicationForm";
import { Badge } from "@/components/ui/Badge";

interface Props {
  job: JobPage;
  headingOverride?: string;
  introOverride?: string;
  applicantType?: string;
  breadcrumbs?: { name: string; href: string }[];
}

/** Shared hiring page body (spec §12.10). Used by main + sub job pages. */
export function HiringContent({ job, headingOverride, introOverride, applicantType, breadcrumbs }: Props) {
  return (
    <>
      <PageHero
        eyebrow="For helpers & caregivers"
        title={headingOverride ?? job.heroTitle}
        subtitle={introOverride ?? job.heroSubtitle}
        breadcrumbs={breadcrumbs ?? [{ name: job.title, href: `/${job.slug}` }]}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <AnswerBlock>{job.answerBlock}</AnswerBlock>

            <div>
              <SectionHeading title="Job categories" />
              <div className="mt-4 flex flex-wrap gap-2">
                {job.categories.map((c) => (
                  <Badge key={c} tone="brand">{c}</Badge>
                ))}
              </div>
            </div>

            <ListBlock title="Why work with EzyHelpers" items={job.whyWorkWithUs} />
            <ListBlock title="Documents you'll need" items={job.documentsNeeded} />
          </div>

          {/* Application form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-edge bg-white p-6 shadow-lift">
              <h2 className="font-heading text-lg font-semibold text-ink">Apply now</h2>
              <p className="mt-1 text-sm text-muted">It's free to apply. We'll contact you about suitable jobs.</p>
              <div className="mt-5">
                <HelperApplicationForm defaultType={applicantType ?? job.applicantType} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={job.applicationProcess} title="How to apply" />

      <section className="section bg-white">
        <div className="container-page max-w-2xl">
          <ListBlock title="Safety and support" items={job.safetyAndSupport} />
        </div>
      </section>

      <FAQSection faqs={job.faqs} trackContext={`job-${job.slug}`} />
    </>
  );
}
