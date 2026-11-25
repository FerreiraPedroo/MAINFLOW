import React, { Suspense, useMemo } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { useAppStore } from "@/app/store/store";
import { SnackBarProvider } from "@/app/provider/SnackBarProvider";

import { Modal } from "../components/modal/Modal";
import { Loading } from "../components/loading/Loading";

export function RootLayout() {
  const navigate = useNavigate();
  const token = useAppStore((state) => state.token);

  const ModalDisconnect = useMemo(() => {
    const publicPaths = [
      "/auth/login",
      "/auth/register",
      "/auth/forgot-password",
      "/",
    ];

    // console.log("================>", location.pathname);
    // console.log("1º:", token, publicPaths.includes(location.pathname));
    // console.log("2º:", !token, publicPaths.includes(location.pathname));
    // console.log("3º:", !token, !publicPaths.includes(location.pathname));

    if (token && publicPaths.includes(location.pathname)) {
      return <Navigate to={"/home"} />;
    } else if (!token && publicPaths.includes(location.pathname)) {
      return null;
    } else if (!token && !publicPaths.includes(location.pathname)) {
      return (
        <div className="absolute top-0 left-0 w-full h-full z-200 backdrop-blur-xs">
          <Modal
            title="Você foi desconectado."
            info="Faça login novamente."
            description=""
            type="fail"
            buttons={[
              {
                text: "Sair",
                color: "red",
                onClick: () => navigate("/auth/login"),
              },
            ]}
          />
        </div>
      );
    }
  }, [token, location.pathname]);

  return (
    <Suspense fallback={<Loading />}>
      <SnackBarProvider>
        {ModalDisconnect}
        <Outlet />
      </SnackBarProvider>
    </Suspense>
  );
}
