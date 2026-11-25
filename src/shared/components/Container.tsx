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
    <div
      className={`h-auto w-full flex items-start justify-center overflow-y-auto ${className} `}
    >
      {children}
    </div>
  );
}
