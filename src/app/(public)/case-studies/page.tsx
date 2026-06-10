import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/features/seo/metadata";
import { CASE_STUDIES } from "@/content/seed-case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Real Stories from Indian Homes & Helpers",
  description:
    "Real stories from families and helpers using EzyHelpers — placements, trust, and outcomes across domestic help services in Bangalore.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const sorted = [...CASE_STUDIES].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="Real stories from Indian homes and helpers"
        subtitle="How families and helpers found stability together — small systems, honest conversations, and respect that turned placements into long-term relationships."
        breadcrumbs={[{ name: "Case Studies", href: "/case-studies" }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="flex flex-wrap gap-2">
                  <Badge tone="brand">{study.service}</Badge>
                </div>
                <h2 className="mt-4 font-heading text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-brand">
                  {study.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                  {study.excerpt}
                </p>
                <span className="mt-4 inline-block font-semibold text-brand">
                  Read story →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want a helper relationship that lasts?" />
    </>
  );
}
