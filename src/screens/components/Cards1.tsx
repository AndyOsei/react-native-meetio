import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Box, Header, Card, Text, Icons, Theme } from "../../components";
import { Images } from "../../constants";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  xdIcon: {
    position: "absolute",
    bottom: 40,
    right: 20,
  },
});

const Cards = () => {
  const theme = useTheme<Theme>();
  return (
    <Box backgroundColor="lightBlueMagenta100" width={width}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: height * 2 + 500 }}
      >
        <Box>
          <Card
            {...StyleSheet.absoluteFillObject}
            backgroundColor="white"
            height={290}
            borderBottomLeftRadius={80}
            overflow="visible"
            top={1270}
          >
            <Box
              flex={1}
              justifyContent="center"
              alignItems="center"
              style={{ marginTop: 50 }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card width={150} height={240} marginHorizontal="m">
                  <Image
                    source={Images.MEDITATION1}
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
                    source={Images.YOGA1}
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
                          <Box
                            justifyContent="center"
                            style={{ marginLeft: 4 }}
                          >
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
            backgroundColor="darkBlueMagenta800"
            height={290}
            borderBottomLeftRadius={80}
            overflow="visible"
            top={1030}
          >
            <Box paddingHorizontal="xl" style={{ marginTop: 100 }}>
              <Box>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  height={50}
                >
                  <Box flexDirection="row" height={50}>
                    <Image source={Images.AVATAR1} />
                    <Box marginLeft="m">
                      <Text variant="title2" color="white">
                        Abdullah Hadley
                      </Text>
                      <Text
                        variant="text1"
                        fontSize={12}
                        lineHeight={15}
                        color="white"
                        opacity={0.56}
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
                  color="white"
                  opacity={0.64}
                >
                  Believe in yourself, take on your challenges, dig deep within
                  yourself to conquer fears. Never let anyone bring you down.
                  You got to keep going.
                </Text>
                <Box
                  flexDirection="row"
                  justifyContent="flex-end"
                  marginTop="m"
                >
                  <Box flexDirection="row">
                    <Text
                      variant="title2"
                      fontSize={12}
                      lineHeight={15}
                      color="lightBlue200"
                      style={{ padding: 4 }}
                    >
                      256
                    </Text>
                    <Icons.Comment strokeColor={theme.colors.blueMagenta} />
                  </Box>
                  <Box flexDirection="row" marginLeft="m">
                    <Text
                      variant="title2"
                      fontSize={12}
                      lineHeight={15}
                      color="lightBlue200"
                      style={{ padding: 4 }}
                    >
                      428
                    </Text>
                    <Icons.Like strokeColor={theme.colors.blueMagenta} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card
            {...StyleSheet.absoluteFillObject}
            backgroundColor="white"
            height={350}
            top={750}
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
                  <Box flexDirection="row">
                    <Image source={Images.AVATAR1} />
                    <Box marginLeft="m">
                      <Text variant="title2" color="darkBlueMagenta800">
                        Abdullah Hadley
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
                <Box alignSelf="center">
                  <Text
                    variant="text1"
                    fontSize={13}
                    lineHeight={22}
                    color="blueMagenta400"
                    marginBottom="m"
                  >
                    When I was 5 years old, my mother always told me
                  </Text>
                  <Box alignItems="flex-end">
                    <Image source={Images.FILM} />
                  </Box>
                </Box>
                <Box
                  flexDirection="row"
                  justifyContent="flex-end"
                  marginTop="m"
                >
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
          <Card
            {...StyleSheet.absoluteFillObject}
            height={338}
            backgroundColor="darkBlueMagenta800"
            borderBottomLeftRadius={80}
            top={480}
          >
            <Box flex={1} justifyContent="center" paddingHorizontal="xl">
              <Box style={{ marginTop: 150 }}>
                <Text
                  variant="title3"
                  fontSize={11}
                  lineHeight={14}
                  color="white"
                  opacity={0.48}
                >
                  FRIDAY 6:00 PM
                </Text>
                <Text
                  variant="title1"
                  lineHeight={30}
                  color="white"
                  paddingVertical="s"
                >
                  Adobe XD Live Event in Europe
                </Text>
              </Box>
              <Box flexDirection="row" marginTop="m">
                <Box>
                  <Box {...StyleSheet.absoluteFillObject} left={15}>
                    <Image source={Images.AVATAR5} />
                  </Box>
                  <Box>
                    <Image source={Images.AVATAR3} />
                  </Box>
                </Box>
                <Box marginLeft="l" justifyContent="center">
                  <Text variant="italicText" color="white" opacity={0.48}>
                    Paul, Carl & 10 others
                  </Text>
                </Box>
              </Box>
            </Box>
            <View style={styles.xdIcon}>
              <Icons.Xd />
            </View>
          </Card>
          <Card
            {...StyleSheet.absoluteFillObject}
            height={351}
            backgroundColor="lightPink"
            borderBottomLeftRadius={80}
            top={250}
          >
            <Box flex={1} justifyContent="center" paddingHorizontal="xl">
              <Box style={{ marginTop: 150 }}>
                <Text
                  variant="title3"
                  fontSize={11}
                  lineHeight={14}
                  color="white"
                  opacity={0.48}
                >
                  TODAY 5:30 PM
                </Text>
                <Text
                  variant="title1"
                  lineHeight={30}
                  color="white"
                  paddingVertical="s"
                >
                  Yoga and Meditation for Beginners
                </Text>
              </Box>
              <Box flexDirection="row" marginTop="m">
                <Box>
                  <Box {...StyleSheet.absoluteFillObject} left={15}>
                    {/* <Icons.Avatar2 /> */}
                    <Image source={Images.AVATAR4} />
                  </Box>
                  <Box>
                    <Image source={Images.AVATAR3} />
                  </Box>
                </Box>
                <Box marginLeft="l" justifyContent="center">
                  <Text variant="italicText" color="white" opacity={0.48}>
                    join Marie, John & 10 others
                  </Text>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card
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
                        Jerome Gaveau
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
                  When one door of happiness closes, another opens, but often we
                  look so long at the closed door that we do not see the one
                  that has been opened for us.
                </Text>
                <Box
                  flexDirection="row"
                  justifyContent="flex-end"
                  marginTop="m"
                >
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
        </Box>
        <Box top={1300}>
          <Card
            width={219}
            height={172}
            backgroundColor="lightPink"
            alignSelf="center"
            borderWidth={1.5}
            borderColor="darkBlueMagenta800"
            borderTopLeftRadius={40}
            borderBottomLeftRadius={10}
          >
            <Image
              source={Images.JONATHAN_FORAGE}
              style={{
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              }}
            />
            <Box flex={1}>
              <Box flex={0.6} />
              <Box
                flex={0.4}
                backgroundColor="darkBlueMagenta700"
                justifyContent="center"
              >
                <Box marginLeft="l">
                  <Text
                    variant="title1"
                    fontSize={14}
                    lineHeight={18}
                    color="white"
                  >
                    NomNom
                  </Text>
                  <Text
                    variant="text1"
                    fontSize={11}
                    lineHeight={14}
                    color="white"
                    opacity={0.56}
                  >
                    2mi, 5 stars
                  </Text>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card
            width={width - 100}
            height={185}
            backgroundColor="darkBlueMagenta700"
            alignSelf="center"
            marginTop="xl"
            borderRadius={40}
            shadowOffset={{ width: 0, height: 4 }}
            shadowRadius={16}
            padding="l"
          >
            <Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text variant="title2" color="white">
                  Description
                </Text>
                <Icons.Chevron fillColor="#fff" />
              </Box>
              <Text variant="text2" color="blueMagenta" marginTop="m">
                When one door of happiness closes, another opens, but often we
                look so long at the closed door that we do not see the one that
                has been opened for us.
              </Text>
            </Box>
          </Card>
          <Card
            backgroundColor="white"
            height={110}
            marginTop="l"
            borderBottomLeftRadius={80}
          />
          <Box
            height={56}
            flexDirection="row"
            justifyContent="flex-end"
            style={{ marginTop: -20, marginRight: 20 }}
          >
            <Box
              backgroundColor="white"
              width={56}
              height={56}
              justifyContent="center"
              alignItems="center"
              borderRadius={56}
            >
              <Icons.Add />
            </Box>
          </Box>
        </Box>
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

export default Cards;
