import React from "react";
import { Dimensions } from "react-native";
import {
  border,
  backgroundColor,
  spacing,
  layout,
  SpacingProps,
  BorderProps,
  LayoutProps,
  BackgroundColorProps,
  useRestyle,
} from "@shopify/restyle";

import { Box, Text, Theme } from "./Theme";

type HeaderProps = {
  title?: string | React.ReactNode;
  titleColor?: keyof Theme["colors"];
  titleVariant?: keyof Theme["textVariants"];
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
};

const restyleFunctions = [spacing, border, backgroundColor, layout];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  HeaderProps;

const { width } = Dimensions.get("window");

const Header: React.FC<Props> = ({
  title,
  titleColor,
  titleVariant,
  rightIcon,
  leftIcon,
  children,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest);
  const showIcon = rightIcon || leftIcon;
  const flex = showIcon ? 0.5 : 1;
  return (
    <Box height={72} backgroundColor="mainBackground" {...{ width }} {...props}>
      {!children && (
        <Box flex={1} marginTop="l">
          {showIcon && (
            <Box
              flex={flex}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {leftIcon}
              {rightIcon}
            </Box>
          )}
          {typeof title === "string" && (
            <Box flex={flex} alignItems="flex-start">
              <Text
                variant={titleVariant || "title1"}
                color={titleColor}
                marginLeft="xl"
              >
                {title}
              </Text>
            </Box>
          )}
          {typeof title === "object" && (
            <Box flex={flex} alignItems="flex-start">
              {title}
            </Box>
          )}
        </Box>
      )}
      {children && children}
    </Box>
  );
};

export default Header;
