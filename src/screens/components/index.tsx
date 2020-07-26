import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box } from "../../components";

import HeadersInputs from "./HeadersInputs";
import Cards from "./Cards";

const { width } = Dimensions.get("window");

const Components = () => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flex={1}
      style={{ paddingTop: insets.top }}
      backgroundColor="lightBlueMagenta100"
    >
      <ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <HeadersInputs />
        <Cards />
      </ScrollView>
    </Box>
  );
};

export default Components;
