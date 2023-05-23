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
  SYMANTICRED: "#ED1C24",
  SYMANTIC: "#ED1C24",
};

export type ColorsTypes = typeof colors;

interface Font {
  family: boolean;
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ family, weight, size, lineHeight }: Font): string {
  return `
    font-family:  ${family ? "Noto Sans KR" : "Roboto"};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts = {
  head01: FONT({ family: true, weight: 700, size: 2, lineHeight: 2.8 }),
  head01_1: FONT({ family: true, weight: 700, size: 1.1, lineHeight: 1.76 }),
  head01_2: FONT({ family: true, weight: 700, size: 0.8, lineHeight: 0.8 }),
  head02: FONT({ family: true, weight: 500, size: 1.6, lineHeight: 2.4 }),
  head02_1: FONT({ family: true, weight: 500, size: 1.6, lineHeight: 2.24 }),
  body01: FONT({ family: true, weight: 500, size: 1.4, lineHeight: 1.9 }),
  bodyBold: FONT({ family: true, weight: 600, size: 1.3, lineHeight: 2.4 }),
  bodyBold02: FONT({ family: true, weight: 700, size: 1.1, lineHeight: 2 }),
  body02: FONT({ family: true, weight: 500, size: 1.2, lineHeight: 1.9 }),
  body02_1: FONT({ family: true, weight: 500, size: 1.1, lineHeight: 1.76 }),
  body03: FONT({ family: true, weight: 400, size: 1.1, lineHeight: 1.9 }),
  body04: FONT({ family: true, weight: 400, size: 1.1, lineHeight: 1.7 }),

  caption01: FONT({ family: true, weight: 500, size: 1, lineHeight: 1 }),
  caption02: FONT({ family: true, weight: 500, size: 1, lineHeight: 1.6 }),
  roboto01: FONT({ family: false, weight: 700, size: 1.7, lineHeight: 2.38 }),
  roboto02: FONT({ family: false, weight: 600, size: 1.8, lineHeight: 2.52 }),
  roboto02s: FONT({ family: false, weight: 600, size: 1.4, lineHeight: 2.26 }),
  roboto03: FONT({ family: false, weight: 500, size: 1.4, lineHeight: 1.96 }),
  roboto04: FONT({ family: false, weight: 400, size: 1.2, lineHeight: 2.16 }),
  roboto05: FONT({ family: false, weight: 500, size: 2, lineHeight: 2 }),
  roboto06: FONT({ family: false, weight: 400, size: 1.1, lineHeight: 1.76 }),
  roboto07: FONT({ family: false, weight: 400, size: 0.8, lineHeight: 1 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
