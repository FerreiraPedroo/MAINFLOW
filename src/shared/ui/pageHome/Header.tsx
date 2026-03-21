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
    <div className="inline-flex items-center justify-center w-full gap-4 lg:gap-8 mb-6">
      <img src={getImagem(icon)} className="w-12 lg:w-18" />
      <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
        {headerTitle}
      </h1>
    </div>
  );
}
