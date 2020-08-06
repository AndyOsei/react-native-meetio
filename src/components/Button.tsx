import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewStyle, StyleProp } from "react-native";

import { Text, Box } from "./Theme";

interface Props {
  label?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ label, onPress, style, children }) => {
  return (
    <TouchableOpacity {...{ style, onPress }}>
      {!children && (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text>{label}</Text>
        </Box>
      )}
      {children && children}
    </TouchableOpacity>
  );
};

export default Button;
