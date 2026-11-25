export type DepartmentType = {
  id: number;
  title: string;
  url: string;
  icon: string | null;
  activities: (SectorType | ActivityType)[];
};

export interface SectorType {
  id: number;
  title: string;
  order: number;
  icon: string | null;
  url: string;
  activities: ActivityType[];
}

export type ActivityType = {
  id: number;
  title: string;
  order: number;
  icon: string | null;
  url: string;
};
