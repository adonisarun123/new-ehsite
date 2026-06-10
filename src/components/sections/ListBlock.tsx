import { Check, X, ListChecks, ShieldX } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface Props {
  title: string;
  items: string[];
  variant?: "check" | "cross";
  description?: string;
  className?: string;
}

/**
 * "Who this is for" / "What is included" / "What is not included" block.
 * Rendered as a contained surface card (clear elevation hierarchy) so
 * list-heavy service pages read as organised panels, not floating text.
 */
export function ListBlock({ title, items, variant = "check", description, className }: Props) {
  if (!items.length) return null;
  const cross = variant === "cross";
  const HeaderIcon = cross ? ShieldX : ListChecks;
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card sm:p-7",
        cross ? "border-danger/15" : "border-edge/70",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl",
            cross ? "bg-danger/10 text-danger" : "bg-brand-mint text-brand-deep"
          )}
        >
          <HeaderIcon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">{title}</h3>
      </div>
      {description && <p className="mt-2 text-sm text-muted">{description}</p>}
      <ul className="mt-5 space-y-3 border-t border-edge/60 pt-5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                cross ? "bg-danger/10 text-danger" : "bg-accent/10 text-accent-deep"
              )}
            >
              {cross ? <X className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" />}
            </span>
            <span className="text-[0.975rem] leading-relaxed text-ink/85">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
