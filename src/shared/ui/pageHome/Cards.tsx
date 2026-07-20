import React from "react";
import { Link } from "react-router-dom";
import { getImagem } from "@/shared/utils/getImagem";

type Cards = {
  icon: string;
  menuItens: {
    title: string;
    url: string;
    subMenu?: { title: string }[];
  }[];
};

export function HomeCards({ icon, menuItens }: Cards) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {menuItens.map((item) => {
        return (
          <Link
            key={item.title}
            to={item.url}
            className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-400 transition-all duration-300 flex"
          >
            <div className="flex items-center gap-4">
              <img src={getImagem(icon)} className="w-10" />
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="text-slate-600"></p>
          </Link>
        );
      })}
    </div>
  );
}
