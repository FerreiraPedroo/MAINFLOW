import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "@/shared/components/Container";
import { Header } from "@shared/components/header/Header";

import { useForm, type SubmitHandler } from "react-hook-form";
import { SearchInputWithModal } from "@/shared/components/input/SearchInputWithModal";
import { SelectInput } from "@/shared/components/input/SelectInput";
import { DateInput } from "@/shared/components/input/DateInput";

type FormData = {
  equipment_id: string;
  scheduled_date: string;
  maintenance_type: string;
};

export function MaintenanceCreatePage() {
  const navigate = useNavigate();
  const [equipament, setEquipament] = useState({});

  const { handleSubmit, setValue, getValues, getFieldState } =
    useForm<FormData>({
      defaultValues: {
        equipment_id: "",
        scheduled_date: "",
        maintenance_type: "",
      },
    });

  console.log(getValues(["scheduled_date"]));
  console.log({ red: getValues("maintenance_type") });

  const onSubmit: SubmitHandler<any> = (data) => null; //console.log(data);

  return (
    <Container>
      <div className="w-full space-y-6 pb-20">
        <div className="flex gap-4">
          <Header
            title="Cadastrar manutenção"
            subTitle="Cadastre uma nova manutenção."
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4">
          <div className="grid grid-cols-4 col-span-4 bg-white rounded-md border border-slate-200 p-6">
            <h2 className="col-span-full text-xl font-semibold text-slate-800 mb-4">
              Informações do equipamento
            </h2>
            <div className="grid grid-cols-4 col-span-4 space-y-4 space-x-6">
              <SearchInputWithModal
                name="equipment_id"
                text={"Equipamento"}
                options={{
                  compareField: "name",
                  itemField: "name",
                  itemSubField: "localization",
                  itemJoinName: true,
                }}
                cols="3"
                setValue={setValue}
              />

              <div className="col-span-1"></div>

              <SelectInput
                text={"Tipo de manutenção"}
                name={"maintenance_type"}
                value={getFieldState("maintenance_type")}
                cols="1"
                options={["Emergencial", "Preventiva", "Preditiva"]}
                setFormValue={(value) => setValue("maintenance_type", value)}
              />

              <DateInput
                text={"Data da manutenção"}
                name={"scheduled_date"}
                cols="1"
                value={"2025-01-01"}
                setFormValue={(value) => setValue("scheduled_date", value)}
              />
            </div>
          </div>
          {/* <SubmitButtom text="Cadastrar" /> */}
        </form>
      </div>
    </Container>
  );
}
