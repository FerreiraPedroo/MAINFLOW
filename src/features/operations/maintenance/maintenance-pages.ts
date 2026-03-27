import * as maintenance from "./index";

export const operationsMaintenancePages = [
  {
    path: "/maintenance",
    element: maintenance.MaintenanceListPage,
    permission: "operations:maintenance",
  },
  // {
  //   path: "/projects/:id",
  //   element: projects.ProjectDetailsPage,
  //   permission: "operations:maintenance",
  // },
  {
    path: "/maintenance/create",
    element: maintenance.MaintenanceCreatePage,
    permission: "operations:maintenance",
  },
];
