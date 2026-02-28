import React from "react";
import { gridCols } from "./utils/gridCols";

export function SelectInput({
  text,
  name,
  value = "",
  options = [],
  required = true,
  cols = 2,
  setFormValue,
  hiddenText = false,
}: {
  text: string;
  name: string;
  value: any;
  options: Array<{ id: number; name: string } | string>;
  required?: boolean;
  cols?: number | string;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
  hiddenText?: boolean;
}) {
  return (
    <div className={gridCols[cols]}>
      <label
        className={`block text-sm font-medium text-slate-700 mb-1 ${hiddenText && "hidden"}`}
      >
        {text}
        {required && <span className="text-red-500">*</span>}
      </label>

      <select
        // defaultChecked={value}
        defaultValue={value}
        name={name}
        required={required}
        onChange={(e) =>
          setFormValue((prev: any) => ({ ...prev, [name]: e.target.value }))
        }
        className="w-full bg-white px-4 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
      >
        <option value="">Selecione...</option>
        {options.map((opt) => {
          if (typeof opt == "string") {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          }
          return (
            <option key={opt.name} value={opt.id}>
              {opt.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
