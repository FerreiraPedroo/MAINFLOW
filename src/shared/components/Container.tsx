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
      className={`h-auto w-full flex items-start justify-center pt-4 pb-10 px-6 overflow-y-auto min-w-full ${className} `}
    >
      {children}
    </div>
  );
}
