import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabBar } from './CustomTab';

import { styles } from './styles';
import { UserIcon } from '@assets';
import { Home } from '@screens';
export { SCREEN_ROUTE } from '../route';

const Tab = createBottomTabNavigator();

const TabNavigator = memo(function () {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <UserIcon
              style={[
                styles.ico,
                { tintColor: focused ? '#8BC724' : '#8C8C8C' },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Handbook"
        component={Home}
        options={{
          title: 'ÔPT',
          tabBarIcon: ({ focused }) => (
            <UserIcon
              style={[
                styles.ico,
                { tintColor: focused ? '#8BC724' : '#8C8C8C' },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen name="Loyalty" component={Home} />
      <Tab.Screen
        name="Vaccine"
        component={Home}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <UserIcon
              style={[
                styles.ico,
                { tintColor: focused ? '#8BC724' : '#8C8C8C' },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => (
            <UserIcon
              style={[
                styles.ico,
                { tintColor: focused ? '#8BC724' : '#8C8C8C' },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
});

export { TabNavigator };
