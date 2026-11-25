import React from "react";
import { Link } from "react-router-dom";
import { getImagem } from "@/shared/utils/getImagem";

interface Card {
  icon: string | null;
  title: string;
  url: string;
}

export function Card({ menuItens }: { menuItens: Card }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      <Link
        key={menuItens.title}
        to={menuItens.url}
        className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-400 transition-all duration-300 flex"
      >
        <div className="flex items-center gap-4">
          <img src={getImagem(menuItens.icon)} className="w-10" />
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {menuItens.title}
          </h3>
        </div>
        <p className="text-slate-600"></p>
      </Link>
    </div>
  );
}
