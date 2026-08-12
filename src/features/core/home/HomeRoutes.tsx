import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { homeRoutePages } from "./config";

export function HomeRouter() {
  const createRoute = useCallback((pageList: any) => {
    return pageList.map(
      ({
        path,
        element: Component,
      }: {
        path: string;
        element: React.ComponentType;
        // permission: string;
      }) => <Route key={path} path={path} element={<Component />} />,
    );
  }, []);

  return <Routes>{createRoute(homeRoutePages)}</Routes>;
}
