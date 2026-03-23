import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "@/shared/layouts/Layout";
import { HomePage } from "@/features/home/Home";
// import { NotFoundPage } from "@/pages/errors/NotFoundPage";

const ManagerModule = lazy(() =>
  import("@/features/manager/ManagerRoutes.tsx").then((m) => ({
    default: m.ManagerRouter,
  })),
);

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
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="safety/*" element={<SafetyModule />} />
        <Route path="persons/*" element={<PersonModule />} />
        <Route path="manager/*" element={<ManagerModule />} />
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>,
  ),
);
