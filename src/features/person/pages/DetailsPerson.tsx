import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { PageMainContainer } from "@/shared/components/PageMainContainer";
import { BackButton } from "@/shared/components/button/BackButton";
import { Header } from "@/shared/components/header/Header";
import type { Person } from "../interfaces/person.interface";
import { DetailsPersonMainCardSkeleton } from "../components/skeleton/DetailsPersonMainCardSkeleton";
import { StatusPerson } from "../components/StatusPerson";
import { iconList } from "@/utils/icons";
import { Notification } from "@/shared/components/notification/Notification";
import { Modal } from "@/shared/components/modal/Modal";

export function DetailsPersonView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [person, serPerson] = useState<Person>({
    id: 1,
    registration: "1054789",
    name: "Pedro Henrique de Assis Ferreira",
    photo_url: null,
    status: "Ativo",
    admission_date: "2026-01-20",
    job: {
      id: 1,
      job_id: 0,
      name: "Assistente de Facilities",
      description: null,
    },
    allocation: {
      id: 1,
      department_id: 1,
      sector_id: 1,
      start_time_in_alocation: "string",
      end_time_in_alocation: "string",
      status: "string",
      department: {
        id: 1,
        name: "Financeiro",
        status: "string",
        description: "string",
      },
      sector: {
        id: 1,
        name: "Suprimentos",
        status: "string",
        description: "string",
      },
    },
    incident: [{ id: 1, date: "2026-02-23", type: "Acidente", details: "" }],
  });

  const [liberacoes, setLiberacoes] = useState([]);
  const [loadingPerson, setLoadingPerson] = useState(false);
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

  const handleDelete = async () => {
    // await base44.entities.person.delete(epiId);
    // navigate(createPageUrl("EPIs"));
  };

  if (!person) {
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
    <PageMainContainer className="bg-slate-50">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex items-center gap-4">
          <BackButton />
          <Header title="Detalhes da pessoa" />
        </div>

        {/* Main Card */}
        {loadingPerson ? (
          <DetailsPersonMainCardSkeleton />
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex justify-center">
                {person.photo_url ? (
                  <img
                    src={person.photo_url}
                    alt={person.name}
                    className="w-64 h-80 rounded-2xl object-cover ring-4 ring-slate-100 bg-white"
                  />
                ) : (
                  <div
                    className={`w-64 h-80 rounded-2xl border flex items-center justify-center bg-white`}
                  >
                    {iconList["person"]}
                  </div>
                )}
              </div>

              <div className="flex-1 flex-col gap-1">
                <div className="flex xl:flex-nowrap flex-wrap">
                  <p className="w-full text-2xl font-medium text-slate-800 my-3 flex justify-center md:justify-start ">
                    {person.name}
                  </p>

                  <div className="flex items-center justify-center md:justify-end w-full xl:w-auto gap-2">
                    <Link
                      to={`/person/${id}/edit`}
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

                <div>
                  <hr className="border-stone-200 my-2" />

                  <p className="flex text-lg font-light text-slate-800 gap-1">
                    Status:{" "}
                    <span className="mr-2 font-normal ">
                      <StatusPerson status={person.status ?? ""} />
                    </span>
                  </p>

                  <p className="flex text-lg font-light text-slate-800 gap-1">
                    Registro:{" "}
                    <span className="mr-2 font-normal ">
                      {person.registration}
                    </span>
                  </p>

                  <p className="text-lg font-light text-slate-800">
                    Data de admissão:{" "}
                    <span className="font-normal">
                      {new Date(person.admission_date).toLocaleDateString(
                        "pt-BR",
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/** CARDS */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase">Categoria</p>
                <span
                  className={`inline-block mt-2 px-2.5 py-1 rounded-lg text-xs font-medium }`}
                >
                  {person.category_id}
                </span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase">Estoque Atual</p>
                <p className={`text-2xl font-bold mt-1 ${"isEstoqueBaixo" ? "text-rose-600" : "text-slate-800"}`}>{1}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase">Em Uso</p>
                <p className="text-2xl font-bold text-emerald-600 mt-1">{1}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase">Devolvidos</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{1}</p>
              </div>
            </div> */}
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ocupation */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Ocupação
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-500 uppercase">Função</p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {person.job?.name || "-"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase">Desde</p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {person.admission_date
                    ? new Date(person.admission_date).toLocaleDateString(
                        "pt-BR",
                      )
                    : "-"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase">CBO</p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {person.job.job_id || "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Alocation */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Alocação
            </h3>
            <div className="space-y-4">
              {/* <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
                <div>
                  <p className="text-xs text-slate-500 uppercase">Estoque Atual</p>
                  <p className={`text-2xl font-bold mt-1 ${"isEstoqueBaixo" ? "text-rose-600" : "text-slate-800"}`}>
                    {1} unidades
                  </p>
                </div>
                {"isEstoqueBaixo" && (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                )}
              </div> */}

              <div>
                <p className="text-xs text-slate-500 uppercase">Departamento</p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {person.alocation?.department?.name || "-"}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase">Setor</p>
                <p className="text-lg font-semibold text-slate-800 mt-1">
                  {person.alocation?.sector?.name || "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Incidentes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Incidentes
            </h3>
            <div className="space-y-4">
              {/* <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
                <div>
                  <p className="text-xs text-slate-500 uppercase">Estoque Atual</p>
                  <p className={`text-2xl font-bold mt-1 ${"isEstoqueBaixo" ? "text-rose-600" : "text-slate-800"}`}>
                    {1} unidades
                  </p>
                </div>
                {"isEstoqueBaixo" && (
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                )}
              </div> */}
              <div className="flex gap-8 space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase">
                    Total de Incidentes
                  </p>
                  <p className="text-lg font-semibold text-slate-800 mt-1">
                    {person.incident?.length || 0}
                  </p>
                </div>
              </div>
              <div className="flex gap-8 space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase">
                    Último incidente
                  </p>
                  <p className="text-lg font-semibold text-slate-800 mt-1">
                    {person.incident?.length
                      ? new Date(person.incident?.[0].date).toLocaleDateString(
                          "pt-BR",
                        )
                      : "-"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase">Tipo</p>
                  <p className="text-lg font-semibold text-slate-800 mt-1">
                    {person.incident?.length ? person.incident?.[0].type : "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Modal */}
        {showDeleteModal && (
          <Modal
            title="Deseja excluir a pessoa"
            info="Pedro Henrique"
            description="Esta ação não poderá ser desfeita. Todos os dados da pessoa serão removidos permanentemente."
            type="red"
            buttons={[
              { text: "Excluir", type: "red", onClick: () => null },
              { text: "Cancelar", type: "white", onClick: () => null },
            ]}
          />
        )}

        {/* Recent Usage */}
        {/* <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Últimas Liberações</h3>
          {"liberacoesEPI.length" === 0 ? (
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
              <p className="text-slate-500">Nenhuma liberação registrada para este person</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase border-b border-slate-200">
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
                          {new Date(lib.data_liberacao + 1).toLocaleDateString("pt-BR")}
                        </td>
                        <td className="py-3 text-slate-600">
                          {lib.data_devolucao ? new Date(lib.data_devolucao + 1).toLocaleDateString("pt-BR") : "-"}
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${lib.status === "Em uso"
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
        </div> */}

        {/* <div className="space-y-3">
          <Notification type="error" title="Erro ao carregr" text="Erro ao carregar" />
          <Notification type="alert" title="Erro ao carregr" text="Erro ao carregar" />
        </div> */}
      </div>
    </PageMainContainer>
  );
}
