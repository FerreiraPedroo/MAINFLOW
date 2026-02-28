import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { BackButton } from "../components/button/BackButton";

import { apiClient } from "@/shared/lib/apiClient";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { SubmitButtom } from "@shared/components/button/SubmitButtom";
import { BackButton } from "@shared/components/button/BackButton";
import { Header } from "@shared/components/header/Header";
import { TextInput } from "@/shared/components/input/TextInput";
import { ImagemUpload } from "@/shared/components/input/Imagem";
import { SearchButtonTextInput } from "@/shared/components/input/SearchButtonTextInput";
import { SelectInput } from "@/shared/components/input/SelectInput";

import type { Localization } from "../interfaces/localization";
import { Modal } from "@/shared/components/modal/Modal";

const categoriesList = [];

export function NewLocalizationView() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    block: "",
    floor: "",
    photo: "",
    type: "",
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

    const response = await apiClient("/manager-localizations", {
      method: "POST",
      body: dados,
    });

    // navigate("/epi");
  };

  return (
    <PageMainContainer>
      <div className="w-full space-y-6 pb-20">
        <div className="flex gap-4">
          <BackButton />
          <Header
            title="Cadastrar localização"
            subTitle="Identifique uma localização específica."
          />
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
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                Informações Básicas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <TextInput
                  text="Nome da localização"
                  name="name"
                  value={formData.name}
                  setFormValue={setFormData}
                  cols={4}
                />

                <SelectInput
                  text="Prédio"
                  name="building_id"
                  value={formData.building_id}
                  setFormValue={setFormData}
                  options={["A", "B", "C", "D", "E", "F", "G"]}
                  required={true}
                  cols={3}
                />

                <SelectInput
                  text="Bloco"
                  name="block_id"
                  value={formData.block}
                  setFormValue={setFormData}
                  options={["A", "B", "C", "D", "E", "F", "G"]}
                  required={true}
                  cols={1}
                />

                <SelectInput
                  text="Andar"
                  name="floor"
                  value={formData.floor}
                  setFormValue={setFormData}
                  options={[
                    "Subsolo",
                    "Térreo",
                    "1ª",
                    "2ª",
                    "3ª",
                    "4ª",
                    "5ª",
                    "6ª",
                  ]}
                  required={true}
                  cols={1}
                />

                <SelectInput
                  text="Tipo"
                  name="type"
                  value={formData.type}
                  setFormValue={setFormData}
                  options={[
                    "Corredor",
                    "Escada",
                    "Elevador",
                    "Pátio",
                    "Rampa",
                    "Sala",
                    "Banheiro",
                  ]}
                  required={true}
                  cols={1}
                />

                <ImagemUpload
                  text="Foto"
                  name="photo"
                  value={formData.photo}
                  setFormValue={setFormData}
                  required={false}
                  cols={"full"}
                />
              </div>
            </div>
            <SubmitButtom text="Cadastrar" />
          </form>
        )}
      </div>
    </PageMainContainer>
  );
}
