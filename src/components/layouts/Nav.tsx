import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { devices } from "../../styles/settings/Breakpoints";
import { colors } from "../../styles/settings/Colors";
import { spacing } from "../../styles/settings/Spacing";

type NavProps = {
  className: string;
  links: {
    label: string;
    url: string;
  }[];
  toogleManuOpened: (value?: boolean) => void;
};

const Wrapper = styled.nav`
  display: flex;
  color: ${colors.secondary_text};

  @media ${devices.sm} {
    padding: ${spacing[300]} 0;
  }

  @media ${devices.sm} {
    position: fixed;
    box-sizing: border-box;
    z-index: 100;

    top: 64px;
    right: 0;
    height: 90vh;
    background-color: ${colors.background_base};
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    transition: 0.45s;
    padding: ${spacing[300]} 0;
  }

  &.navigation--opened {
    @media ${devices.sm} {
      width: 250px;
    }
  }

  &.navigation--closed {
    @media ${devices.sm} {
      width: 0px;
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  gap: ${spacing[500]};

  @media ${devices.sm} {
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Item = styled.li`
  a {
    color: ${colors.secondary_text};
    text-decoration: none;

    &.nav-link--active {
      font-weight: bold;
    }
  }
`;

const Nav = ({ links, toogleManuOpened, ...props }: NavProps) => {
  return (
    <Wrapper {...props}>
      <List>
        {links.map((link, index) => (
          <Item
            key={index}
            onClick={() => {
              toogleManuOpened(false);
            }}
          >
            <NavLink
              key={index}
              to={link.url}
              className={({ isActive }) => (isActive ? "nav-link--active" : "")}
            >
              {link.label}
            </NavLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Nav;
