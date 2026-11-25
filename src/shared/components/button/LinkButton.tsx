import React from "react";
import { Link } from "react-router-dom";
import { colorTypes } from "./config/colors";
import { sizeClasses } from "./config/sizes";

export function LinkButton({
  to,
  text,
  size = "md",
}: {
  to: string;
  text: string;
  size: keyof typeof sizeClasses;
}) {
  return (
    <Link
      to={to}
      className={`
        font-semibold
        flex

        hover:ring-1
        hover:cursor-pointer
        transition
        ease-in
        duration-200
        shadow-md
        rounded-md
        whitespace-nowrap

        disabled:ring-0
        disabled:bg-stone-300
        disabled:border-stone-400
        disabled:text-stone-500



      ${colorTypes.blue}
      ${sizeClasses[size] ?? sizeClasses["sm"]}
      `}
    >
      {text}
    </Link>
  );
}
