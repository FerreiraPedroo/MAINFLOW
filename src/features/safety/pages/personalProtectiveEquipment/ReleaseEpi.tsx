import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../utils/categoriesList";
import type { Epi } from "../interfaces/epi";
import { PageMainContainer } from "@/shared/components/PageMainContainer";
import { BackButton } from "@/shared/components/button/BackButton";
import { Header } from "@/shared/components/header/Header";
// import { createPageUrl } from '../utils';
// import { base44 } from '@/api/base44Client';

export default function DetailsEpiView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [epi, setEpi] = useState<Epi>({
    id: 1,
    name: "Luva de borracha",
    code: "EPI-000010",
    active: true,
    category_id: 1,
    ca: "45852",
    expiration_date: "2026-01-20",
    imagem_url: null,
    description: "OK",
    manufacturer: "BRASEG",
  });

  const [liberacoes, setLiberacoes] = useState([]);
  const [loadingEPI, setLoadingEPI] = useState(false);
  const [loadingLib, setLoadingLib] = useState(false);

  useEffect(() => {
    // loadData();
  }, []);

  const loadData = async () => {
    // setEpis(episData);
    // setLiberacoes(libData);
    // setLoadingEPI(false);
    // setLoadingLib(false);
  };

  if (loadingEPI || loadingLib) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!epi) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-10 h-10 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          EPI não encontrado
        </h3>
        <Link to={"EPIs"} className="text-emerald-600 hover:text-emerald-700">
          Voltar para lista
        </Link>
      </div>
    );
  }

  return (
    <PageMainContainer>
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex items-center gap-4">
          <BackButton />
          <Header title="Detalhes do EPI" />
        </div>

        {/* Alerts */}
        {/* {("isCAVencido" || "isEstoqueBaixo") && (
          <div className="space-y-3">
            {"isCAVencido" && (
              <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-rose-800">CA Vencido</p>
                  <p className="text-sm text-rose-600">
                    O Certificado de Aprovação deste EPI está vencido desde{" "}
                    {new Date(epi.validade_ca).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
            )}
            {"isEstoqueBaixo" && (
              <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-amber-800">Estoque Baixo</p>
                  <p className="text-sm text-amber-600">
                    O estoque atual ({epi.estoque_atual}) está abaixo do mínimo ({epi.estoque_minimo})
                  </p>
                </div>
              </div>
            )}
          </div>
        )} */}

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex justify-center">
              {epi.imagem_url ? (
                <img
                  src={epi.imagem_url}
                  alt={epi.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-slate-100"
                />
              ) : (
                <div
                  className={`w-24 h-24 rounded-2xl ${getCategory(epi.category_id)?.color} flex items-center justify-center`}
                >
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <p className="text-nowrap text-slate-500 mt-1">
                      Código: {epi.code}
                    </p>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        epi.active !== false
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {epi.active !== false ? "Ativo" : "Inativo"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`CadastroEPI?id=${id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Editar
                    </Link>
                    <button
                      onClick={() => setShowDeleteModal(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-medium rounded-xl transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Excluir
                    </button>
                  </div>
                </div>
                <h2 className="text-2xl font-medium text-slate-800">
                  {epi.name}
                </h2>
              </div>

              <div className="flex">
                {epi.description && (
                  <p className="w-full text-slate-600">{epi.description}</p>
                )}
              </div>
            </div>
          </div>

          {/** CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">
                Categoria
              </p>
              <span
                className={`inline-block mt-2 px-2.5 py-1 rounded-lg text-xs font-medium ${getCategory(epi.category_id)?.color}`}
              >
                {getCategory(epi.category_id)?.name}
              </span>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">
                Estoque Atual
              </p>
              <p
                className={`text-2xl font-bold mt-1 ${"isEstoqueBaixo" ? "text-rose-600" : "text-slate-800"}`}
              >
                {1}
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">
                Em Uso
              </p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">{1}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">
                Devolvidos
              </p>
              <p className="text-2xl font-bold text-blue-600 mt-1">{1}</p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certification */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Certificado de Aprovação
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Numero do CA
                </p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {epi.ca || "-"}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Validade do CA
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <p
                    className={`text-lg font-semibold ${"isCAVencido" ? "text-rose-600" : "text-slate-800"}`}
                  >
                    {epi.expiration_date
                      ? new Date(epi.expiration_date).toLocaleDateString(
                          "pt-BR",
                        )
                      : "-"}
                  </p>
                  {"isCAVencido" && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-700">
                      Vencido
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Fabricante
                </p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {epi.manufacturer || "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Stock */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Controle de Estoque
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Estoque Atual
                  </p>
                  <p
                    className={`text-2xl font-bold mt-1 ${"isEstoqueBaixo" ? "text-rose-600" : "text-slate-800"}`}
                  >
                    {1} unidades
                  </p>
                </div>
                {"isEstoqueBaixo" && (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-rose-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Estoque Mínimo
                </p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {"epi.estoque_minimo"} unidades
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Usage */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Últimas Liberações
          </h3>
          {"liberacoesEPI.length" === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-8 h-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <p className="text-slate-500">
                Nenhuma liberação registrada para este EPI
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide border-b border-slate-200">
                    <th className="pb-3 font-medium">Funcionário</th>
                    <th className="pb-3 font-medium">Data Liberação</th>
                    <th className="pb-3 font-medium">Data Devolução</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      id: 1,
                      funcionario_id: 1,
                      funcionario_nome: "Alfredo",
                      data_liberacao: "2026-02-01",
                      data_devolucao: "2026-02-01",
                      status: "Devolvido",
                    },
                  ]
                    .slice(0, 10)
                    .map((lib) => (
                      <tr key={lib.id} className="text-sm">
                        <td className="py-3">
                          <Link
                            to={`DetalhesFuncionario?id=${lib.funcionario_id}`}
                            className="font-medium text-slate-800 hover:text-emerald-600 transition-colors"
                          >
                            {lib.funcionario_nome}
                          </Link>
                        </td>
                        <td className="py-3 text-slate-600">
                          {new Date(lib.data_liberacao + 1).toLocaleDateString(
                            "pt-BR",
                          )}
                        </td>
                        <td className="py-3 text-slate-600">
                          {lib.data_devolucao
                            ? new Date(
                                lib.data_devolucao + 1,
                              ).toLocaleDateString("pt-BR")
                            : "-"}
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                              lib.status === "Em uso"
                                ? "bg-emerald-100 text-emerald-700"
                                : lib.status === "Devolvido"
                                  ? "bg-blue-100 text-blue-700"
                                  : lib.status === "Extraviado"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-rose-100 text-rose-700"
                            }`}
                          >
                            {lib.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">
                Excluir EPI?
              </h3>
              <p className="text-slate-500 text-center mb-6">
                Esta ação não poderá ser desfeita. Todos os dados do EPI serão
                removidos permanentemente.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageMainContainer>
  );
}
