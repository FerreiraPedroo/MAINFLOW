import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { Container } from "@/shared/components/Container";

import { Input } from "@/shared/components/input/Input";
import { TextButton } from "@/shared/components/button/TextButton";

import { SelectInput } from "@/shared/components/input/SelectInput";

import { type PaymentControl } from "../types";
import { IconButton } from "@/shared/components/button/IconButton";

export const paymentControlInfo = [
  {
    area: "ZN",
    suppliers: [
      {
        id: 2,
        legal_name: "ELETROMAX",
        trade_name: "string;",
        address: [
          {
            id: 1,
            short_address: "BS - SEDE",
            full_address: "Av. Paris, nº 84 - Bonsucesso",
            month_values: [
              {
                id: 1,
                sequence: 1,
                month: "JANEIRO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 2,
                sequence: 2,
                month: "FEVEREIRO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 3,
                sequence: 3,
                month: "MARÇO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 4,
                sequence: 4,
                month: "ABRIL",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 5,
                sequence: 5,
                month: "MAIO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 6,
                sequence: 6,
                month: "JUNHO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 7,
                sequence: 7,
                month: "JULHO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 8,
                sequence: 8,
                month: "AGOSTO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 9,
                sequence: 9,
                month: "SETEMBRO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 10,
                sequence: 10,
                month: "OUTUBRO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 11,
                sequence: 11,
                month: "NOVEMBRO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 12,
                sequence: 12,
                month: "DEZEMBRO",
                send_date: null,
                document: null,
                value: null,
                supplier_id: 1,
                address_id: 1,
              },
            ],
          },
          {
            id: 3,
            short_address: "BS - SEDE",
            full_address: "Av. Paris, nº 84 - Bonsucesso",
            month_values: [
              {
                id: 1,
                sequence: 1,
                month: "JANEIRO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 2,
                sequence: 2,
                month: "FEVEREIRO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 3,
                sequence: 3,
                month: "MARÇO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 4,
                sequence: 4,
                month: "ABRIL",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
            ],
          },
          {
            id: 2,
            short_address: "BS - SEDE",
            full_address: "Av. Paris, nº 84 - Bonsucesso",
            month_values: [
              {
                id: 1,
                sequence: 1,
                month: "JANEIRO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 2,
                sequence: 2,
                month: "FEVEREIRO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 3,
                sequence: 3,
                month: "MARÇO",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
              {
                id: 4,
                sequence: 4,
                month: "ABRIL",
                send_date: "2026-09-27",
                document: "100.120",
                value: 3500.0,
                supplier_id: 1,
                address_id: 1,
              },
            ],
          },
        ],
      },
    ],
  },
];

export function PaymentControlList() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState("");

  const [paymentControl, setPaymentControl] =
    useState<PaymentControl[]>(paymentControlInfo);

  function handleCreateModal(modal: string) {
    setShowModal(modal);
  }

  const [folderStatus, setFolderStatus] = useState<Record<string, boolean>>({});
  function changeFolderStatus(folder: string) {
    const hasFolder = folderStatus[folder];
    setFolderStatus((prev) => ({ ...prev, [folder]: !hasFolder }));
  }

  useEffect(() => {
    const loadPaymentControl = async () => {
      setIsLoading(true);
      const data = await apiClient("payment-control-list");
      setPaymentControl(data);
      setIsLoading(false);
    };
    // loadPaymentControl();
  }, []);

  return (
    <Container>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Controle de pagamentos"
          subTitle="Controle e acompanhamento de notas fiscais encaminhadas para pagamento."
        />
        {paymentControl.length !== 0 && (
          <div className="flex gap-4">
            <TextButton
              text="Cadastrar pagamento recorrente"
              color="stone"
              onClick={() => handleCreateModal("new")}
            />
          </div>
        )}

        {isLoading ? (
          <></>
        ) : paymentControl.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum controle encontrado.
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre e configure pagamentos recorrentes vinculados a unidades
              e fornecedores.
            </p>
            {paymentControl.length === 0 && (
              <div className="flex w-full justify-center gap-4">
                <TextButton
                  text="Cadastrar pagamento recorrente"
                  color="stone"
                  onClick={() => handleCreateModal("new")}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-4">
            {paymentControl.map((payment) => {
              return (
                <div key={payment.area} className="">
                  <div className="flex py-1 items-center gap-2">
                    <IconButton
                      icon={
                        folderStatus[payment.area]
                          ? "folderMinus"
                          : "folderPlus"
                      }
                      size="md"
                      onClick={() => changeFolderStatus(payment.area)}
                    />
                    <p className="text-2xl font-bold">{payment.area}</p>
                  </div>

                  {folderStatus[payment.area] && (
                    <div className="py-1 space-y-1 ml-6">
                      {payment.suppliers.map((supplier) => {
                        return (
                          <div key={supplier.id} className="">
                            <div className="flex gap-2">
                              <IconButton
                                icon={
                                  folderStatus[`${payment.area}${supplier.id}`]
                                    ? "folderMinus"
                                    : "folderPlus"
                                }
                                size="md"
                                onClick={() =>
                                  changeFolderStatus(
                                    `${payment.area}${supplier.id}`,
                                  )
                                }
                              />
                              <p className="text-2xl">{supplier.legal_name}</p>
                            </div>
                            {folderStatus[`${payment.area}${supplier.id}`] &&
                              supplier.address.map((address) => (
                                <div
                                  key={address.id}
                                  className="py-1 space-y-1 ml-6"
                                >
                                  <div className="flex gap-2 items-start ml-2">
                                    <IconButton
                                      icon={
                                        folderStatus[
                                          `${payment.area}${supplier.id}${address.id}`
                                        ]
                                          ? "folderMinus"
                                          : "folderPlus"
                                      }
                                      size="md"
                                      onClick={() =>
                                        changeFolderStatus(
                                          `${payment.area}${supplier.id}${address.id}`,
                                        )
                                      }
                                    />
                                    <p className="w-auto  text-2xl text-nowrap">
                                      {address.short_address}
                                    </p>
                                    {folderStatus[
                                      `${payment.area}${supplier.id}${address.id}`
                                    ] && (
                                      <div className="flex flex-col">
                                        <div className="flex gap-2 border">
                                          <p className="min-w-32 w-32 text-center text-lg">
                                            MÊS
                                          </p>
                                          <p className="min-w-32 w-32 text-center text-lg">
                                            DATA DE ENVIO
                                          </p>
                                          <p className="min-w-32 w-32 text-center text-lg">
                                            DOCUMENTO
                                          </p>
                                          <p className="min-w-32 w-32 text-center text-lg ">
                                            VALOR
                                          </p>
                                        </div>
                                        {address.month_values.map((month) => (
                                          <div
                                            key={month.id}
                                            className="flex items-center gap-2 border-t-0 border-b border-x py-0.5 px-1 hover:bg-slate-100"
                                          >
                                            <p className="min-w-32 w-32 text-lg text-end">
                                              {month.month}
                                            </p>
                                            <p className="min-w-32 w-32 text-lg text-center">
                                              {month.send_date}
                                            </p>
                                            <p className="min-w-32 w-32 text-lg text-center">
                                              {month.document}
                                            </p>
                                            <p className="min-w-32 w-32 text-lg text-center">
                                              {month.value}
                                            </p>
                                            <div className="flex w-16 justify-end">
                                              {month.send_date ||
                                              month.document ||
                                              month.value ? (
                                                <>
                                                  <IconButton
                                                    icon="edit"
                                                    size="sm"
                                                    onClick={() => null}
                                                  />
                                                  <IconButton
                                                    icon="trash"
                                                    size="sm"
                                                    onClick={() => null}
                                                  />
                                                </>
                                              ) : (
                                                <IconButton
                                                  icon="add"
                                                  size="sm"
                                                  onClick={() => null}
                                                />
                                              )}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* {showModal == "new" && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Nova divisão</h2>
              <button
                onClick={() => handleCreateModal("")}
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
              <Input
                name="name"
                text="Nome"
                value={formData.name}
                onChange={setFormData}
                cols={2}
                required={true}
                disable={isSaving}
              />
              <SelectInput
                text={"type"}
                name={"Tipo"}
                value={formData.type}
                options={["Bloco", "Ala", "Divisão"]}
                onChange={function (value: any): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </form>
            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                color="red"
                text="Cancelar"
                disable={isSaving}
                onClick={() => setShowModal("")}
              />{" "}
              <TextButton
                color={"green"}
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
      )} */}
      {/* Modal Edit */}
      {/* {showModal == "edit" && formDataEdit && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Editar divisão
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
              <Input
                name="name"
                text="Nome"
                value={formDataEdit.name}
                setFormValue={setFormDataEdit}
                cols={2}
                required={true}
                disable={isSaving}
              />
              <Input
                name="name"
                text="Nome"
                value={formDataEdit.type}
                setFormValue={setFormDataEdit}
                cols={2}
                required={true}
                disable={isSaving}
              />
            </form>
            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                type="white"
                text="Cancelar"
                disable={isSaving}
                onClick={() => handleEditModal(null, "")}
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
      )} */}
    </Container>
  );
}
