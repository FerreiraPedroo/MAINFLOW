import React from "react";

import { safetyMenuItems } from "@/features/safety/safety-sidebar.config";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { PageHome } from "@/shared/ui/pageHome/Index";

export function SafetyHomePage() {
  return (
    <PageMainContainer>
      <PageHome
        header={{ icon: "menuSafety", headerTitle: "Segurança do Trabalho" }}
        cards={{ icon: "default", menuItens: safetyMenuItems }}
      />
    </PageMainContainer>
  );
}
