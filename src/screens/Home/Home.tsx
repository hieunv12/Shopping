import React, { memo } from 'react';
import { View, SafeAreaView } from 'react-native';
import { AppText } from '@components';
import { SearchIcon, SettingsIcon } from '@assets';
import { useTheme } from '@theme';

const Home = memo(() => {
  const { themeColor } = useTheme();
  return (
    <SafeAreaView>
      <AppText>Hello</AppText>
      <SettingsIcon strokeColor={themeColor.icon} />
      <SearchIcon strokeColor={themeColor.icon} />
    </SafeAreaView>
  );
});

export { Home };
