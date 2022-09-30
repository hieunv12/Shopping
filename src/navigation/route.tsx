import {Home, Profile} from "@screens";
import {CanvasScreen} from "../screens/app/Canvas/Canvas";

export const SCREEN_ROUTE = {
  AUTH_STACK: 'AUTH_STACK',
  MAIN_ROOT: 'MAIN_ROOT',
  MAIN_STACK: 'MAIN_STACK',
  HOME_PAGE: 'HOME_PAGE',
  CANVAS: 'CANVAS',
  PROFILE_PAGE: 'PROFILE_PAGE',
  MAIN_PAGE: 'MAIN_PAGE',
  DISCOVER_PAGE: 'DISCOVER_PAGE',
  ACCOUNT_PAGE: 'ACCOUNT_PAGE',
  LOGIN: 'LOGIN',
};

export const ROUTER_BOTTOM_TAB = [
  {
    key: SCREEN_ROUTE.HOME_PAGE,
    route: Home,
  },
  {
    key: SCREEN_ROUTE.CANVAS,
    route: CanvasScreen,
  }, {
    key: SCREEN_ROUTE.MAIN_PAGE,
    route: Home,
  }, {
    key: SCREEN_ROUTE.DISCOVER_PAGE,
    route: Home,
  }, {
    key: SCREEN_ROUTE.PROFILE_PAGE,
    route: Profile,
  },
]
