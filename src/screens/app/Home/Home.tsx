import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Box, useTheme} from '@theme';
import {AppButton, GlobalService} from '@components';
import {AppchangeLanguage} from '@instances';
import {ENUM_LANGUAGE} from '@translations';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

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
            i18next.language === ENUM_LANGUAGE.vi
              ? ENUM_LANGUAGE.en
              : ENUM_LANGUAGE.vi,
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
