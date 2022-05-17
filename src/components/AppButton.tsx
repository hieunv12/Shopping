import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Colors, FontWithBold_Barlow, Spacing, FontSize } from '@theme';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import _, { debounce } from 'lodash';
import { useTheme } from '@theme';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  Icon?: any;
  onPress?: any;
  style?: ViewStyle | ViewStyle[] | any;
  labelStyle?: TextStyle | TextStyle[];
  numberOfLines?: number;
  isWrap?: boolean;
  isDelay?: boolean;
}

export function AppButton(props: ButtonProps) {
  const {
    label,
    onPress = () => {},
    style,
    Icon,
    labelStyle,
    disabled,
    numberOfLines,
    isWrap,
    isDelay,
    ...rest
  } = props;

  const { themeColor } = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handler = useCallback(debounce(onPress, 10), []);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? themeColor.colorDisable : Colors.blue,
        },
        style,
      ]}
      onPress={() => {
        if (!isDelay) {
          onPress();
        } else {
          handler();
        }
      }}
    >
      {Icon && <Icon style={styles.icon} />}
      <Text
        style={[
          styles.label,
          { color: disabled ? themeColor.gray : themeColor.white },
          isWrap && { flex: 0, paddingHorizontal: Spacing.width15 },
          labelStyle,
        ]}
        numberOfLines={numberOfLines}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    minHeight: Spacing.height56,
    flexDirection: 'row',
    borderRadius: Spacing.width84,
    backgroundColor: Colors.blue,
  },
  label: {
    textAlign: 'center',
    ...FontWithBold_Barlow.Bold_Barlow_600,
    color: Colors.white,
    fontSize: FontSize.Font17,
    flex: 1,
  },
  icon: {
    marginLeft: Spacing.width20,
  },
});
