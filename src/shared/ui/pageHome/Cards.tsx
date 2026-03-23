import React from "react";
import { Link } from "react-router-dom";
import { getImagem } from "@/shared/utils/getImagem";

type Cards = {
  icon: string;
  menuItens: {
    name: string;
    url: string;
    subMenu?: { name: string }[];
  }[];
};

export function HomeCards({ icon, menuItens }: Cards) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {menuItens.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.url}
            className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-400 transition-all duration-300 flex"
          >
            <div className="flex items-center gap-2">
              <img src={getImagem(icon)} className="w-12" />
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
            </div>
            <p className="text-slate-600"></p>
          </Link>
        );
      })}
    </div>
  );
}
