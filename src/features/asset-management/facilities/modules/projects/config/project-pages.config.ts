import * as project from "../pages/index";

export const projectPagesConfig = [
  {
    path: "/projects",
    element: project.ProjectListPage,
    permission: "operations:projects",
  },
  // {
  //   path: "/projects/:id",
  //   element: project.ProjectDetailsPage,
  //   permission: "operations:projects",
  // },
  {
    path: "/projects/create",
    element: project.ProjectCreatePage,
    permission: "operations:projects",
  },
];
