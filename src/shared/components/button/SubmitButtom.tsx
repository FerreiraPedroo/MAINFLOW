import React from "react";

export function SubmitButtom({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="submit"
        // disabled={isSaving}
        className="px-6 py-2.5 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {text}
      </button>
    </div>
  );
}
