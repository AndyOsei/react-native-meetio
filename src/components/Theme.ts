<<<<<<< HEAD
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
=======
const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
>>>>>>> 748f74f75ea3484db6dd7baa4435bea6e35e59d5
};

const theme = {
  colors: {
<<<<<<< HEAD
    white: palette.white,
    mainBackground: palette.lightBlueMagenta100,
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
=======
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
>>>>>>> 748f74f75ea3484db6dd7baa4435bea6e35e59d5
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
};

export type Theme = typeof theme;
<<<<<<< HEAD
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
=======
>>>>>>> 748f74f75ea3484db6dd7baa4435bea6e35e59d5
export default theme;
