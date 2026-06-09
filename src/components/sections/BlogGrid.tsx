import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/content/seed-blog";
import { BLOG_CATEGORIES } from "@/content/seed-blog";
import { Badge } from "@/components/ui/Badge";

function categoryName(slug: string): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Badge tone="brand">{categoryName(post.category)}</Badge>
            <h3 className="mt-3 font-heading text-lg font-semibold text-ink group-hover:text-brand-deep">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readingMinutes} min read
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
