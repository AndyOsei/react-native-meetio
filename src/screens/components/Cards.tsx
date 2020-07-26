import React from "react";
import { Dimensions } from "react-native";

import { Box } from "../../components";

const { width } = Dimensions.get("window");

const Cards = () => {
  return <Box width={width} />;
};

export default Cards;
