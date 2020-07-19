import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";

import { LoadAsset, theme } from "./src/components";
import { AppNavigator } from "./src/navigation";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
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
