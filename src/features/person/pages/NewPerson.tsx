import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { SubmitButtom } from "@shared/components/button/SubmitButtom";
import { BackButton } from "@shared/components/button/BackButton";
import { Header } from "@shared/components/header/Header";

import { BasicPersonInfo } from "../components/BasicPersonInfo";
import { AllocationPerson } from "../components/AllocationPerson";
import { OccupationPerson } from "../components/OccupationPerson";

const department = [
  {
    id: 1,
    name: "Facilities",
    status: "Ativo",
    description: "",
    sectors: [
      {
        id: 1,
        name: "Manutenção e Serviços",
        status: "Ativo",
        description: "",
      },
      {
        id: 2,
        name: "Obras",
        status: "Ativo",
        description: "",
      },
    ],
  },
  {
    id: 2,
    name: "Financeiro",
    status: "Ativo",
    description: "",
    sectors: [
      {
        id: 1,
        name: "Suprimentos",
        status: "Ativo",
        description: "",
      },
      {
        id: 2,
        name: "Controladoria",
        status: "Ativo",
        description: "",
      },
      {
        id: 3,
        name: "Contabilidade",
        status: "Ativo",
        description: "",
      },
    ],
  },
  {
    id: 3,
    name: "TI",
    status: "Ativo",
    description: "",
    sectors: [
      {
        id: 1,
        name: "Tecnologia Educacional",
        status: "Ativo",
        description: "",
      },
      {
        id: 2,
        name: "Infraestrutura",
        status: "Ativo",
        description: "",
      },
    ],
  },
];
const jobs = [
  { id: 1, name: "Auxiliar Administrativo", cbo: "45200" },
  { id: 2, name: "Assistente Administrativo", cbo: "45200" },
  { id: 3, name: "Analista Administrativo", cbo: "45200" },
  { id: 4, name: "Especialista Administrativo", cbo: "45200" },
];

export interface NewPerson {
  id?: number;
  registration: string | null;
  name: string | null;
  photo_url: string | null;
  status: string;
  admission_date: string | null;
  department_id: number | null;
  sector_id: number | null;
  start_time_in_alocation: string | null;
  job_id: number | null;
}

export function NewPersonView() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<NewPerson>({
    name: "001",
    photo_url: null,
    registration: "MATRICULA-105001",
    status: "Ativo",
    admission_date: "2026-02-01",
    department_id: null,
    sector_id: null,
    start_time_in_alocation: "2026-02-20",
    job_id: null,
  });

  useEffect(() => {
    // async function loadEPI() {
    //   setIsLoading(true);
    //   const { categories } = await apiClient("/safety-new-epi");
    //   setCategories(categories);
    //   setIsLoading(false);
    // }
    // loadEPI();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSaving(true);

    const form = e.currentTarget;
    const dados = new FormData(form);

    const response = await apiClient("/safety-epi-new", {
      method: "POST",
      body: dados,
    });

    // navigate("/epi");
  };

  const sectors = useMemo(() => {
    return (
      department.find((d) => d.id == formData?.department_id)?.sectors ?? []
    );
  }, [formData.department_id]);

  const cbo = useMemo(() => {
    setFormData((prev: any) => ({
      ...prev,
      cbo: jobs.find((j) => j.id == formData.job_id)?.cbo ?? "",
    }));
  }, [formData.job_id]);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6 pb-20">
        <div className="flex gap-4">
          <BackButton />
          <Header
            title="Cadastrar pessoa"
            subTitle="Cadastre uma nova pessoa."
          />
        </div>

        {isSaving && (
          <div className="absolute top-0 left-0 w-full h-full bg-slate-700/75 z-10">
            <div className="absolute top-1/2 left-1/2 w-15 -15 border-2  border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {isLoading ? (
          <div className="flex items-center justify-center min-h-100">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <BasicPersonInfo
              formData={formData}
              setFormData={setFormData}
              loading={isLoading}
            />
            <AllocationPerson
              formData={formData}
              setFormData={setFormData}
              department={department}
              sector={sectors}
              loading={isLoading}
            />
            <OccupationPerson
              formData={formData}
              setFormData={setFormData}
              jobs={jobs}
              loading={isLoading}
            />
            <SubmitButtom text="Cadastrar" />
          </form>
        )}
      </div>
    </PageMainContainer>
  );
}
