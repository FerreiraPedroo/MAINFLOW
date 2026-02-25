import React from "react";

export const statusComponent: any = {
  Ativo: {
    id: 2,
    name: "Ativo",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-emerald-100 text-emerald-700",
  },
  Afastado: {
    id: 3,
    name: "Afastado",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-yellow-100 text-yellow-700",
  },
  Ferias: {
    id: 4,
    name: "Férias",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-purple-100 text-purple-600",
  },
  Demitido: {
    id: 1,
    name: "Demitido",
    icon: "M12 14l9-5-9-5-9 5 9 5z",
    color: "bg-rose-100 text-rose-700",
  }
};

export function StatusPerson({ status }: { status: string }) {
  return (
    <span
      className={`border border-green-300 px-2.5 py-0.5 rounded-xl text-sm font-medium ${statusComponent[status].color ?? "bg-stone-100 text-stone-700"}`}
    >
      {statusComponent[status].name}
    </span>
  );
}
