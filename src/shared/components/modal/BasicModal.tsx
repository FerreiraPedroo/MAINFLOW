import React from "react";

const modalSize = {
  1: "w-9/10 min-h-1/10",
  2: "w-9/10 min-h-2/10",
  3: "w-9/10 min-h-3/10",
  4: "w-9/10 min-h-5/10",
  5: "w-9/10 min-h-7/10",
};

export function BasicModal({
  size = 2,
  title,
  closeModal,
  children,
}: {
  size: keyof typeof modalSize;
  closeModal: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed flex justify-center items-center w-full h-full inset-0 bg-stone-800/40 duration-300 ease-out z-100">
      <div
        className={`fixed bg-white rounded-lg top-1/10 ${modalSize[size ?? 1]}`}
      >
        <div className="border-b border-stone-200 px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg text-stone-800 font-semibold ">{title}</h1>
          <button
            type="button"
            className="text-xl text-stone-500 hover:text-stone-800 cursor-pointer"
            onClick={() => closeModal()}
          >
            &times;
          </button>
        </div>

        <div className="w-full">{children}</div>
        {/* <div className="border-t border-stone-200 p-4 flex justify-end gap-2">
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
        </div> */}
      </div>
    </div>
  );
}
