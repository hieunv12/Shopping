import { iconProps } from '@assets';
import React from 'react';
import Svg, { G, Rect, Circle, Path } from 'react-native-svg';

export const DiscoverIcon = (props: iconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.5 0C1.567 0 0 1.567 0 3.5V14C0 17.866 3.134 21 7 21H17.5C19.433 21 21 19.433 21 17.5V7C21 3.134 17.866 0 14 0H3.5ZM7.58299 9.33301C6.93899 9.33301 6.41701 9.85601 6.41701 10.5C6.41701 11.144 6.93899 11.667 7.58299 11.667H13.417C14.061 11.667 14.583 11.144 14.583 10.5C14.583 9.85601 14.061 9.33301 13.417 9.33301H7.58299Z"
      fill="#5F5F5F"
    />
  </Svg>
);
