import React from "react";

const colorType = {
  blue: "bg-blue-100 focus:outline-blue-300 hover:bg-blue-200 hover:not-disabled:ring-blue-300 border-blue-200",
  green:
    "bg-green-100 focus:outline-green-300 hover:bg-green-200 hover:not-disabled:ring-green-300 border-green-200",
};
export function SubmitButtom({
  text,
  disabled,
  color = "blue",
}: {
  text: string;
  disabled?: boolean;
  color?: keyof typeof colorType;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        font-semibold
        flex
        px-4
        py-2

        ${colorType[color]}

        border
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
        `}
    >
      {text}
    </button>
  );
}
