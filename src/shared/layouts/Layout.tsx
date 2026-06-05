import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import { AppSuperiorbar } from "@/components/AppSuperiorbar/AppSuperiorbar";

export function Layout() {
  return (
    <div className="flex h-full overflow-hidden">
      <SidebarProvider>
        <TooltipProvider>
          <AppSidebar />
          <SidebarInset>
            <AppSuperiorbar />
            <div className="flex flex-1 flex-col">
              <Outlet />
            </div>
          </SidebarInset>
        </TooltipProvider>
      </SidebarProvider>
    </div>
  );
}
