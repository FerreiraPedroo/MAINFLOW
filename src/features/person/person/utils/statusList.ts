type Status = {
  id: number;
  name: string;
};

export const statusList: Status[] = [
  { id: 1, name: "Todos" },
  { id: 2, name: "Ativo" },
  { id: 3, name: "Afastado" },
  { id: 4, name: "Férias" },
];

// export const categoriesObjectList = categoriesList.reduce((acc: any, cur) => {
//   acc[cur.id] = { id: cur.id, icon: cur.icon, name: cur.name, color: cur.color };
//   return acc;
// }, {});
