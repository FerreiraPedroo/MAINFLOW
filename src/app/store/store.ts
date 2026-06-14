import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { DepartmentType } from "@/components/AppSidebar/types/sidebar.types";

interface UserType {
  name: string;
  occupations: string;
  avatar: string;
}
interface AppVersionType {
  userVersion: number | null;
  departmentVersion: number | null;
  uiVersion: number | null;
}
interface AppStore {
  token: string | null;
  user: UserType | null;
  appVersion: AppVersionType | null;
  setLogin: (token: string | null) => void;
  setLogout: () => void;
  setUser: (user: UserType) => void;
  setAppVersion: (appVersion: AppVersionType) => void;
}
interface MenuStore {
  departments: DepartmentType[];
  departmentSelected: DepartmentType | null;
  setDepartments: (departments: DepartmentType[]) => void;
  setDepartmentSelected: (department: DepartmentType) => void;
}

const dataSample = {
  departments: [
    {
      id: 1,
      title: "Operações",
      url: "/operations",
      icon: "default",
      itemsList: [
        {
          id: 1,
          title: "Obras",
          department_id: 1,
          order: 1,
          icon: "default",
          options: [
            {
              id: 1,
              title: "Painel de obras",
              icon: "painel",
              url: "/construction/painel",
            },
            {
              id: 2,
              title: "Lista de obras",
              icon: "list",
              url: "/constructions",
            },
            {
              id: 3,
              title: "Informações detalhadas de obras",
              icon: "info",
              url: "/construction/info-details",
            },
          ],
        },
        {
          id: 1,
          title: "Movimentação",
          department_id: 1,
          order: 1,
          icon: "default",
          options: [
            {
              id: 1,
              title: "Painel de movimentações",
              icon: "painel",
              url: "/movimentations/painel",
            },
            {
              id: 2,
              title: "Lista de movimentações",
              icon: "list",
              url: "/movimentations",
            },
            {
              id: 3,
              title: "Informações detalhadas de movimentação",
              icon: "info",
              url: "/movimentations/info-details",
            },
          ],
        },
        {
          id: 1,
          title: "Facilities",
          department_id: 1,
          order: 1,
          icon: "default",
          sectorItems: [
            {
              id: 1,
              item_id: 1,
              title: "Projeto",
              order: 1,
              icon: "project",
              options: [
                {
                  id: 1,
                  title: "Painel de projeto",
                  icon: "painel",
                  url: "/project/painel",
                },
                {
                  id: 2,
                  title: "Lista de projeto",
                  icon: "list",
                  url: "/projects",
                },
              ],
            },
          ],
        },
        {
          id: 1,
          title: "Facilities",
          department_id: 1,
          order: 1,
          icon: "default",
          sectorItems: [
            {
              id: 1,
              item_id: 1,
              title: "Projeto",
              order: 1,
              icon: "project",
              options: [
                {
                  id: 1,
                  title: "Painel de projeto",
                  icon: "painel",
                  url: "/project/painel",
                },
                {
                  id: 2,
                  title: "Lista de projeto",
                  icon: "list",
                  url: "/projects",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const useAppStore = create<AppStore>()(
  // persist(
  (set) => ({
    token: null,
    user: null,
    appVersion: {
      userVersion: null,
      departmentVersion: null,
      uiVersion: null,
    },
    setLogin: (token: string | null) => set(() => ({ token })),
    setLogout: () => ({
      token: null,
      appVersion: {
        userVersion: null,
        departmentVersion: null,
        uiVersion: null,
      },
      departments: [],
      departmentSelected: null,
    }),
    setUser: (user) => set(() => ({ user })),
    setAppVersion: (appVersion) => set(() => ({ appVersion })),
  }),
  // ,
  //   {
  //     name: "app-storage",
  //     storage: createJSONStorage(() => localStorage),
  //   },
  // ),
);

const useMenuStore = create<MenuStore>()((set) => ({
  departments: dataSample.departments,
  departmentSelected: null,
  setDepartments: (departments) => set(() => ({ departments })),
  setDepartmentSelected: (department) =>
    set(() => ({ departmentSelected: department })),
}));

export { useAppStore, useMenuStore };
