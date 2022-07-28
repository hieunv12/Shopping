import React, {memo, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Box, useTheme} from '@theme';
import {AppButton, GlobalService} from '@components';
import {AppchangeLanguage} from '@instances';
import {LANGUAGE_ENUM} from '@translations';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
let num = 1;

const Home = () => {
  const {updateTheme} = useTheme();
  const {t} = useTranslation();
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    GlobalService.hideLoading();
  }, []);
  const onSwitchLang = AppchangeLanguage();

  // return null;
  return (
    <Box alignItems="center" justifyContent="center" flex={1}>
      <AppButton
        style={styles.btn1}
        label={t('switchTheme')}
        isWrap
        onPress={() => {
          num += 1;
          setDark(!isDark);
          updateTheme(!isDark);
        }}
      />
      <AppButton
        label={t('switchLang')}
        isWrap
        onPress={() => {
          GlobalService.showLoading();
          onSwitchLang(
            i18next.language === LANGUAGE_ENUM.vi
              ? LANGUAGE_ENUM.en
              : LANGUAGE_ENUM.vi,
          );
          setTimeout(() => {
            GlobalService.hideLoading();
          }, 1000);
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  btn1: {marginBottom: 20},
});

export {Home};
