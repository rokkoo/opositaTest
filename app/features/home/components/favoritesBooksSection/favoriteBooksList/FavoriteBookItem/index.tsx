import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import BookItem, {
  BookItemProps,
} from '@app/features/home/components/bookItem';
import { Spacing } from '@app/theme/metric';
import { Colors } from '@app/theme/colors';

interface FavoriteBookItemProps extends BookItemProps {}

const FavoriteBookItem: React.FC<FavoriteBookItemProps> = props => {
  return (
    <View testID="book-item">
      <BookItem {...props} />
      <View style={styles.container}>
        <Icon name={'star'} size={24} color={Colors.yellow} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: Spacing.m,
    top: Spacing.m,
  },
});

export default React.memo(FavoriteBookItem);
