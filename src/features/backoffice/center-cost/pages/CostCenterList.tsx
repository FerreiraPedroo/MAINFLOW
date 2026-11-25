import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { Container } from "@/shared/components/Container";

import { Input } from "@/shared/components/input/Input";
import { TextButton } from "@/shared/components/button/TextButton";

import { SelectInput } from "@/shared/components/input/SelectInput";
import type { CostCenter } from "../types/cost-center";
import { useSnackBar } from "@/app/provider/SnackBarProvider";
import { Textarea } from "@/shared/components";
import { CloseButton } from "@/shared/components/button/CloseButton";
import { zodDataValidatorUtil } from "@/shared/utils/zodValidator";
import { centerCostValidator } from "../validators/cost-center";

const itemList: CostCenter[] = [
  {
    id: 1,
    description: "0100400902 - Facilities (BS)",
    code: "0100400902",
  },
  {
    id: 2,
    description: "0100400903 - Facilities (CG)",
    code: "0100400903",
  },
  {
    id: 3,
    description: "0100400904 - Facilities (BG)",
    code: "0100400904",
  },
  {
    id: 4,
    description: "0100400802 - Manutenção (BS)",
    code: "0100400802",
  },
  {
    id: 5,
    description: "0100400803 - Manutenção (CG)",
    code: "0100400803",
  },
  {
    id: 6,
    description: "0100400804 - Manutenção (BG)",
    code: "0100400804",
  },
  {
    id: 7,
    description: "0100401301 - Obra",
    code: "0100401301",
  },
  {
    id: 8,
    description: "0100400901 - Facilities (INST)",
    code: "0100400901",
  },
  {
    id: 9,
    description: "0100400801 - Manutenção (INST)",
    code: "0100400801",
  },
];

const costCenterList = {
  header: {
    title: "",
    subTitle: "",
  },
  buttons: [
    {
      to: "/manager/localizations/create",
      text: "Cadastrar localização",
    },
  ],
  fields: {
    grid: 2,
    inputs: [
      {
        name: "search_name",
        value: "search_name",
        required: false,
        setFormValue: "",
        text: "Nome",
        cols: 2,
      },
    ],
  },
};

