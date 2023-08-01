/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavigationContainer from '@app/navigation';
import { AppThemeProvider } from '@app/theme/themeContext';
import { QueryClientWrapper } from '@app/queryClientWrapper';
import { FavoriteBooksProvider } from '@app/stores/favoriteBooks';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientWrapper>
        <AppThemeProvider>
          <FavoriteBooksProvider>
            <AppNavigationContainer />
          </FavoriteBooksProvider>
        </AppThemeProvider>
      </QueryClientWrapper>
    </GestureHandlerRootView>
  );
}

export default App;
