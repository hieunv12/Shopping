import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { MainStackComponent } from '../stack/MainStack';

import { useTheme } from '@theme';
import { StatusBar } from 'react-native';

//main stack app
const NavigationApp = React.forwardRef((props: any, ref: any) => {
  // React.useEffect(() => {
  //   dispatch(resetDataSignup());
  // }, [token]);

  const { theme, themeColor } = useTheme();
  console.log(theme);

  const renderStackApp = () => {
    // if (!token) {
    //   return <UnAuthenStack />;
    // } else {
    return (
      <>
        <MainStackComponent />
      </>
    );
  };
  return (
    <NavigationContainer theme={theme} ref={ref}>
      {renderStackApp()}
    </NavigationContainer>
  );
});

export { NavigationApp };
