import React from "react";

import { safetyMenuItems } from "@/features/safety/safety-sidebar.config";

import { Container } from "@/shared/components/Container";
import { PageHome } from "@/shared/ui/PageHome/Index";

export function SafetyHomePage() {
  return (
    <Container>
      <PageHome
        header={{ icon: "menuSafety", headerTitle: "Segurança do Trabalho" }}
        cards={{ icon: "default", menuItens: safetyMenuItems }}
      />
    </Container>
  );
}
