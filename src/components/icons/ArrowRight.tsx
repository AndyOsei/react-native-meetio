import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  fillColor?: string;
}

function ArrowRight({ width = 24, height = 24, fillColor = "#fff" }: Props) {
  return (
    <Svg viewBox="0 0 24 24" {...{ width, height }}>
      <Path
        data-name="arrow_forward - material"
        d="M6.5 0L13 6.5 6.5 13l-1.148-1.148L9.886 7.3H0V5.7h9.886L5.352 1.148z"
        fill={fillColor}
      />
    </Svg>
  );
}

export default ArrowRight;
