import { BooksService } from '@app/services/booksService';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const useBooks = () => {
  const { data, error, isLoading, refetch, isRefetching, isRefetchError } =
    useQuery({
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
