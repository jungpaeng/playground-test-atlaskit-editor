import * as React from "react";

interface Props {
  width: string;
  height: string;
  d: string;
}

const CustomSVG = ({ width, height, d }: Props) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    focusable="false"
    role="presentation"
  >
    <path d={d} fill="currentColor" fillRule="evenodd" />
  </svg>
);

export default CustomSVG;
