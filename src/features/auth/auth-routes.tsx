import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { loginRoutes } from "./login/index";

export function AuthRouter() {
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

  return <Routes>{createRoute(loginRoutes)}</Routes>;
}
