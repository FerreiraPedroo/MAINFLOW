import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import { TextInput } from "@/shared/components/input/TextInput";
import { TextButton } from "@/shared/components/button/TextButton";

import type { BuildingDivision } from "../interfaces/buildingDivision";
import { SelectInput } from "@/shared/components/input/SelectInput";

const itemList: BuildingDivision[] = [
  {
    id: 1,
    name: "Corredor",
    type: "string",
  },
  {
    id: 2,
    name: "Escada",
    type: "string",
  },
  {
    id: 3,
    name: "Sala",
    type: "string",
  },
  {
    id: 4,
    name: "Rampa",
    type: "string",
  },
  {
    id: 5,
    name: "Pátio",
    type: "string",
  },
];

export function ListCostCenterView() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState("");
  const [searchTerm, setSearchTerm] = useState({
    search_name: "",
    search_type: "",
  });

  const [items, setItems] = useState<BuildingDivision[]>(itemList);

  const [formDataNew, setFormDataNew] = useState<Partial<BuildingDivision>>({
    name: "",
    type: "",
  });
  function handleNewModal(modal: string) {
    setFormDataNew({
      name: "",
      type: "",
    });
    setShowModal(modal);
  }

  const [formDataEdit, setFormDataEdit] =
    useState<Partial<BuildingDivision> | null>(null);
  function handleEditModal(item: BuildingDivision | null, modal: string) {
    setFormDataEdit(item);
    setShowModal(modal);
  }

  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      const data = await apiClient("center-cost-list");
      setItems(data);
      setIsLoading(false);
    };
    // loadItens();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Centro de custo"
          subTitle="Cadastre um novo centro de custo para registrar e acompanhar despesas associadas a uma área ou recurso."
        />
        <div className="flex gap-4">
          <TextButton
            text="Cadastrar centro de custo"
            type="stone"
            onClick={() => handleNewModal("new")}
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
            <TextInput
              name={"search_name"}
              value={searchTerm?.["search_name"]}
              required={false}
              setFormValue={setSearchTerm}
              text={"Nome"}
              cols={2}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <></>
        ) : items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum centro de custo encontrado
            </h3>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="w-1/10 px-6 py-4 font-medium">Id</th>
                    <th className="w-6/10 px-4 py-4 font-medium">Nome</th>
                    <th className="w-2/10 px-4 py-4 font-medium">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <tr key={item.id} onClick={() => null} className="text-sm">
                      {/* hover:bg-slate-50 transition-colors hover:cursor-pointer" */}
                      <td className="px-6 py-3">
                        <span className="font-medium text-slate-800">
                          {item.id}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-slate-700">{item.name}</span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="text-slate-700">
                          <TextButton
                            type="white"
                            text="Editar"
                            onClick={() => handleEditModal(item, "edit")}
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

      {/* Modal New */}
      {showModal == "new" && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Novo centro de custo
              </h2>
              <button
                onClick={() => handleNewModal("")}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form
              id="topForm"
              onSubmit={() => "handleSubmit"}
              className="p-6 grid grid-cols-2 gap-4"
            >
              <TextInput
                name="name"
                text="Nome"
                value={formDataNew.name}
                setFormValue={setFormDataNew}
                cols={2}
                required={true}
                disable={isSaving}
              />

              <SelectInput
                text={"type"}
                name={"Tipo"}
                value={formDataNew.type}
                options={["Bloco", "Ala", "Divisão"]}
                setFormValue={function (value: any): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </form>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                type="white"
                text="Cancelar"
                disable={isSaving}
                onClick={() => setShowModal("")}
              />

              <TextButton
                type={"green"}
                text={"Cadastrar"}
                disable={isSaving}
                onClick={() => null}
              />

              {isSaving && (
                <div className="w-4 h-4 border-2 border-red border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit */}
      {showModal == "edit" && formDataEdit && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Editar centro de custo
              </h2>
              <button
                onClick={() => handleEditModal(null, "")}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form
              id="topForm"
              onSubmit={() => "handleSubmit"}
              className="p-6 grid grid-cols-2 gap-4"
            >
              <TextInput
                name="name"
                text="Nome"
                value={formDataEdit.name}
                setFormValue={setFormDataEdit}
                cols={2}
                required={true}
                disable={isSaving}
              />
              <TextInput
                name="name"
                text="Nome"
                value={formDataEdit.type}
                setFormValue={setFormDataEdit}
                cols={2}
                required={true}
                disable={isSaving}
              />
            </form>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                type="white"
                text="Cancelar"
                disable={isSaving}
                onClick={() => handleEditModal(null, "")}
              />

              <TextButton
                type={"green"}
                text={"Salvar"}
                disable={isSaving}
                onClick={() => null}
              />

              {isSaving && (
                <div className="w-4 h-4 border-2 border-red border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          </div>
        </div>
      )}
    </PageMainContainer>
  );
}
