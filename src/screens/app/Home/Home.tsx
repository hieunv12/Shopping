import React, {useEffect, useState} from 'react';
import {FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Box, Colors, useTheme} from '@theme';
import {AppButton, AppInput, AppScrollWrapBottomTab, GlobalService, LargeList, VirtualList} from '@components';
import {AppchangeLanguage} from '@instances';
import {ENUM_LANGUAGE} from '@translations';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useModel} from "./Home.hook";
import {HeaderBar} from "./block/HeaderBar";
const data = [{
  name: 1,
  id: 1,
},
  {
    name: 1,
    id: 2,
  },
  {
    name: 1,
    id: 3,
  },
  {
    name: 1,
    id: 4,
  },
  {
    name: 1,
    id: 5,
  }]

const Home = (props) => {
  const {updateTheme} = useTheme();
  const {t} = useTranslation();
  const [isDark, setDark] = useState(true);
  const [value, setValue] = useState('');

  useEffect(() => {
    GlobalService.hideLoading();
  }, []);
  const onSwitchLang = AppchangeLanguage();
  const insets = useSafeAreaInsets();

  const {data}=useModel(props)

  // const renderItem=({item,index})=>{
  //   switch (item.type) {
  //     case 1:
  //       return <
  //   }
  // }
  // const renderHe
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn1: {marginBottom: 20},
  container:{flex:1,backgroundColor:Colors.background, marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,}
});

export {Home};
