import { Sparkles } from "lucide-react";

/**
 * Direct 40–70 word answer block for answer engines (spec §13.1).
 * Place near the top of every service / city / locality / condition / blog page.
 */
export function AnswerBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-brand/20 bg-brand-mint/70 p-5 sm:p-6">
      <div className="mb-2 flex items-center gap-2 text-brand-deep">
        <Sparkles className="h-4 w-4" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-wide">Quick answer</span>
      </div>
      <p className="text-[1.0625rem] leading-relaxed text-ink/90">{children}</p>
    </div>
  );
}
