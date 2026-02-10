import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageMainContainer } from "../../../shared/components/PageMainContainer";

export function DashboardView() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [epis, setEpis] = useState([]);
  const [liberacoes, setLiberacoes] = useState([]);

  const loadData = async () => {
    const [functData, episData, libData] = { funcData: [], episData: [], libData: [] }; //await apiClient("safety-dashboard");
  };

  const funcionariosAtivos = funcionarios.filter((f) => f.ativo !== false).length;
  const episAtivos = epis.filter((e) => e.ativo !== false).length;
  const episEmUso = liberacoes.filter((l) => l.status === "Em uso").length;
  const episEstoqueBaixo = epis.filter((e) => e.estoque_atual <= e.estoque_minimo).length;

  const stats = [
    {
      label: "Funcionários Ativos",
      value: funcionariosAtivos,
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      label: "EPIs Cadastrados",
      value: episAtivos,
      color: "from-emerald-500 to-emerald-600",
      bgLight: "bg-emerald-50",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      label: "EPIs em Uso",
      value: episEmUso,
      color: "from-amber-500 to-amber-600",
      bgLight: "bg-amber-50",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      label: "Estoque Baixo",
      value: episEstoqueBaixo,
      color: "from-rose-500 to-rose-600",
      bgLight: "bg-rose-50",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    },
  ];

  const recentLiberacoes: any = liberacoes
    // .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
    .slice(0, 5);

  useEffect(() => {
    async function p() {
      loadData();
    }
    p();
  }, []);

  return (
    <PageMainContainer>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-slate-500 mt-1">Visão geral</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.bgLight} flex items-center justify-center`}>
                  <svg
                    className={`w-6 h-6 bg-linear-to-br ${stat.color} bg-clip-text`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{
                      color: stat.color.includes("blue")
                        ? "#3b82f6"
                        : stat.color.includes("emerald")
                          ? "#10b981"
                          : stat.color.includes("amber")
                            ? "#f59e0b"
                            : "#f43f5e",
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions & Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Ações Rápidas</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to={"CadastroFuncionario"}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Novo Funcionário</span>
              </Link>
              <Link
                to={"CadastroEPI"}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Novo EPI</span>
              </Link>
              <Link
                to={"LiberacaoEPI"}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Nova Liberação</span>
              </Link>
              <Link
                to={"Funcionarios"}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Ver Funcionários</span>
              </Link>
            </div>
          </div>

          {/* Recent Liberacoes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">Últimas Liberações</h2>
              <Link to={"LiberacaoEPI"} className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                Ver todas
              </Link>
            </div>
            {recentLiberacoes.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <p className="text-slate-500 text-sm">Nenhuma liberação registrada</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentLiberacoes.map((lib) => (
                  <div
                    key={lib.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        lib.status === "Em uso"
                          ? "bg-emerald-100 text-emerald-600"
                          : lib.status === "Devolvido"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{lib.epi_nome || "EPI"}</p>
                      <p className="text-xs text-slate-500 truncate">{lib.funcionario_nome || "Funcionário"}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lib.status === "Em uso"
                          ? "bg-emerald-100 text-emerald-700"
                          : lib.status === "Devolvido"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {lib.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageMainContainer>
  );
}
