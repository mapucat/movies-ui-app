import { Media } from "../types";

export const breakpoints: Media = {
  sm: 600,
  md: 900,
};

export const devices = {
  sm: `(max-width: ${breakpoints.sm}px)`,
  md: `(max-width: ${breakpoints.md}px)`,
};
