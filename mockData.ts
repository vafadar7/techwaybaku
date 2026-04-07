import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "primary" | "danger" | "neutral";
}

const toneStyles = {
  primary: "bg-blue-100 text-blue-700",
  danger: "bg-red-100 text-red-700",
  neutral: "bg-slate-100 text-slate-700",
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-medium", toneStyles[tone], className)} {...props} />
  );
}