import React from "react";

interface UserCellProps {
  name: string;
  avatar?: string;
  description?: string;
}

export function UserCell({ name, avatar, description }: UserCellProps) {
  return (
    <div className="flex items-center gap-2">
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="h-8 w-8 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600">
          {name.charAt(0).toUpperCase()}
        </div>
      )}

      <div className="min-w-0">
        <p className="truncate font-medium text-slate-800">{name}</p>

        {description && (
          <p className="truncate text-xs text-slate-500">{description}</p>
        )}
      </div>
    </div>
  );
}
