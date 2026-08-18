import React, { createContext, use, useState } from "react";
import { SnackBar } from "@/shared/components/snackbar/SnackBar";

interface SnackBarContextType {
  showSnackBar: (messageTitle: string, message: string, type?: string) => void;
}

export const SnackBarContext = createContext<SnackBarContextType | undefined>(
  undefined,
);

export function SnackBarProvider({ children }: React.PropsWithChildren) {
  const [snackBar, setSnackBar] = useState({
    isOpen: false,
    messageTitle: "",
    message: "",
    type: "default",
  });

  function showSnackBar(
    messageTitle: string,
    message: string,
    type = "default",
  ) {
    setSnackBar({ isOpen: true, messageTitle, message, type });

    setTimeout(() => {
      setSnackBar(() => ({
        isOpen: false,
        messageTitle: "",
        message: "",
        type: "default",
      }));
    }, 4000);
  }

  return (
    <SnackBarContext value={{ showSnackBar }}>
      {snackBar.isOpen && (
        <SnackBar
          titleMessage={snackBar.messageTitle}
          message={snackBar.message}
          snackType={snackBar.type}
        />
      )}
      {children}
    </SnackBarContext>
  );
}

export function useSnackBar() {
  const context = use(SnackBarContext);
  if (!context) {
    throw new Error("useSnackBar deve ser usado dentro de um SnackBarProvider");
  }

  return context;
}
