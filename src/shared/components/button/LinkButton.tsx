import React from "react";
import { Link } from "react-router-dom";

export function LinkButton({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center border align-middle select-none font-medium text-center duration-200 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none py-2 px-4 shadow-sm hover:shadow-md bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-700 rounded-lg  hover:border-stone-400"
    >
      {text}
    </Link>
  );
}
