import React from "react";

export function Loading({ className }: { className?: string }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center bg-slate-300/50 bg-linear-to-t from-transparent via-slate-700/50 to-transparent ${className}`}
    >
      <div className="flex items-center justify-center space-x-2 ">
        <div className="w-4 h-4 rounded-sm animate-pulse bg-slate-200"></div>
        <div className="w-4 h-4 rounded-sm animate-pulse bg-slate-200"></div>
        <div className="w-4 h-4 rounded-sm animate-pulse bg-slate-200"></div>
      </div>
    </div>
  );
}
