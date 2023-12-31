export const Spacing = {
  xs: 2,
  s: 4,
  m: 8,
  l: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

export const AppLayoutSpacing = {
  paddingHorizontal: Spacing.l,
  paddingLeft: Spacing.l,
  paddingRight: Spacing.l,
  paddingVertical: Spacing.xl,
  paddingTop: Spacing.xl,
  paddingBottom: Spacing.xl,
} as const;

export const FontSize = {
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 32,
} as const;
