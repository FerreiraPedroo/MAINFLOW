import { SideBar } from "@/shared/ui/SideBar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex h-full overflow-hidden">
      <SideBar />
      <main className="overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
