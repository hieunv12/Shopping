import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const loginScreen = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{height: '100%'}}
    ></KeyboardAwareScrollView>
  );
};
