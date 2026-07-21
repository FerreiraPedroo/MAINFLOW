import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppStore } from "@/app/store/store";

import { TooltipProvider } from "@/components/ui/tooltip";

export function LayoutPublic() {
  const navigate = useNavigate();

  const token = useAppStore((state) => state.token);

  return (
    <div className="flex flex-col h-screen">
      {/* {ModalDisconnect} */}

      <TooltipProvider>
        <></>
      </TooltipProvider>

      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
}
