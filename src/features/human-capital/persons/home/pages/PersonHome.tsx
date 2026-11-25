import React from "react";

import { personsMenuItems } from "@/features/persons/persons-sidebar.config";

import { Container } from "@/shared/components/Container";
import { PageHome } from "@/shared/ui/page-home/Index";

export function PersonHome() {
  return (
    <Container>
      <PageHome
        header={{ icon: "menuPessoas", headerTitle: "Pessoas" }}
        cards={{ icon: "default", menuItens: personsMenuItems }}
      />
    </Container>
  );
}
