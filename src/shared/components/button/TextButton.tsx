import React from "react";
import { colorTypes } from "./config/colors";
import { sizeClasses } from "./config/sizes";

export function TextButton({
  color = "stone",
  size = "sm",
  text,
  disable = false,
  onClick,
}: {
  color: keyof typeof colorTypes;
  size: keyof typeof sizeClasses;
  text: string;
  disable?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disable}
      className={`
        font-semibold
        flex

        border
        hover:ring-1
        hover:cursor-pointer
        transition
        ease-in
        duration-200
        shadow-md
        rounded-md
        justify-center
        whitespace-nowrap

        disabled:ring-0
        disabled:bg-stone-300
        disabled:border-stone-400
        disabled:text-stone-500

        ${colorTypes[color] ?? colorTypes["stone"]}
        ${sizeClasses[size] ?? sizeClasses["sm"]}
        `}
    >
      {text}
    </button>
  );
}
