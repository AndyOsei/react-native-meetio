import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
}

function Filter(props: Props) {
  return (
    <Svg width={17.483} height={15.885} viewBox="0 0 17.483 15.885" {...props}>
      <Path
        d="M16.733.75H.75l6.393 7.56v5.226l3.2 1.6V8.31z"
        fill="none"
        stroke="#757575"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default Filter;
