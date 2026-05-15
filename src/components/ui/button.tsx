"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-body font-semibold tracking-widest uppercase transition-all duration-300",
          size === "sm" && "px-5 py-2.5 text-[10px]",
          size === "md" && "px-6 py-3 text-[11px]",
          size === "lg" && "px-10 py-4 text-xs",
          variant === "primary" &&
            "bg-primary text-on-primary hover:bg-primary/90 active:scale-[0.97]",
          variant === "secondary" &&
            "border border-primary text-primary hover:bg-primary hover:text-on-primary active:scale-[0.97]",
          variant === "ghost" &&
            "text-primary hover:bg-primary/5 active:scale-[0.97]",
          variant === "outline" &&
            "border border-outline-variant text-on-surface hover:border-primary hover:text-primary active:scale-[0.97]",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
