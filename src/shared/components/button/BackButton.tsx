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
      rounded-md
      font-medium
      hover:text-slate-900
      bg-blue-100
      hover:bg-blue-200
      hover:cursor-pointer
      shadow-xs
      shadow-slate-700
      hover:shadow-slate-500/25
      hover:shadow-sm
      border
      border-slate-400
      transition-all
      duration-300
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
