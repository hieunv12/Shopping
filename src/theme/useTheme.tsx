import { useContext } from 'react';

import { ThemeAppContext, useThemeApp } from './themeSetting';

export const useTheme = () => {
  const theme = useThemeApp();
  const { updateTheme } = useContext(ThemeAppContext);
  return {
    theme,
    themeColor: theme.colors,
    updateTheme,
  };
};
