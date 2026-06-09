import type { Metadata } from "next";
import { HiringContent } from "@/components/sections/HiringContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/features/seo/metadata";
import { faqSchema } from "@/features/seo/schema";
import { getJobPage } from "@/content/seed-jobs";

const job = getJobPage("caregiver-jobs")!;

export const metadata: Metadata = buildMetadata({
  title: "Caregiver Jobs in Bangalore — Apply with EzyHelpers",
  description: job.metaDescription,
  path: "/caregiver-jobs",
});

export default function CaregiverJobsPage() {
  return (
    <>
      <JsonLd data={faqSchema(job.faqs)} />
      <HiringContent job={job} />
    </>
  );
}
