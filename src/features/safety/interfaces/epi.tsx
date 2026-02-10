export interface Epi {
  id?: number;
  code: string;
  name: string;
  description: string | null;
  imagem_url: string | null;
  category_id: number | null;
  active: boolean;

  ca: string;
  expiration_date: string;
  manufacturer: string;
}
