export interface BuildingDivision {
  id: number;
  name: string;
  type: string; // esse tipo pode ser.Ex: Bloco, Ala,

  created_at?: string;
  update_at?: string[];
  deleted_at?: string | null;
}
