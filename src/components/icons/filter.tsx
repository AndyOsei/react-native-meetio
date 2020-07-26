import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  strokeColor?: string;
}

function Filter({
  width = 17.483,
  height = 17.483,
  strokeColor = "#757575",
}: Props) {
  return (
    <Svg viewBox="0 0 17.483 15.885" {...{ width, height }}>
      <Path
        d="M16.733.75H.75l6.393 7.56v5.226l3.2 1.6V8.31z"
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default Filter;
