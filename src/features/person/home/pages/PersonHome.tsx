import React from "react";

import { personsMenuItems } from "@/features/person/persons-sidebar.config";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { PageHome } from "@/shared/ui/pageHome/Index";

export function PersonHome() {
  return (
    <PageMainContainer>
      <PageHome
        header={{ icon: "menuPessoas", headerTitle: "Pessoas" }}
        cards={{ icon: "default", menuItens: personsMenuItems }}
      />
    </PageMainContainer>
  );
}
