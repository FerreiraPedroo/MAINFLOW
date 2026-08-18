import React, { useState, useEffect } from "react";

import { apiClient } from "@/shared/lib/apiClient";

import { Table } from "@/shared/components/table/Table";
import { Header } from "@shared/components/header/Header";
import { Container } from "@/shared/components/Container";
import { LinkButton } from "@/shared/components/button/LinkButton";

import { SkeletonInput } from "@/shared/components/skeleton/Skeleton";

export function ProjectListPage() {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null as string | null,
  });

  useEffect(() => {
    const loadList = async () => {
      setState({ ...state, loading: true, error: null });
      const data = await apiClient("/facilities/projects", { method: "GET" });
      setState({ ...state, data, loading: false });
    };
    loadList();
  }, []);

  return (
    <Container>
      <div className="w-full space-y-4">
        <div className="flex items-center gap-4 sm:flex-row flex-col ">
          <Header
            title="Projetos"
            subTitle="Cadastre os predios para identificar o endereço de uma localização."
          />
          <LinkButton to="/facilities/projects/create" text="Novo projeto" />
        </div>

        {state.loading ? (
          <>
            <SkeletonInput />
            <SkeletonInput />
            <SkeletonInput />
          </>
        ) : state.data.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre um novo projeto para começar
            </p>
          </div>
        ) : (
          <Table
            headers={[
              { text: "id", size: 0, position: "center" },
              { text: "code", size: 2, position: "start" },
              { text: "title", size: 5, position: "start" },
              { text: "period", size: 1, position: "center" },
              { text: "status", size: 1, position: "center" },
            ]}
            data={{
              url: "/facilities/projects/",
              urlFieldParam: "id",
              rows: [...state.data],
            }}
          />
        )}
      </div>
    </Container>
  );
}
