import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";

import { pagesConfig } from "@config/pages.config";

import { Layout } from "@pages/Layout";
import Home from "@pages/home/Home";
import PageNotFound from "@pages/PageNotFound";

const { Pages } = pagesConfig;

export const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/painel"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      {Object.entries(Pages).map(([path, Page]) => (
        <Route
          key={path}
          path={`/${path}`}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      ))}
      <Route path="/" element={<Navigate to={"/painel"} />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
