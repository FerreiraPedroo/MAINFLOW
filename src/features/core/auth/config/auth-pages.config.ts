import * as authPages from "../pages";

export const authPagesConfig = [
  {
    path: "/",
    element: authPages.AuthPage,
    permission: "auth",
  },
];
