import React, {forwardRef, LegacyRef, useState} from 'react';
import {BORDER_RADIUS, Box, Colors, Theme, useTheme} from '@theme';
import {
  KeyboardTypeOptions,
  Pressable, ReturnKeyTypeOptions,
  TextInput,
  TextInputProps,
  ViewProps
} from 'react-native';
import {styles} from './styles';
import {AppText} from '../AppText';
import {SpacingProps, TypographyProps} from '@shopify/restyle';
import {Eye, EyeActive} from '@assets';

export interface appInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  touched?: boolean;
  returnKeyType?: ReturnKeyTypeOptions | undefined
}


export const AppInput = forwardRef((props: appInputProps & SpacingProps<Theme> &
  TypographyProps<Theme> & ViewProps, ref: any)  =>{
  const {
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    maxLength,
    keyboardType,
    error,
    touched,
    returnKeyType
  } = props;
  const [isFocus, setFocus] = useState(false);
  const [isPrivateText, setSecureTextEntry] = useState(secureTextEntry);
  const {themeColor} = useTheme();

  return (
    <Box style={{width: '100%'}} {...props}>
      {!!label && <AppText marginBottom={"s"}>{label}</AppText>}
      <Box justifyContent={"center"}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPrivateText}
          placeholder={placeholder}
          style={[styles.inputStyle, {color: themeColor.textColor}, isFocus && styles.btnActive, secureTextEntry && {paddingRight: 50}]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          maxLength={maxLength}
          ref={ref}
          returnKeyType={returnKeyType?returnKeyType:'default'}
          keyboardType={keyboardType}
          autoCapitalize="none"
          placeholderTextColor={themeColor.placeHoderColor}
          clearButtonMode="while-editing"
        />
        {!!error && touched && <AppText variant={"title3"} fontSize={11} style={{color: Colors.lightRed}} marginTop="sm">{error}</AppText>}
        {secureTextEntry && <Box position={"absolute"} right={10}>
          <Pressable onPress={() => {
            setSecureTextEntry(prv => !prv);
          }} >
            {isPrivateText ? <Eye /> : <EyeActive />}
          </Pressable>
        </Box>}
      </Box>
    </Box >
  )
})
