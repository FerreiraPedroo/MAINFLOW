import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { publicPagesConfig } from "../config";

export function PublicRouter() {
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

  return <Routes>{createRoute(publicPagesConfig)}</Routes>;
}
