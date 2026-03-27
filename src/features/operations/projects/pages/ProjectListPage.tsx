import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { TextButton } from "@/shared/components/button/TextButton";
import { SearchInput } from "@shared/components/input/SearchInput";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import type { ProjectList } from "../types/projects-list.types";
import { LinkButton } from "@/shared/components/button/LinkButton";

const dataList: ProjectList[] = [
  {
    id: 1,
    code: "PRO-014-261_BS1",
    name: "Adequações Estacionamento",
    period: "2026-1",
    building: "BS - SEDE",
    cost_center: "0100401301	Obras",
  },
  {
    id: 2,
    code: "PRO-017-261_BGF",
    name: "[BG] Lab. Práticas Corporais ",
    period: "2026-1",
    building: "BGF",
    cost_center: "0100401301	Obras",
  },
  {
    id: 3,
    code: "PRO-018-262_INST",
    name: "Adequações Fazenda Escola",
    period: "2026-2",
    building: "Institucional",
    cost_center: "0100401301	Obras",
  },
];

export function ProjectListPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ search: "" });
  const [state, setState] = useState({
    data: dataList,
    loading: false,
    error: null as string | null,
  });

  useEffect(() => {
    const loadList = async () => {
      setState({ ...state, loading: true, error: null });
      const data = await apiClient("operations-projects-list");
      setState({ ...state, data, loading: false });
    };
    // loadList();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Projetos"
          // subTitle="Cadastre os predios para identificar o endereço de uma localização."
        />
        <div className="flex gap-4">
          <LinkButton
            to="/operations/projects/create"
            text="Cadastrar localização"
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SearchInput
              name="search"
              placeholder="Procure por "
              value={filters.search}
              setSearchTerm={setFilters}
              cols={3}
            />
          </div>
        </div>

        {/* Grid */}
        {state.loading ? (
          <></>
        ) : state.data.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre um novo projeto para começar
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="w-0/10 p-4 font-medium">Id</th>
                    <th className="w-2/10 p-4 font-medium">Código</th>
                    <th className="w-4/10 p-4 font-medium">Nome</th>
                    <th className="w-3/10 p-4 font-medium">Centro de custo</th>
                    <th className="w-1/10 p-4 font-medium">Prédio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {state.data.map((data) => (
                    <tr
                      key={data.id}
                      onClick={() =>
                        navigate(`/operations/projects/${data.id}`)
                      }
                      className="text-sm hover:bg-slate-50 transition-colors hover:cursor-pointer"
                    >
                      <td className="p-4">
                        <span className="font-medium text-slate-800">
                          {data.id}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-slate-700">{data.code}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-slate-700">{data.name}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-slate-700">
                          {data.cost_center}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-slate-700">{data.building}</span>
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
