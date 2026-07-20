import React from "react";

import { facilitiesSideBarConfig } from "@features/facilities/config";

import { Container } from "@/shared/components/Container";
import { PageHome } from "@/shared/ui/PageHome/Index";

export function FacilitiesHome() {
  return (
    <Container>
      <PageHome
        header={{ icon: "menuFacilities", headerTitle: "Operações" }}
        cards={{ icon: "default", menuItens: facilitiesSideBarConfig }}
      />
    </Container>
  );
}
