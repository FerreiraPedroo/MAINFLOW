import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";

export const personHomePages = [
  {
    path: "/",
    element: HomePage,
    permission: "person:person",
  },
  {
    path: "/dashboard",
    element: DashboardPage,
    permission: "person:person",
  },
];
