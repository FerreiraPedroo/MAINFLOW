import * as maintenance from "../index";

export const maintenancePagesConfig = [
  {
    path: "/maintenance",
    element: maintenance.MaintenanceList,
    permission: "operations:maintenance",
  },
  // {
  //   path: "/projects/:id",
  //   element: projects.ProjectDetailsPage,
  //   permission: "operations:maintenance",
  // },
  {
    path: "/maintenance/create",
    element: maintenance.MaintenanceNew,
    permission: "operations:maintenance",
  },
];
