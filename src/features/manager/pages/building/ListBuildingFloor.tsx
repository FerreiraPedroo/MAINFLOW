import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import { TextInput } from "@/shared/components/input/TextInput";
import { TextButton } from "@/shared/components/button/TextButton";

import type { BuildingFloor } from "../interfaces/buildingFloor";

const typeList: BuildingFloor[] = [
  {
    id: 1,
    name: "Térreo",
  },
  {
    id: 2,
    name: "1º Andar",
  },
  {
    id: 3,
    name: "2º Andar",
  },
  {
    id: 4,
    name: "3º Andar",
  },
  {
    id: 5,
    name: "Terraço",
  },
];

export function ListBuildingFloorView() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState("");
  const [searchTerm, setSearchTerm] = useState({
    search_name: "",
  });

  const [buildingFloor, setBuildingFloor] = useState<BuildingFloor[]>(typeList);

  const [formDataNew, setFormDataNew] = useState<Partial<BuildingFloor>>({
    name: "",
  });
  function handleModalNew(modal: string) {
    setFormDataNew({ name: "" });
    setShowModal(modal);
  }

  const [formDataEdit, setFormDataEdit] =
    useState<Partial<BuildingFloor> | null>(null);
  function handleModalEdit(item: BuildingFloor | null, modal: string) {
    setFormDataEdit(item);
    setShowModal(modal);
  }

  useEffect(() => {
    const loadList = async () => {
      setIsLoading(true);
      const data = await apiClient("building-floor-list");
      setBuildingFloor(data);
      setIsLoading(false);
    };
    // loadList();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Andar"
          subTitle="Cadastre um novo andar para identificar um nível do edifício na estrutura de localização.."
        />
        <div className="flex gap-4">
          <TextButton
            text="Cadastrar andar"
            type="stone"
            onClick={() => handleModalNew("new")}
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
        ) : buildingFloor.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum andar encontrada
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre uma novo andar para começar
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
              Cadastrar andar
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="w-1/10 px-6 py-4 font-medium">Id</th>
                    <th className="w-9/10 px-4 py-4 font-medium">Nome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {buildingFloor.map((floor) => (
                    <tr
                      key={floor.id}
                      onClick={() => null}
                      className="text-sm hover:bg-slate-50 transition-colors hover:cursor-pointer"
                    >
                      <td className="px-6 py-3">
                        <span className="font-medium text-slate-800">
                          {floor.id}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-slate-700">{floor.name}</span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="text-slate-700">
                          <TextButton
                            type="white"
                            text="Editar"
                            onClick={() => handleModalEdit(floor, "edit")}
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
              <h2 className="text-xl font-bold text-slate-800">Novo andar</h2>
              <button
                onClick={() => handleModalNew("")}
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
              <h2 className="text-xl font-bold text-slate-800">Editar andar</h2>
              <button
                onClick={() => handleModalEdit(null, "")}
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
            </form>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                type="white"
                text="Cancelar"
                disable={isSaving}
                onClick={() => handleModalEdit(null, "")}
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
    </PageMainContainer>
  );
}
