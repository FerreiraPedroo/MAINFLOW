export const CONFIG = {
  urlApi: "http://localhost:3030",
};

// export const nameInputALias = {
// 	"Nome técnico": "Nome real"
// }

/**
 * Configura o side bar, esses dados serão obtidos apartir
 * dos dados da aplicação enviado pela API.
 */
type LayoutconfigType = {
  departaments: string[];
  menuItems: { name: string; page: string; icon: string }[];
};
export const layoutConfig: LayoutconfigType = {
  departaments: ["Painel"],
  menuItems: [
    {
      name: "Dashboard",
      page: "daskboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    }
  ],
};
