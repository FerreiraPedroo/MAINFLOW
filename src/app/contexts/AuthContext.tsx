import { createContext } from "react";

interface AuthProviderValue {
  user: string | null;
  isAuthenticated: boolean;
  appSettings: any;
}

export const AuthContext = createContext<AuthProviderValue>({
  user: null,
  isAuthenticated: false,
  appSettings: null,
});
