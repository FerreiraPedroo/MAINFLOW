import React from "react";
import { DateInput } from "@/shared/components/input/DateInput";
import { SelectInput } from "@/shared/components/input/SelectInput";
import { TextInput } from "@/shared/components/input/TextInput";

export function OccupationPerson({
  jobs,
  loading = false,
  formData,
  setFormData,
}: {
  jobs: any[];
  loading?: boolean;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Ocupação</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectInput
          text="Função"
          name="job_id"
          value={formData.job_id}
          setFormValue={setFormData}
          required={true}
          cols={1}
          options={jobs}
        />

        <TextInput
          text="CBO"
          name="cbo"
          value={formData.cbo}
          setFormValue={setFormData}
          required={false}
          readOnly={true}
          cols={1}
        />

        <DateInput
          text="Data de inicio na posição"
          name="start_time_in_position"
          value={formData.start_time_in_position}
          setFormValue={setFormData}
          required={false}
          cols={1}
        />
      </div>
    </div>
  );
}
