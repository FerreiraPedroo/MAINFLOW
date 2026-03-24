import * as job from "./index";

export const personJobsPages = [
  // {
  //   path: "/",
  //   element: job.JobHomePage,
  //   permission: "person:job",
  // },
  // {
  //   path: "/dashboard",
  //   element: job.JobDashboardPage,
  //   permission: "person:job",
  // },
  {
    path: "/persons/:id",
    element: job.JobDetailsPage,
    permission: "person:job",
  },
  {
    path: "/persons",
    element: job.JobListPage,
    permission: "person:person",
  },
  {
    path: "/persons/new",
    element: job.JobNewPage,
    permission: "person:person",
  },
];
