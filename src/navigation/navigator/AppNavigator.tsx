import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackComponent} from '../stack/MainStack';
import {useTheme} from '@theme';

//main stack app
const NavigationApp = React.forwardRef((props: any, ref: any) => {
  const dataTheme: any = useTheme();

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
    <NavigationContainer theme={dataTheme.theme} ref={ref}>
      {renderStackApp()}
    </NavigationContainer>
  );
});

export {NavigationApp};
