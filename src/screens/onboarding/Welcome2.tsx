import React from "react";
import { Dimensions, Image, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";

import { Box, Dot, Text, Button, Theme } from "../../components";
import { Images } from "../../constants";

interface Props {
  scrollRef: React.RefObject<ScrollView>;
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  nextButton: {
    width: 80,
    height: 44,
    borderRadius: 22,
    marginTop: 15,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const Welcome2 = ({ scrollRef }: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: width, animated: true });
    }
  };

  return (
    <Box width={width}>
      <Box flex={1} backgroundColor="white">
        <Box flex={0.75} borderBottomLeftRadius={80}>
          <Image source={Images.BG7} style={styles.background} />
          <Box
            flex={1}
            justifyContent="flex-end"
            alignItems="center"
            style={{ paddingTop: insets.top }}
          >
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
          </Box>
        </Box>
        <Box flex={0.3} alignItems="center" padding="l">
          <Text variant="text2" color="lightCyanBlue">
            MEET UP
          </Text>
          <Text variant="title1" fontSize={32} lineHeight={40} marginTop="s">
            Welcome
          </Text>
          <Text
            variant="text1"
            textAlign="center"
            lineHeight={20}
            color="gray600"
            marginVertical="m"
          >
            If you’re offered a seat on a rocket ship, don’t ask what seat! Just
            get on.
          </Text>
          <Button
            style={[
              styles.nextButton,
              { backgroundColor: theme.colors.lightBlueMagenta400 },
            ]}
            onPress={next}
          >
            <Box justifyContent="center" alignItems="center" height={44}>
              <Text
                variant="title3"
                fontSize={14}
                lineHeight={26}
                color="white"
              >
                NEXT
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome2;
