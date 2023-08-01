/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigationContainer from '@app/navigation';
import { AppThemeProvider } from '@app/theme/themeContext';
import { QueryClientWrapper } from '@app/queryClientWrapper';

function App(): JSX.Element {
  return (
    <QueryClientWrapper>
      <AppThemeProvider>
        <AppNavigationContainer />
      </AppThemeProvider>
    </QueryClientWrapper>
  );
}

export default App;
