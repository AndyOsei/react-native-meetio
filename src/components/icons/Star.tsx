import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  fillColor?: string;
}

function Star({ width = 8, height = 8, fillColor = "#fff" }: Props) {
  return (
    <Svg viewBox="0 0 8 8" {...{ width, height }}>
      <Path
        // eslint-disable-next-line max-len
        d="M7.987 3.032a.234.234 0 00-.187-.156l-2.483-.378L4.212.124a.244.244 0 00-.424 0L2.682 2.498.2 2.876a.235.235 0 00-.132.4l1.808 1.84-.425 2.616a.234.234 0 00.345.243L4 6.75l2.2 1.22a.234.234 0 00.349-.238l-.424-2.621 1.808-1.839a.235.235 0 00.054-.24z"
        fill={fillColor}
      />
    </Svg>
  );
}

export default Star;
