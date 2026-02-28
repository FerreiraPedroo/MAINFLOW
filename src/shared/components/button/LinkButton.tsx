import React from "react";
import { Link } from "react-router-dom";

export function LinkButton({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center px-5 py-2.5 gap-2 rounded-xl hover:text-slate-900 bg-slate-200 hover:bg-slate-300 hover:shadow-slate-500/25 hover:shadow-lg transition-all duration-300 font-medium"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
      {text}
    </Link>
  );
}
