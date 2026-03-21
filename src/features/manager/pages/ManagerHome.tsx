import React from "react";

import { managerMenuItems } from "@/config/sidebar/manager";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { PageHome } from "@/shared/ui/pageHome/Index";

export function ManagerHomeView() {
  return (
    <PageMainContainer>
      <PageHome
        header={{ icon: "menuManager", headerTitle: "Gerenciamento" }}
        cards={{ icon: "default", menuItens: managerMenuItems }}
      />
    </PageMainContainer>
  );
}
