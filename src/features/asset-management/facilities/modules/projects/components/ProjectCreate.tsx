import React from "react";
import { Controller, type SubmitHandler } from "react-hook-form";
import { Input } from "@/shared/components/input/Input";
import { Textarea } from "@/shared/components/input/Textarea";
import { SelectInput } from "@/shared/components/input/SelectInput";
import { SubmitButtom } from "@shared/components/button/SubmitButtom";

import {
  BlockSection,
  BlockSectionTitle,
} from "@/shared/components/block-section/BlockSection";

type ProjectCreate = {
  onSubmit: SubmitHandler<any>;
  control: any;
  costCenter: any;
};

export function ProjectCreate({
  onSubmit,
  control,
  costCenter,
}: ProjectCreate) {
  return (
    <BlockSection>
      <BlockSectionTitle>Dados do projeto</BlockSectionTitle>
      <form onSubmit={onSubmit} className="w-full space-y-4">
        <div className="grid grid-cols-12 gap-y-3 gap-x-5 items-baseline-last ">
          <Controller
            control={control}
            name="code"
            render={({ field: { name, onChange, value } }) => (
              <Input
                name={name}
                text="Código"
                required={true}
                onChange={onChange}
                value={value}
                cols={4}
              />
            )}
          />
          <Controller
            control={control}
            name="title"
            render={({ field: { name, onChange, value } }) => (
              <Input
                name={name}
                text="Nome"
                required={true}
                onChange={onChange}
                value={value}
                cols={8}
              />
            )}
          />
          <Controller
            control={control}
            name="period"
            render={({ field: { name, onChange, value } }) => (
              <Input
                name={name}
                text="Periodo"
                required={true}
                onChange={onChange}
                value={value}
                cols={4}
              />
            )}
          />
          <Controller
            control={control}
            name="budget"
            render={({ field: { name, onChange, value } }) => (
              <Input
                type="number"
                name={name}
                text="Orçamento total"
                value={value}
                placeholder="1000.00"
                onChange={onChange}
                required={false}
                cols={5}
              />
            )}
          />
          <Controller
            control={control}
            name="cost_center_id"
            render={({ field: { name, onChange, value } }) => (
              <SelectInput
                name={name}
                value={value}
                text="Centro de custo"
                onChange={onChange}
                options={costCenter}
                required={true}
                cols={6}
              />
            )}
          />
          <Controller
            control={control}
            name="status"
            render={({ field: { name, onChange, value } }) => (
              <SelectInput
                name={name}
                value={value}
                text="Status"
                onChange={onChange}
                options={["ATIVO"]}
                defaultOption={false}
                required={true}
                cols={6}
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { name, onChange, value } }) => (
              <Textarea
                name={name}
                text="Descrição"
                required={false}
                onChange={onChange}
                value={value}
                cols={"full"}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-2">
          <SubmitButtom color={"green"} text="Salvar" />
        </div>
      </form>
    </BlockSection>
  );
}
