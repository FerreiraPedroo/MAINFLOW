import * as home from "../pages";

export const homeRoutePages = [
  {
    path: "/",
    element: home.Home,
    permission: "manager:manager",
  },
];
