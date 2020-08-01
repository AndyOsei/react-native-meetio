import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  strokeColor?: string;
}

function Comment({ width = 24, height = 24, strokeColor = "#757575" }: Props) {
  return (
    <Svg viewBox="0 0 24 24" {...{ width, height }}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="icons/comment" clipPath="url(#prefix__a)" fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path
          // eslint-disable-next-line max-len
          d="M20.5 15.167a1.778 1.778 0 01-1.778 1.778H8.056L4.5 20.5V6.278A1.778 1.778 0 016.278 4.5h12.444A1.778 1.778 0 0120.5 6.278z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
}

export default Comment;
