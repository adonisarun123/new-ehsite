import { cn } from "@/lib/utils/cn";

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * Display a single trust statistic.
 * NOTE: Only use with verified, real figures (spec §4.1 — no invented numbers).
 */
export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-heading text-3xl font-bold text-brand-deep sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
