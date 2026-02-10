import { Link } from "react-router-dom";
import { createPageUrl } from "@utils/createPageUrl";

export function HomeView() {
  return (
    <div className="h-full bg-linear-to-br from-emerald-100 via-teal-50 to-cyan-100 flex items-start justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 mb-6 shadow-lg shadow-emerald-500/25">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">MainFlow</h1>

          <p className="text-lg text-slate-600 mb-8">Sistema de gestão operacional por deparamento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            to={createPageUrl("Dashboard")}
            className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <p className="text-slate-600">Visão geral e estatísticas do sistema</p>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500"></p>
        </div>
      </div>
    </div>
  );
}
