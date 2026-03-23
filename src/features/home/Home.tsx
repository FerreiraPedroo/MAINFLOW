import React from "react";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { HomeHeader } from "@/shared/ui/pageHome/Header";

export function HomePage() {
  return (
    <PageMainContainer>
      <HomeHeader icon={"home"} headerTitle={"Inicio"} />
    </PageMainContainer>
  );
}
