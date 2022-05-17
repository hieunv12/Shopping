import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageConstant } from '@types';
import React from 'react';
import { lightTheme, darkTheme } from './themeMode';

export const ThemeContext = React.createContext({
  theme: darkTheme,
  updateTheme: (isLight: boolean) => {},
});

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = React.useState(darkTheme);

  const onChangeTheme = React.useCallback(async () => {
    let oldTheme = (await AsyncStorage.getItem(StorageConstant.THEME)) || '';
    setTheme(!oldTheme ? darkTheme : lightTheme);
  }, []);

  React.useEffect(() => {
    onChangeTheme();
  }, [onChangeTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme: (isLight: boolean) => {
          setTheme(isLight ? lightTheme : darkTheme);
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
