import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Text } from "./Theme";

interface TabBarProps {
  tabs: string[];
}

interface TabProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const Tab: React.FC<TabProps> = ({ title, active, onPress }) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        borderRadius={30}
        backgroundColor={active ? "lightBlueMagenta400" : "white"}
        marginHorizontal="m"
        style={{ paddingHorizontal: 10 }}
      >
        <Text
          variant="title3"
          color={active ? "white" : "blueMagenta"}
          lineHeight={26}
        >
          {title}
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

const TabBar: React.FC<TabBarProps> = ({ tabs = [] }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <Box
      flex={1}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      {tabs.map((tab, indexVal) => (
        <Tab
          key={indexVal}
          title={tab}
          active={indexVal === index}
          onPress={() => setIndex(indexVal)}
        />
      ))}
    </Box>
  );
};

export default TabBar;
