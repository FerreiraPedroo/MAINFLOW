import React from "react";
import { Link } from "react-router-dom";
import { colorTypes } from "./colors/colors";

export function LinkButton({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className={`
        font-semibold
        flex
        px-4
        py-2

        justify-center
        hover:ring-1
        hover:cursor-pointer
        transition
        ease-in
        duration-200
        shadow-md
        rounded-md

        disabled:ring-0
        disabled:bg-stone-300
        disabled:border-stone-400
        disabled:text-stone-500



      ${colorTypes.blue}
      `}
    >
      {text}
    </Link>
  );
}
