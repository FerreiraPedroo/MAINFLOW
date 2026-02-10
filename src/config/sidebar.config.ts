// export const nameInputALias = {
// 	"Nome técnico": "Nome real"
// }

import type { DepartmentType, MenuItemsType } from "@/shared/ui/SideBarTypes";

/**
 * Configura o side bar, esses dados serão obtidos apartir
 * dos dados da aplicação enviado pela API.
 */
type LayoutConfigType = {
  departaments: DepartmentType[];
  menuItems: MenuItemsType[];
};

const painelMenuItems = [
  {
    name: "Painel",
    department_id: 1,
    url: "/painel",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
];

const safetyMenuItems = [
  {
    name: "Inicio",
    department_id: 2,
    url: "/qsms",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "Dashboard",
    department_id: 2,
    url: "/qsms-dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "EPIs",
    department_id: 2,
    url: "/epi",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
];

export const sideBarConfig: LayoutConfigType = {
  departaments: [
    { id: 1, name: "Painel", url: "/painel" },
    { id: 2, name: "QSMS", url: "/qsms" },
  ],
  menuItems: [...painelMenuItems, ...safetyMenuItems],
};
