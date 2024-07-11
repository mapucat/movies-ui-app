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

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background_base};

  img {
    height: 100%;
  }

  div button {
    display: block;
    margin-left: auto;
  }

  & > img,
  & > div {
    flex-grow: 1;
    max-width: 130px;
  }

  & > div button {
    visibility: hidden;
  }

  @media ${devices.sm} {
    z-index: 10;
    padding: ${spacing[200]} 0;

    & > img,
    & > div {
      max-width: 100px;
    }

    & > div button {
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
      <div>
        <Button variant="icon" onClick={toogleManuOpened}>
          <Icon name="menu"></Icon>
        </Button>
      </div>
    </Wrapper>
  );
};

export default Header;
