import isValidProp from '@emotion/is-prop-valid';
import defaultTheme from 'app/theme';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import Header from './layout/Header';
import Board from './screens/Board';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyleSheetManager shouldForwardProp={isValidProp}>
        <Header />
        <Board />
      </StyleSheetManager>
    </ThemeProvider>
  );
}
