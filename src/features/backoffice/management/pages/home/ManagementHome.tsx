import React from "react";

import { managementMenuItems } from "@/features/backoffice/management/config/management-sidebar.config";

import { Container } from "@/shared/components/Container";
import { PageHome } from "@/shared/ui/PageHome/Index";

export function ManagementHome() {
  return (
    <Container>
      <PageHome
        header={{ icon: "menuManagement", headerTitle: "Gerenciamento" }}
        cards={{ icon: "default", menuItens: managementMenuItems }}
      />
    </Container>
  );
}
