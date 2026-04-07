import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}