import { create } from "zustand";

interface AppState {
  departments: [];
  menuItems: [];
  setDepartments: (departments) => void;
}