export function CostCenterList() {
  const navigate = useNavigate();
  const { showSnackBar } = useSnackBar();

  const [refreshStateCheck, setRefreshStateCheck] = useState(false);
  const [checkIsValid, setCheckIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState("");

  const [items, setItems] = useState<CostCenter[]>(itemList);

  const [formDataCreate, setFormDataCreate] = useState<Partial<CostCenter>>({
    title: "",
    description: "",
    status: "",
  });
  const handleFormData = useCallback((e: Record<string, string>) => {
    setFormDataCreate((prev) => {
      const newValue = { ...prev, ...e };

      const isValid = zodDataValidatorUtil(centerCostValidator, newValue);
      if (isValid) {
        setCheckIsValid(true);
      } else {
        setCheckIsValid(false);
      }

      return newValue;
    });
  }, []);
  async function handleCreate() {
    setIsSaving(true);
    try {
      await apiClient("/backoffice/cost-centers", {
        method: "POST",
        body: JSON.stringify({ ...formDataCreate }),
      });

      setCheckIsValid(false);
      setRefreshStateCheck((prev) => !prev);
    } catch (error: any) {
      showSnackBar("Erro na solicitação", error.message, "fail");
    } finally {
      setIsSaving(false);
    }
  }

  const [formDataEdit, setFormDataEdit] = useState<Partial<CostCenter> | null>(
    null,
  );
  const handleEditData = useCallback((e: Record<string, string>) => {
    setFormDataEdit((prev) => {
      const newValue = { ...prev, ...e };

      const isValid = zodDataValidatorUtil(centerCostValidator, newValue);
      if (isValid) {
        setCheckIsValid(true);
      } else {
        setCheckIsValid(false);
      }

      return newValue;
    });
  }, []);

  // MODAIS
  function handleCreateModal(modal: string) {
    setFormDataCreate({
      title: "",
      description: "",
      status: "ATIVO",
    });
    setShowModal(modal);
  }
  function handleEditModal(item: CostCenter | null, modal: string) {
    setFormDataEdit(item);
    setShowModal(modal);
  }

  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      const data = await apiClient("/backoffice/cost-centers");
      setItems(data);
      setIsLoading(false);
    };
    loadItems();
  }, [refreshStateCheck]);

  return (
    <Container className="flex-col relative justify-start border-4">
      <div className="w-full flex justify-center items-center space-x-4 px-6 py-3">
        {/* Header */}
        <Header
          title="Centro de custo"
          subTitle="Cadastre um novo centro de custo para registrar e acompanhar despesas associadas a uma área ou recurso."
        />
        {/* Buttons */}
        <TextButton
          color="blue"
          size="lg"
          text="Cadastrar centro de custo"
          onClick={() => handleEditModal(null, "new")}
        />
      </div>

      <div className="w-full px-6 py-3">
        {/* Grid */}
        {isLoading ? (
          <></>
        ) : items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum centro de custo encontrado
            </h3>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="w-1/10 px-6 py-2 font-medium">Id</th>
                    <th className="w-1/10 px-4 py-2 font-medium">Status</th>
                    <th className="w-2/10 px-4 py-2 font-medium">Nome</th>
                    <th className="w-5/10 px-4 py-2 font-medium">Descrição</th>
                    <th className="w-2/10 px-4 py-2 font-medium">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-slate-100">
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      className="group text-sm hover:bg-slate-100"
                    >
                      <td className="px-6 py-2">
                        <span className="font-medium text-slate-800">
                          {item.id}
                        </span>
                      </td>
                      <td className="px-4">
                        <span className="text-slate-700">{item.status}</span>
                      </td>
                      <td className="px-4">
                        <span className="text-slate-700">{item.title}</span>
                      </td>
                      <td className="px-4">
                        <span className="text-slate-700">
                          {item.description}
                        </span>
                      </td>
                      <td className="px-4">
                        <span className="hidden text-slate-700 group-hover:flex">
                          <TextButton
                            color="white"
                            size="sm"
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
        <div className="fixed inset-0 bg-slate-900/50 z-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Cadastrar novo centro de custo
              </h2>
              <CloseButton
                disabled={isSaving}
                onClick={() => handleCreateModal("")}
              />
            </div>

            <form className="p-6 grid grid-cols-2 gap-4">
              <Input
                name="title"
                text="Nome"
                value={formDataCreate.title}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleFormData({ title: e.target.value })
                }
                cols="full"
                required={true}
                disabled={isSaving}
                placeholder="0100100101 Unidade"
              />
              <Textarea
                name="description"
                text="Descrição"
                value={formDataCreate.description}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleFormData({ description: e.target.value })
                }
                cols="full"
                required={false}
                disabled={isSaving}
                placeholder="centro de custo de unidade"
              />
              <SelectInput
                name={"status"}
                text={"Status"}
                value={formDataCreate.status}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleFormData({ status: e.target.value })
                }
                cols="full"
                required={true}
                disabled={isSaving}
                options={["ATIVO", "DESATIVADO"]}
              />
            </form>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                color="red"
                size="md"
                text="Cancelar"
                disable={isSaving || !checkIsValid}
                onClick={() => handleCreateModal("")}
              />

              <TextButton
                color="green"
                size="md"
                text="Cadastrar"
                disable={isSaving || !checkIsValid}
                onClick={handleCreate}
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
        <div className="fixed inset-0 bg-slate-900/50 z-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Editar centro de custo
              </h2>
              <CloseButton
                disabled={isSaving}
                onClick={() => handleEditModal(null, "")}
              />
            </div>

            <form className="p-6 grid grid-cols-2 gap-4">
              <Input
                name="name"
                text="Nome"
                value={formDataEdit.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleEditData({ title: e.target.value });
                }}
                cols={2}
                required={true}
                disabled={isSaving}
              />
              <Textarea
                name="description"
                text="Descrição"
                value={formDataCreate.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleEditData({ description: e.target.value });
                }}
                cols="full"
                required={true}
                disabled={isSaving}
                placeholder="centro de custo de unidade"
              />
              <SelectInput
                name={"status"}
                text={"Status"}
                value={formDataEdit.status}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleEditData({ status: e.target.value })
                }
                cols="full"
                required={true}
                disabled={isSaving}
                options={["ATIVO", "DESATIVADO"]}
              />
            </form>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                color="red"
                size="md"
                text="Cancelar"
                disable={isSaving || !checkIsValid}
                onClick={() => handleEditModal(null, "")}
              />

              <TextButton
                color="green"
                size="md"
                text="Salvar"
                disable={isSaving || !checkIsValid}
                onClick={() => null}
              />

              {isSaving && (
                <div className="w-4 h-4 border-2 border-red border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
