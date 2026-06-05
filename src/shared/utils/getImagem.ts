import defaultIcon from "@assets/menuIcons/menu-item-default.png";
import menuManager from "@assets/menuIcons/menu-manager.png";
import user from "@/assets/public/icones/user-alt-1-svgrepo-com.svg";

const menu = {
  menuManager: menuManager,
};

const subMenu = {};

const icons = { user };

const imagens = {
  default: defaultIcon,
  ...menu,
  ...subMenu,
  ...icons,
};

export function getImagem(name: string) {
  return imagens[name] ?? imagens.default;
}
