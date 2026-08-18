import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { Container } from "@/shared/components/Container";
import { LinkButton } from "@/shared/components/button/LinkButton";
import { Calendar } from "@/shared/components/calendar/Calendar";
import { MainTenancePill } from "../utils/MainTenancePill";
import {
  BlockSection,
  BlockSectionTitle,
} from "@/shared/components/block-section/BlockSection";
import { SelectInput } from "@/shared/components";
import { SearchInput } from "@/shared/components/input/SearchInput";

const maintenanceList = [
  {
    id: 1,
    code: "12345678",
    equipment: "Bebedouro",
    localization: "2º - BLOCO B - Corredor frente a rampa",
    //activity: "Troca de filtro",
    type: "Preventiva",
    scheduled_date: "26/03/2026",
    building: "BS - SEDE",
    cost_center: "0100401301	Obras",
    status: "Pendente",
  },
  {
    id: 2,
    code: "901234",
    equipment: "Bebedouro",
    localization: "CG IV - BLOCO B - 2º - Corredor frente a rampa",
    //activity: "Troca de filtro",
    type: "Preventiva",
    scheduled_date: "26/03/2026",
    building: "BS - SEDE",
    cost_center: "0100401301	Obras",
    status: "Pendente",
  },
  {
    id: 3,
    code: "12345678",
    equipment: "Bebedouro",
    localization: "BS SEDE - BLOCO B - 2º - Corredor frente a rampa",
    //activity: "Troca de filtro",
    type: "Corretiva",
    scheduled_date: "26/03/2026",
    building: "BS - SEDE",
    cost_center: "0100401301	Obras",
    status: "Pendente",
  },
  {
    id: 4,
    code: "901234",
    equipment: "Bebedouro",
    localization: "BS SEDE - BLOCO B - 2º - Corredor frente a rampa",
    //activity: "Troca de filtro",
    type: "Preventiva",
    scheduled_date: "26/03/2026",
    building: "BS - SEDE",
    cost_center: "0100401301	Obras",
    status: "Pendente",
  },
  {
    id: 5,
    code: "12345678",
    equipment: "Bebedouro",
    localization: "BS POLEM - 2º - BLOCO B - Corredor frente a rampa",
    //activity: "Troca de filtro",
    type: "Emergencial",
    scheduled_date: "26/03/2026",
    building: "BS - SEDE",
    cost_center: "0100401301	Obras",
    status: "Pendente",
  },
  {
    id: 6,
    code: "901234",
    equipment: "Bebedouro",
    localization: "BGS - 2º - BLOCO B - Corredor frente a rampa",
    //activity: "Troca de filtro",
    type: "Preditiva",
    scheduled_date: "26/03/2026",
    building: "BS - SEDE",
    cost_center: "0100401301	Obras",
    status: "Pendente",
  },
];

export function MaintenanceListPage() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({ search: "" });

  const [state, setState] = useState({
    dataList: maintenanceList,
    loading: false,
    error: null as string | null,
  });

  useEffect(() => {
    // const loadList = async () => {
    //   setState({ ...state, loading: true, error: null });
    //   const data = await apiClient("operations-projects-list");
    //   setState({ ...state, data, loading: false });
    // };
    // loadList();
  }, []);

  return (
    <Container>
      <div className="w-full space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-1">
          <div className="w-full md:w-2/5 space-y-4 ">
            <Header
              title="Manutenção"
              backButton={false}
              subTitle="Cadastre e gerencie manutenção."
            />
          </div>
          <div className="flex gap-4">
            <BlockSection>
              <SelectInput
                name="exibition"
                text="Modo de exibição"
                required={false}
                value={"Mensal"}
                defaultOption={false}
                cols={4}
                options={["Mensal", "Semanal", "Diário"]}
              />
            </BlockSection>
            <Calendar name={"data"} text="Selecione o mês" hiddenDays={true} />
          </div>
        </div>
        {/* Filters */}
        {/* <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SearchInput
              name="search"
              placeholder="Procure por "
              value={filters.search}
              setSearchTerm={setFilters}
              cols={2}
            />
          </div>
        </div> */}

        {/* Grid */}
        {state.loading ? (
          <></>
        ) : state.dataList.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhuma manutenção encontrado
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre uma nova manutenção para começar
            </p>
          </div>
        ) : (
          <div className="flex-1  bg-white overflow-x-auto border border-slate-400 overflow-hidden rounded-none">
            <table className="w-full">
              <thead className="rounded-xs">
                <tr className="text-left text-xs text-slate-500 uppercase bg-slate-100 border-b border-slate-200">
                  <th className="w-1/12 max-w-1/12 px-2 py-1 font-medium text-center">
                    Nº
                  </th>
                  <th className="w-1/12 max-w-1/12 px-2 py-1 font-medium text-center">
                    Data
                  </th>
                  <th className="w-1/10 px-1 font-medium">Tipo</th>
                  <th className="w-2/10 px-1 font-medium">Ativo</th>
                  {/* <th className="w-2/10 px-1 font-medium">Atividade</th> */}
                  <th className="w-4/10 px-1 font-medium">Localização</th>
                  <th className="w-1/12 px-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {state.dataList.map((data) => (
                  <tr
                    key={data.id}
                    onClick={() =>
                      navigate(`/operations/maintenance/${data.id}`)
                    }
                    className="text-sm hover:bg-slate-200 transition-colors hover:cursor-pointer"
                  >
                    <td className="px-1 text-center">
                      <span className="font-medium text-slate-800 ">
                        {data.code}
                      </span>
                    </td>
                    <td className="px-1 text-center">
                      <span className="font-medium text-slate-800 ">
                        {data.scheduled_date}
                      </span>
                    </td>

                    <td className="p-1">
                      <span className="text-slate-700">
                        <MainTenancePill text={data.type} />
                      </span>
                    </td>
                    <td className="p-1">
                      <span className="text-slate-700">{data.equipment}</span>
                    </td>
                    {/* <td className="p-1">
                      <span className="text-slate-700">{data.activity}</span>
                    </td> */}
                    <td className="p-1">
                      <span className="text-slate-700">
                        {data.localization}
                      </span>
                    </td>
                    <td className="p-1">
                      <span className="text-slate-700">{data.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
}
