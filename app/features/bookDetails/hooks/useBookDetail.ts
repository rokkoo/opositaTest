import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, STACK_SCREENS } from '@app/navigation/types';
import { useMemo } from 'react';

const useBookDetail = () => {
  const { params } =
    useRoute<RouteProp<RootStackParamList, typeof STACK_SCREENS.BookDetails>>();

  const { book } = params;

  const coverURL = useMemo(() => {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
  }, [book.isbn]);

  return { book, coverURL };
};

export default useBookDetail;
