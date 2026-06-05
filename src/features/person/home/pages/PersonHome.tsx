import React from "react";

import { personsMenuItems } from "@/features/person/persons-sidebar.config";

import { Container } from "@/shared/components/Container";
import { PageHome } from "@/shared/ui/PageHome/Index";

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
