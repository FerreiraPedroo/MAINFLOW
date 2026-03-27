import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { SubmitButtom } from "@shared/components/button/SubmitButtom";
import { Header } from "@shared/components/header/Header";

import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { TextInput } from "@/shared/components/input/TextInput";

export function ProjectCreatePage() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler = (data) => console.log(data);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6 pb-20">
        <div className="flex gap-4">
          <Header
            title="Cadastrar projeto"
            subTitle="Cadastre uma novo projeto."
          />
        </div>

        {/* {isSaving && (
          <div className="absolute top-0 left-0 w-full h-full bg-slate-700/75 z-10">
            <div className="absolute top-1/2 left-1/2 w-15 -15 border-2  border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {isLoading ? (
          <div className="flex items-center justify-center min-h-100">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : ( */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput name="firstName" register={register} />

          <SubmitButtom text="Cadastrar" />
        </form>
        {/* )} */}
      </div>
    </PageMainContainer>
  );
}
