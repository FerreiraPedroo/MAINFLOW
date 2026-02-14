import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { BackButton } from "../components/button/BackButton";
import type { Epi } from "../interfaces/epi";
import { apiClient } from "@/shared/lib/apiClient";

import { PageMainContainer } from "../../../shared/components/PageMainContainer";
import { BackButton } from "../../../shared/components/button/BackButton";
import { Header } from "../../../shared/components/header/Header";
import { EpiBasicInfo } from "../components/epi/EpiBasicInfo";
import { EpiCertificateApproval } from "../components/epi/EpiCertificateApproval";
import { SubmitButtom } from "../../../shared/components/button/SubmitButtom";

const categoriesList = [
  { id: 1, name: "Cabeça" },
  { id: 2, name: "Olhos/Face" },
  { id: 3, name: "Auditivo" },
  { id: 4, name: "Respiratório" },
  { id: 5, name: "Mãos" },
  { id: 6, name: "Pés" },
  { id: 7, name: "Corpo" },
  { id: 8, name: "Quedas" },
  { id: 9, name: "Outros" },
];

export function NewEpiView() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [categories, setCategories] = useState(categoriesList);

  const [formData, setFormData] = useState<Epi>({
    code: "001",
    name: "Luva",
    description: "ok",
    imagem_url: "",
    category_id: 1,
    active: true,
    ca: "45000",
    expiration_date: "2026-01-20",
    manufacturer: "",
  });

  useEffect(() => {
    async function loadEPI() {
      setIsLoading(true);
      const { categories } = await apiClient("/safety-new-epi");
      setCategories(categories);
      setIsLoading(false);
    }
    // loadEPI();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSaving(true);

    const form = e.currentTarget;
    const dados = new FormData(form);

    const response = await apiClient("/safety-epi-new", { method: "POST", body: dados });

    // navigate("/epi");
  };

  return (
    <PageMainContainer>
      <div className="w-full space-y-6 pb-20">
        <div className="flex gap-4">
          <BackButton />
          <Header title="Cadastrar EPI" subTitle="Cadastre um novo equipamento de proteção" />
        </div>

        {isSaving && (
          <div className="absolute top-0 left-0 w-full h-full bg-slate-700/75 z-10">
            <div className="absolute top-1/2 left-1/2 w-15 h-15 border-2  border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {isLoading ? (
          <div className="flex items-center justify-center min-h-100">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <EpiBasicInfo formData={formData} setFormData={setFormData} categories={categories} loading={isLoading} />
            <EpiCertificateApproval formData={formData} setFormData={setFormData} />
            <SubmitButtom text="Cadastrar" />
          </form>
        )}
      </div>
    </PageMainContainer>
  );
}
