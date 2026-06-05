export type DepartmentType = {
  id: number;
  title: string;
  url: string;
  icon: string;
};

export interface MenuItemsType {
  id: number;
  title: string;
  department_id: number;
  order: number;
  url: string;
  icon: string;
  subMenu?: SubMenuItemsType[];
}

export type SubMenuItemsType = {
  id: number;
  menu_id: number;
  title: string;
  order: number;
  url: string;
  icon: string;
};
