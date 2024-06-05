"use client";

import React from "react";

import { cn } from "@/lib/utils";

export function HeroHighlight({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  // const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);

  // function handleMouseMove({
  //   currentTarget,
  //   clientX,
  //   clientY,
  // }: React.MouseEvent<HTMLDivElement>) {
  //   if (!currentTarget) return;
  //   const { left, top } = currentTarget.getBoundingClientRect();

  //   mouseX.set(clientX - left);
  //   mouseY.set(clientY - top);
  // }
  return (
    <div
      className={cn(
        "flex items-centerjustify-center w-full group",
        containerClassName
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </span>
  );
}
