import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/features/seo/metadata";
import { blogPostingSchema } from "@/features/seo/schema";
import { BRAND, BLOG_MEDICAL_DISCLAIMER } from "@/lib/constants/brand";
import { BLOG_POSTS, BLOG_CATEGORIES, getBlogPost } from "@/content/seed-blog";
import { Clock, Check, AlertTriangle } from "lucide-react";
import { slugify } from "@/lib/utils/slug";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function categoryName(slug: string) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);
  const relatedFallback =
    related.length > 0 ? related : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const serviceHref =
    post.relatedServiceSlug && post.relatedServiceType === "care"
      ? `/care-services/${post.relatedServiceSlug}`
      : post.relatedServiceSlug
      ? `/services/${post.relatedServiceSlug}`
      : "/contact";

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.excerpt,
          url: `${BRAND.url}/blog/${post.slug}`,
          datePublished: post.publishedAt,
        })}
      />

      <article>
        <header className="bg-gradient-to-b from-brand-mint/60 to-white">
          <div className="container-page py-10 sm:py-14">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <div className="mt-5 max-w-3xl">
              <Badge tone="brand">{categoryName(post.category)}</Badge>
              <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted">
                <Clock className="h-4 w-4" aria-hidden /> {post.readingMinutes} min read
              </div>
            </div>
          </div>
        </header>

        <div className="container-page py-10">
          <div className="mx-auto max-w-3xl space-y-8">
            <AnswerBlock>{post.answerSummary}</AnswerBlock>

            {/* Table of contents */}
            <nav aria-label="Table of contents" className="rounded-2xl border border-edge bg-white p-5">
              <p className="mb-2 text-sm font-semibold text-ink">On this page</p>
              <ol className="space-y-1.5 text-sm">
                {post.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="text-brand hover:underline">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Main content */}
            <div className="prose-care">
              {post.sections.map((s) => (
                <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-24">
                  <h2 className="font-heading text-xl font-semibold text-ink">{s.heading}</h2>
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </section>
              ))}
            </div>

            {/* Checklist */}
            {post.checklist.length > 0 && (
              <div className="rounded-2xl border border-edge bg-brand-mint/40 p-6">
                <h2 className="font-heading text-lg font-semibold text-ink">Practical checklist</h2>
                <ul className="mt-4 space-y-2.5">
                  {post.checklist.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                      <span className="text-[0.975rem] text-ink/85">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Medical disclaimer */}
            {post.isMedical && (
              <aside className="flex gap-3 rounded-2xl border border-cta/30 bg-cta/5 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cta" aria-hidden />
                <p className="text-sm leading-relaxed text-ink/80">{BLOG_MEDICAL_DISCLAIMER}</p>
              </aside>
            )}

            {/* Related service CTA */}
            <div className="rounded-3xl bg-brand-deep px-6 py-8 text-center text-white">
              <h2 className="font-heading text-xl font-semibold text-white">Need this kind of support at home?</h2>
              <p className="mx-auto mt-2 max-w-md text-white/80">
                EzyHelpers can help your family find verified, trained support in Bangalore.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={serviceHref} variant="cta">Explore the service</Button>
                <Button href="/contact" variant="outline" className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20">
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {post.faqs.length > 0 && (
          <FAQSection faqs={post.faqs} trackContext={`blog-${post.slug}`} />
        )}

        <section className="section bg-brand-mint/30">
          <div className="container-page">
            <SectionHeading title="Related articles" />
            <div className="mt-8">
              <BlogGrid posts={relatedFallback} />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
