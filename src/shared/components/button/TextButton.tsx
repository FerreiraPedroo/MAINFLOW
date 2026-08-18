import React from "react";
import { colorTypes } from "./colors/colors";

export function TextButton({
  color = "stone",
  text,
  disable = false,
  onClick,
}: {
  color: keyof typeof colorTypes;
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
        px-4
        py-2

        border
        hover:ring-1
        hover:cursor-pointer
        transition
        ease-in
        duration-200
        shadow-md
        rounded-md
        justify-center

        disabled:ring-0
        disabled:bg-stone-300
        disabled:border-stone-400
        disabled:text-stone-500

        ${colorTypes[color] ?? colorTypes["stone"]}
        `}
    >
      {text}
    </button>
  );
}
