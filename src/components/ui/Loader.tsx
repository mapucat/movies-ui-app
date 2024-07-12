import styled from "styled-components";
import { colors } from "../../styles/settings/Colors";

const Wrapper = styled.div`
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  line-height: 1.2em;
  display: inline-grid;

  &:before,
  &:after {
    content: "Loading...";
    grid-area: 1/1;
    -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
    color: ${colors.secondary_text};
    text-shadow:
      0 0 0 #000,
      0 calc(var(--s, 1) * 1.2em) 0 #000;
    animation: l15 1s infinite;
  }
  &:after {
    -webkit-mask-position: 1ch 50%;
    --s: -1;
  }
  @keyframes l15 {
    80%,
    100% {
      text-shadow:
        0 calc(var(--s, 1) * -1.2em) 0 #000,
        0 0 0 #000;
    }
  }
`;

const Loader = () => {
  return <Wrapper data-testid="loader" />;
};

export default Loader;
