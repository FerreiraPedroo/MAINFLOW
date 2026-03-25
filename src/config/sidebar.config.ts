import type { DepartmentType, MenuItemsType } from "@/shared/ui/SideBarTypes";

import { operationsMenuItems } from "@/features/operations/operations-sidebar.config";
import { managerMenuItems } from "@/features/manager/manager-sidebar.config";
import { safetyMenuItems } from "@/features/safety/safety-sidebar.config";
import { personsMenuItems } from "@/features/person/persons-sidebar.config";
import { painelMenuItems } from "@/features/home/painel-sidebar.config";

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
    { id: 1, name: "Painel", url: "/", icon: "painel" },
    { id: 4, name: "Gerenciamento", url: "/manager", icon: "menuManager" },
    { id: 3, name: "Pessoas", url: "/persons", icon: "menuPerson" },
    { id: 5, name: "Operações", url: "/operations", icon: "menuOperations" },
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
    ...personsMenuItems,
    ...managerMenuItems,
    ...operationsMenuItems,
  ],
};
