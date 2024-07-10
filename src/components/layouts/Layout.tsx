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
  background-color: ${colors.background_base};
  min-height: 100vh;
  padding: 0 ${spacing[800]};

  @media ${devices.sm} {
    padding: 0 ${spacing[500]};

    main {
      padding-top: ${spacing[900]};
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
