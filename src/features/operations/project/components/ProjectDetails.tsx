import React from "react";

import {
  BlockSection,
  BlockSectionTitle,
} from "@/shared/components/block-section/BlockSection";
import type { ProjectDetailsType } from "../types";

import { TextField } from "@/shared/components";
import { SquarePen } from "lucide-react";

type ProjectDetails = {
  project: ProjectDetailsType;
  onEdit: () => void;
};

export function ProjectDetails({ project, onEdit }: ProjectDetails) {
  return (
    <BlockSection>
      <BlockSectionTitle>
        Dados do projeto
        <SquarePen
          className="hover:cursor-pointer h-full stroke-blue-500 hover:stroke-blue-200"
          size="24"
          onClick={onEdit}
        />
      </BlockSectionTitle>
      <div className="grid grid-cols-12 gap-y-3 gap-x-5 items-baseline ">
        <TextField label="Código" text={project.code} cols={4} />
        <TextField label="Titulo" text={project.title} cols={7} />
        <TextField label="Periodo" text={project.period} cols={4} />
        <TextField label="Orçamento total" text={project.budget} cols={7} />
        <TextField
          label="Centro de custo"
          text={project.cost_center.title}
          cols={4}
        />
        <TextField label="Status" text={project.status} cols={7} />
        <TextField label="Descrição" text={project.description} cols={"full"} />
      </div>
    </BlockSection>
  );
}
