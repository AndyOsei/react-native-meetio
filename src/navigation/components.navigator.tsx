import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { BasicElements } from "../screens/components";

const Stack = createStackNavigator();

const ComponentsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BasicElements" component={BasicElements} />
    </Stack.Navigator>
  );
};

export default ComponentsNavigator;
