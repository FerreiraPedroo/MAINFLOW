import type {
  DepartmentType,
  MenuItemsType,
} from "@/components/AppSidebar/types/sidebar.types";

import { operationsMenuItems } from "@/features/asset-management/facilities/config/facilities-pages.config";
import { managerMenuItems } from "@/features/backoffice/manager/config/manager-sidebar.config";
import { safetyMenuItems } from "@/features/safety/safety-sidebar.config";
import { personsMenuItems } from "@/features/persons/persons-sidebar.config";
import { painelMenuItems } from "@/features/home/painel-sidebar.config";

/**
 * Configura o sidebar, esses dados serão obtidos apartir
 * dos dados da aplicação enviado pela API.
 */
type LayoutConfigType = {
  departaments: DepartmentType[];
  menuItems: MenuItemsType[];
};

// export const sideBarConfig: LayoutConfigType = {
// departaments: [
//   { id: 1, title: "Painel Inicial", url: "/", icon: "painel" },
//   { id: 4, title: "Gerenciamento", url: "/manager", icon: "menuManager" },
//   { id: 3, title: "Pessoas", url: "/persons", icon: "menuPerson" },
//   { id: 5, title: "Operações", url: "/operations", icon: "menuOperations" },
//   {
//     id: 2,
//     title: "Segurança do Trabalho",
//     url: "/safety",
//     icon: "menuSafety",
//   },
// ],
// menuItems: [
//   ...painelMenuItems,
//   ...safetyMenuItems,
//   ...personsMenuItems,
//   ...managerMenuItems,
//   ...operationsMenuItems,
// ],
// };
