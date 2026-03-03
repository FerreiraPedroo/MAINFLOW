export type DepartmentType = {
  id: number;
  name: string;
  url: string;
};

export type MenuItemsType = {
  id: number;
  name: string;
  department_id: number;
  order: number;
  url: string;
  icon: string;
  subMenu?: SubMenuItemsType[];
};

export type SubMenuItemsType = {
  id: number;
  menu_id: number;
  name: string;
  order: number;
  url: string;
  icon: string;
};
