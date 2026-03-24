import React, { useCallback } from "react";

import { Routes, Route } from "react-router-dom";
import { personHomePages } from "./home/home-pages";
import { personPersonPages } from "./persons/person-pages";
import { personJobsPages } from "./jobs/jobs-pages";

export function PersonsRouter() {
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
      {createRoute(personJobsPages)}
    </Routes>
  );
}
