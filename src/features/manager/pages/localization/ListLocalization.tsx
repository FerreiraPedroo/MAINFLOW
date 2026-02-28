import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { LinkButton } from "@shared/components/button/LinkButton";
import { SearchInput } from "@shared/components/input/SearchInput";
import { SelectInput } from "@shared/components/input/SelectInput";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import type { Localization } from "../interfaces/localization";

const localizationList: Localization[] = [
  {
    id: 1,
    name: "Sala google do segundo andar",
    building_id: 1,
    block: "B",
    floor: "2°",
    photos: ["string"],
    type: "Sala",
    unique_name: "string",
    building: {
      id: 1,
      name: "SEDE",
      address: "Av. Paris 84",
      maps: null,
      photos: [],
      gps: { lat: "-45.142546", lon: "-45.879876" },
    },
  },
];

export function ListLocalizationView() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState({ search_status: "" });
  const [status, setStatus] = useState(1);
  const [localizations, setLocalizations] =
    useState<Localization[]>(localizationList);

  useEffect(() => {
    const loadLocalization = async () => {
      setIsLoading(true);
      const data = await apiClient("localizations-list");
      setLocalizations(data);
      setIsLoading(false);
    };
    // loadLocalization();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Localização"
          subTitle="Cadastre locais fisicos que serão utilizados para identificar um
              lugar especifico."
        />
        <div className="flex gap-4">
          <LinkButton
            to="/manager/localizations/new"
            text="Cadastrar localização"
          />
        </div>

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
              options={[]}
              value={status}
              setFormValue={setFilterStatus}
              text={"Prédio"}
              hiddenText={false}
              cols={1}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <></>
        ) : localizations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhuma localização encontrada
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre uma nova localização para começar
            </p>
            <Link
              to={"/manager/localizations/new"}
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
              Cadastrar localização
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="px-6 py-4 font-medium">Id</th>
                    <th className="px-4 py-4 font-medium">Nome</th>
                    <th className="px-4 py-4 font-medium">Prédio</th>
                    <th className="px-4 py-4 font-medium">Bloco</th>
                    <th className="px-4 py-4 font-medium">Andar</th>
                    <th className="px-4 py-4 font-medium">Tipo</th>
                    {/* <th className="px-6 py-4 font-medium"></th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {localizations.map((localization) => (
                    <tr
                      key={localization.id}
                      onClick={() =>
                        navigate(`/manager/localizations/${localization.id}`)
                      }
                      className="text-sm hover:bg-slate-50 transition-colors hover:cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-800">
                          {localization.id}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {localization.name}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {localization?.building?.name}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {localization.block}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {localization.floor}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {localization.type}
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
