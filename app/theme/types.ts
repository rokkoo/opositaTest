export const THEME_SCHEMA = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export type THEME_SCHEMA_VALUES =
  (typeof THEME_SCHEMA)[keyof typeof THEME_SCHEMA];

export type AppTextTheme = {
  primary: string;
  secondary: string;
};

export type AppTheme = {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: AppTextTheme;
};
