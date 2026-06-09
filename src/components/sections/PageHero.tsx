import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  tone?: "brand" | "care";
  children?: React.ReactNode;
}

/** Standard inner-page hero with optional breadcrumbs (spec §12.4 hero). */
export function PageHero({ title, subtitle, eyebrow, breadcrumbs, tone = "brand", children }: Props) {
  const bg = tone === "care" ? "from-care/70" : "from-brand-mint/70";
  return (
    <section className={`bg-gradient-to-b ${bg} to-white`}>
      <div className="container-page py-10 sm:py-14">
        {breadcrumbs && (
          <div className="mb-5">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && <Badge tone={tone}>{eyebrow}</Badge>}
        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
