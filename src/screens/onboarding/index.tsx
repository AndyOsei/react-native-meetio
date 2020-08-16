import * as React from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";

import { Box } from "../../components";

import Welcome1 from "./Welcome1";
import Welcome2 from "./Welcome2";
import Welcome3 from "./Welcome3";
import Welcome4 from "./Welcome4";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const scrollRef = React.useRef<ScrollView>(null);
  return (
    <Box flex={1} backgroundColor="white">
      <StatusBar barStyle="light-content" />
      <ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <Welcome1 />
        <Welcome2 {...{ scrollRef }} />
        <Welcome3 />
        <Welcome4 />
      </ScrollView>
    </Box>
  );
};

export default Onboarding;
