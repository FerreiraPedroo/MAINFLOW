"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { MenuDepartmentItems } from "@/components/AppSidebar/NavMain";
import { NavProjects } from "@/components/AppSidebar/NavProjects";
import { MenuDepartmentSelector } from "@/components/AppSidebar/MenuDepartmentSelector";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { sideBarConfig } from "@/components/AppSidebar/config/sidebar.config";
import type { MenuItemsType } from "@/components/AppSidebar/types/sidebar.types";
import { getImagem } from "@/shared/utils/getImagem";

// This is sample data.
const data = {
  departments: sideBarConfig.departaments,
  menuDepartmentItems: sideBarConfig.menuItems,
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  departamentos: [
    {
      titulo: "Acme Inc",
      icon: GalleryVerticalEnd,
      url: "Enterprise",
    },
    {
      titulo: "Acme Inc",
      icon: GalleryVerticalEnd,
      url: "Enterprise",
    },
  ],
  menuItems: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: null,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: null,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedDepartment, setSelectedDepartment] = React.useState(
    data.departments[0],
  );
  const [menuItems, setMenuItens] = React.useState<MenuItemsType[]>([]);

  React.useEffect(() => {
    setMenuItens(
      data.menuDepartmentItems.filter(
        (item) => item.department_id == selectedDepartment.id,
      ),
    );
  }, [selectedDepartment]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <header className="flex h-12 items-center gap-3 border-b bg-stone-100 pl-5">
        <img src={getImagem("default")} className=" size-8" />
      </header>
      <SidebarHeader>
        <MenuDepartmentSelector
          departments={data.departments}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
        />
      </SidebarHeader>
      <SidebarContent>
        <MenuDepartmentItems items={menuItems} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
