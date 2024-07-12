import Menu from "./../../assets/menu.svg?react";
import NoData from "./../../assets/no_data.svg?react";
import SaveFilled from "./../../assets/save-filled.svg?react";
import Save from "./../../assets/save.svg?react";
import Search from "./../../assets/search.svg?react";
import Clear from "./../../assets/x.svg?react";

export const ICON_NAME_LIST = [
  "search",
  "noData",
  "clear",
  "save",
  "saveFilled",
  "menu",
] as const;

export type IconName = (typeof ICON_NAME_LIST)[number];

interface IconProps {
  name: IconName;
}

const Icon = ({ name }: IconProps) => {
  const classes = `svg--${name}`;

  const Icons: Record<IconName, any> = {
    search: <Search className={classes} />,
    noData: <NoData className={classes} />,
    clear: <Clear className={classes} />,
    save: <Save className={classes} />,
    saveFilled: <SaveFilled className={classes} />,
    menu: <Menu className={classes} />,
  };

  return Icons[name];
};

export default Icon;
