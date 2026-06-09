import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HiringContent } from "@/components/sections/HiringContent";
import { buildMetadata } from "@/features/seo/metadata";
import { getJobPage, getJobSubPage, CAREGIVER_JOB_SUBPAGES } from "@/content/seed-jobs";

interface Params {
  params: Promise<{ jobSlug: string }>;
}

export function generateStaticParams() {
  return CAREGIVER_JOB_SUBPAGES.map((s) => ({ jobSlug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { jobSlug } = await params;
  const sub = getJobSubPage("caregiver-jobs", jobSlug);
  if (!sub) return {};
  return buildMetadata({
    title: `${sub.title} | Apply with EzyHelpers`,
    description: sub.intro,
    path: `/caregiver-jobs/${sub.slug}`,
  });
}

export default async function CaregiverJobSubPage({ params }: Params) {
  const { jobSlug } = await params;
  const sub = getJobSubPage("caregiver-jobs", jobSlug);
  if (!sub) notFound();
  const job = getJobPage("caregiver-jobs")!;

  return (
    <HiringContent
      job={job}
      headingOverride={sub.title}
      introOverride={sub.intro}
      applicantType={sub.applicantType}
      breadcrumbs={[
        { name: "Caregiver Jobs", href: "/caregiver-jobs" },
        { name: sub.title, href: `/caregiver-jobs/${sub.slug}` },
      ]}
    />
  );
}
