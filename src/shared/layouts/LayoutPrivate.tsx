import React from "react";
import { Outlet } from "react-router-dom";

import { AppSuperiorbar } from "@shared/ui/AppSuperiorbar/AppSuperiorbar";
import { AppSideBar } from "@shared/ui/AppSidebar/AppSidebar";

export function LayoutPrivate() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AppSuperiorbar />
      <div className="flex h-full overflow-hidden">
        <AppSideBar />
        <div className="flex h-full w-full overflow-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
