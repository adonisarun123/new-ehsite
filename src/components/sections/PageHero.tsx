import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { cn } from "@/lib/utils/cn";

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
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div
        className={cn(
          "pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl",
          tone === "care" ? "bg-care/70" : "bg-brand/10"
        )}
        aria-hidden
      />
      <div className="container-page relative py-10 sm:py-14">
        {breadcrumbs && (
          <div className="mb-5">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
