import React from "react";

import { Container } from "@shared/components/Container";
import { HomeHeader } from "@/shared/ui/PageHome/Header";

export function LoginPage() {
  return (
    <Container>
      <HomeHeader icon={"home"} headerTitle={"Login"} />
    </Container>
  );
}
