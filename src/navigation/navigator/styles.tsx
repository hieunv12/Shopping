import { StyleSheet } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { isTablet } from "react-native-device-info";

export const styles = StyleSheet.create({
  containerAbsolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60 + (isIphoneX() || isTablet() ? 20 : 0),
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    width: isTablet() ? 500 : "auto",
  },
  bottomBarIcon: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    paddingTop: 10,
  },
  indicator: {
    width: 15,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#86C022",
    marginTop: 2,
  },
  viewTabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 80 + (isIphoneX() || isTablet() ? 20 : 0),
  },
  viewImageContainer: {
    width: "100%",
    height: 60,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  imgLeftRight: {
    height: 60,
    width: 30,
  },
  imgCenter: {
    height: 60,
    width: 118,
  },
  imgSide: {
    height: 60,
    flex: 1,
  },
  imgFillWhite: {
    flex: 1,
    backgroundColor: "white",
  },
  icoGift: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 15,
  },
  ViewNotifi: {
    position: "absolute",
    backgroundColor: "red",
    width: 18,
    height: 18,
    borderRadius: 9,
    top: 10,
    right: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  txtNoti: { fontSize: 8, color: "white" },
  txtTabName: {
    textAlign: "center",
    lineHeight: 15,
    color: "#121212",
    marginTop: "5@ms0.3",
  },

  contentContainerTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ico: {
    width: "24@ms",
    height: "24@ms",
  },
});
