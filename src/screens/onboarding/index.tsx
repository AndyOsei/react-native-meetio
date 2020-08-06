import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

import { Box } from "../../components";

import Welcome1 from "./Welcome1";
import Welcome2 from "./Welcome2";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <Welcome1 />
        <Welcome2 />
      </ScrollView>
    </Box>
  );
};

export default Onboarding;
