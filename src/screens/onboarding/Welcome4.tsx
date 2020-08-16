import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Dot, Button, Text } from "../../components";
import { Images } from "../../constants";

const { width } = Dimensions.get("window");

const Welcome4 = () => {
  const insets = useSafeAreaInsets();

  return (
    <Box backgroundColor="darkBlueMagenta800" {...{ width }}>
      <Image
        source={Images.BG9}
        style={{
          ...StyleSheet.absoluteFillObject,
          width: undefined,
          height: undefined,
        }}
      />
      <Box flex={1} style={{ paddingTop: insets.top }}>
        <Box flex={0.2}>
          <Box flexDirection="row" justifyContent="center" marginTop="xl">
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
        </Box>
        <Box flex={0.5} justifyContent="flex-end" alignItems="center">
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
        <Box flex={0.3}>
          <Box
            width={width}
            height={150}
            borderTopLeftRadius={80}
            backgroundColor="lightBlue300"
            position="absolute"
            bottom={60}
            alignItems="center"
          >
            <Button style={{ marginTop: 30 }}>
              <Text
                variant="title3"
                color="white"
                fontSize={14}
                lineHeight={26}
              >
                LOG IN
              </Text>
            </Button>
          </Box>
          <Box
            width={width}
            height={120}
            borderTopLeftRadius={80}
            backgroundColor="darkBlueMagenta800"
            position="absolute"
            bottom={0}
            justifyContent="center"
            alignItems="center"
          >
            <Button>
              <Text
                variant="title3"
                color="white"
                fontSize={14}
                lineHeight={26}
              >
                SIGN UP
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome4;
