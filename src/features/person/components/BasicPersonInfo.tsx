import React from "react";
import { DateInput } from "@/shared/components/input/DateInput";
import { TextInput } from "@shared/components/input/TextInput";
import { ImagemUpload } from "@shared/components/input/Imagem";

export function BasicPersonInfo({
  loading = false,
  formData,
  setFormData,
}: {
  loading?: boolean;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        Informações Básicas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          text="Nome completo"
          name="name"
          value={formData.name}
          setFormValue={setFormData}
          cols={2}
        />

        <TextInput
          text="Registro"
          name="registration"
          value={formData.registration}
          setFormValue={setFormData}
          required={false}
          cols={1}
        />

        <DateInput
          text="Data de admissão"
          name="admission_date"
          value={formData.admission_date}
          setFormValue={setFormData}
          required={false}
          cols={1}
        />

        <ImagemUpload
          text="Foto"
          name="photo_url"
          value={formData.photo_url!}
          setFormValue={setFormData}
          required={false}
          cols={"full"}
        />
      </div>
    </div>
  );
}
