"use client";

import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-body font-semibold text-[10px] tracking-widest uppercase px-3 py-1",
        variant === "default" &&
          "bg-primary/10 text-primary",
        variant === "outline" &&
          "border border-outline-variant text-on-surface-variant",
        className
      )}
    >
      {children}
    </span>
  );
}
