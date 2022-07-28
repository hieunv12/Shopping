/* eslint-disable react-native/no-inline-styles */
import {Animated, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import {AppText, Block, BlurImage} from '@components';
import {styles} from './styles';
import {t} from 'i18next';
import {Pagination} from '../Pagination';
import {Spacing} from '@theme';
interface HeaderPropsType {
  onDoubleTap: (item: any) => void;
  onPress: () => void;
  file: any[];
}

export const AppGarelly = (props: HeaderPropsType) => {
  const {file = [], onDoubleTap, onPress} = props;
  const scaleAnimation = useMemo(() => new Animated.Value(0), []);
  const [page, setPage] = React.useState(1);
  const scrollX = new Animated.Value(0);
  const refNumTap = useRef(0);
  const timer: any = useRef(null);

  const startScaleView = useCallback(() => {
    Animated.sequence([
      Animated.spring(scaleAnimation, {
        toValue: 1,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnimation]);

  const onScrollEnd = e => {
    let pageNumber = Math.min(
      Math.max(
        Math.round(e.nativeEvent.contentOffset.x / Spacing.width335) + 1,
        0,
      ),
      file?.length,
    );
    setPage(pageNumber);
  };

  const onDoublePressTap = (item: any) => {
    refNumTap.current += 1;
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (refNumTap.current >= 2) {
      onDoubleTap(item);
      startScaleView();
      refNumTap.current = 0;
    }

    timer.current = setTimeout(() => {
      if (refNumTap.current === 1) {
        onPress?.();
        refNumTap.current = 0;
      }
    }, 300);
  };

  const onPressItem = (item: any) => {
    if (!onDoubleTap) {
      onPress?.();
    } else {
      onDoublePressTap(item);
    }
  };

  return (
    <Block>
      <FlatList
        onMomentumScrollEnd={onScrollEnd}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={file}
        scrollEnabled={file?.length > 1}
        pagingEnabled
        nestedScrollEnabled
        renderItem={({item}) => {
          return (
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                activeOpacity={1}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <BlurImage
                    style={styles.blurImage}
                    uri={item?.name}
                    resizeMode={'cover'}
                    borderRadius={Spacing.height5}
                  />
                  <Animated.Image
                    resizeMode="contain"
                    source={iconLiked}
                    style={{
                      transform: [
                        {
                          scale: scaleAnimation,
                        },
                      ],
                      width: Spacing.width50,
                      aspectRatio: 1,
                      position: 'absolute',
                    }}
                  />
                </View>
              </TouchableOpacity>
              {item.type === 2 && (
                <View style={styles.playIcon}>
                  <PlayIcon />
                </View>
              )}
            </View>
          );
        }}
        // ListEmptyComponent={<></>}
        keyExtractor={(_, index) => index.toString()}
      />
      {file?.length > 1 && (
        <View style={styles.indexImageContainer}>
          {<AppText>{`${page} ${t('title.of')} ${file?.length}`}</AppText>}
        </View>
      )}
      {file?.length > 1 && (
        <Block position="absolute" bottom={Spacing.width16} alignSelf="center">
          <Pagination
            size={file?.length}
            scrollX={scrollX}
            windowWidth={Spacing.width335}
          />
        </Block>
      )}
    </Block>
  );
};
