import * as React from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";

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
