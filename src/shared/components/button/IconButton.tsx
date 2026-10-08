import React from "react";

import { Edit3, FolderPlus, PlusCircle, Text, Trash2 } from "lucide-react";
import { FolderMinus } from "lucide-react";

const icons = {
  folderPlus: <FolderPlus />,
  folderMinus: <FolderMinus />,
  trash: <Trash2 />,
  edit: <Edit3 />,
  add: <PlusCircle />,
  default: <Text />,
};
const iconSize = {
  sm: "p-1",
  md: "p-2",
  lg: "p-3",
};

export function IconButton({
  icon = "default",
  size = "md",
  disable = false,
  onClick,
}: {
  icon: keyof typeof icons;
  size: keyof typeof iconSize;
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
        hover:cursor-pointer
        transition
        ease-in
        duration-200
        hover:shadow-md
        rounded-md
        justify-center
        outline-0
        hover:bg-slate-200
        disabled:bg-stone-300
        disabled:text-stone-500

        ${iconSize[size]}
        `}
    >
      {icons[icon]}
    </button>
  );
}
