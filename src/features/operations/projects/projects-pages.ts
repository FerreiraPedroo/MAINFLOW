import * as projects from "./index";

export const operationsProjectPages = [
  // {
  //   path: "/projects/:id",
  //   element: projects.ProjectDetailsPage,
  //   permission: "operations:projects",
  // },
  {
    path: "/projects",
    element: projects.ProjectListPage,
    permission: "operations:projects",
  },
  {
    path: "/projects/create",
    element: projects.ProjectCreatePage,
    permission: "operations:projects",
  },
];
