import React from "react";
import { Dimensions } from "react-native";

import * as Icons from "./icons";
import { Box, Text } from "./Theme";

interface HeaderProps {
  title: string;
}

const { width } = Dimensions.get("window");

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Box
      height={180}
      {...{ width }}
      backgroundColor="white"
      borderBottomLeftRadius={80}
    >
      <Box flex={1} marginTop="l">
        <Box
          flex={0.5}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box marginLeft="m">
            <Icons.Back />
          </Box>
          <Box marginRight="m">
            <Icons.Filter />
          </Box>
        </Box>
        <Box
          flex={0.5}
          alignItems="flex-start"
          // backgroundColor="lightPink"
        >
          <Text marginLeft="xl">{title}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
