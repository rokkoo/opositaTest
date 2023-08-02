import { RouteProp, useRoute } from '@react-navigation/native';
import { useMemo } from 'react';
import { RootStackParamList, STACK_SCREENS } from '@app/navigation/types';
import {
  BOOK_COVER_URL,
  BookCoverSize,
  BookCoverType,
} from '@app/services/bookCoverService';

const useBookDetail = () => {
  const { params } =
    useRoute<RouteProp<RootStackParamList, typeof STACK_SCREENS.BookDetails>>();

  const { book } = params;

  const coverURL = useMemo(() => {
    return `${BOOK_COVER_URL}/${book.isbn}-${BookCoverSize.L}${BookCoverType.JPG}`;
  }, [book.isbn]);

  return { book, coverURL };
};

export default useBookDetail;
