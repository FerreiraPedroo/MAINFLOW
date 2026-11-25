import React from "react";

interface CloseButton {
  disabled: boolean;
  onClick: () => void;
}

export function CloseButton({ disabled, onClick }: CloseButton) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      max-h-8
      min-h-8
      h-8
      px-1
      font-semibold
        bg-blue-100
        focus:ring-offset-blue-400
        focus:ring-offset-1
        focus:ring-1
        focus:ring-blue-300
        outline-blue-600
        focus:outline-blue-600
        hover:bg-blue-200
        hover:ring-blue-300
        hover:cursor-pointer
        hover:ring-1
        border
        border-blue-200
        transition
        ease-in
        duration-200
        shadow-md
        rounded-md

        disabled:ring-0
        disabled:bg-stone-300
        disabled:border-stone-400
        disabled:text-stone-200
        disabled:cursor-default
    `}
    >
      <svg
        className={`w-5 h-5 text-slate-200`}
        fill="none"
        viewBox="0 0 24 24"
        stroke={`${disabled ? "gray" : "currentColor"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {/* Voltar */}
    </button>
  );
}
