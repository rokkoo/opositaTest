/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppText from '@app/features/commons/core/text';
import { FontSize } from '@app/theme/metric';
import { useAppTheme } from '@app/theme/hooks/useTheme';

const HomeHeader = () => {
  const { toggleTheme } = useAppTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <AppText
        fontSize={FontSize.xxl}
        style={{ textAlign: 'center' }}
        testID="HomeScreenTitle"
      >
        OpositaTest
      </AppText>
    </TouchableOpacity>
  );
};

export default HomeHeader;
