import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface Props {
  title: string;
  items: string[];
  variant?: "check" | "cross";
  description?: string;
  className?: string;
}

/** Bulleted "Who this is for" / "What is included" / "What is not included" block. */
export function ListBlock({ title, items, variant = "check", description, className }: Props) {
  if (!items.length) return null;
  const cross = variant === "cross";
  return (
    <div className={cn("", className)}>
      <h3 className="font-heading text-xl font-semibold text-ink">{title}</h3>
      {description && <p className="mt-2 text-sm text-muted">{description}</p>}
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                cross ? "bg-danger/10 text-danger" : "bg-brand-mint text-brand-deep"
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
