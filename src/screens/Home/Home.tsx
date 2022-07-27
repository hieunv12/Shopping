import React, {memo} from 'react';
import {View, SafeAreaView} from 'react-native';
import {AppButton, AppText} from '@components';
import {Flash3DIcon, DownIcon3D, SearchIcon, SettingsIcon} from '@assets';
import {useTheme} from '@theme';

const Home = memo(() => {
  const {themeColor, updateTheme} = useTheme();
  return (
    <SafeAreaView >
      <AppButton lable='OKOK' />
    </SafeAreaView>
  );
});

export {Home};
