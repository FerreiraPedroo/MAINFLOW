import React from "react";
import { gridCols } from "./utils/gridCols";

const CarretSVG = `<svg
    className="w-4 h-4 text-gray-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>`;

export function SelectInput({
  text,
  name,
  value = "",
  options = [],
  defaultOption = true,
  required = true,
  disabled = false,
  onChange,
  onBlur,
  hiddenText = false,
  cols = 4,
}: {
  text: string;
  name: string;
  value: any;
  options: Array<{ value: number | string; name: string | number } | string>;
  defaultOption?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<any>>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  hiddenText?: boolean;
  cols?: number | string;
}) {
  return (
    <div className={`${gridCols[cols]} relative`}>
      <label
        className={`block text-sm font-medium text-slate-700 ${hiddenText && "hidden"}`}
      >
        {text}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full peer bg-white pl-2 pr-8 py-1.5 text-ellipsis text-sm font-medium rounded border border-slate-300 focus:ring-1 focus:ring-blue-400 outline-none transition-transform shadow-sm appearance-none`}
      >
        {defaultOption && <option value="">Selecione...</option>}
        {options.map((opt) => {
          if (typeof opt == "string") {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          }
          return (
            <option key={opt.name} value={opt.value}>
              {opt.name}
            </option>
          );
        })}
      </select>

      <div className="absolute peer-open:-rotate-180 transform-all e duration-300 bottom-1.5 right-0 flex items-center mr-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
