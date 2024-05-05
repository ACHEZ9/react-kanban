import defaultTheme from 'app/theme';
import { ThemeProvider } from 'styled-components';
import Header from './layout/Header';
import Board from './screens/Board';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Board />
    </ThemeProvider>
  );
}
