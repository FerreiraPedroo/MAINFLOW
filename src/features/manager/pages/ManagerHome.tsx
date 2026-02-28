import React from "react";
import { Link } from "react-router-dom";
import { PageMainContainer } from "@shared/components/PageMainContainer";

export function ManagerHomeView() {
  return (
    <PageMainContainer>
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 mb-6 shadow-lg shadow-emerald-500/25">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Gerenciamento
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to={"/manager/localizations"}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Localização
            </h3>
            <p className="text-slate-600">
              Cadastre locais fisicos que serão utilizados para identificar um
              lugar especifico.
            </p>
          </Link>

          <Link
            to={"/manager/projects"}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Projetos
            </h3>
            <p className="text-slate-600">
              Cadastre um projeto que pode ser gerenciado por outros setores.
            </p>
          </Link>

          <Link
            to={"/manager/cost-center"}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Centro de custo
            </h3>
            <p className="text-slate-600">
              Cadastre centro de custo para alocar seus custos.
            </p>
          </Link>

          <Link
            to={"/manager/payment-group"}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Grupo de pagamento
            </h3>
            <p className="text-slate-600">
              Cadastre grupos de pagamentos para agrupar seus custos
              contabilmente.
            </p>
          </Link>
        </div>
      </div>
    </PageMainContainer>
  );
}
