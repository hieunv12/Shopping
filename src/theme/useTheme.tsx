import {useContext} from 'react';
import {Theme, ThemeAppContext, useThemeApp} from './themeSetting';

export const useTheme = () => {
  const theme: Theme = useThemeApp();
  const {updateTheme} = useContext(ThemeAppContext);
  return {
    theme,
    themeColor: theme.colors,
    updateTheme,
  };
};
