import React from "react";

import { Container } from "@/shared/components/Container";
import { Header } from "@/shared/components/header/Header";
import { Card } from "@/shared/components/cards/Card";
import { useMenuStore } from "@/app/store/store";
import { BlockSection } from "@/shared/components/block-section/BlockSection";

export function BackOfficeHome() {
  const departments = useMenuStore((state) => state.departments);

  const dptoActivities = departments.find((dpto) => dpto.url == "/backoffice");
  console.log(dptoActivities);

  return (
    <Container className="flex-col justify-start space-y-4">
      <Header title="Back Office" backButton={false} center={true} />
      <BlockSection className=" h-full items-start">
        <div className="grid grid-cols-4 gap-4 ">
          {dptoActivities?.activities.map((activity) => {
            console.log(activity);
            return (
              <Card
                key={activity.id}
                menuItens={{
                  title: activity.title,
                  url: activity?.url,
                  icon: activity.icon,
                }}
              />
            );
          })}
        </div>
      </BlockSection>
    </Container>
  );
}
