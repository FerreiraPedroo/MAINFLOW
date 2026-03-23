import * as manager from "./index";

export const managerPages = [
  {
    path: "/",
    element: manager.ManagerHome,
    permission: "manager:manager",
  },
  {
    path: "/localizations",
    element: manager.LocalizationList,
    permission: "manager:manager",
  },
  {
    path: "/localizations/new",
    element: manager.LocalizationNew,
    permission: "manager:manager",
  },
  {
    path: "/localizations/buildings",
    element: manager.BuildingList,
    permission: "manager:manager",
  },
  {
    path: "/localizations/building-floors",
    element: manager.BuildingFloorList,
    permission: "manager:manager",
  },
  {
    path: "/localizations/building-spaces",
    element: manager.BuildingSpaceList,
    permission: "manager:manager",
  },
  {
    path: "/localizations/building-divisions",
    element: manager.BuildingDivisionList,
    permission: "manager:manager",
  },
  {
    path: "/cost-center",
    element: manager.CostCenterList,
    permission: "manager:manager",
  },
  {
    path: "/payment-groups",
    element: manager.PaymentGroupList,
    permission: "manager:manager",
  },
];
