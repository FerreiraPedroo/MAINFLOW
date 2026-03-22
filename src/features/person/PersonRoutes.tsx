import React, { useCallback } from "react";

import { Routes, Route } from "react-router-dom";
import { personHomePages } from "./home/home-router";
import { personPersonPages } from "./person/person-routes";

export function PersonRouter() {
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
      {createRoute(personHomePages)}
      {createRoute(personPersonPages)}
    </Routes>
  );
}
