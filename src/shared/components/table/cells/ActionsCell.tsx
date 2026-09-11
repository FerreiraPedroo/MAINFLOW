import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface ActionsCellProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function ActionsCell({ onView, onEdit, onDelete }: ActionsCellProps) {
  return (
    <div className="flex items-center justify-end gap-1">
      {onView && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onView();
          }}
          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
        >
          <Eye className="h-4 w-4" />
        </button>
      )}

      {onEdit && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onEdit();
          }}
          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
        >
          <Pencil className="h-4 w-4" />
        </button>
      )}

      {onDelete && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onDelete();
          }}
          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
