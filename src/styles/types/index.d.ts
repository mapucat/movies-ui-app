/**
 * Gradient palette
 */
export interface SettingsScale {
  50?: string;
  75?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  1000?: string;
}

interface Colors {
  palettes: {
    grey: SettingsScale;
    green: SettingsScale;
  };
  [x: string]: string | any;
}

interface Font {
  primary: string;
  secondary: string;
  sizes: {
    mobile: SettingsScale;
    desktop: SettingsScale;
  };
}

interface Media {
  sm: string; // for mobile screen
  md: string; // for tablets
}
