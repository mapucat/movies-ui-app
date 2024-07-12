import React from "react";
import styled from "styled-components";

import { devices } from "../../styles/settings/Breakpoints";
import { colors } from "../../styles/settings/Colors";
import { spacing } from "../../styles/settings/Spacing";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: ${colors.background_base};
  width: 100vw;
  min-height: 100vh;

  &,
  header {
    padding: ${spacing[300]} ${spacing[800]};
  }

  main {
    padding-top: ${spacing[700]};
  }

  @media ${devices.sm} {
    &,
    header {
      padding: ${spacing[200]} ${spacing[500]};
    }
  }
`;

const NAVIGATION_LINKS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Search",
    url: "/search",
  },
  {
    label: "Saved",
    url: "/saved",
  },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header nav={{ links: NAVIGATION_LINKS }}></Header>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
