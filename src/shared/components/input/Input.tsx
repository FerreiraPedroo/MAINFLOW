import React from "react";
import { gridCols } from "./utils/gridCols";

export function Input({
  type = "text",
  text,
  name,
  value,
  readOnly,
  required = true,
  placeholder = "",
  disabled = false,
  onChange,
  onBlur,
  cols = 2,
}: {
  type?: string;
  text?: string;
  name: string;
  value?: string;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<any>>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  cols?: number | string;
}) {
  return (
    <div className={gridCols[cols]}>
      <label className="block text-sm font-medium text-slate-700">
        {text}
        {required && <span className="text-red-500">*</span>}
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          readOnly={readOnly}
          className={`w-full ${disabled ? "bg-stone-200" : "bg-white"} px-2 py-1.5 text-sm rounded border border-slate-300 focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all shadow-sm `}
          placeholder={`${placeholder && "Ex: " + placeholder}`}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    </div>
  );
}
