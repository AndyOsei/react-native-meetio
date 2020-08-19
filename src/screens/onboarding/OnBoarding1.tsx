import React from "react";
import { Dimensions, StatusBar, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";

import { Box, Text, Dot, Button, Icons, Theme } from "../../components";
import { Images } from "../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  arrowButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

const OnBoarding = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();

  return (
    <Box width={width} backgroundColor="white">
      <StatusBar barStyle="dark-content" />
      <Box flex={1} paddingHorizontal="m" style={{ paddingTop: insets.top }}>
        <Box flex={0.5} alignItems="center">
          <Box marginTop="m">
            <Image source={Images.IMG1} />
          </Box>
        </Box>
        <Box flex={0.5} padding="l" justifyContent="space-between">
          <Box marginTop="xl">
            <Text variant="title1" fontSize={32} lineHeight={40}>
              Meet Up UI-Kit
            </Text>
            <Text variant="text1" lineHeight={23} color="gray500" marginTop="l">
              When I was 5 years old, my mother always told me that happiness
              was the key to life. When I went to school, they asked me what I
              wanted to be when I grew up.
            </Text>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="xl"
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
                    backgroundColor="lightBlueMagenta400"
                    opacity={index === 0 ? 1 : 0.4}
                    style={{ margin: 2 }}
                  />
                ))}
            </Box>
            <Box flexDirection="row">
              <Button
                style={[
                  styles.arrowButton,
                  {
                    backgroundColor: theme.colors.lightBlue300,
                  },
                ]}
              >
                <Box flex={1} justifyContent="center" alignItems="center">
                  <Icons.ArrowLeft strokeColor="white" />
                </Box>
              </Button>
              <Button
                style={[
                  styles.arrowButton,
                  {
                    backgroundColor: theme.colors.lightBlueMagenta400,
                  },
                ]}
              >
                <Box marginTop="s" marginLeft="s">
                  <Icons.ArrowRight fillColor="white" width={30} height={30} />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnBoarding;
