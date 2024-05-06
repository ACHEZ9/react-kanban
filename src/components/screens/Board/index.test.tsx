import { render, screen } from '@testing-library/react';

import defaultTheme from 'app/theme';
import { ThemeProvider } from 'styled-components';
import Board from '.';

it('renders columns', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Board />
    </ThemeProvider>,
  );
  expect(screen.getByText(/To do/i)).toBeInTheDocument();
  expect(screen.getByText(/In progress/i)).toBeInTheDocument();
  expect(screen.getByText(/Done/i)).toBeInTheDocument();
});
