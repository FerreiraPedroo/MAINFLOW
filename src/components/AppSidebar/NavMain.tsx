"use client";
import React from "react";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { getImagem } from "@/shared/utils/getImagem";

export function MenuDepartmentItems({
  items,
}: {
  items: {
    id: number;
    title: string;
    department_id: number;
    order: number;
    url: string;
    icon?: string;
    isActive?: boolean;
    items?:
      | {
          id: number;
          menu_id: number;
          title: string;
          order: number;
          url: string;
          icon: string;
        }[]
      | null;
  }[];
}) {
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            {item.items ? (
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} className="pl-3 py-5">
                    {item.icon && (
                      <img src={getImagem(item.icon!)} className="size-7" />
                    )}
                    <span className="transition-[hidden] group-data-[collapsible=icon]:hidden">
                      {item.title}
                    </span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            {item.icon && (
                              <img
                                src={getImagem(item.icon!)}
                                className="size-6"
                              />
                            )}
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            ) : (
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={item.isActive}
                    className="pl-3 py-5"
                  >
                    {item.icon && (
                      <img src={getImagem(item.icon!)} className="size-7" />
                    )}
                    <a
                      href={item.url}
                      className="transition-[hidden] group-data-[collapsible=icon]:hidden"
                    >
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            )}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
