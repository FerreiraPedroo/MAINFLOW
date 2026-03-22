import { HomePage } from "@/features/safety/home/pages/HomePage";
import { Layout } from "@/shared/layouts/Layout";
import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

// import { Layout } from "@/shared/layouts/Layout";
// import { NotFoundPage } from "@/pages/errors/NotFoundPage";

const SafetyModule = lazy(() =>
  import("@/features/safety/SafetyRoutes").then((m) => ({
    default: m.SafetyRouter,
  })),
);

const PersonModule = lazy(() =>
  import("@/features/person/PersonRoutes").then((m) => ({
    default: m.PersonRouter,
  })),
);

export const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to={"/painel"} />} />
      <Route element={<Layout />}>
        <Route path="painel" element={<HomePage />} />
        <Route path="safety/*" element={<SafetyModule />} />
        <Route path="persons/*" element={<PersonModule />} />
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>,
  ),
);
