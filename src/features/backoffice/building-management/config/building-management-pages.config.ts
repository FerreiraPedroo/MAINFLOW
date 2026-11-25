import * as buildingManagement from "../pages";

export const buildingManagementPagesConfig = [
  {
    path: "building-management/localizations",
    element: buildingManagement.LocalizationList,
  },
  {
    path: "building-management/localizations/create",
    element: buildingManagement.LocalizationCreate,
  },
  {
    path: "building-management/localizations/buildings",
    element: buildingManagement.BuildingList,
  },
  {
    path: "building-management/localizations/building-floors",
    element: buildingManagement.BuildingFloorList,
  },
  {
    path: "building-management/localizations/building-spaces",
    element: buildingManagement.BuildingSpaceList,
  },
  {
    path: "building-management/localizations/building-divisions",
    element: buildingManagement.BuildingDivisionList,
  },
];
