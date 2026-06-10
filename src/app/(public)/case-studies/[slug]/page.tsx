import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/features/seo/metadata";
import { BRAND } from "@/lib/constants/brand";
import { CASE_STUDIES, getCaseStudy } from "@/content/seed-case-studies";
import { Check } from "lucide-react";
import { slugify } from "@/lib/utils/slug";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: `Case Study: ${study.title}`,
    description: study.excerpt,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const url = `${BRAND.url}/case-studies/${study.slug}`;
  const related = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: study.excerpt,
          url,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          datePublished: study.publishedAt,
          author: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
          publisher: {
            "@type": "Organization",
            name: BRAND.name,
            url: BRAND.url,
          },
        }}
      />

      <article>
        <header className="bg-ivory">
          <div className="container-page py-10 sm:py-14">
            <Breadcrumbs
              items={[
                { name: "Case Studies", href: "/case-studies" },
                { name: study.title, href: `/case-studies/${study.slug}` },
              ]}
            />
            <div className="mt-5 max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Badge tone="brand">{study.service}</Badge>
                <Badge tone="neutral">{study.location}</Badge>
              </div>
              <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
                {study.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted">{study.excerpt}</p>
            </div>
          </div>
        </header>

        <div className="bg-white py-10">
          <div className="container-page">
            <div className="mx-auto max-w-3xl space-y-8">
              {/* Main content */}
              <div className="prose-care">
                {study.sections.map((s) => (
                  <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-24">
                    <h2 className="font-heading text-xl font-semibold text-ink">{s.heading}</h2>
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Takeaways */}
              {study.takeaways && study.takeaways.length > 0 && (
                <div className="rounded-2xl border border-edge bg-ivory p-6">
                  <h2 className="font-heading text-lg font-semibold text-ink">Key takeaways</h2>
                  <ul className="mt-4 space-y-2.5">
                    {study.takeaways.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                        <span className="text-[0.975rem] text-ink/85">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quote */}
              {study.quote && (
                <figure className="rounded-2xl border border-edge bg-white p-6 shadow-card">
                  <blockquote className="font-heading text-lg leading-relaxed text-ink">
                    &ldquo;{study.quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted">
                    <span className="font-semibold text-ink">{study.quote.name}</span>
                    {" — "}
                    {study.quote.role}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </div>

        <section className="section bg-ivory">
          <div className="container-page">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink">
              More success stories
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className="group flex flex-col rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <Badge tone="brand">{c.service}</Badge>
                  <h3 className="mt-4 font-heading text-base font-semibold leading-snug tracking-tight text-ink group-hover:text-brand">
                    {c.title}
                  </h3>
                  <span className="mt-3 inline-block text-sm font-semibold text-brand">
                    Read story →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Need a helper your family can keep?" />
      </article>
    </>
  );
}
