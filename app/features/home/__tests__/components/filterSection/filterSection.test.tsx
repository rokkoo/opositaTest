import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import FilterSection from '@app/features/home/components/filterSection';
import { renderWithReactQuery } from '@app/helpers/tests/renderWithReactQuery';
import { AppTheProvider } from '@app/helpers/tests/appTheProvider';

describe('FilterSection', () => {
  test('it should render correctly', () => {
    renderWithReactQuery(
      <AppTheProvider>
        <FilterSection />
      </AppTheProvider>,
    );

    expect(screen).toMatchSnapshot();

    const sectionTitle = screen.queryByText('Filtra por un nombre');
    expect(sectionTitle).toBeTruthy();
  });

  test('it should update input value', async () => {
    const bookTitle = 'A Game Of Thrones';

    renderWithReactQuery(
      <AppTheProvider>
        <FilterSection />
      </AppTheProvider>,
    );

    const input = await screen.findByTestId('input');
    fireEvent.changeText(input, bookTitle);

    expect(input.props.value).toBe(bookTitle);
  });
});
