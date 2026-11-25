import * as pages from "./index";

export const loginRoutes = [
  {
    path: "login",
    element: pages.LoginPage,
    permission: "auth",
  },
];
