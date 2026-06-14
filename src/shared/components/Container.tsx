import type { ReactNode } from "react";
import React from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`container flex items-start justify-center p-2 lg:p-4 ${className}`}
    >
      {children}
    </div>
  );
}
