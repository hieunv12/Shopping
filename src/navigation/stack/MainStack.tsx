import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_ROUTE } from '../route';
import { TabNavigator } from '../navigator/TabNavigator';

const MainStack = createStackNavigator();

const MainStackComponent = memo(() => {
  return (
    <MainStack.Navigator initialRouteName={SCREEN_ROUTE.MAIN_STACK}>
      <MainStack.Screen
        name={SCREEN_ROUTE.MAIN_STACK}
        component={TabNavigator}
      />
    </MainStack.Navigator>
  );
});

export { MainStackComponent };
