import "./globals.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Approuter } from "./app/router/AppRouter";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouterProvider router={Approuter} />,
  // </StrictMode>,
);
