import { loadingGlobal } from '@assets';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={styles.absoluteFill}>
      <View style={styles.square}>
        <Image source={loadingGlobal} style={styles.imgGif} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  absoluteFill: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 999,
  },
  square: {
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imgGif: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
});
