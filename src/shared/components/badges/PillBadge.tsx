import React from "react";

const pillTypes = {
  default:
    "bg-slate-100 border text-slate-700 text-xs font-medium px-2 py-0.5 rounded-full",
  Ativo:
    "bg-green-100 border text-green-700 text-xs font-medium px-2 py-0.5 rounded-full",
  Inativo:
    "bg-red-100 border text-red-700 text-xs font-medium px-2 py-0.5 rounded-full",
};

export function PillBadge({ name }: { name: keyof typeof pillTypes }) {
  return <span className={pillTypes[name] ?? pillTypes.default}>{name}</span>;
}
