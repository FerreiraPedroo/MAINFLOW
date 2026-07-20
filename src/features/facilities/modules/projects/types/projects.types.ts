export interface Project {
  id: number;
  name: string; // nome
  code: string; // codigo do projeto
  cost_center_id: number; // centro de custo do projeto
  building_id: number; // unidade
  start_date: string; // data de inicio ou cadastro do projeto.
  end_date: string; // data estimada para o fim do projeto.
  period: string; // periodo do projeto anual/semestral. Ex: 2026, 2026.1, 2026.2
  budget: number; // valor total do projeto.
  building: {
    id: number;
    name: string;
  };
  cost_center: {
    id: number;
    name: string;
  };
}
