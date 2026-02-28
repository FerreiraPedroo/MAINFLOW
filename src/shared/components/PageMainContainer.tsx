import type { ReactNode } from "react";
import React from "react";

export function PageMainContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`container min-h-screen flex items-start justify-center px-4 lg:px-8 py-4 lg:py-8 bg-slate-50 ${className}`}
    >
      {children}
    </div>
  );
}
