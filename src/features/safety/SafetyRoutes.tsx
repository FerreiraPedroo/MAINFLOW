import React, { useCallback, type JSX } from "react";

import { Routes, Route } from "react-router-dom";
import { safetyEpiPages } from "./epi/EpiRouter";
import { riskManagementPages } from "./risk-management/RiskRouter";

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
      {createRoute(safetyEpiPages)}
      {createRoute(riskManagementPages)}
    </Routes>
  );
}
