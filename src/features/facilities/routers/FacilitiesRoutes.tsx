import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { facilitiesPagesConfig } from "../config/facilities-pages.config";
import { projectPagesConfig } from "../modules/projects";
import { maintenancePagesConfig } from "../modules/maintenance";

export function FacilitiesRouter() {
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
      {createRoute(facilitiesPagesConfig)}
      {createRoute(projectPagesConfig)}
      {createRoute(maintenancePagesConfig)}
    </Routes>
  );
}
