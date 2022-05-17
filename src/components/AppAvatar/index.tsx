import {CommonImage} from '@assets';
import React from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import FastImage, {ResizeMode} from 'react-native-fast-image';

interface propsImage {
  uri: string;
  style?: StyleProp<ImageStyle> | any;
  resizeMode?: ResizeMode;
}

const AppAvatar = React.memo((props: propsImage) => {
  const {uri, style, resizeMode} = props;
  return (
    <FastImage
      source={uri ? {uri} : CommonImage.NoAvatar}
      style={style}
      resizeMode={resizeMode}
    />
  );
});

export {AppAvatar};
