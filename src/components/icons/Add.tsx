import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
}

function Add(props: Props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="icon/add" clipPath="url(#prefix__a)">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path
          // eslint-disable-next-line max-len
          d="M11.25 19.25v-6.5h-6.5a.75.75 0 010-1.5h6.5v-6.5a.75.75 0 111.5 0v6.5h6.5a.75.75 0 010 1.5h-6.5v6.5a.75.75 0 11-1.5 0z"
          fill="#241332"
        />
      </G>
    </Svg>
  );
}

export default Add;
