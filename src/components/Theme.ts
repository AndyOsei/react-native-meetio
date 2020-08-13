import { createBox, createText } from "@shopify/restyle";

const palette = {
  black: "#0B0B0B",
  white: "#FFFFFF",
  lightPink: "#D47FA6",
  lightBlue200: "#BBBCCD",
  lightBlue300: "#9599B3",
  blueMagenta: "#998fa2",
  blueMagenta400: "#817889",
  blueMagenta500: "#5F4591",
  lightBlueMagenta50: "#E7E4E9",
  lightBlueMagenta100: "#DEDCE0",
  lightBlueMagenta400: "#8A56AC",
  darkBlueMagenta800: "#241332",
  darkBlueMagenta700: "#352641",
  darkBlueMagentaSpacer: "rgba(53, 38, 65, 0.24)",
  yellowGreen: "#B4C55B",
  darkGreen500: "#52912E",
  darkGreen600: "#417623",
  darkGreen800: "#253E12",
  lightCyan: "#4EBDEF",
  blue400: "#4666E5",
  darkCyanBlue: "#132641",
  lightCyanBlue: "#A3A9AF",
  gray: "#707070",
};

const theme = {
  colors: {
    white: palette.white,
    black: palette.black,
    lightPink: palette.lightPink,
    lightBlue200: palette.lightBlue200,
    lightBlue300: palette.lightBlue300,
    blueMagenta: palette.blueMagenta,
    blueMagenta400: palette.blueMagenta400,
    blueMagenta500: palette.blueMagenta500,
    lightBlueMagenta100: palette.lightBlueMagenta100,
    lightBlueMagenta400: palette.lightBlueMagenta400,
    darkBlueMagenta800: palette.darkBlueMagenta800,
    darkBlueMagenta700: palette.darkBlueMagenta700,
    darkBlueMagentaSpacer: "rgba(53, 38, 65, 0.24)",
    yellowGreen: palette.yellowGreen,
    darkGreen500: palette.darkGreen500,
    darkGreen600: palette.darkGreen600,
    darkGreen800: palette.darkGreen800,
    lightCyan: palette.lightCyan,
    blue400: palette.blue400,
    darkCyanBlue: palette.darkCyanBlue,
    lightCyanBlue: palette.lightCyanBlue,
    mainBackground: palette.white,
    gray: palette.gray,
    lightBlueMagenta50: palette.lightBlueMagenta50,
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
    title1: {
      fontFamily: "Montserrat-Bold",
      fontSize: 24,
      lineHeight: 24,
      textAlign: "left",
    },
    title2: {
      fontFamily: "Montserrat-Bold",
      fontSize: 16,
      lineHeight: 19,
      textAlign: "left",
    },
    title3: {
      fontFamily: "Montserrat-Semibold",
      fontSize: 12,
      lineHeight: 40,
      textAlign: "left",
    },
    text1: {
      fontFamily: "Montserrat-Regular",
      fontSize: 14,
      lineHeight: 22,
      textAlign: "left",
    },
    text2: {
      fontFamily: "Montserrat-Medium",
      fontSize: 12,
      lineHeight: 18,
      textAlign: "left",
    },
    italicText: {
      fontFamily: "Montserrat-MediumItalic",
      fontSize: 12,
      lineHeight: 15,
      textAlign: "left",
    },
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
