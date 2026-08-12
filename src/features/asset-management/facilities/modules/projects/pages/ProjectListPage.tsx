import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { SearchInput } from "@shared/components/input/SearchInput";
import { Container } from "@/shared/components/Container";

import type { ProjectList } from "../types/projects-list.types";
import { LinkButton } from "@/shared/components/button/LinkButton";
import { Table } from "@/shared/components/table/Table";
import { TextButton } from "@/shared/components/button/TextButton";

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
    <Container>
      <div className="w-full space-y-4">
        <div className="flex items-center gap-4 sm:flex-row flex-col ">
          <Header
            title="Projetos"
            backButton={true}
            subTitle="Cadastre os predios para identificar o endereço de uma localização."
          />
          <LinkButton to="/facilities/projects/create" text="Novo projeto" />
        </div>

        {/* Filters */}
        {/* <div className="bg-white rounded-md border border-slate-400 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SearchInput
              name="search"
              placeholder="Procure por "
              value={filters.search}
              setSearchTerm={setFilters}
              cols={3}
            />
          </div>
        </div> */}

        {/* Table */}
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
          <Table
            headers={[
              { text: "id", size: 0, position: "center" },
              { text: "code", size: 2, position: "start" },
              { text: "name", size: 3, position: "start" },
              { text: "period", size: 1, position: "center" },
              { text: "building", size: 1, position: "center" },
              { text: "cost_center", size: 2, position: "start" },
            ]}
            data={{
              url: "/facilities/projects/",
              urlFieldParam: "id",
              rows: [...dataList],
            }}
          />
        )}
      </div>
    </Container>
  );
}
