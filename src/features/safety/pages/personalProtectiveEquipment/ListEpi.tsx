import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import type { Epi } from "../../interfaces/epi";
import { apiClient } from "@/shared/lib/apiClient";

import { PageMainContainer } from "@shared/components/PageMainContainer";
import { Header } from "@shared/components/header/Header";
import { LinkButton } from "@shared/components/button/LinkButton";
import { SearchInput } from "@shared/components/input/SearchInput";
import { SelectInput } from "@shared/components/input/SelectInput";

import { categoriesList } from "../../utils/categoriesList";

const categories = categoriesList.reduce((acc: any, cur) => {
  acc[cur.id] = {
    id: cur.id,
    icon: cur.icon,
    name: cur.name,
    color: cur.color,
  };
  return acc;
}, {});

const getCategory = (category_id: number | null) => {
  if (!category_id) return categories[9];
  return categories[category_id] || categories[9];
};

const epiList = [
  {
    id: 1,
    code: "EPI-00001",
    name: "Luva de borracha amarela",
    description: "luva para utilização em limpeza com produtos quimicos.",
    imagem_url: null,
    category_id: 5,
    active: true,
    ca: "45250",
    expiration_date: "2026-12-12",
    manufacturer: "Braseg",
  },
  {
    id: 2,
    code: "EPI-00002",
    name: "Luva de manha pigmentada",
    description: "luva para uso geral.",
    imagem_url: null,
    category_id: 5,
    active: true,
    ca: "45320",
    expiration_date: "2026-12-12",
    manufacturer: "Braseg",
  },
  {
    id: 3,
    code: "EPI-00003",
    name: "Capacete de segurança branco",
    description: "Capacete para proteção da cabeça contra impactos.",
    imagem_url: null,
    category_id: 1, // Cabeça
    active: true,
    ca: "31469",
    expiration_date: "2028-05-20",
    manufacturer: "MSA",
  },
  {
    id: 4,
    code: "EPI-00004",
    name: "Óculos de segurança incolor",
    description: "Óculos para proteção dos olhos contra partículas volantes.",
    imagem_url: null,
    category_id: 2, // Olhos/Face
    active: true,
    ca: "10344",
    expiration_date: "2027-09-10",
    manufacturer: "3M",
  },
  {
    id: 5,
    code: "EPI-00005",
    name: "Protetor auricular tipo plug",
    description: "Protetor auditivo para redução de ruídos contínuos.",
    imagem_url: null,
    category_id: 3, // Auditivo
    active: true,
    ca: "56789",
    expiration_date: "2027-03-15",
    manufacturer: "3M",
  },
  {
    id: 6,
    code: "EPI-00006",
    name: "Máscara PFF2",
    description:
      "Respirador descartável para proteção contra poeiras e aerossóis.",
    imagem_url: null,
    category_id: 4, // Respiratório
    active: true,
    ca: "41150",
    expiration_date: "2026-11-30",
    manufacturer: "GVS",
  },
  {
    id: 7,
    code: "EPI-00007",
    name: "Botina de segurança com biqueira de aço",
    description: "Calçado de segurança para proteção dos pés contra impactos.",
    imagem_url: null,
    category_id: 6, // Pés
    active: true,
    ca: "29654",
    expiration_date: "2028-01-18",
    manufacturer: "Marluvas",
  },
  {
    id: 8,
    code: "EPI-00008",
    name: "Cinturão de segurança tipo paraquedista",
    description: "Cinturão para trabalhos em altura com ponto de ancoragem.",
    imagem_url: null,
    category_id: 8, // Quedas
    active: true,
    ca: "38912",
    expiration_date: "2027-08-05",
    manufacturer: "Carbografite",
  },
  {
    id: 9,
    code: "EPI-00009",
    name: "Avental de PVC",
    description: "Avental para proteção do tronco contra respingos químicos.",
    imagem_url: null,
    category_id: 7, // Corpo
    active: true,
    ca: "22190",
    expiration_date: "2026-10-22",
    manufacturer: "Plastcor",
  },
  {
    id: 10,
    code: "EPI-00010",
    name: "Máscara facial transparente",
    description:
      "Protetor facial para proteção contra respingos e impactos leves.",
    imagem_url: null,
    category_id: 9, // Outros
    active: true,
    ca: "49871",
    expiration_date: "2027-06-14",
    manufacturer: "Delta Plus",
  },
];

export function ListEpiView() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [categories, setCategories] = useState(categoriesList);
  const [filterCategory, setFilterCategories] = useState({
    search_category: "",
  });
  console.log(filterCategory);
  const [epis, setEpis] = useState(epiList);

  useEffect(() => {
    const loadEPIs = async () => {
      setIsLoading(true);
      const data = await apiClient("safety-list-epi");
      setEpis(data);
      setIsLoading(false);
    };
    // loadEPIs();
  }, []);

  const filteredEPIs: Epi[] = epis.filter((epi) => {
    const matchSearch =
      epi.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      epi.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      epi.ca?.includes(searchTerm);

    const matchCategory =
      !filterCategory.search_category ||
      epi.category_id == Number(filterCategory.search_category);

    return matchSearch && matchCategory;
  });

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header
          title="Equipamento de proteção individual"
          subTitle="Gerencie os equipamentos de proteção individual"
        />
        <div className="flex gap-4">
          <LinkButton to="/epi/new" text="Novo EPI" />
          {/* <LinkButton to="/epi/release" text="Liberar EPI" /> */}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SearchInput
              name="search"
              placeholder="Procure por "
              value={searchTerm}
              setSearchTerm={setSearchTerm}
              cols={3}
            />
            <SelectInput
              name={"search_category"}
              options={categories}
              value={filterCategory}
              setFormValue={setFilterCategories}
              text={""}
              hiddenText={true}
              cols={1}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-6 animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-200" />
                  <div className="flex-1">
                    <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredEPIs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum EPI encontrado
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre um novo EPI para começar
            </p>
            <Link
              to={"CadastroEPI"}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Cadastrar EPI
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {filteredEPIs.map((epi) => (
              <Link
                key={epi.id}
                to={`/epi/${epi.id}`}
                className="w-full bg-white rounded-md border border-slate-200 p-4 hover:shadow-lg hover:shadow-slate-200 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {epi.imagem_url ? (
                    <img
                      src={epi.imagem_url}
                      alt={epi.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div
                      className={`w-16 h-16 rounded-md ${getCategory(epi.category_id).color} flex items-center justify-center`}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={getCategory(epi.category_id).icon}
                        />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 truncate">
                      {epi.name}
                    </h3>
                    <p className="text-sm text-slate-500 truncate">
                      Código: {epi.code}
                    </p>
                    <div className="flex gap-4">
                      {epi.ca && (
                        <p className="text-xs text-slate-400 mt-1">
                          CA: {epi.ca}
                        </p>
                      )}
                      {epi.expiration_date && (
                        <p className="text-xs text-slate-400 mt-1">
                          Validade: {epi.expiration_date}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex self-center">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${getCategory(epi.category_id).color}`}
                    >
                      {getCategory(epi.category_id).name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageMainContainer>
  );
}
