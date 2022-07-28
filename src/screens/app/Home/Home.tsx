import React, {memo, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Flash3DIcon, DownIcon3D} from '@assets';
import {Box, Text, useTheme} from '@theme';
import {AppButton, AppText} from '@components';
import {TouchableOpacity} from 'react-native-gesture-handler';
let num = 1;

const Home = () => {
  const {updateTheme} = useTheme();
  const [isDark, setDark] = useState(true);
  // return null;
  return (
    <SafeAreaView>
      <AppButton
        label="OKOK"
        isWrap
        onPress={() => {
          num += 1;
          setDark(!isDark);
          updateTheme(!isDark);
        }}
      />
    </SafeAreaView>
  );
};

export {Home};
