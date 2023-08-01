import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import { useAppTheme } from '@app/theme/hooks/useTheme';
import { Spacing } from '@app/theme/metric';
import { AppTheme } from '@app/theme/types';
import useHeader from './hooks/useHeader';

const Header = () => {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();
  const { handleBackPress } = useHeader();

  const styles = styling(theme, insets);

  return (
    <View style={styles.container}>
      <Icon
        name="left"
        size={24}
        color={theme.background}
        onPress={handleBackPress}
      />
    </View>
  );
};

const styling = (theme: AppTheme, insets: EdgeInsets) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: insets.top + Spacing.s,
      left: 0,
      width: Dimensions.get('screen').width,
      height: 40,
      zIndex: 1,
      paddingHorizontal: Spacing.l,
    },
  });
};

export default Header;
