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
    path: "/jobs/:id",
    element: job.JobDetailsPage,
    permission: "person:job",
  },
  {
    path: "/jobs",
    element: job.JobListPage,
    permission: "person:person",
  },
  {
    path: "/jobs/new",
    element: job.JobNewPage,
    permission: "person:person",
  },
];
