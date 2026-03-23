import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import { TextInput } from "@/shared/components/input/TextInput";
import { TextButton } from "@/shared/components/button/TextButton";

import type { PaymentGroup } from "../../interfaces/paymentGroup";
import { SearchButtonTextInput } from "@/shared/components/input/SearchButtonTextInput";
import { CheckInput } from "@/shared/components/input/CheckInput";
import { PillBadge } from "@/shared/components/badges/PillBadge";

const itemList: PaymentGroup[] = [
  {
    id: 1,
    name: "1321305 - Adiantamento para imobilização",
    active: true,
  },
  {
    id: 2,
    name: "45050330 - Material HID/SER/ELE/MAR/CIV",
    active: true,
  },
  {
    id: 3,
    name: "45090109	- ENERGIA ELETRICA",
    active: true,
  },
  {
    id: 4,
    name: "45090101	- AGUA E ESGOTO",
    active: true,
  },
  {
    id: 5,
    name: "45010101	- Alugueis - Imoveis",
    active: true,
  },
  {
    id: 6,
    name: "45050317	- MATERIAL P/COPA, COZINHA E REFEITORIO",
    active: true,
  },
  {
    id: 7,
    name: "45030191	- OUTROS SERVICOS PRESTADOS POR P.JURIDICA",
    active: true,
  },
];

export function PaymentGroupList() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState("");
  const [searchTerm, setSearchTerm] = useState({
    search_name: "",
  });

  const [items, setItems] = useState<PaymentGroup[]>(itemList);

  const [formDataNew, setFormDataNew] = useState<Partial<PaymentGroup>>({
    name: "",
    active: true,
  });
  const handleModalNew = useCallback((modal: string) => {
    setFormDataNew({ name: "", active: true });
    setShowModal(modal);
  }, []);

  const [formDataEdit, setFormDataEdit] =
    useState<Partial<PaymentGroup> | null>(null);
  const handleModalEdit = useCallback(
    (item: PaymentGroup | null, modal: string) => {
      setFormDataEdit(item);
      setShowModal(modal);
    },
    [],
  );

  const handleSearch = async () => {
    setIsLoading(true);
    const data = await apiClient("payment-groups");
    setItems(data);
    setIsLoading(false);
  };

  useEffect(() => {
    const loadList = async () => {
      setIsLoading(true);
      const data = await apiClient("payment-groups");
      setItems(data);
      setIsLoading(false);
    };
    // loadList();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Grupo de pagamento"
          subTitle="Cadastre um novo grupo de pagamento para organizar as configurações de pagamento."
        />
        <div className="flex gap-4">
          <TextButton
            text="Cadastrar grupo de pagamento"
            type="stone"
            onClick={() => handleModalNew("new")}
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
            <SearchButtonTextInput
              name={"search_name"}
              text={"Nome"}
              value={searchTerm.search_name}
              required={false}
              setSearchValue={setSearchTerm}
              handleSearch={handleSearch}
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
              Nenhum grupo de pagamento encontrada
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre uma novo grupo de pagamento para começar
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
              Cadastrar grupo de pagamento
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-100 border-b border-slate-200">
                    <th className="w-1/10 px-6 py-4 font-medium">Id</th>
                    <th className="w-8/10 px-4 py-4 font-medium">Nome</th>
                    <th className="w-2/10 px-4 py-4 font-medium">Ativo</th>
                    <th className="w-1/10 px-4 py-4 font-medium text-center">
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => null}
                      className="text-sm transition-colors " //hover:bg-slate-50 hover:cursor-pointer"
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
                        <span className="text-slate-700">
                          <PillBadge name={item.active ? "Ativo" : "Inativo"} />
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="text-slate-700">
                          <TextButton
                            type="white"
                            text="Editar"
                            onClick={() => handleModalEdit(item, "edit")}
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
                Novo grupo de pagamento
              </h2>
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
              <CheckInput
                text={"Ativo"}
                name={"active"}
                value={formDataNew.active}
                setFormValue={setFormDataNew}
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
              <h2 className="text-xl font-bold text-slate-800">
                Editar grupo de pagamento
              </h2>
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
              <CheckInput
                name={"active"}
                text={"Ativo"}
                value={formDataEdit.active}
                setFormValue={setFormDataEdit}
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
