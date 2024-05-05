import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      surface: string;
      card: string;
      border: string;

      textDefault: string;
    };

    layout: {
      headerHeight: string;
      borderRadius: string;
    };
  }
}
