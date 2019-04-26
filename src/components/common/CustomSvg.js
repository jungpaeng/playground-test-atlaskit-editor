import * as React from 'react';

const CustomSVG = ({
  width,
  height,
  d
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    focusable="false"
    role="presentation"
  >
    <path
      d={d}
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default CustomSVG;