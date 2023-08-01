import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from '@app/theme/hooks/useTheme';
import { Spacing } from '@app/theme/metric';
import { AppTheme } from '@app/theme/types';

interface AppLayout {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayout) => {
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();

  const style = styling(theme, insets);

  return <View style={style.container}>{children}</View>;
};

const styling = (theme: AppTheme, insets: EdgeInsets) => {
  const paddingVertical = Spacing.xl;
  const paddingHorizontal = Spacing.l;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: insets.top + paddingVertical,
      paddingBottom: insets.bottom + paddingVertical,
      paddingLeft: insets.left + paddingHorizontal,
      paddingRight: insets.right + paddingHorizontal,
    },
  });
};

export default AppLayout;
