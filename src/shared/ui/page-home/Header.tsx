import React from "react";
import { getImagem } from "@/shared/utils/getImagem";

export function Header({
  icon = null,
  headerTitle,
  className,
}: {
  icon?: string | null;
  headerTitle: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center w-full gap-4 mb-6 ${className}`}
    >
      {icon && <img src={getImagem(icon)} className="w-12" />}
      <h1 className="text-4xl font-bold text-slate-800">{headerTitle}</h1>
    </div>
  );
}
