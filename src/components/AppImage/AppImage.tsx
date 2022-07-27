import {NoImage} from '@assets';
import {Box, useTheme} from '@theme';
import React, {useEffect, useState} from 'react';
import {ImageStyle, StyleProp, ActivityIndicator} from 'react-native';
import FastImage, {ResizeMode, Source} from 'react-native-fast-image';

interface propsImage {
  uri: string;
  style?: StyleProp<ImageStyle> | any;
  resizeMode?: ResizeMode;
  defaultSource?: Source;
}

const AppImage = React.memo((props: propsImage) => {
  const {uri, style, resizeMode, defaultSource} = props;
  const [isLoading, setLoading] = useState(true);
  const {themeColor} = useTheme();
  useEffect(() => {
    setLoading(true);
  }, [uri]);

  return (
    <Box justifyContent={'center'} alignItems="center">
      <FastImage
        source={uri ? {uri} : defaultSource || NoImage}
        style={style}
        resizeMode={resizeMode}
        onLoadEnd={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
      {isLoading && (
        <ActivityIndicator
          color={themeColor.primary}
          style={{position: 'absolute'}}
        />
      )}
    </Box>
  );
});

export {AppImage};
