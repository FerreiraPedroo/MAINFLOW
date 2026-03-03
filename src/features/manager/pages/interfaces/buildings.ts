export interface Building {
  id: number;
  name: string;
  address: string;
  maps: string | null;
  photos: string[];
  gps: { lat: string; lon: string } | null;

  created_at?: string;
  update_at?: string[];
  deleted_at?: string | null;
}
