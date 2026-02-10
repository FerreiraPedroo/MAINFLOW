// Exporta o contexto para ser utilizado.
// Em vez de intanciar importar e intanciar o contexto aonde
// for utilizado, aqui ele instancia e exporta o contexto já instanciado

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// assim evita ter que importar o contexto nos lugares onde for utilizado
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth não carregou o AuthProvider");
  }

  return context;
}
