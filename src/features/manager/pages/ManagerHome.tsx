import React from "react";
import { Link } from "react-router-dom";
import { PageMainContainer } from "@shared/components/PageMainContainer";
import { getImagem } from "@/utils/getImagem";
import { managerMenuItems } from "@/config/sidebar/manager";

export function ManagerHomeView() {
  return (
    <PageMainContainer>
      <div className="max-w-4xl w-full">
        {/* HEADER */}
        <div className="inline-flex items-center justify-center w-full gap-4 lg:gap-8 mb-6">
          <img src={getImagem("menuManager")} className="w-12 lg:w-18" />
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Gerenciamento
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {managerMenuItems.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.url}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200 transition-all duration-300 flex"
              >
                <div className="flex items-center gap-2">
                  <img src={getImagem("default")} className="w-12" />
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-slate-600"></p>
              </Link>
            );
          })}
        </div>
      </div>
    </PageMainContainer>
  );
}
