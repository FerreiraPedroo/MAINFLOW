import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";

export const safetyHomePages = [
  {
    path: "/",
    element: HomePage,
    permission: "safety:epi",
  },
  {
    path: "/dashboard",
    element: DashboardPage,
    permission: "safety:epi",
  },
];
