import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
}

function Back(props: Props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="icons/dark/back" clipPath="url(#prefix__a)" fill="none">
        <Path d="M0 0h24v24H0z" />
        <G
          stroke="#757575"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <Path data-name="Line 36" d="M19 12H5" />
          <Path data-name="Path 12" d="M12 19l-7-7 7-7" />
        </G>
      </G>
    </Svg>
  );
}

export default Back;
