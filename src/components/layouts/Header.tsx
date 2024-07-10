import { useState } from "react";
import styled from "styled-components";

import logo from "../../assets/logo.svg";
import { devices } from "../../styles/settings/Breakpoints";
import { colors } from "../../styles/settings/Colors";
import { spacing } from "../../styles/settings/Spacing";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Nav from "./Nav";

type HeaderProps = {
  nav: {
    links: {
      label: string;
      url: string;
    }[];
  };
};

const Wrapper = styled.header`
  padding: ${spacing[400]} 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  background-color: ${colors.background_base};

  img {
    height: 100%;
  }

  img,
  button {
    flex-grow: 1;
    max-width: 130px;
  }

  & > button {
    visibility: hidden;
  }

  @media ${devices.sm} {
    box-sizing: border-box;
    position: fixed;
    width: 90%;
    z-index: 10;
    padding: ${spacing[200]} 0;

    img,
    button {
      max-width: 100px;
    }

    & > button {
      visibility: visible;
    }
  }
`;

const Header = ({ nav: { links } }: HeaderProps) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const toogleManuOpened = (value?: boolean) => {
    if (value && typeof value === "boolean") {
      setMenuOpened(value);
    } else {
      setMenuOpened(!menuOpened);
    }
  };

  return (
    <Wrapper>
      <img src={logo} className="App-logo" alt="logo" />
      <Nav
        className={menuOpened ? "navigation--opened" : "navigation--closed"}
        links={links}
        toogleManuOpened={toogleManuOpened}
      ></Nav>
      <Button variant="icon" onClick={toogleManuOpened}>
        <Icon name="menu"></Icon>
      </Button>
    </Wrapper>
  );
};

export default Header;
