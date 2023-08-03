import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BooksService } from '@app/services/booksService';
import { Book } from '@app/services/dtos/booksDTO';

const useBooks = () => {
  const { data, error, isLoading, refetch, isRefetching, isRefetchError } =
    useQuery<Book[]>({
      queryKey: ['books'],
      queryFn: BooksService.getBooks,
    });

  const isError = useMemo(() => {
    return error || isRefetchError;
  }, [error, isRefetchError]);

  return {
    data,
    error: isError,
    isLoading,
    refetch,
    isRefetching,
  };
};

export default useBooks;
