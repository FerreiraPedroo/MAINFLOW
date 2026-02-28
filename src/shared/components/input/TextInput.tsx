import React from "react";
import { gridCols } from "./utils/gridCols";

export function TextInput({
  text,
  name,
  required = true,
  placeholder = "",
  readOnly,
  cols = 2,
  value = "",
  setFormValue,
}: {
  text: string;
  name: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  cols?: number | string;
  value: any;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className={gridCols[cols]}>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {text}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="text"
        name={name}
        required={required}
        readOnly={readOnly}
        value={value}
        onChange={(e) =>
          setFormValue((prev: any) => ({ ...prev, [name]: e.target.value }))
        }
        className="w-full bg-white px-4 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        placeholder={`${placeholder && "Ex: " + placeholder}`}
      />
    </div>
  );
}
