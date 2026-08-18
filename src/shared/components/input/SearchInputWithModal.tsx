import React, { useCallback, useEffect, useState } from "react";
import { gridCols } from "./utils/gridCols";
import { TextButton } from "../button/TextButton";

const handleKeyDown = (e: any) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Evita submeter o formulário
    e.stopPropagation(); // Impede o Enter de subir para o Modal e fechá-lo

    // Sua lógica do Enter aqui (se houver)
  }
};

export function SearchInputWithModal({
  name,
  text,
  required,
  getItemList,
  options,
  cols = 2,
  setValue,
}: {
  name: string;
  text: string;
  required: boolean;
  getItemList: any;
  options: {
    compareField: string; // qual campo do item deve ser comparado ao do campo search
    itemField: string; // nome do item da lista
    itemSubField?: string; // segundo texto aparecendo no item da lista
    itemJoinName: boolean; // junta as strings de itemField e itemSubField
  };
  cols?: number | string;
  setValue: any;
}) {
  const [state, setState] = useState<any>({
    showModal: false,
    isLoading: false,
    itemSelected: {},
  });

  const [search, setSearch] = useState<string>("");
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    async function get() {
      const list = await getItemList();
      setItems(list);
    }
    get();
  }, []);

  const handleSearch = useCallback(
    (search: string) => {
      const filtered = items
        .filter((item: any) => {
          return item[options.compareField]
            .toUpperCase()
            .includes(search.toUpperCase());
        })
        .map((i: any) => {
          const item = { ...i };
          // console.log(item[options.compareField])
          const totalSize = item[options.compareField].length;
          const idx = item[options.compareField]
            .toUpperCase()
            .indexOf(search.toUpperCase());

          const prefix = item[options.compareField].substring(
            idx,
            search.length - totalSize,
          );
          const found = item[options.compareField].substring(
            idx,
            idx + search.length,
          );
          const sufix = item[options.compareField].substring(
            idx + search.length,
            totalSize,
          );
          item.find = (
            <p key={item[options.compareField]}>
              {prefix}
              <span className="text-red-600">{found}</span>
              {sufix}
            </p>
          );
          return item;
        });

      setItems(filtered);
    },
    [items],
  );

  function handleSelect(item: any) {
    setValue(name, item.id);
    setState({ ...state, itemSelected: item, showModal: false });
  }

  return (
    <div className={`w-full flex items-end gap-2 ${gridCols[cols]}`}>
      <div className="w-full">
        <label className="block text-sm font-medium text-slate-700">
          {text}
          {required && <span className="text-red-500">*</span>}

          <input
            type="text"
            className="w-full bg-white px-2 py-1.5 text-sm rounded border border-slate-300 outline-none transition-all shadow-sm select-none cursor-auto"
            readOnly={true}
            value={
              state.itemSelected?.[options.compareField] &&
              options.itemJoinName &&
              options.itemSubField
                ? `${state?.itemSelected?.[options.compareField]} / ${state?.itemSelected?.[options.itemSubField!]}`
                : state?.itemSelected?.[options.compareField]
            }
          />
        </label>
      </div>
      <input
        type="button"
        className="h-8.5 px-1 font-semibold bg-blue-100 focus:ring-offset-blue-400 focus:ring-offset-1 focus:ring-1 focus:ring-blue-300 outline-blue-600 focus:outline-blue-600 hover:bg-blue-200 hover:ring-blue-300 hover:cursor-pointer over:ring-1 border border-blue-200 transition ease-in duration-200 hadow-sm rounded"
        onClick={() => {
          setSearch("");
          setState({ ...state, showModal: true, itemSelected: {} });
        }}
        value="🧾"
      />

      {state.showModal && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="flex flex-col relative bg-white rounded-2xl max-w-2xl w-full h-[90vh] max-h-[90vh] overflow-hidden">
            <div className=" bg-white border-b border-slate-200 px-6 py-2 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Selecione</h2>
              <button
                type="button"
                onClick={() => {
                  setState({ ...state, showModal: false, itemSelected: {} });
                  setItems([]);
                }}
                className="px-3 py-2 hover:bg-slate-100 cursor-pointer rounded-lg transition-colors"
              >
                X
              </button>
            </div>

            <div className="pt-2 pb-4 px-6 border-b border-b-slate-400">
              <div className={gridCols[cols]}>
                <label className="block text-sm font-medium text-slate-700 mb-1 pl-1">
                  {text}
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    // name={name}
                    className={`w-full bg-white px-2 py-1.5 text-sm rounded border border-slate-300 focus:ring-1 focus:ring-blue-400 outline-none transition-all shadow-sm`}
                    value={search}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <button
                    type="button"
                    className="h-8.5 px-2 font-semibold bg-blue-100 focus:ring-offset-blue-400 focus:ring-offset-1 focus:ring-1 focus:ring-blue-300 outline-blue-600 focus:outline-blue-600 hover:bg-blue-200 hover:ring-blue-300 hover:cursor-pointer hover:ring-1 border border-blue-200 transition ease-in duration-200 shadow-sm rounded"
                    onClick={() => handleSearch(search)}
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

            <div className="flex-1 space-y-1 py-2 px-6 overflow-auto bg-slate-100">
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border border-slate-400 px-2 py-1 bg-white cursor-pointer hover:border-blue-500"
                    onClick={() => handleSelect(item)}
                  >
                    {item.find}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-4 px-6 py-4 bg-white border-t border-slate-400">
              <TextButton
                type="white"
                text="Cancelar"
                onClick={() => {
                  console.log(state);
                  setState({ ...state, showModal: false, itemSelected: {} });
                  setItems([]);
                }}
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
