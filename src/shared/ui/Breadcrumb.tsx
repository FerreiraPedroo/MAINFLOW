import React, { useState } from "react";
import { BasicModal } from "@shared/components/modal/BasicModal";

type Breadcrumb = {
  id: number;
  step: number;
  name: string;
  process: string;
  department: string;
  user: string;
  status: string;
  description: string;
};

const listBreadcrumb = [
  {
    id: 1,
    step: 1,
    name: "Cadastro",
    process: "string",
    department: "Facilities",
    user: "Pedro Henrique",
    status: "Aprovado",
    description: "string",
  },
  {
    id: 1,
    step: 1,
    name: "Cadastro",
    process: "string",
    department: "Facilities",
    user: "Pedro Henrique",
    status: "Dispensado",
    description: "string",
  },
  {
    id: 1,
    step: 1,
    name: "Cadastro",
    process: "string",
    department: "Facilities",
    user: "Pedro Henrique",
    status: "Rejeitado",
    description: "string",
  },
  {
    id: 1,
    step: 1,
    name: "Cadastro",
    process: "string",
    department: "Facilities",
    user: "Pedro Henrique",
    status: "Cancelado",
    description:
      "Você deve alterar o resultado para que possamos ver tudo o restante",
  },
];

const statusColor: Record<string, { bagdeBg: string }> = {
  Pendente: {
    bagdeBg: "bg-gray-300",
  },
  Dispensado: {
    bagdeBg: "bg-blue-200",
  },
  Aprovado: {
    bagdeBg: "bg-green-300",
  },
  Rejeitado: {
    bagdeBg: "bg-yellow-300",
  },
  Cancelado: {
    bagdeBg: "bg-red-300",
  },
};

const status = ["Pendente", "Dispensado", "Aprovado", "Rejeitado", "Cancelado"];

export function Breadcrumb({ itemList }: { itemList: Breadcrumb[] }) {
  const [showModal, setShowModal] = useState({});

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {listBreadcrumb.map((breadcrumb, index, array) => (
          <>
            <div
              className={`max-w-60 min-w-35 flex-1 rounded-xl p-3  border border-gray-700  bg-white shadow-lg`}
            >
              <div className="mb-2 flex flex-col items-start justify-between gap-1">
                <div className="flex w-full justify-between items-center">
                  <p className="truncate text-sm font-semibold">
                    {breadcrumb.name}
                  </p>
                  <span
                    className={`inline-flex items-center rounded-lg pl-0.5 pr-2 py-0.5  gap-1 overflow-hidden text-xs ${statusColor[breadcrumb.status]?.bagdeBg ?? "bg-white"}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className=""
                    >
                      <circle cx="13" cy="12" r="6"></circle>
                    </svg>
                    {breadcrumb.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <p className="text-muted-foreground truncate text-sm space-x-1 ">
                    <span>{breadcrumb.department}</span>
                    <span>/</span>
                    <span>{breadcrumb.user}</span>
                  </p>
                </div>
              </div>

              <p className="text-sm leading-tight text-muted-foreground truncate">
                {breadcrumb.description}
              </p>
            </div>
            {index < array.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right h-5 w-5 shrink-0 transition-colors text-muted-foreground/30"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            )}
          </>
        ))}

        {/* {showModal && <BasicModal />} */}
      </div>
    </div>
  );
}
