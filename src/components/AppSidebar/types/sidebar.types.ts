export type DepartmentType = {
  id: number;
  title: string;
  url: string;
  icon: string;
  itemsList: SectorType[] | ItemsType[];
};

export interface SectorType {
  id: number;
  title: string;
  department_id: number;
  order: number;
  icon: string;
  sectorItems: ItemsType[];
}

export type ItemsType = {
  id: number;
  item_id: number;
  title: string;
  order: number;
  icon: string;
  options: {
    id: number;
    title: string;
    icon: string;
    url: string;
  }[];
};
