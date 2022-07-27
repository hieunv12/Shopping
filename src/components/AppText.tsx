import {FontWithBold_Barlow} from '@theme';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface AppTextProps {
  children: any;
  style?: any;
  onPress?: any;
  numberOfLines?: number;
  isPrice?: boolean;
}

const AppText = React.memo((props: AppTextProps) => {
  const {style, onPress, numberOfLines} = props;
  let {children} = props;
  return (
    <>
      <Text
        style={[styles.txtStyle, style]}
        onPress={onPress}
        numberOfLines={numberOfLines}
        allowFontScaling={false}
      >
        {children}
      </Text>
    </>
  );
});

const styles = StyleSheet.create({
  txtStyle: {
    ...FontWithBold_Barlow.Bold_Barlow_500,
  },
});

export {AppText};
