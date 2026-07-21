import * as publicPages from "../pages";

export const publicPagesConfig = [
  {
    path: "/",
    element: publicPages.HomePage,
    permission: "public",
  },
  {
    path: "/login",
    element: publicPages.LoginPage,
    permission: "public:login",
  },
];
