import * as riskManagement from "./index";

export const riskManagementPages = [
  {
    path: "/risk-management",
    element: riskManagement.RiskHomePage,
    permission: "safety:risk-management",
  },
  {
    path: "/risk-management/list",
    element: riskManagement.RiskListPage,
    permission: "safety:risk-management",
  },
];
