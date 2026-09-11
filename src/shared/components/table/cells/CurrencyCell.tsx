import React from "react";
interface CurrencyCellProps {
  value?: number | null;
  currency?: string;
}

export function CurrencyCell({ value, currency = "BRL" }: CurrencyCellProps) {
  if (value == null) {
    return <span>-</span>;
  }

  return (
    <span className="font-medium text-slate-800">
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency,
      }).format(value)}
    </span>
  );
}
