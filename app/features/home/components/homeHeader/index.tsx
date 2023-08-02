/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import AppText from '@app/features/commons/core/text';
import { FontSize } from '@app/theme/metric';

const HomeHeader = () => {
  return (
    <AppText
      fontSize={FontSize.xxl}
      style={{ textAlign: 'center' }}
      testID="HomeScreenTitle"
    >
      OpositaTest
    </AppText>
  );
};

export default HomeHeader;
