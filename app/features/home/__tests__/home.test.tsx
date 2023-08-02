import * as React from 'react';
import { screen, waitFor } from '@testing-library/react-native';
import Home from '..';
import { renderWithReactQuery } from '@app/helpers/tests/renderWithReactQuery';
import { AppProviders } from '@app/helpers/tests/appProviders';

describe('Home screen tests', () => {
  test('it should render correctly', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('it should show screen title', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const output = await screen.findByTestId('HomeScreenTitle');

      expect(output).toHaveTextContent('OpositaTest');
    });
  });

  test('it should be Game of Thrones on the screen', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByText('A Game of Thrones');
      expect(text).toBeTruthy();
    });
  });

  test('favorite section should not be displayed', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByTestId('favoritesBooksSection');
      expect(text).toBeFalsy();
    });
  });

  test('recent book section should not be displayed', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByTestId('recentsBooksSection');
      expect(text).toBeFalsy();
    });
  });
});
