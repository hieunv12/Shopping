/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackComponent} from '../stack/MainStack';
import {Theme, useTheme} from '@theme';
import SplashScreen from 'react-native-splash-screen';
import {AuthStackComponent} from '../stack/AuthStack';
import {getTokenUserFromStore, setCategory} from '@redux';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_ROUTE} from '../route';
import {Checkout, Forgot, FormProduct, InfoUser, Login, Notification, ProductDetail, Search, SignUp} from "@screens";
import {getCategory} from "../../services/CategoryServices";
const Stack = createStackNavigator();
//main stack app
// const
const NavigationApp = React.forwardRef((props, ref: any) => {
  const dataTheme: {theme: Theme} = useTheme();
  const token = useSelector(getTokenUserFromStore);
    const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
      callApiCategory()
  }, [token]);

    const callApiCategory=()=>{
        getCategory(undefined,(res:any)=>{
            dispatch(setCategory(res))
        },()=>{}).then()
    }
  const renderStackApp = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
              name={SCREEN_ROUTE.MAIN_ROOT}
            component={MainStackComponent}
            options={{headerShown: false}}
          />
        {/*{token==='' &&*/}
        {/*    <Stack.Screen*/}
        {/*        name={SCREEN_ROUTE.AUTH_STACK}*/}
        {/*        component={AuthStackComponent}*/}
        {/*        options={{headerShown: false}}*/}
        {/*    />}*/}
        <Stack.Screen
            name={SCREEN_ROUTE.NOTIFICATION}
            component={Notification}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name={SCREEN_ROUTE.SEARCH}
            component={Search}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name={SCREEN_ROUTE.PRODUCT_DETAIL}
            component={ProductDetail}
            options={{headerShown: false}}
        />
          <Stack.Screen
              name={SCREEN_ROUTE.CHECKOUT}
              component={Checkout}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name={SCREEN_ROUTE.INFO_USER}
              component={InfoUser}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name={SCREEN_ROUTE.CHANGE_PASSWORD}
              component={InfoUser}
              options={{headerShown: false}}
          />

          <Stack.Screen
              name={SCREEN_ROUTE.FORM_PRODUCT}
              component={FormProduct}
              options={{headerShown: false}}
          />
      {/*  auth*/}
          {token ==='' &&
              (
                  <Stack.Screen
                      name={SCREEN_ROUTE.LOGIN}
                      component={Login}
                      options={{headerShown: false}}
                  />

              )}

          {token ==='' &&(
              <Stack.Screen
                  name={SCREEN_ROUTE.SIGNUP}
                  component={SignUp}
                  options={{headerShown: false}}
              />
          )}
          {token ==='' &&(
              <Stack.Screen
                  name={SCREEN_ROUTE.FORGOT}
                  component={Forgot     }
                  options={{headerShown: false}}
              />
          )}
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer theme={dataTheme.theme} ref={ref}>
      {renderStackApp()}
    </NavigationContainer>
  );
});


export {NavigationApp};
