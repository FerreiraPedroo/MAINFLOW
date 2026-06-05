"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { getImagem } from "@/shared/utils/getImagem";

type Department = {
  title: string;
  icon: string;
  url: string;
};

export function MenuDepartmentSelector({
  departments,
  selectedDepartment,
  setSelectedDepartment,
}: {
  departments: Department[];
  selectedDepartment: Department;
  setSelectedDepartment: React.ActionDispatch<any>;
}) {
  const { isMobile } = useSidebar();

  if (!selectedDepartment) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-14 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                {selectedDepartment.icon && (
                  <img
                    src={getImagem(selectedDepartment.icon!)}
                    className="size-10"
                  />
                )}
              </div>
              <div className="grid flex-1 text-left text-base leading-tight">
                <span className="truncate font-medium">
                  {selectedDepartment.title}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className=" min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Departamentos
            </DropdownMenuLabel>
            {departments.map((department, index) => (
              <DropdownMenuItem
                key={department.title}
                onClick={() => setSelectedDepartment(department)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  {/* <department.icon className="size-3.5 shrink-0" /> */}
                </div>
                {department.title}
              </DropdownMenuItem>
            ))}
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add departamento</div>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
