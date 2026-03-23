import { DashboardPage } from "./pages/DashboardPage";
import { SafetyHomePage } from "./pages/SafetyHomePage";

export const safetyHomePages = [
  {
    path: "/",
    element: SafetyHomePage,
    permission: "safety:manager",
  },
  {
    path: "/dashboard",
    element: DashboardPage,
    permission: "safety:manager",
  },
];
