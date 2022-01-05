import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { MainStackComponent } from '../stack/MainStack';

//main stack app
const NavigationApp = React.forwardRef((props: any, ref: any) => {
  // React.useEffect(() => {
  //   dispatch(resetDataSignup());
  // }, [token]);

  const renderStackApp = () => {
    // if (!token) {
    //   return <UnAuthenStack />;
    // } else {
    return <MainStackComponent />;
    // }
  };
  return (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  );
});

export { NavigationApp };
