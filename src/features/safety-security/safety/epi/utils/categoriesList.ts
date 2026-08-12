type Category = {
  id: number;
  name: string;
  icon: string;
  color: string;
};

export const categoriesList: Category[] = [
  {
    id: 1,
    name: "Cabeça",
    icon: "M12 14l9-5-9-5-9 5 9 5z",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "Olhos/Face",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    name: "Auditivo",
    icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 4,
    name: "Respiratório",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 5,
    name: "Mãos",
    icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 6,
    name: "Pés",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 7,
    name: "Corpo",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 8,
    name: "Quedas",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "bg-red-100 text-red-600",
  },
  {
    id: 9,
    name: "Outros",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    color: "bg-slate-100 text-slate-600",
  },
];

const categoriesLength = categoriesList.length;

export function getCategory(category: number | string | null): Category {
  if (!category) {
    return categoriesList[categoriesLength - 1];
  }

  const categoryFind = categoriesList.find((cat, index) => {
    if (category == cat.id || category == cat.name) return cat;
    if (categoriesLength == index) return cat;
  }) as Category;

  return categoryFind;
}

// export const categoriesObjectList = categoriesList.reduce((acc: any, cur) => {
//   acc[cur.id] = { id: cur.id, icon: cur.icon, name: cur.name, color: cur.color };
//   return acc;
// }, {});
