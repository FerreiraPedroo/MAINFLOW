import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { LinkButton } from "@shared/components/button/LinkButton";

import { SelectInput } from "@shared/components/input/SelectInput";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import type { Building } from "../interfaces/buildings";
import { TextInput } from "@/shared/components/input/TextInput";

const buildingList: Building[] = [
  {
    id: 1,
    name: "string",
    address: "string",
    maps: "string | null",
    photos: ["string[]"],
    gps: { lat: "string", lon: "string" },
  },
  {
    id: 1,
    name: "string",
    address: "string",
    maps: "string | null",
    photos: ["string[]"],
    gps: { lat: "string", lon: "string" },
  },
  {
    id: 1,
    name: "string",
    address: "string",
    maps: "string | null",
    photos: ["string[]"],
    gps: { lat: "string", lon: "string" },
  },
];

export function ListBuildingView() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState({
    search_name: "",
    search_address: "",
  });
  const [status, setStatus] = useState(1);
  const [buildings, setBuildings] = useState<Building[]>(buildingList);

  useEffect(() => {
    const loadBuilding = async () => {
      setIsLoading(true);
      const data = await apiClient("building-list");
      setBuildings(data);
      setIsLoading(false);
    };
    // loadBuilding();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Prédios"
          subTitle="Cadastre os predios para identificar o endereço de uma localização."
        />
        <div className="flex gap-4">
          <LinkButton to="#" text="Cadastrar prédio" />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
            <TextInput
              name={"search_name"}
              value={filterStatus?.["search_name"]}
              required={false}
              setFormValue={setFilterStatus}
              text={"Nome"}
              cols={2}
            />
            <TextInput
              name={"search_address"}
              value={filterStatus?.["search_address"]}
              required={false}
              setFormValue={setFilterStatus}
              text={"Endereço"}
              cols={2}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <></>
        ) : buildings.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum prédio encontrada
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre uma novo predio para começar
            </p>
            <Link
              to={"#"}
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
              Cadastrar prédio
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="w-1/10 px-6 py-4 font-medium">Id</th>
                    <th className="w-3/10 px-4 py-4 font-medium">Nome</th>
                    <th className="w-4/10 px-4 py-4 font-medium">Endereço</th>
                    <th className="w-1/10 px-4 py-4 font-medium">Mapa</th>
                    <th className="w-1/10 px-4 py-4 font-medium">Foto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {buildings.map((building) => (
                    <tr
                      key={building.id}
                      onClick={() =>
                        navigate(`/manager/localizations/${building.id}`)
                      }
                      className="text-sm hover:bg-slate-50 transition-colors hover:cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-800">
                          {building.id}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">{building.name}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {building.address}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {building.maps ? "SIM" : "NÃO"}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-slate-700">
                          {building.photos.length ? "SIM" : "NÃO"}
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
