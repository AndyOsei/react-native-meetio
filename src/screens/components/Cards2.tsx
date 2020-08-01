import React from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";

import { Header, Box, Card, Text, Icons } from "../../components";
import { Images } from "../../constants";

const { width } = Dimensions.get("window");

const Card2 = () => {
  return (
    <Box backgroundColor="lightBlueMagenta100" width={width}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          {...StyleSheet.absoluteFillObject}
          backgroundColor="darkBlueMagenta800"
          height={392}
          borderBottomLeftRadius={80}
          overflow="visible"
          top={400}
          justifyContent="center"
          alignItems="center"
        >
          <Box style={{ marginTop: 130 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Card width={150} height={240} marginHorizontal="m">
                <Image
                  source={Images.MEDITATION2}
                  style={StyleSheet.absoluteFillObject}
                />
                <Box
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginTop: 50 }}
                >
                  <Box>
                    <Text
                      variant="title2"
                      fontSize={14}
                      lineHeight={18}
                      color="white"
                    >
                      Meditation
                    </Text>
                    <Box flexDirection="row" marginTop="m">
                      <Text
                        variant="text1"
                        fontSize={12}
                        lineHeight={15}
                        color="white"
                      >
                        4.6
                      </Text>
                      <Box justifyContent="center" style={{ marginLeft: 4 }}>
                        <Icons.Star />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card width={150} height={240} marginHorizontal="m">
                <Image
                  source={Images.YOGA2}
                  style={StyleSheet.absoluteFillObject}
                />
                <Box
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginTop: 50 }}
                >
                  <Box>
                    <Text
                      variant="title2"
                      fontSize={14}
                      lineHeight={18}
                      color="white"
                    >
                      Yoga
                    </Text>
                    <Box flexDirection="row" marginTop="m">
                      <Text
                        variant="text1"
                        fontSize={12}
                        lineHeight={15}
                        color="white"
                      >
                        3.8
                      </Text>
                      <Box justifyContent="center" style={{ marginLeft: 4 }}>
                        <Icons.Star />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card
                width={150}
                height={240}
                marginHorizontal="m"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  source={Images.SUSHI}
                  style={StyleSheet.absoluteFillObject}
                />
                <Box
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginTop: 50 }}
                >
                  <Box>
                    <Box>
                      <Text
                        variant="title2"
                        fontSize={14}
                        lineHeight={18}
                        color="white"
                      >
                        Sushi Place
                      </Text>
                      <Box flexDirection="row" marginTop="m">
                        <Text
                          variant="text1"
                          fontSize={12}
                          lineHeight={15}
                          color="white"
                        >
                          3.4
                        </Text>
                        <Box justifyContent="center" style={{ marginLeft: 4 }}>
                          <Icons.Star />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </ScrollView>
          </Box>
        </Card>
        <Card
          {...StyleSheet.absoluteFillObject}
          height={530}
          backgroundColor="lightBlueMagenta400"
          borderBottomLeftRadius={80}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box height={41} flexDirection="row" marginBottom="xl">
            <Box alignItems="center" paddingHorizontal="l">
              <Text variant="title1" color="white">
                125
              </Text>
              <Text variant="text1" color="white">
                LIKES
              </Text>
            </Box>
            <Box
              paddingHorizontal="l"
              alignItems="center"
              borderLeftColor="black"
              borderLeftWidth={StyleSheet.hairlineWidth}
            >
              <Text variant="title1" color="white">
                150
              </Text>
              <Text variant="text1" color="white">
                FOLLOWING
              </Text>
            </Box>
            <Box
              paddingHorizontal="l"
              alignItems="center"
              borderLeftColor="black"
              borderLeftWidth={StyleSheet.hairlineWidth}
            >
              <Text variant="title1" color="white">
                321
              </Text>
              <Text variant="text1" color="white">
                FOLLOWERS
              </Text>
            </Box>
          </Box>
        </Card>
        <Card
          {...StyleSheet.absoluteFillObject}
          backgroundColor="white"
          height={318}
          borderBottomLeftRadius={80}
          overflow="visible"
        >
          <Box paddingHorizontal="xl" style={{ marginTop: 100 }}>
            <Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                height={50}
              >
                <Box flexDirection="row" height={50}>
                  <Image source={Images.AVATAR2} />
                  <Box marginLeft="m">
                    <Text variant="title2" color="darkBlueMagenta800">
                      Leo Spencer
                    </Text>
                    <Text
                      variant="text1"
                      fontSize={12}
                      lineHeight={15}
                      color="darkBlueMagenta700"
                    >
                      8 Nov
                    </Text>
                  </Box>
                </Box>
                <Icons.Chevron />
              </Box>
              <Text
                variant="text1"
                fontSize={13}
                lineHeight={22}
                color="blueMagenta400"
              >
                Believe in yourself, take on your challenges, dig deep within
                yourself to conquer fears. Never let anyone bring you down. You
                got to keep going.
              </Text>
              <Box flexDirection="row" justifyContent="flex-end" marginTop="m">
                <Box flexDirection="row">
                  <Text
                    variant="title2"
                    fontSize={12}
                    lineHeight={15}
                    color="blueMagenta400"
                    style={{ padding: 4 }}
                  >
                    256
                  </Text>
                  <Icons.Comment />
                </Box>
                <Box flexDirection="row" marginLeft="m">
                  <Text
                    variant="title2"
                    fontSize={12}
                    lineHeight={15}
                    color="blueMagenta400"
                    style={{ padding: 4 }}
                  >
                    428
                  </Text>
                  <Icons.Like />
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </ScrollView>
      <Header
        {...StyleSheet.absoluteFillObject}
        title="CARDS"
        titleVariant="title3"
        backgroundColor="lightBlueMagenta100"
        borderBottomLeftRadius={70}
      />
    </Box>
  );
};

export default Card2;
