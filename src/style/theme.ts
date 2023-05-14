import { DefaultTheme } from "styled-components";

const colors = {
  HS_ORANGE300: "#FFBE79",
  HS_ORANGE400: "#FFA648",
  HS_ORANGE500: "#FF8300",
  HS_ORANGE600: "#FF7800",

  HS_YEOLLOW300: "#FFEBAB",
  HS_YEOLLOW400: "#FFDD73",
  HS_YEOLLOW500: "#FFD44C",
  HS_YEOLLOW600: "#F2C430",

  HS_SKYBLUE300: "#A0E2FF",
  HS_SKYBLUE400: "#66C9F4",
  HS_SKYBLUE500: "#42BEEF",
  HS_SKYBLUE600: "#008DCA",

  HS_BLUE300: "#A7C6FF",
  HS_BLUE400: "#77A7FF",
  HS_BLUE500: "#3478F6",
  HS_BLUE600: "#1E66EC",

  GRAYSCALE000: "#FFFFFF",
  GRAYSCALE100: "#FAFAFA",
  GRAYSCALE200: "#F7F7F6",
  GRAYSCALE300: "#F3F3F2",
  GRAYSCALE400: "#DDDDDC",
  GRAYSCALE500: "#999999",
  GRAYSCALE600: "#777777",
  GRAYSCALE700: "#555555",
  GRAYSCALE800: "#323232",
  GRAYSCALE900: "#1C1C1C",
  SYMANTIC: "#2D1C24",
};

export type ColorsTypes = typeof colors;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family:  'Roboto', sans-serif;
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts = {
  head01: FONT({ weight: 700, size: 1.5, lineHeight: 87.5 }),
  body01: FONT({ weight: 500, size: 1.05, lineHeight: 87.5 }),
  body02: FONT({ weight: 500, size: 0.9, lineHeight: 100 }),
  body03: FONT({ weight: 400, size: 0.825, lineHeight: 100 }),
  body04: FONT({ weight: 400, size: 0.825, lineHeight: 100 }),
  caption01: FONT({ weight: 500, size: 0.75, lineHeight: 62.5 }),
  caption02: FONT({ weight: 500, size: 0.75, lineHeight: 100 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
