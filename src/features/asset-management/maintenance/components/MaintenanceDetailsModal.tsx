import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Plus } from "lucide-react";

import { BasicModal } from "@/shared/components/modal/BasicModal";
import { StatusBadge } from "@/shared/components/badge/StatusBadge";
import { Tabs, type TabType } from "@/shared/components/tabs/Tabs";

import { Table } from "@/shared/components/table/Table";
import { DateCell, StatusCell } from "@/shared/components/table";
import { TextButton } from "@/shared/components/button/TextButton";
import { Input } from "@/shared/components";

import type { Maintenance, NewMaintenance } from "../types";

// const maintenance = {
//   id: 1,
//   description: "manutenção de porta de madeira.",
//   photo: null,
//   open_date: "2026-08-23T18:28:25.589Z",
//   scheduled_date: null,
//   finish_date: null,
//   status: "ABERTO",
//   classification: "MARCENARIA",
//   priority: null,
//   localization_id: 1,
//   localization: {
//     id: 1,
//     title: "Gestão de Facilities",
//     status: "ATIVO",
//     block: {
//       title: "Bloco A",
//     },
//     floor: {
//       title: "Térreo",
//     },
//     space_type: {
//       title: "Pátio",
//     },
//     address: {
//       short_address: "Av. Paris, nº84",
//     },
//   },
//   history: [
//     {
//       user: "PEdro",
//       date: "2026/09/02",
//       status: "PENDENTE",
//       description:
//         "Este status é um resultado de muito teste no sistema em produção e sendo testado exautivamente pelo módulo de q/a.",
//     },
//   ],
//   documents: [
//     {
//       id: 1,
//       date: "2026-09-04",
//       url: "storage/maintenance/",
//       type: "jpg",
//       title: "Foto do usuário",
//     },
//   ],
// } as Maintenance;

const tabs = [
  { label: "Informações" },
  { label: "Movimentação", icon: <Plus size={16} color="green" /> },
  { label: "Documentos" },
  { label: "Histórico" },
];

type MaintenanceDetailsModal = {
  closeModal: () => void;
  maintenanceSelected: any;
};

export function MaintenanceDetailsModal({
  maintenanceSelected,
  closeModal,
}: MaintenanceDetailsModal) {
  const [maintenance, setMaintenance] = useState(maintenanceSelected);

  const [tabSelected, setTabSelected] = useState<TabType | null>({
    label: "Informações",
  });

  const { handleSubmit, controle, reset, getValues } = useForm<NewMaintenance>({
    defaultValues: {},
  });

  useEffect(() => {}, []);

  return (
    <BasicModal size={4} title={`OS ${maintenance.id}`} closeModal={closeModal}>
      <div className="lg: pt-1 pb-6 w-full overflow-x-auto overflow-hidden">
        <Tabs
          tabs={tabs}
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        />
        {tabSelected?.label == "Informações" && (
          <div className="w-full flex gap-4 p-4">
            <div className="flex flex-col gap-1">
              <img src="../" className="w-64 h-60 self-center" />
            </div>

            <div className="w-full space-y-2">
              <div className="flex gap-10">
                <div className="space-y-2 min-w-40">
                  <div className="text-md w-full">
                    <p className="text-sm text-slate-500">Localização</p>
                    {maintenance.localization.title}
                    <p>
                      {maintenance.localization.address?.short_address}
                      {" - "}
                      {maintenance.localization.block?.title}
                      {" - "}
                      {maintenance.localization.floor?.title}
                      {" - "}
                      {maintenance.localization.space_type?.title}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Especialidade</p>
                    <p className="text-md ">{maintenance.classification}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-slate-500">Status</p>
                    <p className="text-md ">
                      {maintenance.status ? (
                        <StatusBadge
                          variant={maintenance.status}
                          text={maintenance.status}
                          size={1}
                        />
                      ) : (
                        "-"
                      )}
                      {" - "}
                      {new Date(maintenance.open_date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Prioridade</p>
                    <p className="text-md ">{maintenance.priority ?? "-"}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-500">Descrição</p>
                <p className="text-md text-slate-900 w-full min-w-20">
                  {maintenance.description}{" "}
                  {maintenance.localization.address?.short_address}{" "}
                  {maintenance.localization.title} {maintenance.classification}{" "}
                  {maintenance.localization.address?.short_address}{" "}
                  {maintenance.description}
                </p>
              </div>
            </div>
          </div>
        )}
        {tabSelected?.label == "Histórico" && (
          <div className="w-full flex gap-4 p-4">
            <Table
              columns={[
                {
                  key: "date",
                  header: "Date",
                  size: 2,
                  position: "center",
                  render: (row) => <DateCell value={row.date} />,
                },
                { key: "user", header: "Usuário", size: 2, position: "center" },
                {
                  key: "status",
                  header: "Status",
                  size: 2,
                  position: "center",
                  render: (row) => (
                    <StatusCell variant={row.status} text={row.status} />
                  ),
                },
              ]}
              data={[
                {
                  user: "Pedro.Ferreira",
                  status: "ABERTO",
                  date: "2026-06-30",
                  observations:
                    "Ordem de serviço que foi aberta para atender as necessidades do usuário que está solicitando o acesso ao sisteman que está sendo desenvolvido e deve estar quase pronto ao final da sprinte final de 3 meses seguidos de entregas no ponto de atrazo que não deveriam estar sendo atrazadas mas devidoa opcionalidade dos desenvolvedores o fazer. ",
                },
                {
                  user: "Pedro.Ferreira",
                  status: "CANCELADO",
                  date: "30/08/2026",
                  observations:
                    "Ordem de serviço que foi aberta para atender as necessidades do usuário que está solicitando o acesso ao sisteman . ",
                },
              ]}
            />
          </div>
        )}
        {tabSelected?.label == "Documentos" && (
          <div className="w-full flex gap-4 p-4">
            <Table
              columns={[
                {
                  key: "date",
                  header: "Data",
                  size: 2,
                  position: "center",
                  render: (row) => <DateCell value={row.date} />,
                },
                {
                  key: "title",
                  header: "Title",
                  size: 3,
                  position: "center",
                  render: (row) => <>{row.title}</>,
                },
                {
                  key: "link",
                  header: "Link",
                  size: 3,
                  position: "start",
                  render: (row) => <>{row.url}</>,
                },
              ]}
              data={maintenance.documents}
            />
          </div>
        )}
        {tabSelected?.label == "Movimentação" && (
          <div className="w-full space-y-4 p-4">
            <TextButton
              text="Nova movimentação"
              color="green"
              onClick={() => null}
            />
            <Table
              columns={[
                {
                  key: "date",
                  header: "Data",
                  size: 2,
                  position: "center",
                  render: (row) => <DateCell value={row.date} />,
                },
                {
                  key: "title",
                  header: "Title",
                  size: 3,
                  position: "center",
                  render: (row) => <>{row.title}</>,
                },
                {
                  key: "link",
                  header: "Link",
                  size: 3,
                  position: "start",
                  render: (row) => <>{row.url}</>,
                },
              ]}
              data={maintenance.documents}
            />
            <BasicModal
              size={4}
              title="Cadastrar nova manutenção"
              closeModal={() => {}}
            >
              <div>
                <Input />{" "}
              </div>
            </BasicModal>
          </div>
        )}
      </div>
    </BasicModal>
  );
}
