import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';

import {CustomTabBar} from './CustomTab';

import {ROUTER_BOTTOM_TAB, SCREEN_ROUTE} from '@navigation';
import {Platform} from "react-native";
import {IconHome, Spacing, UserIcon} from "@assets";
import {CanvasScreen, Home, Profile} from "@screens";
import {Colors} from "@theme";
export {SCREEN_ROUTE} from '../route';
export {TabNavigator};

const Tab = createBottomTabNavigator();
const TabNavigator = memo(function () {
  return (
    <Tab.Navigator
      // tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
          tabBarStyle: {
              height: Platform.OS === "ios" ? Spacing.height90 : Spacing.height60,
              paddingBottom:
                  Platform.OS === "ios" ? Spacing.height30 : Spacing.height5,
          },
      }}
    >
        <Tab.Screen name={SCREEN_ROUTE.HOME_PAGE}
                    options={{
            tabBarShowLabel: false,
                        title:'Home',
                        tabBarIcon:({focused})=><IconHome/>

            // tabBarIcon: ({focused}) =>
            //     focused ? <IconComponentsActive /> : <IconComponents />,
        }}
                    component={Home} key={SCREEN_ROUTE.HOME_PAGE} />
        <Tab.Screen name={SCREEN_ROUTE.CANVAS}  component={CanvasScreen} key={SCREEN_ROUTE.CANVAS} />
        <Tab.Screen name={SCREEN_ROUTE.PROFILE_PAGE} component={Profile} key={SCREEN_ROUTE.PROFILE_PAGE} options={{
            tabBarShowLabel: false,
            title:'Account',
            headerTitleAlign: "center",
            headerTitleStyle: {
                color:Colors.black,
                marginLeft: Spacing.width10,
            },
            tabBarIcon:({focused})=><UserIcon/>
            // tabBarIcon: ({focused}) =>
            //     focused ? <IconComponentsActive /> : <IconComponents />,
        }}/>
    </Tab.Navigator>
  );
});


