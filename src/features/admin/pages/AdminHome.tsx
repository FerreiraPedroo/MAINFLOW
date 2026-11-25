import React from "react";

import { Container } from "@/shared/components/Container";
import { Header } from "@/shared/components/header/Header";
import { Card } from "@/shared/components/cards/Card";
import { useMenuStore } from "@/app/store/store";

export function AdminHome() {
  console.log(location.pathname);

  const departments = useMenuStore((state) => state.departments);

  const cardItems = departments.find((dpto) => dpto.url == "/sdmin");

  return (
    <Container>
      <Header title="Back Office" backButton={false} center={true} />
      {/* <Card menuItens={cardItems} /> */}
    </Container>
  );
}
