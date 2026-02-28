import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { Approuter } from "./app/router/AppRouter";
import { RouterProvider } from "react-router-dom";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <RouterProvider router={Approuter} />
  </AuthProvider>,
  // </StrictMode>
);
