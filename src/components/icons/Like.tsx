import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  strokeColor?: string;
}

function Like({ width = 24, height = 24, strokeColor = "#757575" }: Props) {
  return (
    <Svg viewBox="0 0 24 24" {...{ width, height }}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="icons/like" clipPath="url(#prefix__a)" fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path
          // eslint-disable-next-line max-len
          d="M19.711 6.029a4.828 4.828 0 00-6.829 0l-.93.93-.93-.93a4.829 4.829 0 00-6.829 6.829l.93.93 6.829 6.828 6.829-6.829.93-.93a4.828 4.828 0 000-6.829z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
}

export default Like;
