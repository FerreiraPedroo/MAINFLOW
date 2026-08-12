import React, { useCallback, useState } from "react";
import { apiClient } from "@/shared/lib/apiClient";

import { Container } from "@shared/components/Container";
import { Header } from "@/shared/ui/PageHome/Header";
import { Loading } from "@/shared/components/loading/Loading";
import { useSnackBar } from "@/app/provider/SnackBarProvider";
import { useAppStore, useMenuStore } from "@/app/store/store";

export function AuthPage() {
  const { showSnackBar } = useSnackBar();

  const setUserInfo = useAppStore((state) => state.setUser);
  const setLogin = useAppStore((state) => state.setLogin);
  const setDepartments = useMenuStore((state) => state.setDepartments);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "email@email.com",
    password: "password-password",
  });

  const handleLogin = useCallback(async () => {
    setLoading(true);
    try {
      const apiResponse = await apiClient(`/auth/login`, {
        method: "POST",
        body: JSON.stringify(user),
      });
      setLogin(apiResponse.tokenInfo);
      setUserInfo(apiResponse.userInfo);
      setDepartments(apiResponse.userActivityInfo);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      showSnackBar("Erro", error.message, "FAIL");
    }
  }, []);

  return (
    <Container className="w-full h-screen">
      <div className="flex flex-col w-full justify-center items-center gap-8">
        <Header
          headerTitle={"MAUA"}
          className="bg-slate-300 py-3 border border-y-slate-600"
        />
        <div className="relative flex flex-col min-w-xs max-w-md rounded-md p-8 border-y-4 border-x">
          {loading && <Loading className="rounded-md" />}

          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">Login</h1>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="email@email.com"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Senha
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline"
                  >
                    Perdeu a senha ?
                  </a>
                </div>
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, password: e.target.value }))
                  }
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full px-8 py-3 font-semibold rounded-md bg-gray-800 text-gray-100 hover:cursor-pointer"
                >
                  Sign in
                </button>
              </div>
              <p className="px-2 text-sm text-center">
                Não tem uma conta ainda ?
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline px-2"
                >
                  Cadastre-se.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
