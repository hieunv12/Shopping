import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';

import {CustomTabBar} from './CustomTab';

import {ROUTER_BOTTOM_TAB, SCREEN_ROUTE} from '@navigation';
import {Platform} from "react-native";
import {IconCart, IconCategory, IconHome, IconProfile, Spacing, UserIcon} from "@assets";
import {CanvasScreen, Cart, Home, Menu, Profile} from "@screens";
import {Colors, Shadow} from "@theme";
import {useTranslation} from "react-i18next";
import {IconProfiles} from "../../assets/icon/svg";
export {SCREEN_ROUTE} from '../route';
export {TabNavigator};

const Tab = createBottomTabNavigator();
const TabNavigator = memo(function () {
    const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
          tabBarStyle: {
            backgroundColor:Colors.background,
              borderTopColor:Colors.transparent,
              ...Shadow.normal,
              height: Platform.OS === "ios" ? Spacing.height80 : Spacing.height60,
              paddingBottom:
                  Platform.OS === "ios" ? Spacing.height20 : Spacing.height5,
          },
      }}
    >
        <Tab.Screen name={SCREEN_ROUTE.HOME_PAGE}
                    options={{
                        title:t('home'),
                        tabBarActiveTintColor: Colors.colorMain,
                        tabBarInactiveTintColor: Colors.black,
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: "400",
                            fontFamily:'Poppins-Medium'
                        },
                        tabBarIcon:({focused})=><IconHome iconFillColor={focused?Colors.colorMain:Colors.black}/>
        }}
                    component={Home} key={SCREEN_ROUTE.HOME_PAGE} />
        <Tab.Screen name={SCREEN_ROUTE.MENU_PAGE}
                    options={{
                        title:t('menu'),
                        tabBarActiveTintColor: Colors.colorMain,
                        tabBarInactiveTintColor: Colors.black,
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: "400",
                            fontFamily:'Poppins-Medium'
                        },
                        tabBarIcon:({focused})=><IconCategory iconFillColor={focused?Colors.colorMain:Colors.black}/>
                    }}
                    component={Menu} key={SCREEN_ROUTE.MENU_PAGE} />
        <Tab.Screen name={SCREEN_ROUTE.CART_PAGE}
                    options={{
                        title:t('cart'),
                        tabBarActiveTintColor: Colors.colorMain,
                        tabBarInactiveTintColor: Colors.black,
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: "400",
                            fontFamily:'Poppins-Medium'
                        },
                        tabBarIcon:({focused})=><IconCart iconFillColor={focused?Colors.colorMain:Colors.black}/>
                    }}
                    component={Cart} key={SCREEN_ROUTE.CART_PAGE} />

        <Tab.Screen name={SCREEN_ROUTE.PROFILE_PAGE} component={Profile} key={SCREEN_ROUTE.PROFILE_PAGE} options={{
            // tabBarShowLabel: false,
            title:'Account',
            headerTitleAlign: "center",
            headerTitleStyle: {
                color:Colors.black,
                marginLeft: Spacing.width10,

            },
            tabBarIcon:({focused})=><IconProfiles iconFillColor={focused?Colors.colorMain:Colors.black}/>,
            tabBarActiveTintColor: Colors.colorMain,
            tabBarInactiveTintColor: Colors.black,
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "400",
                fontFamily:'Poppins-Medium'
            },
        }}/>
    </Tab.Navigator>
  );
});


