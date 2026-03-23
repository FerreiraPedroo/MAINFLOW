import React, { useCallback } from "react";

import { Routes, Route } from "react-router-dom";
import { safetyEpiPages } from "./epi/epi-routes";
import { riskManagementPages } from "./risk-management/risk-management-routes";
import { safetyHomePages } from "./home/home-router";

export function SafetyRouter() {
  const createRoute = useCallback((pageList: any) => {
    return pageList.map(
      ({
        path,
        element: Component,
        permission,
      }: {
        path: string;
        element: React.ComponentType;
        permission: string;
      }) => <Route key={path} path={path} element={<Component />} />,
    );
  }, []);

  return (
    <Routes>
      {createRoute(safetyHomePages)}
      {createRoute(safetyEpiPages)}
      {createRoute(riskManagementPages)}
    </Routes>
  );
}
