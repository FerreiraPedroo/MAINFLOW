import React, { useEffect, useState } from "react";
import { gridCols } from "./utils/gridCols";
import { TextInput } from "./TextInput";
import { TextButton } from "../button/TextButton";

export function SearchInputWithModal({
  name,
  text,
  hiddenText,
  required = true,
  cols = 2,
  value = "",
}: {
  name: string;
  text: string;
  hiddenText: boolean;
  required: boolean;
  cols?: number | string;
  value: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [itens, setItens] = useState<any[]>([]);

  function handleSearch(itemsList: any) {
    const list = [...itemsList];
    const filtered = list
      .filter((item: any) => {
        return item.name.includes(search);
      })
      .map((i: any) => {
        const item = { ...i };
        const totalSize = item.name.length;
        const idx = item.name.indexOf(search);

        const prefix = item.name.substring(idx, search.length - totalSize);
        const found = item.name.substring(idx, idx + search.length);
        const sufix = item.name.substring(idx + search.length, totalSize);
        item.name = (
          <div key={item.name}>
            {prefix}
            <b>{found}</b>
            {sufix}
          </div>
        );
        return item;
      });

    return filtered;
  }

  useEffect(() => {
    setItens(itemsList);
  }, []);

  return (
    <div className={`w-full flex items-end gap-2 ${gridCols[cols]}`}>
      <div className="w-full">
        <label
          className={`block text-sm font-medium text-slate-700 mb-1 ${hiddenText && "hidden"}`}
        >
          {text}
          {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          name={name}
          placeholder={"..."}
          value={value}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white p-2 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all readonly"
        />
      </div>
      <button
        className="h-9 border border-red-400 align-middle select-none font-medium text-center duration-100 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none px-2 shadow-sm hover:shadow-md bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg"
        onClick={() => setShowModal(true)}
      >
        🧾
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Selecione um ativo
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className={gridCols[cols]}>
                <label className="block text-sm font-medium text-slate-700 mb-1 pl-1">
                  {text}
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    // name={name}
                    className="w-full bg-white px-2 py-1.5 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    className="border border-amber-400 px-2 rounded-md bg-slate-200 hover:text-slate-900 hover:bg-slate-300 hover:shadow-slate-500/25 hover:shadow-lg transition-all duration-300 font-medium"
                    onClick={handleSearch}
                  >
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 p-4">
              {handleSearch(itemsList).map((item) => {
                return (
                  <div key={item.id} className="border p-1">
                    <p>{item.name}</p>
                    <p>{item.localization}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-4 px-4 py-6 border-t border-slate-200">
              <TextButton
                type="white"
                text="Cancelar"
                onClick={() => setShowModal(false)}
              />

              <TextButton
                type={"green"}
                text={"Selecionar"}
                onClick={() => null}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const itemsList = [
  {
    id: 1,
    name: "Bebedouro",
    localization: "BS-SEDE - Bloco B - 2ª - Sala 208B - Sala de aula",
  },
  {
    id: 2,
    name: "Extintor de Incêndio",
    localization: "BS-SEDE - Bloco B - 2ª - Sala 210B - Sala de aula",
  },
  {
    id: 3,
    name: "Projetor Multimídia",
    localization:
      "BS-SEDE - Bloco A - 1ª - Sala 101A - Laboratório de Informática",
  },
  {
    id: 4,
    name: "Ar Condicionado",
    localization: "BS-SEDE - Bloco A - 1ª - Sala 105A - Sala de aula",
  },
  {
    id: 5,
    name: "Computador Desktop",
    localization: "BS-SEDE - Bloco C - Térreo - Sala 02C - Recepção",
  },
  {
    id: 6,
    name: "Quadro Branco",
    localization: "BS-SEDE - Bloco B - 3ª - Sala 305B - Sala de aula",
  },
  {
    id: 7,
    name: "Lousa Digital",
    localization: "BS-SEDE - Bloco B - 3ª - Sala 306B - Sala de aula",
  },
  {
    id: 8,
    name: "Roteador Wi-Fi",
    localization: "BS-SEDE - Bloco A - 2ª - Corredor Principal",
  },
  {
    id: 9,
    name: "Lixeira Reciclável",
    localization: "BS-SEDE - Bloco C - Térreo - Pátio Interno",
  },
  {
    id: 10,
    name: "Mesa do Professor",
    localization: "BS-SEDE - Bloco B - 1ª - Sala 112B - Sala de aula",
  },
  {
    id: 11,
    name: "Cadeira Ergonômica",
    localization: "BS-SEDE - Bloco A - 3ª - Sala 301A - Diretoria",
  },
  {
    id: 12,
    name: "Câmera de Segurança",
    localization: "BS-SEDE - Bloco C - Térreo - Portaria Principal",
  },
  {
    id: 13,
    name: "Máquina de Café",
    localization: "BS-SEDE - Bloco A - 2ª - Sala 202A - Sala dos Professores",
  },
  {
    id: 14,
    name: "Relógio de Parede",
    localization: "BS-SEDE - Bloco B - 2ª - Sala 205B - Sala de aula",
  },
  {
    id: 15,
    name: "Caixa de Som Ativa",
    localization: "BS-SEDE - Bloco C - 1ª - Sala 108C - Auditório",
  },
  {
    id: 16,
    name: "Microfone Sem Fio",
    localization: "BS-SEDE - Bloco C - 1ª - Sala 108C - Auditório",
  },
  {
    id: 17,
    name: "Armário de Aço",
    localization: "BS-SEDE - Bloco A - Térreo - Sala 05A - Almoxarifado",
  },
  {
    id: 18,
    name: "Estante de Livros",
    localization: "BS-SEDE - Bloco B - 1ª - Sala 100B - Biblioteca",
  },
  {
    id: 19,
    name: "Tela de Projeção Retrátil",
    localization: "BS-SEDE - Bloco B - 3ª - Sala 310B - Sala de Reuniões",
  },
  {
    id: 20,
    name: "Telefone IP",
    localization: "BS-SEDE - Bloco A - 3ª - Sala 302A - Secretaria",
  },
  {
    id: 21,
    name: "Impressora Multifuncional",
    localization: "BS-SEDE - Bloco A - 3ª - Sala 302A - Secretaria",
  },
  {
    id: 22,
    name: "Nobreak 1500VA",
    localization: "BS-SEDE - Bloco C - 2ª - Sala 201C - Sala de Servidores",
  },
  {
    id: 23,
    name: "Ventilador de Parede",
    localization: "BS-SEDE - Bloco B - Térreo - Sala 08B - Cantina",
  },
  {
    id: 24,
    name: "Alarme de Incêndio",
    localization: "BS-SEDE - Bloco A - 2ª - Corredor Leste",
  },
  {
    id: 25,
    name: "Dispensador de Álcool em Gel",
    localization: "BS-SEDE - Bloco B - Térreo - Hall de Entrada",
  },
  {
    id: 26,
    name: "Mesa de Reunião",
    localization: "BS-SEDE - Bloco A - 3ª - Sala 305A - Sala de Conferência",
  },
  {
    id: 27,
    name: "Sofá de Três Lugares",
    localization: "BS-SEDE - Bloco A - Térreo - Sala 01A - Sala de Espera",
  },
  {
    id: 28,
    name: "Catraca de Acesso",
    localization: "BS-SEDE - Bloco C - Térreo - Entrada de Alunos",
  },
  {
    id: 29,
    name: 'Monitor Smart TV 55"',
    localization: "BS-SEDE - Bloco B - Térreo - Hall de Convivência",
  },
  {
    id: 30,
    name: "Switch Gigabit 24 Portas",
    localization: "BS-SEDE - Bloco C - 2ª - Sala 201C - Sala de Servidores",
  },
  {
    id: 31,
    name: "Micro-ondas",
    localization: "BS-SEDE - Bloco A - 2ª - Sala 202A - Copa dos Funcionários",
  },
  {
    id: 32,
    name: "Geladeira Duplex",
    localization: "BS-SEDE - Bloco A - 2ª - Sala 202A - Copa dos Funcionários",
  },
  {
    id: 33,
    name: "Mesa de Pebolim",
    localization: "BS-SEDE - Bloco C - Térreo - Área de Lazer",
  },
  {
    id: 34,
    name: "Laboratório de Ciências - Microscópio",
    localization:
      "BS-SEDE - Bloco B - 2ª - Sala 215B - Laboratório de Biologia",
  },
  {
    id: 35,
    name: "Mesa Digitalizadora",
    localization: "BS-SEDE - Bloco A - 1ª - Sala 103A - Laboratório de Design",
  },
];
