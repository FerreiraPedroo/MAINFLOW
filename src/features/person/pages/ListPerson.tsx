import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";

import { Header } from "@shared/components/header/Header";
import { LinkButton } from "@shared/components/button/LinkButton";
import { SearchInput } from "@shared/components/input/SearchInput";
import { SelectInput } from "@shared/components/input/SelectInput";
import { PageMainContainer } from "@shared/components/PageMainContainer";

import { ListPersonSkeleton } from "../components/skeleton/ListPersonSkeleton";
import { statusList } from "../utils/statusList";

import type { Person } from "../interfaces/person.interface";

const personList: Person[] = [
  {
    id: 1,
    registration: "EPI-00001",
    name: "Pedro Henrique de Assis Ferreira",
    photo_url: null,
    status: "Ativo",
    admission_date: "2026-12-12",
  },
  {
    id: 2,
    registration: "EPI-00001",
    name: "Pedro Henrique de Assis Ferreira",
    photo_url: null,
    status: "Ativo",
    admission_date: "2026-12-12",
  },
  {
    id: 3,
    registration: "EPI-00001",
    name: "Pedro Henrique de Assis Ferreira",
    photo_url: null,
    status: "Ativo",
    admission_date: "2026-12-12",
  },
];

function filterPersons(person, searchTerm) {
  // const matchSearch =
  //   person.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   person.cpf?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   person.ca?.includes(searchTerm);
  // const matchCategory = !filterCategory.search_category || epi.category_id == Number(filterCategory.search_category);
  // return matchSearch && matchCategory;
}

export function ListPersonView() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState({ search_status: "" });

  const [status, setStatus] = useState(1);
  const [persons, setPersons] = useState<Person[]>(personList);

  useEffect(() => {
    const loadPersons = async () => {
      setIsLoading(true);
      const data = await apiClient("person-list");
      setPersons(data);
      setIsLoading(false);
    };
    // loadPersons();
  }, []);

  return (
    <PageMainContainer>
      <div className="w-full space-y-6">
        {/* Header */}
        <Header title="Pessoas" />
        <LinkButton to="/persons/new" text="Cadastrar pessoa" />

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
              name={"search_status"}
              options={statusList}
              value={status}
              setFormValue={setFilterStatus}
              text={""}
              hiddenText={true}
              cols={1}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <ListPersonSkeleton />
        ) : persons.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhuma pessoa encontrada
            </h3>
            <p className="text-slate-500 mb-6">
              Cadastre uma nova pessoa para começar
            </p>
            <Link
              to={"/person/new"}
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
              Cadastrar Pessoa
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 font-medium">Registro</th>
                    <th className="px-6 py-4 font-medium">Nome</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    {/* <th className="px-6 py-4 font-medium"></th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {persons.map((person) => (
                    <tr
                      key={person.id}
                      onClick={() => navigate(`/persons/${person.id}`)}
                      className="text-sm hover:bg-slate-50 transition-colors hover:cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-800">
                          {person.registration}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-700">{person.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            person.status === "Ativo"
                              ? "bg-emerald-100 text-emerald-700"
                              : person.status === "Férias"
                                ? "bg-blue-100 text-blue-700"
                                : person.status === "Afastado"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {person.status}
                        </span>
                      </td>
                      {/* <td className="px-6 py-4">
                        <button
                          onClick={() => "openStatusModal(lib)"}
                          className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          Alterar Status
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </PageMainContainer>
  );
}
