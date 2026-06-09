import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/constants/brand";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/features/seo/schema";

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <JsonLd
        data={breadcrumbSchema(all.map((c) => ({ name: c.name, url: `${BRAND.url}${c.href}` })))}
      />
      <ol className="flex flex-wrap items-center gap-1 text-muted">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {last ? (
                <span className="font-medium text-ink" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="hover:text-brand">
                    {c.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
