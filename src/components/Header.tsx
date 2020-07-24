import React from "react";
import { Dimensions } from "react-native";

import { Box, Text } from "./Theme";

interface HeaderProps {
  title: string;
  height?: number;
  rightIcon: React.ReactNode;
  leftIcon: React.ReactNode;
}

const { width } = Dimensions.get("window");

const Header: React.FC<HeaderProps> = ({
  title,
  height,
  rightIcon,
  leftIcon,
  ...rest
}) => {
  const showIcon = rightIcon || leftIcon;
  const flex = showIcon ? 0.5 : 1;
  return (
    <Box
      height={height || 72}
      backgroundColor="white"
      borderBottomLeftRadius={80}
      {...{ width }}
      {...rest}
    >
      <Box flex={1} marginTop="l">
        {showIcon && (
          <Box
            flex={flex}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {leftIcon}
            {rightIcon}
          </Box>
        )}
        <Box flex={flex} alignItems="flex-start">
          <Text variant="title" marginLeft="xl">
            {title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
