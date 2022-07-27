import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from '@redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationApp, NavigationUtils} from '@navigation';
import {initI18n} from './src/translations';
import {ThemeProvider} from '@theme';

initI18n();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationApp
            ref={(navigatorRef: any) =>
              NavigationUtils.setTopLevelNavigator(navigatorRef)
            }
          />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
