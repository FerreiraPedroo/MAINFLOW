import React, { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { Container } from "@/shared/components/Container";
import { useSnackBar } from "@/app/provider/SnackBarProvider";

import { Modal, type ModalType } from "@/shared/components/modal/Modal";
import { ProjectCreate } from "../components";

export function ProjectCreatePage() {
  const navigate = useNavigate();
  const snackBar = useSnackBar();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: "",
      code: "",
      period: "",
      budget: "",
      cost_center_id: "",
      status: "ATIVO",
      description: "",
    },
  });

  const [costCenter, setCostCenter] = useState([]);
  const [modalInfo, setModalInfo] = useState<ModalType>();

  const onSubmit: SubmitHandler<any> = async (data: FormData) => {
    await apiClient("/facilities/projects", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setModalInfo({
          title: "Sucesso",
          info: "Projeto cadastrado com sucesso.",
          description: "",
          type: "sucess",
          buttons: [
            {
              text: "Fechar",
              color: "green",
              onClick: () => {
                navigate(-1);
              },
            },
          ],
        });
      })
      .catch((value) => {
        snackBar.showSnackBar(
          "Erro ao cadastrar o projeto.",
          value.message,
          "FAIL",
        );
      });
  };

  useEffect(() => {
    apiClient("/manager/cost-centers", { method: "GET" })
      .then((value) => {
        setCostCenter(
          value.map((cc: any) => ({ value: cc.id, name: cc.title })),
        );
      })
      .catch((value) => {
        snackBar.showSnackBar(
          "Erro recarrege a página.",
          value.message,
          "fail",
        );
      });
  }, []);

  return (
    <Container className="2xl:w-4/5">
      <div className="w-full space-y-6 pb-20">
        <div className="flex gap-4">
          <Header
            title="Cadastrar projeto"
            subTitle="Cadastre um novo projeto."
            backButton={true}
          />
        </div>

        <ProjectCreate
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          costCenter={costCenter}
        />

        {modalInfo && <Modal {...modalInfo} />}
      </div>
    </Container>
  );
}
