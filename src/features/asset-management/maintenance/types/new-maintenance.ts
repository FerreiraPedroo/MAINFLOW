export type NewMaintenance = {
  description: string;
  photo: string | null;
  status: "DEFAULT" | "FINALIZADO" | "ABERTO" | "ANDAMENTO" | "CANCELADO";
  classification: string;
  priority: string | null;
  localization_id: number;
  localization: {
    id: number;
    title: string;
    status: string;
    block?: {
      title: string;
    };
    floor?: {
      title: string;
    };
    space_type?: {
      title: string;
    };
    address?: {
      short_address: string;
    };
  };
  history: {
    user: string;
    date: string;
    status: string;
    description: string;
  }[];
  documents: {
    id: number;
    date: string;
    url: string;
    type: string;
    title: string;
  }[];
};
