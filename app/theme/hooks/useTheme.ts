import { useContext } from 'react';
import { AppThemeContext, AppThemeContextProps } from '../themeContext';

export function useAppTheme(): AppThemeContextProps {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
