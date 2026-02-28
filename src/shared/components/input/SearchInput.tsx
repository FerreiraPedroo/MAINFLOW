import React from "react";
import { gridCols } from "./utils/gridCols";

export function SearchInput({
  name,
  placeholder = "",
  cols = 2,
  value = "",
  setSearchTerm,
}: {
  name: string;
  placeholder?: string;
  cols?: number | string;
  value: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className={gridCols[cols]}>
      <div className="flex-1 relative">
        <svg
          className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          name={name}
          placeholder={`${placeholder}...`}
          value={value}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white pl-7 pr-4 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        />
      </div>
    </div>
  );
}
