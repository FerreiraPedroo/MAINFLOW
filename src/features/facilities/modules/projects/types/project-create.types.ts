export type ProjectCreateDTO {
  name: string;
  code: string;
  cost_center_id: number | null;
  building_id: number | null;
  start_date: string;
  end_date: string;
  period: string;
  budgets: { id: number; sequence: number; month: string }[];
}
