import React, { memo, useCallback } from 'react';
import {
  InteractionManager,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { styles } from './styles';
import {
  DiscoverIcon,
  MainIcon,
  MarketIcon,
  TradeIcon,
  UserIcon,
} from '@assets';
import { SCREEN_ROUTE } from '@navigation';

let renderSourceImage = (label: string) => {
  switch (label) {
    case SCREEN_ROUTE.HOME_PAGE:
      return <MarketIcon />;
    case SCREEN_ROUTE.TRADE_PAGE:
      return <TradeIcon />;
    case SCREEN_ROUTE.MAIN_PAGE:
      return <MainIcon />;
    case SCREEN_ROUTE.DISCOVER_PAGE:
      return <DiscoverIcon />;
    case SCREEN_ROUTE.ACCOUNT_PAGE:
      return <UserIcon />;
    default:
      break;
  }
};

export const CustomTabBar = memo(function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const arrayLable = ['Market', 'Trade', '', 'Discover', 'Me'];
  return (
    <View style={styles.containerAbsolute}>
      <View style={styles.contentContainer} pointerEvents="box-none">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            InteractionManager.runAfterInteractions(() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            });
          };

          return (
            <TouchableWithoutFeedback
              key={'tab-' + index.toString()}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
            >
              <View style={styles.bottomBarIcon}>
                {options &&
                  options.tabBarIcon &&
                  options.tabBarIcon({
                    focused: isFocused,
                    color: '',
                    size: 0,
                  })}
                {renderSourceImage(label)}
                {index !== 2 && (
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.txtTabName,
                      { color: isFocused ? '#8BC724' : '#8C8C8C' },
                    ]}
                  >
                    {arrayLable[index]}
                  </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
});
