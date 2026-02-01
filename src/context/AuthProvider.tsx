import { ApiService } from "@/service/api";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";

interface AuthProviderValue {
  user: string | null;
  isAuthenticated: boolean;
  appSettings: any;
}

interface UserAutenticationInterface {
  isAuthenticated: boolean;
  authError: null | string;
  isLoading: boolean;
}

const AuthContext = createContext<AuthProviderValue>({
  user: null,
  isAuthenticated: false,
  appSettings: null,
});

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState(null);
  const [appSettings, setAppSettings] = useState();

  const [authentication, setAutentication] =
    useState<UserAutenticationInterface>({
      authError: null,
      isAuthenticated: false,
      isLoading: true,
    });

  const updateStatus = useCallback((status: any) => {
    setAutentication((prev) => {
      return { ...prev, ...status };
    });
  }, []);

  useEffect(() => {
    async function checkAppState() {
      try {
        updateStatus({
          authError: null,
          isAuthenticated: false,
          isLoading: true,
        });

        const response = await ApiService("auth");
        setAppSettings(response);

        updateStatus({
          authError: null,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error: any) {
        console.log(error);
      }
    }
    checkAppState();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: authentication.isAuthenticated,
        appSettings,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Exporta o contexto para ser utilizado.
// Em vez de intanciar importar e intanciar o contexto aonde
// for utilizado, aqui ele instancia e exporta o contexto já instanciado
// assim evita ter que importar o contexto nos lugares onde for utilizado
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth não carregou o AuthProvider");
  }

  return context;
};
