import React from "react";

export function SnackBar() {
  return (
    <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
      <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-600">
        <span className="text-2xl">Success</span>
        <span className="text-xs dark:text-gray-600">
          Vitae nulla eligendi dignissimos culpa doloribus.
        </span>
      </div>
      <button className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-600 dark:border-gray-300">
        Dismiss
      </button>
    </div>
  );
}
