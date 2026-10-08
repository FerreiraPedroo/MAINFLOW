import * as management from "../pages";

export const managementPagesConfig = [
  {
    path: "management",
    element: management.ManagementHome,
    permission: "management:management",
  },
  {
    path: "management/localizations",
    element: management.LocalizationList,
    permission: "management:management",
  },
  {
    path: "management/localizations/create",
    element: management.LocalizationCreate,
    permission: "management:management",
  },
  {
    path: "management/localizations/buildings",
    element: management.BuildingList,
    permission: "management:management",
  },
  {
    path: "management/localizations/building-floors",
    element: management.BuildingFloorList,
    permission: "management:management",
  },
  {
    path: "management/localizations/building-spaces",
    element: management.BuildingSpaceList,
    permission: "management:management",
  },
  {
    path: "management/localizations/building-divisions",
    element: management.BuildingDivisionList,
    permission: "management:management",
  },
  {
    path: "management/cost-center",
    element: management.CostCenterList,
    permission: "management:management",
  },
  {
    path: "management/payment-groups",
    element: management.PaymentGroupList,
    permission: "management:management",
  },
];
