import { BooksService } from '@app/services/booksService';
import { useQuery } from '@tanstack/react-query';

const useBooks = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: BooksService.getBooks,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useBooks;
