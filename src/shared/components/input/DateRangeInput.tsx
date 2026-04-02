import React, { useCallback, useEffect, useState } from "react";
import { gridCols } from "./utils/gridCols";

const todayData = new Date().toISOString().split("T")[0];

export function DateRangeInput({
  text,
  name,
  required = true,
  cols = 2,
  startValue = todayData,
  endValue = todayData,
  setFormValue = null,
}: {
  text: string;
  name: string;
  required?: boolean;
  cols?: number | string;
  startValue?: string;
  endValue?: string;
  setFormValue?: React.Dispatch<React.SetStateAction<any>> | null;
}) {
  const [values, setValues] = useState({ startValue, endValue });

  const handleToday = useCallback(() => {
    setValues({
      startValue: todayData,
      endValue: todayData,
    });
  }, []);

  useEffect(() => {
    if (setFormValue) {
      setFormValue((prev: any) => {
        return { ...prev, ...values };
      });
    }
  }, [values]);

  return (
    <div className={gridCols[cols]}>
      <div className="flex justify-between items-center pr-0.5 mb-1">
        <label className="block text-sm font-medium text-slate-700">
          {text}
          {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type="button"
          className="rounded-md border text-xs border-slate-400 bg-slate-200 px-2 hover:bg-slate-300 hover:cursor-pointer active:bg-slate-400 pb-0.5"
          onClick={handleToday}
          value="Hoje"
        />
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="date"
          name={`start-date-${name}`}
          value={values.startValue}
          required={required}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, startValue: e.target.value };
            })
          }
          max={values.endValue}
          className="w-full bg-white px-4 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        />
        até
        <input
          type="date"
          name={`end-date-${name}`}
          value={values.endValue}
          required={required}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, endValue: e.target.value };
            })
          }
          min={values.startValue}
          className="w-full bg-white px-4 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        />
      </div>
    </div>
  );
}
