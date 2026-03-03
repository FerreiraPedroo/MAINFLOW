import type { Building } from "./buildings";

export interface Localization {
  id?: number;
  name: string;
  building_id: number;
  block: string;
  floor: string;
  photo: string | null;
  type: string;
  building?: Building;

  unique_name: string; // esse campo é a junção de: building_id + block_id + floor_id + room_name

  created_at?: string;
  update_at?: string[];
  deleted_at?: string | null;
}

