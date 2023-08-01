/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigationContainer from '@app/navigation';
import { AppThemeProvider } from '@app/theme/themeContext';

function App(): JSX.Element {
  return (
    <AppThemeProvider>
      <AppNavigationContainer />
    </AppThemeProvider>
  );
}

export default App;
