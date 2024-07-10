import { Colors, SettingsScale } from "../types";

/**
 * Color palettes
 */
const GREY_PALLETE: SettingsScale = {
  50: "#FFFFFF",
  500: "#9CA4AB",
  700: "#28262D",
  800: "#0D0C0F",
};

const GREEN_PALLETE: SettingsScale = {
  500: "#00925D",
};

/**
 * Colors definitions
 */
const ALIASES = {
  // by color name
  green: GREEN_PALLETE[500],
  grey: GREY_PALLETE[500],
  white: GREY_PALLETE[50] as string,
  black: GREY_PALLETE[800] as string,
  // by component
  background_base: GREY_PALLETE[800] as string,
  primary_text: GREY_PALLETE[500],
  secondary_text: GREY_PALLETE[50] as string,

  primary: GREEN_PALLETE[500],
  secondary: GREY_PALLETE[50] as string,
};

export const colors: Colors = {
  palettes: {
    grey: GREY_PALLETE,
    green: GREEN_PALLETE,
  },
  ...ALIASES,
};
