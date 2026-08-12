import React from "react";
import { Link } from "react-router-dom";

export function LinkButton({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="
      min-h-10
      px-3

      inline-flex items-center justify-center align-middle
      select-none
      rounded-sm
      text-sm
      font-medium
      text-nowrap
      text-center

    text-slate-900
      disabled:opacity-50
      disabled:shadow-none
      disabled:cursor-not-allowed
      focus:shadow-none

      hover:cursor-pointer
      hover:shadow-slate-500/25
      hover:shadow-sm
    bg-blue-100
    hover:bg-blue-200
      border
    border-slate-400
      shadow-xs
    shadow-slate-500

      ease-in
      transition-all
      duration-100
      "
    >
      {text}
    </Link>
  );
}
