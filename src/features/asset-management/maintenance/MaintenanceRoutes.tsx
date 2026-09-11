import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { maintenancePagesConfig } from ".";

export function MaintenanceRouter() {
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

  return <Routes>{createRoute(maintenancePagesConfig)}</Routes>;
}
