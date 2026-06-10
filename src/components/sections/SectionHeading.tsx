import { cn } from "@/lib/utils/cn";

interface Props {
  eyebrow?: string;
  /** Tints the eyebrow chip: default trust-blue, warm amber, or verified green. */
  eyebrowTone?: "brand" | "warm" | "green";
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowTone = "brand",
  title,
  description,
  center,
  className,
}: Props) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-3",
            center && "justify-center",
            eyebrowTone === "warm" && "eyebrow-warm",
            eyebrowTone === "green" && "eyebrow-green"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-[1.7rem] font-semibold leading-snug tracking-tight text-ink sm:text-[2.1rem]">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted">{description}</p>}
    </div>
  );
}
