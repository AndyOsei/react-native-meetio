import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Components, Onboarding } from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Components" component={Components} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
