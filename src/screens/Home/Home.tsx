import React, { memo } from 'react';
import { View, SafeAreaView } from 'react-native';
import { AppText } from '@components';
import { SearchIcon, SettingsIcon } from '@assets';
import { useTheme } from '@theme';

const Home = memo(() => {
  const theme = useTheme();
  console.log(theme.theme.colors.icon);
  return (
    <SafeAreaView>
      <AppText>Hello</AppText>
      <SettingsIcon strokeColor={theme.theme.colors.icon} />
      <SearchIcon />
    </SafeAreaView>
  );
});

export { Home };
