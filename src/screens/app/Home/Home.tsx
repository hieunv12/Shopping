import React, { memo, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Flash3DIcon, DownIcon3D, SearchIcon, SettingsIcon } from '@assets';
import { Box, Text, useTheme } from '@theme';

const Home = memo(() => {
  const { updateTheme } = useTheme();
  const [isDark, setDark] = useState(true);
  return (
    <SafeAreaView>
      {/* <SettingsIcon strokeColor={themeColor.icon} />
      <SearchIcon strokeColor={themeColor.icon} /> */}
      <Box>
        <Text
          variant={'text'}
          onPress={() => {
            updateTheme(!isDark);
            setDark(!isDark);
          }}
        >
          OKOK
        </Text>
      </Box>
      <DownIcon3D />
      <Flash3DIcon />
    </SafeAreaView>
  );
});

export { Home };
