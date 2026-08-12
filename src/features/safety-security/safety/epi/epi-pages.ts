import * as epi from "./index";

export const safetyEpiPages = [
  {
    path: "/epi/details",
    element: epi.EpiDetailsPage,
    permission: "safety:epi",
  },
  {
    path: "/epi",
    element: epi.EpiListPage,
    permission: "safety:epi",
  },
  {
    path: "/epi/new",
    element: epi.EpiNewPage,
    permission: "safety:epi",
  },
  {
    path: "/epi/release",
    element: epi.EpiReleasePage,
    permission: "safety:epi",
  },
];
