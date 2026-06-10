import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

interface Props {
  title?: string;
  links: RelatedLink[];
}

/** Internal linking block (spec §14.4). */
export function RelatedPages({ title = "Related pages", links }: Props) {
  if (!links.length) return null;
  return (
    <section className="section bg-white" aria-labelledby="related-heading">
      <div className="container-page">
        <SectionHeading title={title} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex items-start justify-between gap-3 rounded-xl border border-edge bg-white p-4 hover:border-brand/40 hover:bg-brand-mint/30"
              >
                <span>
                  <span className="font-medium text-ink group-hover:text-brand-deep">
                    {l.label}
                  </span>
                  {l.description && (
                    <span className="mt-0.5 block text-sm text-muted">{l.description}</span>
                  )}
                </span>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
