import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Header, Icons, Text } from "../../components";
import { Images } from "../../constants";

const LEFT = -25;
const BUTTON_SIZE = 52;

const styles = StyleSheet.create({
  headerContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 180,
  },
  activityProfilesImageStyle: {
    ...StyleSheet.absoluteFillObject,
    left: -30,
    width: 480,
    top: -32,
  },
  onboardingImageStyle: {
    ...StyleSheet.absoluteFillObject,
    width: 480,
    height: 260,
    left: -30,
  },
  componentsImageStyle: {
    ...StyleSheet.absoluteFillObject,
    left: LEFT,
  },
  categoryTitleContainer: {
    marginTop: 150,
    marginLeft: 80,
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 50,
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
      <ScrollView>
        <Box flex={1}>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={526}
            height={246}
            borderBottomLeftRadius={80}
            backgroundColor="white"
          >
            <Box
              flex={1}
              backgroundColor="darkCyanBlue"
              borderBottomLeftRadius={80}
            >
              <Image
                source={Images.bg4}
                style={styles.activityProfilesImageStyle}
              />
              <Box flex={1} justifyContent="center" alignItems="flex-start">
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title" color="white">
                    Activities & Profiles
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={385}
            height={233}
            borderBottomLeftRadius={80}
          >
            <Box
              flex={1}
              backgroundColor="yellowGreen"
              borderBottomLeftRadius={80}
            >
              <Image source={Images.bg3} style={styles.onboardingImageStyle} />
              <Box flex={1} justifyContent="center" alignItems="flex-start">
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title" color="white">
                    Onboarding
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={244}
            height={219}
            borderBottomLeftRadius={80}
          >
            <Box
              flex={1}
              backgroundColor="lightCyan"
              borderBottomLeftRadius={80}
            >
              <Image source={Images.bg2} style={styles.componentsImageStyle} />
              <Box flex={1} justifyContent="center" alignItems="flex-start">
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title" color="white">
                    Components
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={63}
            height={247}
            borderBottomLeftRadius={80}
          >
            <Box
              flex={1}
              backgroundColor="lightPink"
              borderBottomLeftRadius={80}
            >
              <Image
                source={Images.bg1}
                style={{ ...StyleSheet.absoluteFillObject, left: LEFT }}
              />
              <Box flex={1} justifyContent="center" alignItems="flex-start">
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title" color="white">
                    Main App
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Box style={styles.headerContainer}>
        <Header
          title="Categories"
          height={180}
          leftIcon={
            <Box marginLeft="m">
              <Icons.Back />
            </Box>
          }
          rightIcon={
            <Box marginRight="m">
              <Icons.Filter />
            </Box>
          }
        />
      </Box>
      <View style={styles.addButton}>
        <Icons.Add />
      </View>
    </Box>
  );
};

export default Home;
