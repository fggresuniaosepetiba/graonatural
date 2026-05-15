"use client";

import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section-gap", className)}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-6 md:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "center" | "left";
  action?: ReactNode;
}

export function SectionHeader({
  title,
  description,
  align = "center",
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        action && "flex items-end justify-between"
      )}
    >
      <div>
        <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-tight text-primary">
          {title}
        </h2>
        {description && (
          <p className="mt-3 font-body text-base text-secondary">
            {description}
          </p>
        )}
        {align === "center" && (
          <div className="mx-auto mt-5 h-px w-12 bg-outline-variant" />
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
