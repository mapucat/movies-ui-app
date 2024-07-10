import { Font, SettingsScale } from "../types";

const FONT_SIZE_DESKTOP: SettingsScale = {
  50: "11px",
  75: "12px",
  100: "14px",
  200: "16px",
  300: "18px",
  400: "20px",
  500: "22px",
  600: "25px",
  700: "28px",
  800: "32px",
  900: "36px",
  1000: "40px",
};

const FONT_SIZE_MOBILE: SettingsScale = {
  50: "13px",
  75: "15px",
  100: "17px",
  200: "19px",
  300: "22px",
  400: "24px",
  500: "27px",
  600: "31px",
  700: "34px",
  800: "39px",
  900: "44px",
  1000: "49px",
};

export const font: Font = {
  primary: '"Inter"',
  secondary: '"Rubik"',
  sizes: {
    mobile: FONT_SIZE_MOBILE,
    desktop: FONT_SIZE_DESKTOP,
  },
};
