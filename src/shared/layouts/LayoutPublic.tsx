import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppStore } from "@/app/store/store";

export function LayoutPublic() {
  const navigate = useNavigate();

  const token = useAppStore((state) => state.token);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <div className="flex flex-col flex-1 h-screen">
      <Outlet />
    </div>
  );
}
