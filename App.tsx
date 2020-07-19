import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";

import { LoadAsset, theme } from "./src/components";
import { AppNavigator } from "./src/navigation";

const fonts = {
  "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  "Montserrat-Semibold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
  "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAsset {...{ fonts }}>
        <AppNavigator />
      </LoadAsset>
    </ThemeProvider>
  );
}
