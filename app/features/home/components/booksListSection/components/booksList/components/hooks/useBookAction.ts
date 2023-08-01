import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { STACK_SCREENS, RootNavigationProp } from '@app/navigation/types';
import { Book } from '@app/services/dtos/booksDTO';

const useBookAction = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const handleBookPress = useCallback(
    (book: Book) => {
      navigation.navigate(STACK_SCREENS.BookDetails, {
        book,
      });
    },
    [navigation],
  );

  return {
    handleBookPress,
  };
};

export default useBookAction;
