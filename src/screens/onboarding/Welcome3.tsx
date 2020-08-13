import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Dot, Text, Button, Theme } from "../../components";
import { Images } from "../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    width: width - 100,
    height: 52,
    borderRadius: 26,
    marginTop: 15,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const Welcome3 = () => {
  const theme = useTheme<Theme>();

  return (
    <Box width={width} backgroundColor="darkBlueMagenta800">
      <Box flex={1}>
        <Image source={Images.BG8} style={styles.background} />
        <Box flex={1} justifyContent="space-evenly" alignItems="center">
          <Box flexDirection="row" marginBottom="m">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Dot
                  key={index}
                  width={8}
                  height={8}
                  borderRadius={4}
                  backgroundColor="white"
                  opacity={index === 0 ? 1 : 0.4}
                  style={{ margin: 2 }}
                />
              ))}
          </Box>
          <Box alignItems="center">
            <Box width={width / 2}>
              <Text
                variant="title1"
                fontSize={32}
                lineHeight={40}
                color="white"
                textAlign="center"
              >
                Welcome to Meet Up
              </Text>
            </Box>
            <Box width={width / 2 + 100} marginTop="l">
              <Text
                variant="text2"
                lineHeight={20}
                color="white"
                textAlign="center"
              >
                The best way to meet people and try new activities. Let's get
                started!
              </Text>
            </Box>
          </Box>
          <Box>
            <Box alignSelf="center">
              <Text
                variant="title3"
                lineHeight={15}
                color="white"
                opacity={0.6}
              >
                CONTINUE WITH:
              </Text>
            </Box>
            <Button
              style={[
                styles.button,
                { backgroundColor: theme.colors.lightBlueMagenta400 },
              ]}
            >
              <Box justifyContent="center" alignItems="center" height={52}>
                <Text
                  variant="title3"
                  fontSize={14}
                  lineHeight={26}
                  color="white"
                >
                  EMAIL
                </Text>
              </Box>
            </Button>
            <Button
              style={[
                styles.button,
                { backgroundColor: theme.colors.lightPink },
              ]}
            >
              <Box justifyContent="center" alignItems="center" height={52}>
                <Text
                  variant="title3"
                  fontSize={14}
                  lineHeight={26}
                  color="white"
                >
                  FACEBOOK
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome3;
