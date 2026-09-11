import React from "react";

interface TextCellProps {
  children: React.ReactNode;
  className?: string;
}

export function TextCell({ children, className = "" }: TextCellProps) {
  return (
    <span className={`font-medium text-slate-800 ${className}`}>
      {children}
    </span>
  );
}
