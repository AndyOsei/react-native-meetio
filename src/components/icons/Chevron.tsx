import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Rect } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  fillColor?: string;
}

function Chevron({ width = 24, height = 24, fillColor = "#78849e" }: Props) {
  return (
    <Svg viewBox="0 0 24 24" {...{ width, height }}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="icons/chevron" opacity={0.563} clipPath="url(#prefix__a)">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Rect
          width={8}
          height={2}
          rx={1}
          transform="rotate(45 -6.01 14.389)"
          fill={fillColor}
        />
        <Rect
          data-name="line"
          width={8}
          height={2}
          rx={1}
          transform="rotate(-45 22.696 -6.58)"
          fill={fillColor}
        />
      </G>
    </Svg>
  );
}

export default Chevron;
