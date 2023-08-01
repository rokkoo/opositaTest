// ThemeContext.tsx

import React, { createContext, useState, useMemo, useCallback } from 'react';
import { useColorScheme } from 'react-native';

import LightTheme from './lightTheme';
import DarkTheme from './darkTheme';
import { AppTheme, THEME_SCHEMA, THEME_SCHEMA_VALUES } from './types';

export interface AppThemeContextProps {
  theme: AppTheme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const AppThemeContext = createContext<AppThemeContextProps | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const isDark = useColorScheme() === THEME_SCHEMA.DARK;

  const [themSchema, setThemeSchema] = useState<THEME_SCHEMA_VALUES>(
    isDark ? THEME_SCHEMA.DARK : THEME_SCHEMA.LIGHT,
  );

  const toggleTheme = useCallback(() => {
    setThemeSchema(prevMode =>
      prevMode === THEME_SCHEMA.DARK ? THEME_SCHEMA.LIGHT : THEME_SCHEMA.DARK,
    );
  }, []);

  const isDarkMode = useMemo(
    () => themSchema === THEME_SCHEMA.DARK,
    [themSchema],
  );

  const theme = isDarkMode ? DarkTheme : LightTheme;

  const contextValue: AppThemeContextProps = useMemo(
    () => ({
      theme,
      isDarkMode,
      toggleTheme,
    }),
    [theme, isDarkMode, toggleTheme],
  );

  return (
    <AppThemeContext.Provider value={contextValue}>
      {children}
    </AppThemeContext.Provider>
  );
}
