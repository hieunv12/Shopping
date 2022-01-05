import { iconProps } from '@assets';
import React from 'react';
import Svg, { G, Rect, Circle, Path } from 'react-native-svg';

export const MarketIcon = (props: iconProps) => (
  <Svg width={23} height={25} viewBox="0 0 23 25" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.447.625a4.664 4.664 0 00-4.666 0L2.333 4.348A4.669 4.669 0 000 8.39v7.444c0 1.668.89 3.207 2.333 4.041l6.448 3.723a4.664 4.664 0 004.666 0l6.448-3.723a4.667 4.667 0 002.333-4.041V8.39a4.667 4.667 0 00-2.333-4.043L13.447.626zm3.159 8.329a1.166 1.166 0 00-1.65 0l-2.675 2.675-1.509-1.51a1.168 1.168 0 00-1.65 0l-2.916 2.918a1.166 1.166 0 101.65 1.65l2.091-2.092 1.509 1.508a1.168 1.168 0 001.65 0l3.5-3.5a1.168 1.168 0 000-1.65z"
      fill="#5F5F5F"
    />
  </Svg>
);
