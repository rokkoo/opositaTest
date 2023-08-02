import React from 'react';
import LightTheme from '@app/theme/lightTheme';
import { AppThemeContext, AppThemeContextProps } from '@app/theme/themeContext';

const contextMock = {
  theme: LightTheme,
  isDarkMode: false,
  toggleTheme: jest.fn(),
};

interface AppProvidersProps {
  children: React.ReactNode;
  context?: AppThemeContextProps;
}

export const AppTheProvider = ({ children }: AppProvidersProps) => {
  return (
    <AppThemeContext.Provider value={contextMock}>
      {children}
    </AppThemeContext.Provider>
  );
};
