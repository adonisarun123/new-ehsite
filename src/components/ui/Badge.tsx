import { cn } from "@/lib/utils/cn";

type Tone = "brand" | "care" | "cream" | "neutral" | "cta" | "accent";

const tones: Record<Tone, string> = {
  brand: "bg-brand-mint text-brand-deep",
  care: "bg-care text-brand-deep",
  cream: "bg-cream text-[#8A6D2F]",
  neutral: "bg-edge/40 text-muted",
  cta: "bg-cta/15 text-cta-ink",
  accent: "bg-accent/10 text-accent",
};

interface BadgeProps {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
