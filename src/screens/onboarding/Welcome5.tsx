import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";

import { Box, Text, Dot, Button, Icons } from "../../components";
import { Images } from "../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const Welcome5 = () => {
  return (
    <Box width={width}>
      <Box flex={1} backgroundColor="white">
        <Box flex={0.71}>
          <Image source={Images.BG10} style={styles.background} />
          <Box flex={1} justifyContent="flex-end">
            <Box flexDirection="row" justifyContent="center" marginBottom="m">
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
        </Box>
        <Box flex={0.29} alignItems="center" justifyContent="flex-end">
          <Box paddingHorizontal="xl" alignItems="center">
            <Text variant="title1" marginBottom="m">
              Welcome
            </Text>
            <Text
              variant="text1"
              lineHeight={20}
              textAlign="center"
              color="gray500"
            >
              The best way to meet people and try new activities. Let’s get
              started!
            </Text>
          </Box>
          <Box
            marginTop="xl"
            width={width}
            height={100}
            backgroundColor="darkBlueMagenta800"
            borderTopLeftRadius={80}
            alignItems="center"
          >
            <Box marginTop="s" width={width / 2 + 50} alignSelf="flex-end">
              <Button style={{ padding: 20 }}>
                <Box flexDirection="row" justifyContent="space-between">
                  <Text color="white" marginRight="xl">
                    CONTINUE
                  </Text>
                  <Box>
                    <Icons.ArrowRight />
                  </Box>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome5;
