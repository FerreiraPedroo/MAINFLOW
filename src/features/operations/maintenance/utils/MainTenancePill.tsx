import React from "react";

const textsColor = {
  Corretiva: "bg-red-100 rounded-xl px-2 text-red-800",
  Preventiva: "bg-blue-100 rounded-xl px-2 text-blue-800",
  Preditiva: "bg-gray-200 rounded-xl px-2 text-gray-800",
  Emergencial: "bg-red-300 rounded-xl px-2 text-red-900",
};

export function MainTenancePill({ text }: { text: string }) {
  return <span className={textsColor[text]}>{text}</span>;
}
