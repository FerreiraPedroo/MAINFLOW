import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import { LayoutPrivate } from "@/shared/layouts/LayoutPrivate";
import { LayoutPublic } from "@/shared/layouts/LayoutPublic";
import { RootLayout } from "@/shared/layouts/RootLayout";
import { Home } from "@/features/core/home";
// import { NotFoundPage } from "@/pages/errors/NotFoundPage";

const AuthModule = lazy(() =>
  import("@/features/core/auth").then((m) => ({
    default: m.AuthRouter,
  })),
);

const ManagerModule = lazy(() =>
  import("@/features/backoffice/manager").then((m) => ({
    default: m.ManagerRouter,
  })),
);

// const SafetyModule = lazy(() =>
//   import("@/features/safety-security/safety").then((m) => ({
//     default: m.SafetyRouter,
//   })),
// );

// const PersonsModule = lazy(() =>
//   import("@/features/persons/PersonsRoutes").then((m) => ({
//     default: m.PersonsRouter,
//   })),
// );

const FacilitiesFeatures = lazy(() =>
  import("@/features/asset-management/facilities").then((m) => ({
    default: m.FacilitiesRouter,
  })),
);

export const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route element={<LayoutPrivate />}>
        <Route path="home" element={<Home />} />
        {/* <Route path="safety/*" element={<SafetyModule />} /> */}
        {/* <Route path="persons/*" element={<PersonsModule />} /> */}
        <Route path="manager/*" element={<ManagerModule />} />
        <Route path="facilities/*" element={<FacilitiesFeatures />} />
      </Route>
      <Route element={<LayoutPublic />}>
        <Route path="login" element={<AuthModule />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" />} />
    </Route>,
  ),
);
