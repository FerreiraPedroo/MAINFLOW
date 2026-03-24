import React from "react";

const base = "px-6 py-2 rounded-xl text-white font-medium  transition-colors";
const baseWhite = "px-6 py-2 rounded-xl font-medium  transition-colors";

const types = {
  red: `${base} bg-rose-500 hover:bg-rose-600`,
  stone: `${baseWhite} bg-stone-200 hover:bg-stone-300`,
  blue: `${base} bg-blue-500 hover:bg-blue-600`,
  green: `${baseWhite} bg-teal-200 hover:bg-teal-300`,
  white: `${baseWhite} bg-slate-100 text-slate-700 hover:bg-slate-200`,
};

export function TextButton({
  type,
  text,
  disable = false,
  onClick,
}: {
  type: keyof typeof types;
  text: string;
  disable?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={types[type] ?? base}
      disabled={disable}
    >

      {text}
    </button>
  );
}
