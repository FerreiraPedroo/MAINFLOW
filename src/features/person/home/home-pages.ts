import { DashboardPage } from "./pages/DashboardPage";
import { PersonHome } from "./pages/PersonHome";

export const personHomePages = [
  {
    path: "/",
    element: PersonHome,
    permission: "person:person",
  },
  {
    path: "/dashboard",
    element: DashboardPage,
    permission: "person:person",
  },
];
