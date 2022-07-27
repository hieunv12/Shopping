import {ResponsiveValue} from '@shopify/restyle';
import {FontSize, FontWithBold_Barlow, Text, useTheme} from '@theme';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import TextTicker from 'react-native-text-ticker';

interface AppTextProps {
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  children: any;
  variant: ResponsiveValue<
    'body' | 'button' | 'header' | 'text' | 'title1' | 'title2' | 'title3',
    {
      colors: any;
      spacing: {
        sm: number;
        s: number;
        xs: number;
        m: number;
        l: number;
        xl: number;
      };
      borderRadii: {
        s: number;
        m: number;
        l: number;
        xl: number;
      };
      breakpoints: {
        phone: number;
        tablet: number;
      };
      textVariants: {
        title1: string;
        title2: string;
        title3: string;
        body: string;
        button: string;
        header: string;
        text: string;
      };
    }
  >;
}

export const AppText = (props: AppTextProps) => {
  const {style, numberOfLines, children} = props;
  const {themeColor} = useTheme();
  if (numberOfLines === 1) {
    return (
      <TextTicker
        style={[styles.label, {color: themeColor.textColor}, style]}
        duration={3000}
        loop
        bounce
        repeatSpacer={50}
        marqueeDelay={1000}
      >
        {children}
      </TextTicker>
    );
  }
  return (
    <Text
      style={[styles.label, {color: themeColor.textColor}, style]}
      numberOfLines={numberOfLines}
      variant="button"
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    ...FontWithBold_Barlow.Bold_Barlow_500,
    fontSize: FontSize.Font14,
  },
});
