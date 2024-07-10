import Menu from "./../../assets/menu.svg?react";
import NoData from "./../../assets/no_data.svg?react";
import SaveFilled from "./../../assets/save-filled.svg?react";
import Save from "./../../assets/save.svg?react";
import Search from "./../../assets/search.svg?react";
import Clear from "./../../assets/x.svg?react";

type IconProps = {
  name: "search" | "noData" | "clear" | "save" | "saveFilled" | "menu";
};

const Icon = (props: IconProps) => {
  const { name } = props;

  const Icons: Record<IconProps["name"], any> = {
    search: <Search />,
    noData: <NoData />,
    clear: <Clear />,
    save: <Save />,
    saveFilled: <SaveFilled />,
    menu: <Menu />,
  };

  return Icons[name];
};

export default Icon;
