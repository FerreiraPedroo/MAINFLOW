import React from "react";
import { gridCols } from "./utils/gridCols";

export function CheckInput({
  text,
  name,
  cols = 2,
  value = "",
  setFormValue,
}: {
  text: string;
  name: string;
  value: any;
  cols?: number | string;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const cl = `${gridCols[cols]} flex items-end pb-2`;

  return (
    <div className={cl}>
      <label className="flex items-center gap-3 cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) =>
              setFormValue((prev) => ({ ...prev, [name]: e.target.checked }))
            }
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-slate-200 peer-checked:bg-emerald-500 rounded-full transition-colors" />
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
        </div>
        <span className="text-sm font-medium text-slate-700">{text}</span>
      </label>
    </div>
  );
}
