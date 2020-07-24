import { createBox, createText } from "@shopify/restyle";

const palette = {
  black: "#0B0B0B",
  white: "#FFFFFF",
  lightPink: "#D47FA6",
  lightBlue: "#9599B3",
  lightBlueMagenta100: "#DEDCE0",
  lightBlueMagenta400: "#8A56AC",
  darkBlueMagenta800: "#241332",
  darkBlueMagenta700: "#352641",
  yellowGreen: "#B4C55B",
  darkGreen500: "#52912E",
  darkGreen600: "#417623",
  darkGreen800: "#253E12",
  lightCyan: "#4EBDEF",
  blue400: "#4666E5",
  darkCyanBlue: "#132641",
};

const theme = {
  colors: {
    white: palette.white,
    black: palette.black,
    lightPink: palette.lightPink,
    lightBlue: palette.lightBlue,
    lightBlueMagenta100: palette.lightBlueMagenta100,
    lightBlueMagenta400: palette.lightBlueMagenta400,
    darkBlueMagenta800: palette.darkBlueMagenta800,
    darkBlueMagenta700: palette.darkBlueMagenta700,
    yellowGreen: palette.yellowGreen,
    darkGreen500: palette.darkGreen500,
    darkGreen600: palette.darkGreen600,
    darkGreen800: palette.darkGreen800,
    lightCyan: palette.lightCyan,
    blue400: palette.blue400,
    darkCyanBlue: palette.darkCyanBlue,
    mainBackground: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title: {
      fontFamily: "Montserrat-Bold",
      fontSize: 24,
      lineSpacing: 24,
      textAlign: "left",
    },
    text1: {
      fontFamily: "Montserrat-Regular",
      fontSize: 14,
      lineSpacing: 22,
      textAlign: "left",
    },
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
