import type { DepartmentType, MenuItemsType } from "@/shared/ui/SideBarTypes";
import { managerMenuItems } from "./sidebar/manager";
import { safetyMenuItems } from "./sidebar/safety";
import { personMenuItems } from "./sidebar/person";
import { painelMenuItems } from "./sidebar/painel";

/**
 * Configura o sidebar, esses dados serão obtidos apartir
 * dos dados da aplicação enviado pela API.
 */
type LayoutConfigType = {
  departaments: DepartmentType[];
  menuItems: MenuItemsType[];
};

export const sideBarConfig: LayoutConfigType = {
  departaments: [
    { id: 1, name: "Painel", url: "/painel" },
    { id: 4, name: "Gerenciamento", url: "/manager" },
    { id: 3, name: "Pessoas", url: "/persons" },
    { id: 2, name: "QSMS", url: "/qsms" },
  ],
  menuItems: [
    ...painelMenuItems,
    ...safetyMenuItems,
    ...personMenuItems,
    ...managerMenuItems,
  ],
};
