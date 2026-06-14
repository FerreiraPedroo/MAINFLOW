import React, { useMemo, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSuperiorbar } from "@/components/AppSuperiorbar/AppSuperiorbar";
import { Modal } from "../components/modal/Modal";
import { useAppStore } from "@/app/store/store";
import { AppSideBar } from "@/components/AppSideBar/AppSideBar";

export function Layout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const token = useAppStore((state) => state.token);

  const ModalDisconnect = useMemo(() => {
    if (token || location.pathname == "/" || location.pathname == "/login") {
      return null;
    } else {
      return (
        <div className="absolute top-0 left-0 w-full h-full z-50 backdrop-blur-xs">
          <Modal
            title="Você foi desconectado."
            info="Faça login novamente."
            description=""
            type="red"
            buttons={[
              { text: "Sair", type: "red", onClick: () => navigate("/") },
            ]}
          />
        </div>
      );
    }
  }, [token, location.pathname]);

  return (
    <div className="flex flex-col h-screen border-2 border-yellow-400">
      {/* {ModalDisconnect} */}

      <TooltipProvider>
        <></>
      </TooltipProvider>

      <AppSuperiorbar />
      <div className="flex flex-1">
        <AppSideBar />
        <Outlet />
      </div>
    </div>
  );
}
