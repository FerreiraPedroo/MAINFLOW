import React from "react";
interface DateCellProps {
  value: string | Date | null;
}

export function DateCell({ value }: DateCellProps) {
  if (!value) {
    return <span>-</span>;
  }

  const date = new Date(value);

  return (
    <span className="font-medium text-slate-800">
      {date.toLocaleDateString("pt-BR")}
    </span>
  );
}
