import type { ReactNode } from "react";

export function PageMainContainer({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`container min-h-screen flex items-start justify-center px-4 lg:px-8 py-2 lg:py-4 ${className}`}>{children}</div>
  );
}
