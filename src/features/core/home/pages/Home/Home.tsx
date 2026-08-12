import React from "react";
import { Container } from "@/shared/components/Container";
import { Table } from "@/shared/components/table/Table";

export function Home() {
  return (
    <Container>
      <Table
        headers={[
          { size: 1, text: "ID", position: "center" },
          { size: 3, text: "NOME", position: "start" },
          { size: 3, text: "CENTRO DE CUSTO", position: "center" },
          { size: 2, text: "STATUS", position: "center" },
        ]}
        data={{
          url: "/operations/projects/",
          urlFieldParam: "id",
          rows: [
            {
              id: 1,
              code: "PEDRO",
              cost_center: "0100401301 - OBRAS",
              status: "ATIVO",
            },
            {
              id: 2,
              code: "PEDRO",
              cost_center: "0100401301 - OBRAS",
              status: "ATIVO",
            },
            {
              id: 3,
              code: "PEDRO",
              cost_center: "0100401301 - OBRAS",
              status: "ATIVO",
            },
          ],
        }}
      ></Table>
    </Container>
  );
}
