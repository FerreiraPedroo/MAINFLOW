export interface PaymentGroup {
  id: number;
  name: string;
  active: boolean;

  created_at?: string;
  update_at?: string[];
  deleted_at?: string | null;
}
