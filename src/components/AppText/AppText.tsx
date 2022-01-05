import {
  Text as ReactNativeText,
  TextProps as TextProperties,
  TextStyle,
  Platform,
  ViewStyle,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Colors as valueColor, FontSize, Device, FontWithBold } from '@assets';
import { useTheme } from '@theme';

export interface TextProps extends TextProperties {
  children?: React.ReactNode;

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;

  color?: string;

  bold?: boolean;
  multiLanguage?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  numberOfLines?: any;
  onTextLayout?: any;
}

export function AppText(props: TextProps) {
  // grab the props
  let [funcText, setText] = useState('');
  const {
    txOptions,
    text = '',
    children,
    style,
    bold,
    numberOfLines,
    color,
    multiLanguage = false,
    onPress,
    containerStyle = {},
    onTextLayout,
    ...rest
  } = props;
  // const content = (text || children)
  const content = text || children;
  useEffect(() => {}, []);

  const { themeColor } = useTheme();

  return (
    <ReactNativeText
      numberOfLines={numberOfLines}
      {...rest}
      onTextLayout={onTextLayout}
      onPress={onPress}
      allowFontScaling={false}
      style={[
        {
          color: color ? color : themeColor.colorText,
          fontSize: FontSize.Font14,
        },
        bold ? { ...FontWithBold.Bold_600 } : { ...FontWithBold.Bold_500 },
        style,
      ]}
    >
      {content}
    </ReactNativeText>
  );
}
