import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  fillColor?: string;
}

function Search({ width = 24, height = 24, fillColor = "#757575" }: Props) {
  return (
    <Svg viewBox="0 0 24 24" {...{ width, height }}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Icons/search/gray" clipPath="url(#prefix__a)">
        <Path fill="rgba(52,151,253,0)" d="M0 0h24v24H0z" />
        <Path
          // eslint-disable-next-line max-len
          d="M16.117 14.96l4.643 4.64a.82.82 0 01-1.16 1.16l-4.64-4.643a7.363 7.363 0 111.157-1.157zm-5.753 1.131a5.727 5.727 0 10-5.728-5.727 5.727 5.727 0 005.728 5.727z"
          fill={fillColor}
        />
      </G>
    </Svg>
  );
}

export default Search;
