import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LoadAsset, theme } from "./src/components";
import { AppNavigator } from "./src/navigation";
import { Images } from "./src/constants";

const fonts = {
  "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  "Montserrat-Semibold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
  "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
};

const assets = [...Object.values(Images)];

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider>
        <LoadAsset {...{ fonts, assets }}>
          <AppNavigator />
        </LoadAsset>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
