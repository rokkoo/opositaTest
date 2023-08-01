/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';

import { Book } from '@app/services/dtos/booksDTO';
import { FontSize, Spacing } from '@app/theme/metric';
import AppText from '@app/features/commons/core/text';
import { useAppTheme } from '@app/theme/hooks/useTheme';

interface BookItemProps extends Book {
  index: number;
}

const BookItem = (props: BookItemProps) => {
  const { theme } = useAppTheme();

  const { width } = useWindowDimensions();
  const screenWidth = width;
  const aspectRatio = 1 / 3; // Each item should occupy one-third of the screen width
  const calculatedWidth = screenWidth * aspectRatio;

  const imageUri = useMemo(() => {
    return `https://covers.openlibrary.org/b/isbn/${props.isbn}-M.jpg`;
  }, [props.isbn]);

  return (
    <View style={{ marginLeft: props.index !== 0 ? Spacing.xl : 0 }}>
      <View>
        <Image
          source={{
            uri: imageUri,
          }}
          width={calculatedWidth}
          height={200}
          style={styles.image}
          onError={() => {
            console.log('error');
          }}
        />
        <View style={styles.titleContainer}>
          <AppText
            numberOfLines={1}
            bold
            fontSize={FontSize.s}
            color={theme.background}
          >
            {props.name}
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    objectFit: 'cover',
    borderRadius: 8,
  },
  titleContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: 30,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    paddingHorizontal: Spacing.m,
    borderBottomRightRadius: Spacing.m,
    borderBottomLeftRadius: Spacing.m,
  },
});

export default React.memo(BookItem);
