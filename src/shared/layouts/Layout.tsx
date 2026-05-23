import React from "react";
import { SideBar } from "@/shared/ui/SideBar";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Layout() {
  return (
    <div className="flex h-full overflow-hidden">
      <SideBar />
      <main className="overflow-y-auto w-full">
      <NavBar>

        <Outlet />
      </main>
    </div>
  );
}
