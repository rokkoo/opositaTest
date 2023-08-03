import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useFilter from '@app/features/home/components/filterSection/hooks/useFilter';
import { waitFor } from '@testing-library/react-native';
import {
  mockBooksData,
  mockFilterBooksData,
} from '@app/services/__mocks__/bookService';

jest.mock('@app/services/booksService');

describe('useFilter', () => {
  let queryClient: QueryClient;
  const setQueryDataMock = jest.fn(); // Create a mock function for queryClient.setQueryData

  beforeEach(() => {
    queryClient = new QueryClient();
    queryClient.setQueryData = setQueryDataMock; // Assign the mock function to queryClient.setQueryData
  });

  afterEach(() => {
    // Clear the query cache after each test to start with a clean slate
    queryClient.clear();
  });

  beforeEach(() => {
    // needed for react query
    jest.useFakeTimers();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  test('it should change text', async () => {
    const title = 'a title';

    const { result } = renderHook(() => useFilter(), {
      wrapper,
    });

    act(() => {
      result.current.handleTextChange(title);
    });

    expect(result.current.filterText).toBe(title);
  });

  test('should return any data', async () => {
    renderHook(() => useFilter(), {
      wrapper,
    });

    // Verify if queryClient.setQueryData was called with the correct arguments
    expect(setQueryDataMock).not.toBeCalled();
  });

  test('should return all the data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFilter(), {
      wrapper,
    });

    act(() => {
      // simulate user remove everything
      result.current.handleTextChange('');
    });

    await waitFor(async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for debounce
      await waitForNextUpdate();
    });

    expect(setQueryDataMock).toHaveBeenCalledWith(['books'], mockBooksData);
  });

  test('it should return filter data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFilter(), {
      wrapper,
    });

    act(() => {
      // Simulate changing the filter text
      result.current.handleTextChange('got');
    });

    await waitFor(async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for debounce
      await waitForNextUpdate();
    });

    expect(setQueryDataMock).toHaveBeenCalledWith(
      ['books'],
      mockFilterBooksData,
    );
  });
});
