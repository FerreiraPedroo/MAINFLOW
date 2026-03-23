import React from "react";
import { PageMainContainer } from "@shared/components/PageMainContainer";
import { HomeHeader } from "./Header";
import { HomeCards } from "./Cards";

interface Header {
  header: {
    icon: string;
    headerTitle: string;
  };
  cards: {
    icon: "default";
    menuItens: { name: string; url: string; subMenu?: { name: string }[] }[];
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
    <PageMainContainer>
      <div className="max-w-4xl w-full">
        <HomeHeader icon={header.icon} headerTitle={header.headerTitle} />
        <HomeCards icon="default" menuItens={cards.menuItens} />
      </div>
    </PageMainContainer>
  );
}
