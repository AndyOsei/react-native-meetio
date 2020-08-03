import React from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";

import { Header, Box, Card, Text, Icons, theme } from "../../components";
import { Images } from "../../constants";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  bg5: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const Card2 = () => {
  return (
    <Box backgroundColor="lightBlueMagenta100" width={width}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: height + height * 0.63 }}
      >
        <Card
          {...StyleSheet.absoluteFillObject}
          backgroundColor="blueMagenta500"
          height={392}
          borderBottomLeftRadius={80}
          overflow="visible"
          top={1050}
          justifyContent="flex-end"
          paddingHorizontal="xl"
          borderBottomWidth={2}
          borderLeftWidth={2}
          borderBottomColor="lightBlueMagenta50"
          borderLeftColor="lightBlueMagenta50"
        >
          <Box
            flexDirection="row"
            style={{ marginBottom: 30 }}
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Image source={Images.AVATAR10} />
              <Box marginLeft="s">
                <Text variant="text2" color="white" opacity={0.7}>
                  Dina Meyer
                </Text>
                <Box>
                  <Text
                    variant="title2"
                    fontSize={14}
                    lineHeight={20}
                    color="white"
                  >
                    Hi everyone!
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Text variant="text2" color="white" opacity={0.7}>
                9 hrs
              </Text>
              <Box
                width={22}
                height={22}
                borderRadius={11}
                backgroundColor="white"
                justifyContent="center"
                alignItems="center"
                style={{ margin: 3 }}
              >
                <Text variant="text2" color="lightBlueMagenta400" fontSize={14}>
                  7
                </Text>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card
          {...StyleSheet.absoluteFillObject}
          backgroundColor="blueMagenta500"
          height={392}
          borderBottomLeftRadius={80}
          overflow="visible"
          top={940}
          justifyContent="flex-end"
          paddingHorizontal="xl"
          borderBottomWidth={1}
          borderLeftWidth={1}
          borderBottomColor="darkBlueMagentaSpacer"
          borderLeftColor="darkBlueMagentaSpacer"
        >
          <Box
            flexDirection="row"
            style={{ marginBottom: 30 }}
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Image source={Images.AVATAR9} />
              <Box marginLeft="s">
                <Text variant="text2" color="white" opacity={0.7}>
                  Dina Meyer
                </Text>
                <Text
                  variant="title2"
                  fontSize={14}
                  lineHeight={20}
                  color="white"
                >
                  Welcome to Yoga Meetup
                </Text>
              </Box>
            </Box>
            <Box>
              <Text variant="text2" color="white" opacity={0.7}>
                9 hrs
              </Text>
              <Box
                width={22}
                height={22}
                borderRadius={11}
                backgroundColor="white"
                justifyContent="center"
                alignItems="center"
                style={{ margin: 3 }}
              >
                <Text variant="text2" color="lightBlueMagenta400" fontSize={14}>
                  5
                </Text>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card
          {...StyleSheet.absoluteFillObject}
          height={340}
          top={900}
          borderBottomLeftRadius={80}
        >
          <Image source={Images.BG5} style={styles.bg5} />
          <Box
            flex={1}
            flexDirection="row"
            paddingHorizontal="xl"
            justifyContent="center"
          >
            <Box flexDirection="row" alignSelf="center">
              <Image source={Images.AVATAR8} />
              <Box marginLeft="m">
                <Text variant="title2" color="white">
                  Marcus Brownlee
                </Text>
                <Text variant="text1" color="white" opacity={0.56}>
                  8 Nov
                </Text>
              </Box>
            </Box>
            <Box
              flexDirection="row"
              justifyContent="flex-end"
              marginTop="m"
              alignSelf="flex-end"
            >
              <Box flexDirection="row" marginBottom="l">
                <Text
                  variant="title2"
                  fontSize={12}
                  lineHeight={15}
                  color="white"
                  style={{ padding: 4 }}
                >
                  256
                </Text>
                <Icons.Comment strokeColor={theme.colors.white} />
              </Box>
              <Box flexDirection="row" marginLeft="m">
                <Text
                  variant="title2"
                  fontSize={12}
                  lineHeight={15}
                  color="white"
                  style={{ padding: 4 }}
                >
                  4K
                </Text>
                <Icons.Like strokeColor={theme.colors.white} />
              </Box>
            </Box>
          </Box>
        </Card>
        <Card
          {...StyleSheet.absoluteFillObject}
          backgroundColor="white"
          height={392}
          borderBottomLeftRadius={80}
          overflow="visible"
          top={620}
          justifyContent="flex-end"
          paddingHorizontal="xl"
          borderBottomWidth={2}
          borderLeftWidth={2}
          borderBottomColor="lightBlueMagenta50"
          borderLeftColor="lightBlueMagenta50"
        >
          <Box
            flexDirection="row"
            style={{ marginBottom: 30 }}
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Image source={Images.AVATAR7} />
              <Box marginLeft="s">
                <Text variant="text2" color="blueMagenta">
                  Stephane Moreau
                </Text>
                <Box width={"90%"}>
                  <Text
                    variant="text2"
                    fontSize={14}
                    lineHeight={20}
                    color="darkBlueMagenta800"
                  >
                    Check out this Meetup with Montreal
                  </Text>
                </Box>
              </Box>
            </Box>
            <Text variant="text2" color="blueMagenta">
              Aug 19
            </Text>
          </Box>
        </Card>
        <Card
          {...StyleSheet.absoluteFillObject}
          backgroundColor="white"
          height={392}
          borderBottomLeftRadius={80}
          overflow="visible"
          top={510}
          justifyContent="flex-end"
          paddingHorizontal="xl"
          borderBottomWidth={2}
          borderLeftWidth={2}
          borderBottomColor="lightBlueMagenta50"
          borderLeftColor="lightBlueMagenta50"
        >
          <Box
            flexDirection="row"
            style={{ marginBottom: 30 }}
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Image source={Images.AVATAR6} />
              <Box marginLeft="s">
                <Text variant="text2" color="blueMagenta">
                  Dina Meyer
                </Text>
                <Text
                  variant="text2"
                  fontSize={14}
                  lineHeight={20}
                  color="darkBlueMagenta800"
                >
                  Hello
                </Text>
              </Box>
            </Box>
            <Text variant="text2" color="blueMagenta">
              9 hrs
            </Text>
          </Box>
        </Card>
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
