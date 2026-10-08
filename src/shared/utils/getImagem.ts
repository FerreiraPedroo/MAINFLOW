import defaultIcon from "@assets/menuIcons/menu-item-default.png";
import menuManager from "@assets/menuIcons/menu-manager.png";
import user from "@/assets/public/icones/user-alt-1-svgrepo-com.svg";
import defaultNoPhoto from "@/assets/public/imagens/default/default-nophoto.svg";


const menu = {
  menuManager: menuManager,
};

const subMenu = {};

const icons = { user };
const defaultImage = { defaultNoPhoto };

const imagens = {
  default: defaultIcon,
  ...menu,
  ...subMenu,
  ...icons,
  ...defaultImage,
};

export function getImagem(name: keyof typeof imagens | string | null) {
  return imagens[name] ?? imagens.default;
}
