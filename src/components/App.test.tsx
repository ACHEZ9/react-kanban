import { render, screen } from '@testing-library/react';

import defaultTheme from 'app/theme';
import { ThemeProvider } from 'styled-components';
import App from './App';

it('renders page title', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>,
  );
  const titleElement = screen.getByText(/Close Frontend Take-Home Project/i);
  expect(titleElement).toBeInTheDocument();
});
