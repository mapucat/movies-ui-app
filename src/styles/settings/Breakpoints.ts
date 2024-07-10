import { Media } from "../types";

export const breakpoints: Media = {
  sm: "600px",
  md: "900px",
};

export const devices = {
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
};
