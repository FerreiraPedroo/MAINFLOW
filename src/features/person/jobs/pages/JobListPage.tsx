import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@/shared/components/header/Header";
import { LinkButton } from "@shared/components/button/LinkButton";
import { SearchInput } from "@shared/components/input/SearchInput";
import { SelectInput } from "@shared/components/input/SelectInput";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import { PillBadge } from "@/shared/components/badges/PillBadge";
import { TextButton } from "@/shared/components/button/TextButton";

import type { Job } from "../../interfaces/job";

const itemList: Job[] = [
  {
    id: 1,
    name: "Pedro Henrique de Assis Ferreira",
    cbo: "EPI-00001",
    description: "string | null",
    status: "Aprovado",
    active: true,
  },
];

function filterItens(item, searchTerm) {
  // const matchSearch =
  //   person.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   person.cpf?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   person.ca?.includes(searchTerm);
  // const matchCategory = !filterCategory.search_category || epi.category_id == Number(filterCategory.search_category);
  // return matchSearch && matchCategory;
}

export function JobListPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState({ search_status: "" });

  const [status, setStatus] = useState(1);
  const [itens, setItens] = useState<Job[]>(itemList);

  useEffect(() => {
    const loadItens = async () => {
      setIsLoading(true);
      const data = await apiClient("job-list");
      setItens(data);
      setIsLoading(false);
    };
    // loadItens();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Função"
          subTitle="Cadastre uma nova função para identificar o papel ou responsabilidade de uma pessoa."
        />
        <LinkButton to="/persons/jobs/new" text="Cadastrar função" />

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SearchInput
              name="search"
              placeholder="Procure por "
              value={searchTerm}
              setSearchTerm={setSearchTerm}
              cols={3}
            />
            <SelectInput
              name={"search_status"}
              options={["Ativo", "Inativo"]}
              value={status}
              setFormValue={setFilterStatus}
              text={""}
              hiddenText={true}
              cols={1}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div>SKELETON</div>
        ) : itens.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhuma função encontrada
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre uma nova função para começar
            </p>
            <Link
              to={"/person/job/new"}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Cadastrar Função
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="w-0.5/10 px-6 py-4 font-medium">Id</th>
                    <th className="w-6/10 px-4 py-4 font-medium">Nome</th>
                    <th className="w-2/10 px-4 py-4 font-medium">CBO</th>
                    <th className="w-1/10 px-4 py-4 font-medium">Status</th>
                    <th className="w-1/10 px-4 py-4 font-medium">Ativo</th>
                    <th className="w-2/10 px-4 py-4 font-medium">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {itens.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => navigate(`/persons/jobs/${item.id}`)}
                      className="text-sm hover:bg-slate-50 transition-colors hover:cursor-pointer"
                    >
                      <td className="px-6 py-3">
                        <span className="font-medium text-slate-800">
                          {item.id}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-slate-700">{item.name}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-slate-700">{item.cbo}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-slate-700">{item.status}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-slate-700">
                          <PillBadge name={item.active ? "Ativo" : "Inativo"} />
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="text-slate-700">
                          <TextButton
                            type="white"
                            text="Editar"
                            onClick={() => 'handleModalEdit(item, "edit")'}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </PageMainContainer>
  );
}
