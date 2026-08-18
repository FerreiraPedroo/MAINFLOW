import React, { useCallback, useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { Container } from "@/shared/components/Container";
import { useSnackBar } from "@/app/provider/SnackBarProvider";

import { Modal, type ModalType } from "@/shared/components/modal/Modal";
import { ProjectDetails, ProjectEdit } from "../components";
import type { ProjectDetailsType } from "../types";

export function ProjectDetailsPage() {
  const { projectId } = useParams();

  const snackBar = useSnackBar();
  const [modalInfo, setModalInfo] = useState<ModalType | null>(null);

  const [status, setStatus] = useState("loading");

  const [costCenter, setCostCenter] = useState([]);

  const [project, setProject] = useState<ProjectDetailsType>();
  const { handleSubmit, control, reset, getValues } =
    useForm<ProjectDetailsType>({
      defaultValues: {},
    });

  const onCancelEdit = () => {
    setStatus("");
  };

  const onSubmit: SubmitHandler<any> = async (data: FormData) => {
    await apiClient(`/facilities/projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then(() => {
        setModalInfo({
          title: "Sucesso",
          info: "Projeto atualizado com sucesso.",
          description: "",
          type: "sucess",
          buttons: [
            {
              text: "Fechar",
              color: "blue",
              onClick: () => {
                setProject({ ...getValues() });
                setStatus("");
                setModalInfo(null);
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

  const handleEdit = useCallback(() => {
    setStatus("loading");

    function getCostCenter() {
      apiClient(`/manager/cost-centers`, { method: "GET" })
        .then((value) => {
          setCostCenter(
            value.map((cc: any) => ({ name: cc.title, value: cc.id })),
          );
          setStatus("edit");
        })
        .catch((value) => {
          setStatus("");
          snackBar.showSnackBar(
            "Erro recarrege a página.",
            value.message,
            "FAIL",
          );
        });
    }

    getCostCenter();
  }, []);

  useEffect(() => {
    apiClient(`/facilities/projects/${projectId}`, { method: "GET" })
      .then((value) => {
        reset(value);
        setProject(value);
        setStatus("");
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
          {project && (
            <Header
              title={project.title}
              subTitle="Projeto"
              backButton={true}
            />
          )}
        </div>

        {status == "edit" && (
          <ProjectEdit
            onSubmit={handleSubmit(onSubmit)}
            onCancelEdit={onCancelEdit}
            control={control}
            costCenter={costCenter}
          />
        )}

        {status !== "edit" && project && (
          <ProjectDetails project={project} onEdit={handleEdit} />
        )}

        {modalInfo && <Modal {...modalInfo} />}
      </div>
    </Container>
  );
}
