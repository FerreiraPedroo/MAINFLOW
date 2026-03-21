import React from "react";
import { Link } from "react-router-dom";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { Header } from "@/shared/components/header/Header";

const menuItens = [
  {
    name: "NR1",
    url: "/safety/nr1",
    icon: "default",
    description: "Disposções gerais GRO e PGR",
  },
  {
    name: "NR6",
    url: "/safety/nr6",
    icon: "default",
    description: "Equipamento de proteção individual (EPI).",
  },
];

export function RiskHomePage() {
  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Normas regulamentadoras"
          subTitle="Gerencie as normas regulamentadoras"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItens.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.url}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500 transition-all duration-300 flex"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* <img src={getImagem(item.icon)} className="w-12" /> */}
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PageMainContainer>
  );
}
