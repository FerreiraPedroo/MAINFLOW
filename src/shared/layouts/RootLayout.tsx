import React, { Suspense, useMemo } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Modal } from "../components/modal/Modal";
import { useAppStore } from "@/app/store/store";
import { SnackBarProvider } from "@/app/provider/SnackBarProvider";
import { Loading } from "../components/loading/Loading";

export function RootLayout() {
  const navigate = useNavigate();
  const token = useAppStore((state) => state.token);

  const ModalDisconnect = useMemo(() => {
    if (token && (location.pathname == "/" || location.pathname == "/login")) {
      return <Navigate to={"/home"} />;
    } else if (
      token ||
      location.pathname == "/" ||
      location.pathname == "/login"
    ) {
      return null;
    } else {
      return (
        <div className="absolute top-0 left-0 w-full h-full z-200 backdrop-blur-xs">
          <Modal
            title="Você foi desconectado."
            info="Faça login novamente."
            description=""
            type="red"
            buttons={[
              { text: "Sair", type: "red", onClick: () => navigate("/login") },
            ]}
          />
        </div>
      );
    }
  }, [token, location.pathname]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SnackBarProvider>
          {ModalDisconnect}
          <Outlet />
        </SnackBarProvider>
      </Suspense>
    </>
  );
}
