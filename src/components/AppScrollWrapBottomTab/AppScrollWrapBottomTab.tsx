import {useRef} from "react";
import {Animated} from "react-native";

interface AppScrollWrapBottomTabProps {
  children: any;
}

export const AppScrollWrapBottomTab = (props: AppScrollWrapBottomTabProps) => {
  const translateY = useRef(new Animated.Value(0));

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: translateY.current}}}],
        {
          useNativeDriver: true
        },
      )}
    >
      {props.children}
    </Animated.ScrollView>
  )
}