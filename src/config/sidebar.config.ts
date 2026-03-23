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
    { id: 1, name: "Painel", url: "/painel", icon: "painel" },
    { id: 4, name: "Gerenciamento", url: "/manager", icon: "menuManager" },
    { id: 3, name: "Pessoas", url: "/persons", icon: "menuPerson" },
    {
      id: 2,
      name: "Segurança do Trabalho",
      url: "/safety",
      icon: "menuSafety",
    },
  ],
  menuItems: [
    ...painelMenuItems,
    ...safetyMenuItems,
    ...personMenuItems,
    ...managerMenuItems,
  ],
};
