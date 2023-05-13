import { DefaultTheme } from "styled-components";

const colors = {
  HS_ORANGE: "#FFBE79",
  HS_YEOLLOW: "#FFD44C",
  HS_SKYBLUE: "#42BEEF",
  HS_BLUE: "#3478F6",
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
  head01: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
  body01: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
  body02: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
  body03: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
  body04: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
  caption01: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
  caption02: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
