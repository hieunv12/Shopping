import React, {useCallback} from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {AppText} from '../AppText';
import {Button} from 'react-native-paper';
import {useTheme} from '@theme';

interface AppButtonProps {
  onPress?: () => void;
  icon?: string;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  lable: string;
}
export const AppButton = (props: AppButtonProps) => {
  const {onPress, icon, mode = 'contained', lable} = props;
  const {themeColor} = useTheme();

  return (
    <Button
      icon={icon}
      mode={mode}
      onPress={onPress}
      labelStyle={{color: 'red'}}
    >
      {lable}
    </Button>
  );
};
