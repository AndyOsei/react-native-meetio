import React from "react";
import { TextInput, TextInputProps } from "react-native";
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
  useTheme,
} from "@shopify/restyle";

import { Box, Theme } from "./Theme";

const restyleFunctions = [spacing, border, backgroundColor, layout];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> & {
    inputProps?: TextInputProps;
  };

const Input = React.forwardRef<TextInput, Props>(
  ({ inputProps, ...rest }, ref) => {
    const props = useRestyle(restyleFunctions, rest);
    const theme = useTheme<Theme>();

    return (
      <Box backgroundColor="white" {...props}>
        <TextInput
          ref={ref}
          selectionColor={theme.colors.lightPink}
          {...inputProps}
        />
      </Box>
    );
  }
);

export default Input;
