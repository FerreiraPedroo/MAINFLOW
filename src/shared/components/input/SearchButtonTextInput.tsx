import React from "react";
import { gridCols } from "./utils/gridCols";

export function SearchButtonTextInput({
  text,
  name,
  required = true,
  placeholder = "",
  cols = 2,
  value = "",
  openModal,
}: {
  text: string;
  name: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  cols?: number | string;
  value: any;
  openModal: () => null;
}) {
  return (
    <div className={gridCols[cols]}>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {text}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          name={name}
          required={required}
          readOnly={true}
          value={value}
          className="w-full bg-white px-4 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          placeholder={`${placeholder && "Ex: " + placeholder}`}
        />
        <button
          className="border border-amber-400 px-2 rounded-md bg-slate-200 hover:text-slate-900 hover:bg-slate-300 hover:shadow-slate-500/25 hover:shadow-lg transition-all duration-300 font-medium"
          onClick={openModal}
        >
          <svg
            className="w-4 h-4 text-slate-600"
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
        </button>
      </div>
    </div>
  );
}
