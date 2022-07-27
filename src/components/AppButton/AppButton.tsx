import React, {useCallback} from 'react';
import {
  Colors,
  FontWithBold_Barlow,
  Spacing,
  FontSize,
  Text,
  Box,
} from '@theme';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import _, {debounce} from 'lodash';
import {useTheme} from '@theme';
import {AppText} from '../AppText';
import {styles} from './styles';

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
  hideDelay?: boolean;
  backgroundColor?: string;
}

const WrapContent = ({isWrap, children}: any) => {
  if (isWrap) {
    return (
      <Box flexWrap="wrap" flexDirection="row">
        {children}
      </Box>
    );
  }
  return <>{children}</>;
};

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
    hideDelay = false,
    backgroundColor,
  } = props;

  const {themeColor} = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handler = useCallback(debounce(onPress, 10), []);

  return (
    <WrapContent isWrap={isWrap}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={1}
        style={[
          styles.button,
          {
            backgroundColor:
              backgroundColor || disabled
                ? themeColor.colorDisable
                : Colors.blue,
          },
          style,
        ]}
        onPress={() => {
          if (hideDelay) {
            onPress?.();
          } else {
            handler();
          }
        }}
      >
        {!!Icon && <Icon style={styles.icon} />}
        <AppText
          style={[
            styles.label,
            {
              color: disabled ? themeColor.whiteColor : themeColor.whiteColor,
            },
            isWrap && styles.txtWrap,
            labelStyle,
          ]}
          numberOfLines={numberOfLines}
          variant="button"
        >
          {label}
        </AppText>
      </TouchableOpacity>
    </WrapContent>
  );
}
