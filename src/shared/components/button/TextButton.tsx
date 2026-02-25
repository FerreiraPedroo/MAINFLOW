import React from "react";

const base =
  "flex-1 px-4 py-2.5 rounded-xl text-white font-medium  transition-colors";
const baseWhite =
  "flex-1 px-4 py-2.5 rounded-xl font-medium  transition-colors";

const types = {
  red: `${base} bg-rose-500 hover:bg-rose-600`,
  stone: `${base} bg-stone-500 hover:bg-stone-600`,
  blue: `${base} bg-blue-500 hover:bg-blue-600`,
  white: `${baseWhite} bg-slate-100 text-slate-700 hover:bg-slate-200`,
};

export function TextButton({
  type,
  text,
  onClick,
}: {
  type: keyof typeof types;
  text: string;
  onClick: () => null;
}) {
  return (
    <button onClick={onClick} className={types[type] ?? base}>
      {text}
    </button>
  );
}
