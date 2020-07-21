import * as React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";

import { Box, Header, Icons } from "../../components";
import { Images } from "../../constants";

const { width } = Dimensions.get("window");

const TOP = 30;
const LEFT = -30;
const BUTTON_SIZE = 52;

const styles = StyleSheet.create({
  categoryContainer: {
    ...StyleSheet.absoluteFillObject,
    borderBottomLeftRadius: 80,
    width,
    height: 200,
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 10,
    backgroundColor: "white",
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Categories = [
  {
    title: "Outdoors",
    subtitle: "128 topics - 4k articles",
    source: Images.bg1,
  },
  {
    title: "Technology",
    subtitle: "110 topics - 1k articles",
    source: Images.bg2,
  },
  {
    title: "Health & Wellness",
    subtitle: "56 topics - 2k articles",
    source: Images.bg3,
  },
  {
    title: "Music",
    subtitle: "128 topics - 4k articles",
    source: Images.bg4,
  },
];

const Home = () => {
  return (
    <Box flex={1} backgroundColor="lightBlue">
      {/* {Categories.map((index, category) => ()} */}
      <Box style={[styles.categoryContainer, { top: TOP * 12.5 }]}>
        <Image source={Images.bg4} style={{ width }} />
      </Box>
      <Box style={[styles.categoryContainer, { top: TOP * 9.5, left: LEFT }]}>
        <Image source={Images.bg3} />
      </Box>
      <Box style={[styles.categoryContainer, { top: TOP * 6, left: LEFT }]}>
        <Image source={Images.bg2} />
      </Box>
      <Box style={[styles.categoryContainer, { top: TOP, left: LEFT }]}>
        <Image source={Images.bg1} />
      </Box>
      <Box flex={1}>
        <Header title="Categories" />
        <Box flex={1} />
        <View style={styles.addButton}>
          <Icons.Add />
        </View>
      </Box>
    </Box>
  );
};

export default Home;
