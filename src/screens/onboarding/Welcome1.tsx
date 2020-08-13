import React from "react";
import { Dimensions, Image, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { Box, Dot, Text, Card, Button, Theme, Icons } from "../../components";
import { Images } from "../../constants";
import { AppStackParamList } from "../../types";
import AppRoute from "../../navigation/app.routes";

interface Props {
  scrollRef: React.RefObject<ScrollView>;
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  getStartedButton: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
});

const Welcome1 = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();
  const navigation = useNavigation<
    NavigationProp<AppStackParamList, AppRoute.OBOARDING>
  >();

  const skip = () => {
    navigation.goBack();
  };

  return (
    <Box width={width}>
      <Box flex={0.7} backgroundColor="black">
        <Image
          source={Images.BG6}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          style={{ paddingTop: insets.top }}
          padding="l"
        >
          <Box flexDirection="row">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Dot
                  key={index}
                  width={8}
                  height={8}
                  borderRadius={4}
                  backgroundColor="white"
                  style={{ margin: 2 }}
                  opacity={index === 0 ? 1 : 0.4}
                />
              ))}
          </Box>
          <Button onPress={skip}>
            <Text variant="title3" color="white" opacity={0.5}>
              SKIP
            </Text>
          </Button>
        </Box>
      </Box>
      <Box flex={0.3} />
      <Box position="absolute" bottom={100} right={0}>
        <Card
          padding="xl"
          width={width * 0.8}
          height={196}
          backgroundColor="darkBlueMagenta700"
          borderBottomLeftRadius={80}
          borderTopLeftRadius={10}
        >
          <Text variant="text2" color="white" opacity={0.7}>
            TUTORIAL
          </Text>
          <Text variant="title1" fontSize={32} lineHeight={40} color="white">
            Welcome to Meet Up
          </Text>
        </Card>
        <Box top={-25} width={"50%"} alignSelf="flex-end">
          <Button
            style={[
              styles.getStartedButton,
              {
                backgroundColor: theme.colors.lightPink,
                height: 56,
              },
            ]}
          >
            <Box
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="m"
            >
              <Box flexDirection="row">
                <Text variant="text1" color="white">
                  GET STARTED
                </Text>
                <Box marginLeft="m" style={{ marginTop: 4 }}>
                  <Icons.ArrowRight />
                </Box>
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome1;
