import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      surface: string;
      card: string;

      border: string;
      primaryBorder: string;

      textDefault: string;
      textOnPrimary: string;

      primaryFocus: string;
    };

    layout: {
      headerHeight: string;
      borderRadius: string;
    };
  }
}
