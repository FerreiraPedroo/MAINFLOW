import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@/context/AuthProvider";
import { Approuter } from "./AppRouter";

import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <RouterProvider router={Approuter} />
  </AuthProvider>
  // </StrictMode>
);
