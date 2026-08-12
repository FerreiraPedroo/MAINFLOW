export type DepartmentType = {
  id: number;
  title: string;
  url: string;
  icon: string;
  activities: SectorType[] | ActivityType[];
};

export interface SectorType {
  id: number;
  title: string;
  department_id: number;
  order: number;
  icon: string;
  activities: ActivityType[];
}

export type ActivityType = {
  id: number;
  item_id: number;
  title: string;
  order: number;
  url: string;
  icon: string;
};
