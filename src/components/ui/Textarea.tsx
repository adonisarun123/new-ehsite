import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils/cn";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, id, className, required, rows = 4, ...props },
  ref
) {
  const generatedId = useId();
  const taId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={taId} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-danger">*</span>}
      </label>
      <textarea
        ref={ref}
        id={taId}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${taId}-error` : undefined}
        className={cn(
          "rounded-xl border border-edge bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70",
          "focus:border-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
          error && "border-danger",
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${taId}-error`} className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
});
