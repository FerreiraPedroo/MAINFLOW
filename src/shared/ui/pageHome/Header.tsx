import React from "react";
import { getImagem } from "@/shared/utils/getImagem";

export function HomeHeader({
  icon,
  headerTitle,
}: {
  icon: string;
  headerTitle: string;
}) {
  return (
    <div className="inline-flex items-center justify-center w-full gap-4 mb-6">
      <img src={getImagem(icon)} className="w-12" />
      <h1 className="text-4xl font-bold text-slate-800">{headerTitle}</h1>
    </div>
  );
}
