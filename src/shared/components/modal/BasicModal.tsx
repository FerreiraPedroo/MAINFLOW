import React from "react";

export function BasicModal() {
  return (
    <div
      className="fixed inset-0 bg-stone-800/60 bg-opacity-75 flex justify-center items-center pointer-events-none transition-opacity duration-300 ease-out z-10"
      id="exampleModal"
      aria-hidden="true"
    >
      <div className="bg-white rounded-lg w-1/3">
        <div className="border-b border-stone-200 p-4 flex justify-between items-center">
          <h1 className="text-lg text-stone-800 font-semibold">Modal title</h1>
          <button type="button" className="text-stone-500 hover:text-stone-800">
            &times;
          </button>
        </div>
        <div className="p-4 text-stone-500"> Content for the first modal. </div>
        <div className="border-t border-stone-200 p-4 flex justify-end gap-2">
          <button
            type="button"
            className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-linear-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-linear-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"
          >
            Close
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-blue-500 hover:bg-info-light relative bg-linear-to-b from-blue-500 to-blue-600 border-blue-600 text-stone-50 rounded-lg hover:bg-linear-to-b hover:from-blue-600 hover:to-blue-600 hover:border-blue-600 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-2px_0px_rgba(0,0,0,0.18)] after:pointer-events-none transition antialiased"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
