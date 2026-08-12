import React from "react";

import { managerMenuItems } from "@/features/backoffice/manager/config/manager-sidebar.config";

import { Container } from "@/shared/components/Container";
import { PageHome } from "@/shared/ui/PageHome/Index";

export function ManagerHome() {
  return (
    <Container>
      <PageHome
        header={{ icon: "menuManager", headerTitle: "Gerenciamento" }}
        cards={{ icon: "default", menuItens: managerMenuItems }}
      />
    </Container>
  );
}
