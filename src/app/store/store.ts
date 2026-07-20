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

const dataSample = [
  {
    id: 2,
    title: "Gerenciamento",
    url: "/manager",
    icon: "default",
    activities: [
      {
        id: 1,
        item_id: 1,
        title: "Centros de custo",
        order: 1,
        url: "/manager/cost-center",
        icon: "default",
      },
      {
        id: 1,
        item_id: 1,
        title: "Grupos de pagamento",
        order: 1,
        url: "/manager/payment-groups",
        icon: "default",
      },
      {
        id: 1,
        title: "Localização",
        department_id: 1,
        order: 1,
        icon: "default",
        activities: [
          {
            id: 1,
            item_id: 1,
            title: "Localizações",
            order: 1,
            url: "/manager/localizations",
            icon: "default",
          },
          {
            id: 2,
            item_id: 1,
            title: "Unidades",
            order: 1,
            url: "/manager/localizations/buildings",
            icon: "default",
          },
          {
            id: 3,
            item_id: 1,
            title: "Andares",
            order: 1,
            url: "/manager/localizations/building-floors",
            icon: "default",
          },
          {
            id: 4,
            item_id: 1,
            title: "Divisões",
            order: 1,
            url: "/manager/localizations/building-divisions",
            icon: "default",
          },
          {
            id: 5,
            item_id: 1,
            title: "Tipos de espaços",
            order: 1,
            url: "/manager/localizations/building-spaces",
            icon: "default",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Operações",
    url: "/operations",
    icon: "default",
    activities: [],
  },
];

const useAppStore = create<AppStore>()(
  persist(
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
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      departments: dataSample,
      departmentSelected: null,
      setDepartments: (departments) => set(() => ({ departments })),
      setDepartmentSelected: (department) =>
        set(() => ({ departmentSelected: department })),
    }),
    {
      name: "menu-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useAppStore, useMenuStore };
