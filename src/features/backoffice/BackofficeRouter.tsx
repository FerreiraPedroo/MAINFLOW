import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { costCenterPagesConfig } from "./center-cost/config";
import { paymentGroupPagesConfig } from "./payment-group/config";
import { paymentSubmissionPagesConfig } from "./payment-submission";
import { backofficePagesConfig } from "./config/backoffice-pages.config";

export function BackofficeRouter() {
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

  return (
    <Routes>
      {createRoute(backofficePagesConfig)}
      {createRoute(paymentSubmissionPagesConfig)}
      {createRoute(costCenterPagesConfig)}
      {createRoute(paymentGroupPagesConfig)}
    </Routes>
  );
}
