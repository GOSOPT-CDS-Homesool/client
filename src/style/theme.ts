import { DefaultTheme } from "styled-components";

const colors = {
  HS_ORANGE300: "#FFBE79",
};

export type ColorsTypes = typeof colors;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family:  "KOTRAHOPE"
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts = {
  head01: FONT({ weight: 300, size: 1.5, lineHeight: 1.9 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};