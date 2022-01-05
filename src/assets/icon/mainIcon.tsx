import { iconProps } from '@assets';
import React from 'react';
import Svg, { G, Rect, Circle, Path } from 'react-native-svg';

export const MainIcon = (props: iconProps) => (
  <Svg width="36" height="40" viewBox="0 0 38 40" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1364 8.30616C15.1263 7.42849 12.3516 0 12.3516 0C12.3516 0 22.6026 0.194357 26.9916 8.30643C26.9916 8.30616 28.0458 5.84031 27.5225 4.73709C29.0514 5.81205 30.81 7.31758 32.4189 9.39312C37.1964 15.5566 37.3541 22.4873 37.266 25.1787C37.0613 27.0068 36.3974 30.4258 33.8608 33.6211C28.4735 40.4079 19.5185 40.0397 18.4501 39.9757C18.4388 39.9749 18.4283 39.9749 18.417 39.9749C17.87 39.9837 2.28118 39.5203 0.65072 24.8758C0.64884 24.8604 0.64535 24.8452 0.644007 24.83C0.593232 24.2704 -0.159797 14.2518 10.3238 4.47821C10.3241 4.47794 10.3244 4.47741 10.3247 4.47768C10.3319 4.49741 11.9618 8.82418 13.1364 8.30616Z"
      fill={props.iconFillColor || '#5F5F5F'}
    />
  </Svg>
);
