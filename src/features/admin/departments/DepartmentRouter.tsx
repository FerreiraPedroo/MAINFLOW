import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { DepartmentPagesConfig } from "./config/department.config";

export function DepartmentRouter() {
  const createRoute = useCallback((pageList: any) => {
    return pageList.map(
      ({
        path,
        element: Component,
      }: {
        path: string;
        element: React.ComponentType;
      }) => <Route key={path} path={path} element={<Component />} />,
    );
  }, []);

  return <Routes>{createRoute(DepartmentPagesConfig)}</Routes>;
}
