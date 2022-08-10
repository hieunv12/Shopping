import {BORDER_RADIUS, Colors, Spacing} from "@theme";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  inputStyle: {
    height: Spacing.height48,
    minHeight: 48,
    paddingHorizontal: Spacing.width10,
    borderWidth: 1, borderRadius: BORDER_RADIUS, borderColor: `${Colors.blue}80`
  },
  btnActive: {
    borderColor: `${Colors.blue}`
  }
});