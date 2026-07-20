import * as publicPages from "../pages";

export const publicPagesConfig = [
  {
    path: "/",
    element: publicPages.PublicHomePage,
    permission: "facilities",
  },
];
