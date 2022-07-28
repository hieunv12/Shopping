import {useDispatch} from 'react-redux';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_CONSTANTS} from '@constants';
import {LANGUAGE_ENUM} from '@translations';

function AppchangeLanguage() {
  return (lang: LANGUAGE_ENUM) => {
    i18next.changeLanguage(lang);
    AsyncStorage.setItem(APP_CONSTANTS.APP_KEY_LANGUAGE, lang);
  };
}

export {AppchangeLanguage};
