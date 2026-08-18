import React from "react";

export function Loading({ className }: { className?: string }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-99 flex flex-col justify-center text-center bg-slate-700/75 ${className}`}
    >
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-sm animate-pulse bg-slate-800"></div>
        <div className="w-4 h-4 rounded-sm animate-pulse bg-slate-800"></div>
        <div className="w-4 h-4 rounded-sm animate-pulse bg-slate-800"></div>
      </div>
    </div>
  );
}
