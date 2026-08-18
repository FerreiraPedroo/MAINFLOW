import React from "react";
import { gridCols } from "../input/utils/gridCols";

type TextField = {
  cols: number | string;
  label: string;
  text: string | number;
};

export function TextField({ cols = 2, label, text }: TextField) {
  return (
    <div className={gridCols[cols]}>
      <dt className="w-full text-xs px-0.5 font-medium text-slate-400">
        {label}
      </dt>

      <dd className="w-full py-1.5 px-0.5 text-sm font-medium text-slate-800">
        {text ?? "-"}
      </dd>
    </div>
  );
}
