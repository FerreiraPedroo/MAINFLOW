import React from "react";
import type { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`container flex items-start justify-center ${className}`}>
      {children}
    </div>
  );
}
