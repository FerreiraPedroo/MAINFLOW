/**
 * pages.config.js - Page routing configuration
 *
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 *
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 *
 * Example file structure:
 *
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 *
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
// import CadastroEPI from './src/pages/CadastroEPI.js';
// import CadastroFuncionario from './src/pages/CadastroFuncionario.js';
// import Dashboard from './src/pages/Dashboard.js';
// import DetalhesEPI from './src/pages/DetalhesEPI.js';
// import DetalhesFuncionario from './src/pages/DetalhesFuncionario.js';
// import EPIs from './src/pages/EPIs.js';
// import Funcionarios from './src/pages/Funcionarios.js';
// import Home from './src/pages/Home.js';
// import LiberacaoEPI from './src/pages/LiberacaoEPI.jsx';
// import __Layout from './Layout.jsx';

import Home from "@/pages/home/Home";
import type { JSX, ReactElement, ReactHTMLElement, ReactNode } from "react";

export const PAGES: Record<string, React.FC> = {
    "Home": Home,
  // "CadastroFuncionario": CadastroFuncionario,
  // "Dashboard": Dashboard,
  // "DetalhesEPI": DetalhesEPI,
  // "DetalhesFuncionario": DetalhesFuncionario,
  // "EPIs": EPIs,
  // "Funcionarios": Funcionarios,
  // "LiberacaoEPI": LiberacaoEPI,
};

export const pagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
  // Layout: __Layout,
};
