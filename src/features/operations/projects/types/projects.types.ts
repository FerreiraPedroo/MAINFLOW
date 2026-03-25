export interface Project {
  id: number;
  name: string;
  code: string;
  cost_center_id: number;
  building_id: number;
  start_date: string;
  end_date: string;
  period: string;
  budgets: { id: number; sequence: number; month: string }[];
  building: {
    id: number;
    name: string;
  };
  cost_center: {
    id: number;
    name: string;
  };
}
