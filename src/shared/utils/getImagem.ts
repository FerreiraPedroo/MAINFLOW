import defaultIcon from "@assets/menuIcons/menu-item-default.png";
import menuManager from "@assets/menuIcons/menu-manager.png";

const menu = {
  menuManager: menuManager,
};

const subMenu = {};

const imagems = {
  default: defaultIcon,
  ...menu,
  ...subMenu,
};

export function getImagem(name: string) {
  return imagems[name] ?? imagems.default;
}
