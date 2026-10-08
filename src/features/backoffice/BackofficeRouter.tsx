import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { paymentControlPagesConfig } from "./payment-control";
import { managementPagesConfig } from "./management";

export function BackofficeRouter() {
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
      {createRoute(paymentControlPagesConfig)}
      {createRoute(managementPagesConfig)}
    </Routes>
  );
}
