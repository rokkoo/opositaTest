import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from '@app/theme/hooks/useTheme';
import { AppLayoutSpacing } from '@app/theme/metric';
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
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: insets.top + AppLayoutSpacing.paddingTop,
      paddingBottom: insets.bottom + AppLayoutSpacing.paddingBottom,
      paddingLeft: insets.left + AppLayoutSpacing.paddingLeft,
      paddingRight: insets.right + AppLayoutSpacing.paddingLeft,
    },
  });
};

export default AppLayout;
