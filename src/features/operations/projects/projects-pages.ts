import * as project from "./index";

export const projectPages = [
  // {
  //   path: "/projects/:id",
  //   element: projects.ProjectDetailsPage,
  //   permission: "operations:projects",
  // },
  {
    path: "/projects",
    element: project.ProjectListPage,
    permission: "operations:projects",
  },
  {
    path: "/projects/create",
    element: project.ProjectCreatePage,
    permission: "operations:projects",
  },
];
