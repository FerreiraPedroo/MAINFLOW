import React from "react";
import { Container } from "@/shared/components/Container";
import { Header } from "./Header";
import { HomeCards } from "./Cards";

interface Header {
  header: {
    icon: string;
    headerTitle: string;
  };
  cards: {
    icon: "default";
    menuItens: { title: string; url: string; subMenu?: { title: string }[] }[];
  };
}

/**
 *  Paramentros para a página home
 *  ```javascript
 *  header={{ icon: "menuManager", headerTitle: "Gerenciamento" }}.
 *  cards={{icon: "default", menuItens: }}.
 *  ```
 */
export function PageHome({ header, cards }: Header) {
  return (
    <div className="max-w-4xl w-full">
      <Header icon={header.icon} headerTitle={header.headerTitle} />
      <HomeCards icon="default" menuItens={cards.menuItens} />
    </div>
  );
}
