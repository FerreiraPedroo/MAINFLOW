import { createPageUrl } from "@/utils/createPageUrl";
import { Link } from "react-router-dom";
import { PageMainContainer } from "@shared/components/PageMainContainer";

export function HomeView() {
  // const
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
            Pessoas
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to={createPageUrl("Dashboard")}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Dashboard
            </h3>
            <p className="text-slate-600">Visão geral e estatísticas</p>
          </Link>

          <Link
            to={createPageUrl("Funcionarios")}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Pessoas
            </h3>
            <p className="text-slate-600">
              Gerencie colaboradores e suas informações
            </p>
          </Link>

          <Link
            to={createPageUrl("EPIs")}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-emerald-600"
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
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Folha de ponto
            </h3>
            <p className="text-slate-600">Controle de folhas de ponto</p>
          </Link>

          <Link
            to={createPageUrl("LiberacaoEPI")}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
              Atestados
            </h3>
            <p className="text-slate-600">Registre entregas</p>
          </Link>
        </div>

        <div className="text-center m-8">
          <p className="text-sm text-slate-500">
            Diferencial Flow • Controle v1.0
          </p>
        </div>
      </div>
    </PageMainContainer>
  );
}
