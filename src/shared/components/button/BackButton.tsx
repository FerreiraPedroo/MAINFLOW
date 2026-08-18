import React from "react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="
      h-10
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
        disabled:text-stone-500
    "
    >
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {/* Voltar */}
    </button>
  );
}
