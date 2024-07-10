import React from "react";

import Menu from "./../../assets/menu.svg";
import NoData from "./../../assets/no_data.svg";
import SaveFilled from "./../../assets/save-filled.svg";
import Save from "./../../assets/save.svg";
import Search from "./../../assets/search.svg";
import Clear from "./../../assets/x.svg";

type IconProps = {
  name: "search" | "noData" | "clear" | "save" | "saveFilled" | "menu";
};

const Icon = (props: IconProps) => {
  const { name } = props;

  const Icons: Record<IconProps["name"], any> = {
    search: Search,
    noData: NoData,
    clear: Clear,
    save: Save,
    saveFilled: SaveFilled,
    menu: Menu,
  };

  return <img src={Icons[name]} alt="Your SVG" />;
};

export default Icon;
