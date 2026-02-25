import React from "react";
import { DateInput } from "@/shared/components/input/DateInput";
import { SelectInput } from "@/shared/components/input/SelectInput";

export function AllocationPerson({
  department,
  sector,
  loading = false,
  formData,
  setFormData,
}: {
  department: any[];
  sector: any[];
  loading?: boolean;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Alocação</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectInput
          text="Departamento"
          name="department_id"
          value={formData.department_id}
          setFormValue={setFormData}
          required={true}
          cols={1}
          options={department}
        />

        <SelectInput
          text="Setor"
          name="sector_id"
          value={formData.sector_id}
          setFormValue={setFormData}
          required={false}
          cols={1}
          options={sector}
        />

        <DateInput
          text="Data de alocação"
          name="start_time_in_alocation"
          value={formData.start_time_in_alocation}
          setFormValue={setFormData}
          required={false}
          cols={1}
        />
      </div>
    </div>
  );
}
