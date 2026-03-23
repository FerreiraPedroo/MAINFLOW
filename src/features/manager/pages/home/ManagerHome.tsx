import React from "react";

import { managerMenuItems } from "@/features/manager/manager-sidebar.config";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { PageHome } from "@/shared/ui/pageHome/Index";

export function ManagerHome() {
  return (
    <PageMainContainer>
      <PageHome
        header={{ icon: "menuManager", headerTitle: "Gerenciamento" }}
        cards={{ icon: "default", menuItens: managerMenuItems }}
      />
    </PageMainContainer>
  );
}
