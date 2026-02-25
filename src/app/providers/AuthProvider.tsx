import { useCallback, useEffect, useState, type ReactElement } from "react";
import { AuthContext } from "@app/contexts/AuthContext";

import { apiClient } from "@/shared/lib/apiClient";

interface UserAutenticationInterface {
  isAuthenticated: boolean;
  authError: null | string;
  isLoading: boolean;
}

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

        // const response: any = await apiClient("auth");
        // setAppSettings(response);

        // updateStatus({
        //   authError: null,
        //   isAuthenticated: true,
        //   isLoading: false,
        // });
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
