import React from "react";

type BlockSection = {
  className?: string;
  children: React.ReactNode;
};

export function BlockSection({ children, className }: BlockSection) {
  return (
    <div
      className={`
      p-4
      bg-white
      border
      border-slate-200
      rounded-md
      shadow-sm
      space-y-3
      ${className}
    `}
    >
      {children}
    </div>
  );
}

export function BlockSectionTitle({ children }: React.PropsWithChildren) {
  return (
    <div
      className="
      flex
      justify-between
      font-semibold
      text-lg
      px-4
      py-3
      -mt-4
      -mx-4
      border-b
      border-b-slate-200
      bg-white
      rounded-t-md
    "
    >
      {children}
    </div>
  );
}
