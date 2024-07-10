import { createGlobalStyle } from "styled-components";
import { font } from "./settings/Font";
import { devices } from "./settings/Breakpoints";
import { colors } from "./settings/Colors";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

  body {
    font-family: ${font.primary}, sans-serif;
    font-size: ${font.sizes.desktop[100]};
    font-weight: normal;
    font-style: normal;
    color: ${colors.primary_text};

    @media ${devices.sm} {
      font-size: ${font.sizes.mobile[100]};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${font.secondary}, sans-serif;
  }
`;

export default GlobalStyle;
