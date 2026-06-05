import React from "react";

import { Separator } from "@base-ui/react";
import { SidebarTrigger } from "../ui/sidebar";
import { NavUser } from "../AppSidebar/NavUser";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSuperiorbar() {
  return (
    <div className="sticky top-0 flex h-12 shrink-0 justify-between items-center gap-2 border-b bg-stone-100 px-2">
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="self-center data-[orientation=vertical]:h-60 mt-2"
      />
      <NavUser user={data.user} />
    </div>
  );
}
