import React from 'react';
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import useBookDetail from '../../hooks/useBookDetail';
import AppText from '@app/features/commons/core/text';
import { AppLayoutSpacing, FontSize } from '@app/theme/metric';
import { useAppTheme } from '@app/theme/hooks/useTheme';

const BookDetailHeader = () => {
  const { coverURL, book } = useBookDetail();
  const { height } = useWindowDimensions();
  const { theme } = useAppTheme();

  return (
    <View>
      <Image
        source={{
          uri: coverURL,
        }}
        height={height / 3}
        style={styles.img}
      />
      <View style={styles.bottom}>
        <AppText fontSize={FontSize.xl} color={theme.background} bold>
          {book.name}
        </AppText>
      </View>
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
