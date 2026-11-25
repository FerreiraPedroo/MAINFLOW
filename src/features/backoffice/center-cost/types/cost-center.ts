export interface CostCenter {
  id: number;
  title: string;
  description: string;
  status: string;

  created_at?: string;
  update_at?: string[];
  deleted_at?: string | null;
}
