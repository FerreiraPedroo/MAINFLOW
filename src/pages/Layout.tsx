import { SideBar } from "@/components/sidebar/SideBar";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full overflow-hidden">
      <SideBar />
      <main className="p-4 overflow-y-auto w-full">{children}</main>
    </div>
  );
}
