import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/features/seo/metadata";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/content/seed-blog";

export const metadata: Metadata = buildMetadata({
  title: "Caregiving & Home Help Guides — EzyHelpers Blog",
  description:
    "Practical guides on elder care, dementia care, patient care, palliative support, childcare, and hiring home help safely in Bangalore from EzyHelpers.",
  path: "/blog",
});

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const posts = category
    ? BLOG_POSTS.filter((p) => p.category === category)
    : BLOG_POSTS;
  const sorted = [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = sorted[0];

  return (
    <>
      <PageHero
        eyebrow="Guides & resources"
        title="Caregiving and home help guides for Indian families"
        subtitle="Practical, trustworthy guidance on caring for elders and patients, and hiring dependable home help."
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />

      <section className="section">
        <div className="container-page">
          {/* Categories */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                !category ? "border-brand bg-brand-mint text-brand-deep" : "border-edge bg-white text-ink hover:border-brand"
              }`}
            >
              All
            </Link>
            {BLOG_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/blog?category=${c.slug}`}
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  category === c.slug ? "border-brand bg-brand-mint text-brand-deep" : "border-edge bg-white text-ink hover:border-brand"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>

          {featured && !category && (
            <Link
              href={`/blog/${featured.slug}`}
              className="mb-10 block overflow-hidden rounded-3xl border border-edge bg-brand-mint/40 p-8 transition-shadow hover:shadow-lift"
            >
              <span className="eyebrow">Featured guide</span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-ink">{featured.title}</h2>
              <p className="mt-3 max-w-2xl text-muted">{featured.excerpt}</p>
              <span className="mt-4 inline-block font-semibold text-brand">Read the guide →</span>
            </Link>
          )}

          {sorted.length > 0 ? (
            <BlogGrid posts={category ? sorted : sorted.slice(featured ? 1 : 0)} />
          ) : (
            <p className="text-muted">No articles in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      <CTASection title="Need help deciding what care your family needs?" />
    </>
  );
}
