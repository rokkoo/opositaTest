import React from 'react';
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import useBookDetail from '../../hooks/useBookDetail';
import AppText from '@app/features/commons/core/text';
import { AppLayoutSpacing, FontSize } from '@app/theme/metric';
import { Colors } from '@app/theme/colors';

const BookDetailHeader = () => {
  const { coverURL, book } = useBookDetail();
  const { height } = useWindowDimensions();

  return (
    <View>
      <Image
        source={{
          uri: coverURL,
        }}
        height={height / 3}
        style={styles.img}
      />
      <Animated.View
        style={styles.bottom}
        entering={FadeInUp.springify().duration(2000)}
      >
        <AppText fontSize={FontSize.xl} color={Colors.light} bold>
          {book.name}
        </AppText>
      </Animated.View>
      <View style={styles.overlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  img: {
    objectFit: 'cover',
  },
  bottom: {
    position: 'absolute',
    left: AppLayoutSpacing.paddingLeft,
    bottom: 20,
    zIndex: 1,
  },
});

export default BookDetailHeader;
