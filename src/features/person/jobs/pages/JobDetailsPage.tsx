import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PageMainContainer } from "@/shared/components/PageMainContainer";
import { BackButton } from "@/shared/components/button/BackButton";
import { Header } from "@/shared/components/header/Header";

// import { Modal } from "@/shared/components/modal/Modal";
import type { Job } from "@features/person/jobs/types/jobs.types";
import { Breadcrumb } from "@shared/ui/Breadcrumb";

export function JobDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [item, setItem] = useState<Job>({
    id: 1,
    name: "Assistente de Facilities Sênior",
    cbo: "45120-210",
    description: "suporte a toda operação de facilities",
    status: "Em Processo",
    active: true,
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

  const handleEdit = async () => {
    // verificar se ainda em que etapa está o cadastro
    // avisar que todas as etapas serão canceladas e deverão ser reavalidadas novamente pelo fluxo.
  };

  // if (!person) {
  //   return (
  //     <div className="text-center py-16">
  //       <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
  //         <svg
  //           className="w-10 h-10 text-slate-400"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //           />
  //         </svg>
  //       </div>
  //       <h3 className="text-lg font-semibold text-slate-800 mb-2">
  //         EPI não encontrado
  //       </h3>
  //       <Link to={"EPIs"} className="text-emerald-600 hover:text-emerald-700">
  //         Voltar para lista
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <PageMainContainer className="bg-slate-50">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Header title="Detalhes da função" backButton={true} />
        </div>

        {/* Main Card */}
        {loadingPerson ? (
          <div>SKELETON</div>
        ) : (
          <>
            <Breadcrumb itemList={[]} />
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex-1 flex-col gap-1">
              {/* DADOS PRINCIPAIS */}
              <div className="flex xl:flex-nowrap flex-wrap">
                <div className="flex flex-col w-full">
                  <p>Função</p>
                  <p className="w-full text-2xl font-medium text-slate-800 my-1 flex justify-center md:justify-start">
                    {item.name}
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-end w-full xl:w-auto gap-2">
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
                    onClick={() => handleEdit()}
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
                  </button>
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

                <p className="space-x-2 font-normal text-lg  text-slate-800 gap-1">
                  <span>CBO:</span>
                  <span>{item.cbo}</span>
                </p>

                <p className="space-x-2 font-normal text-lg text-slate-800">
                  <span>Data de admissão:</span>
                  <span>{new Date().toLocaleDateString("pt-BR")}</span>
                </p>

                <p className="space-x-2 font-normal text-lg text-slate-800">
                  <span>Descrição das atividades:</span>
                  <span>{item.description}</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </PageMainContainer>
  );
}
