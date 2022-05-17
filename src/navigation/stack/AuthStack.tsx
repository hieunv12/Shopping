import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_ROUTE } from '../route';
import { TabNavigator } from '../navigator/TabNavigator';

const AuthStack = createStackNavigator();

const MainStackComponent = memo(() => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_ROUTE.MAIN_STACK}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={SCREEN_ROUTE.LOGIN} component={TabNavigator} />
    </AuthStack.Navigator>
  );
});

export { MainStackComponent };
