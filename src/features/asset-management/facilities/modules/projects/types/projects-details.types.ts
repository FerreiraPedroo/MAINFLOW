export interface ProjectDetailsType {
  id: number;
  code: string; // codigo
  title: string; // titulo
  period: string; // periodo do projeto anual/semestral. Ex: 2026, 2026.1, 2026.2
  budget: number; // valor total do projeto.
  cost_center_id: number; // centro de custo
  cost_center: {
    id: number;
    title: string;
  };
  status: string;
  description: string;

  start_date: string; // data de inicio ou cadastro
  end_date: string; // data estimada para o fim do projeto.
  building_id: number; // unidade
  building: string;
}
