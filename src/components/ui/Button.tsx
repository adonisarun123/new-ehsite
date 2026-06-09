import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "cta" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-brand-deep focus-visible:ring-brand",
  cta: "bg-cta text-ink shadow-soft hover:brightness-95 focus-visible:ring-cta",
  outline:
    "border border-edge bg-white text-ink hover:border-brand hover:text-brand focus-visible:ring-brand",
  ghost: "text-brand hover:bg-brand-mint focus-visible:ring-brand",
  whatsapp:
    "bg-[#25D366] text-white shadow-soft hover:brightness-95 focus-visible:ring-[#25D366]",
};

// Large tap targets for mobile (spec §11.5)
const sizes: Record<Size, string> = {
  sm: "min-h-[40px] px-4 text-sm",
  md: "min-h-[48px] px-5 text-base",
  lg: "min-h-[56px] px-7 text-lg",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", fullWidth, className, ...props },
    ref
  ) {
    const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

    if ("href" in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      const isExternal = /^(https?:|tel:|mailto:|https:\/\/wa\.me)/.test(href);
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            {...rest}
          />
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonAsButton)}
      />
    );
  }
);
