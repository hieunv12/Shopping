import { iconProps } from '@assets';
import React from 'react';
import Svg, { G, Rect, Circle, Path } from 'react-native-svg';

export const TradeIcon = (props: iconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.917 3.417C24.473 7.974 24.473 15.36 19.917 19.917C15.36 24.473 7.974 24.473 3.417 19.917C-1.139 15.36 -1.139 7.974 3.417 3.417C7.974 -1.139 15.36 -1.139 19.917 3.417ZM8.66201 11.667L11.667 8.66198L14.672 11.667L11.667 14.672L8.66201 11.667ZM7.24801 13.081C6.46701 12.3 6.46701 11.034 7.24801 10.253L10.253 7.24798C11.034 6.46698 12.3 6.46698 13.081 7.24798L16.086 10.253C16.867 11.034 16.867 12.3 16.086 13.081L13.081 16.086C12.3 16.867 11.034 16.867 10.253 16.086L7.24801 13.081Z"
      fill="#F2CA24"
    />
  </Svg>
);
