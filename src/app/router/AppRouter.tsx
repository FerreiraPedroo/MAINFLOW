import { Layout } from "@/shared/layouts/Layout";
import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// import { Layout } from "@/shared/layouts/Layout";
// import { NotFoundPage } from "@/pages/errors/NotFoundPage";

const SafetyModule = lazy(() =>
  import("@/features/safety/SafetyRoutes").then((m) => ({
    default: m.SafetyRouter,
  })),
);

export const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to={"/painel"} />} />
      <Route element={<Layout />}>
        <Route path="safety/*" element={<SafetyModule />} />
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>,
  ),
);
