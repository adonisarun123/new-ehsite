import { createElement } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "section" | "li";
  hover?: boolean;
}

export function Card({ as: Tag = "div", hover, className, ...props }: CardProps) {
  return createElement(Tag, {
    className: cn(
      "rounded-2xl border border-edge bg-white p-6 shadow-card",
      hover && "transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift",
      className
    ),
    ...props,
  });
}
