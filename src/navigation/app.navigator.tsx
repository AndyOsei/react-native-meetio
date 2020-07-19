import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens";

import ComponentsNavigator from "./components.navigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Components" component={ComponentsNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
