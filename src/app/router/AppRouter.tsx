import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import { pagesConfig } from "@config/pages.config.ts";

const { Pages, Layout, NotFoundPage } = pagesConfig;

export const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to={"/painel"} />} />

      <Route element={<Layout />}>
        {Object.entries(Pages).map(([path, Page]) => {
          return <Route key={path} path={`/${path}`} element={<Page />} />;
        })}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
