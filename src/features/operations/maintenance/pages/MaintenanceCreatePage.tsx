import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { SubmitButtom } from "@shared/components/button/SubmitButtom";
import { Header } from "@shared/components/header/Header";

import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "@/shared/components/input/TextInput";
import { SearchInputWithModal } from "@/shared/components/input/SearchInputWithModal";

type FormData = {
  firstName: string;
};

export function MaintenanceCreatePage() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6 pb-20">
        <div className="flex gap-4">
          <Header
            title="Cadastrar manutenção"
            subTitle="Cadastre uma nova manutenção."
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput text="" name="firstName" register={register} />
          <SearchInputWithModal
            name={""}
            value={""}
            setSearchTerm={function (value: any): void {
              throw new Error("Function not implemented.");
            }}
          />

          <SubmitButtom text="Cadastrar" />
        </form>
      </div>
    </PageMainContainer>
  );
}
