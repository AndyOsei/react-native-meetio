import * as React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";

import { Box, Header, Icons, Text } from "../../components";
import { Images } from "../../constants";
import { AppStackParamList } from "../../types";
import AppRoute from "../../navigation/app.routes";

interface HomeProps {
  navigation: StackNavigationProp<AppStackParamList, AppRoute.HOME>;
}

const LEFT = -25;
const BUTTON_SIZE = 52;
const BORDER_BOTTOM_LEFT_RADIUS = 80;

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
  categoryButton: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 20,
    backgroundColor: "white",
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

const { height } = Dimensions.get("window");

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const goToComponents = () => {
    navigation.navigate(AppRoute.COMPONENTS);
  };
  return (
    <Box flex={1} backgroundColor="lightBlue300">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 200,
          height: height + height / 4,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Box flex={1}>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={526}
            height={246}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
            backgroundColor="white"
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image
                source={Images.BG4}
                style={styles.activityProfilesImageStyle}
              />
              <TouchableWithoutFeedback
                style={[styles.categoryButton, { height: 246 }]}
              >
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Activities & Profiles
                  </Text>
                </Box>
              </TouchableWithoutFeedback>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={385}
            height={233}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image source={Images.BG3} style={styles.onboardingImageStyle} />
              <TouchableWithoutFeedback
                style={[styles.categoryButton, { height: 233 }]}
              >
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Onboarding
                  </Text>
                </Box>
              </TouchableWithoutFeedback>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={244}
            height={219}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image source={Images.BG2} style={styles.componentsImageStyle} />
              <TouchableWithoutFeedback
                style={[styles.categoryButton, { height: 219 }]}
                onPress={goToComponents}
              >
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Components
                  </Text>
                </Box>
              </TouchableWithoutFeedback>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={63}
            height={247}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image
                source={Images.BG1}
                style={{ ...StyleSheet.absoluteFillObject, left: LEFT }}
              />
              <TouchableWithoutFeedback
                style={[styles.categoryButton, { height: 247 }]}
              >
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Main App
                  </Text>
                </Box>
              </TouchableWithoutFeedback>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Box style={styles.headerContainer}>
        <Header
          title="Categories"
          height={180}
          borderBottomLeftRadius={80}
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
