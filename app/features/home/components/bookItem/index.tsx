/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

import { Book } from '@app/services/dtos/booksDTO';
import { FontSize, Spacing } from '@app/theme/metric';
import AppText from '@app/features/commons/core/text';
import useBookAction from '@app/features/home/components/bookItem/hooks/useBookAction';
import {
  BOOK_COVER_URL,
  BookCoverSize,
  BookCoverType,
} from '@app/services/bookCoverService';
import { Colors } from '@app/theme/colors';

export interface BookItemProps extends Book {
  index: number;
  testID?: string;
}

const BookItem = (props: BookItemProps) => {
  const { width } = useWindowDimensions();
  const { handleBookPress } = useBookAction();

  const imgWidth = useMemo(() => {
    const screenWidth = width;
    const aspectRatio = 1 / 3; // Each item should occupy one-third of the screen width
    const calculatedWidth = screenWidth * aspectRatio;

    return calculatedWidth;
  }, [width]);

  const imageUri = useMemo(() => {
    return `${BOOK_COVER_URL}/${props.isbn}-${BookCoverSize.M}${BookCoverType.JPG}`;
  }, [props.isbn]);

  const handleItemPress = useCallback(() => {
    handleBookPress(props);
  }, [props, handleBookPress]);

  return (
    <View
      style={{ marginLeft: props.index !== 0 ? Spacing.xl : 0 }}
      testID={props.testID}
    >
      <Pressable onPress={handleItemPress}>
        <Image
          testID={`img${props.isbn}`}
          source={{
            uri: imageUri,
          }}
          width={imgWidth}
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
            color={Colors.light}
          >
            {props.name}
          </AppText>
        </View>
      </Pressable>
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
