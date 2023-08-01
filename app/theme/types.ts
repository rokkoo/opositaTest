export const THEME_SCHEMA = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export type THEME_SCHEMA_VALUES =
  (typeof THEME_SCHEMA)[keyof typeof THEME_SCHEMA];

export type AppTheme = {
  background: string;
  primary: string;
  secondary: string;
};
